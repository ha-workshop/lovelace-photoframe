// Голосовое управление домом через Assist в Home Assistant.
//
// Своего «умного дома» здесь нет: рамка записывает звук, отправляет его в pipeline HA
// (assist_pipeline/run), а обратно получает распознанный текст, ответ агента и озвучку.
// Работают те же STT/TTS/разговорный агент, что выбраны в Assist; ничего на сервере менять не нужно.
//
// Звук — сырой PCM 16 кГц моно: HA принимает его бинарными кадрами WebSocket, у каждого первый байт —
// stt_binary_handler_id из run-start. Конец речи — кадр из одного этого байта. Микрофон отдаём
// только по HTTPS (secure context), поэтому на http://… кнопка честно говорит, что он недоступен.
//
// В PWA свой WebSocket уже есть (lib/ha.ts), но здесь он отдельный и короткий: так бинарные кадры
// не смешиваются с состояниями дома и подписками, а сессия закрывается сразу после ответа.

import { accessToken, haSession } from './haAuth';
import { currentLanguage } from '../i18n';

export type VoicePhase = 'connecting' | 'listening' | 'thinking' | 'speaking' | 'done' | 'error';

export interface VoicePatch {
  phase?: VoicePhase;
  transcript?: string;
  reply?: string;
  error?: string;
  conversationId?: string;
  // Вслух произнесли только начало ответа — полный текст остался на экране.
  shortened?: boolean;
}

export interface VoiceHandlers {
  onStatus: (patch: VoicePatch) => void;
}

export interface VoiceRun {
  // Закончить запись (как отпустить кнопку): дальше HA сам распознаёт и отвечает.
  stop(): void;
  // Закрыть всё: микрофон, WebSocket, озвучку.
  cancel(): void;
  // Прочитать весь ответ, а не только начало (кнопка «Прочитать полностью» и команда голосом).
  readFull?: () => void;
}

export interface VoicePipeline {
  id: string;
  name: string;
  // Есть ли в ассистенте распознавание речи и озвучка — без них голосом не поговорить.
  ready: boolean;
}

const SAMPLE_RATE = 16000;
const MAX_LISTEN_MS = 15000;
const MAX_RUN_MS = 90000;

// ── Озвучка устройства ──────────────────────────────────
// В PWA не обязательно гонять TTS через Home Assistant: у телефона и планшета есть свой
// синтез речи (Web Speech API). Это мгновенно, работает без сети и не тратит квоту сервера.
// Если русского голоса в системе нет (старый WebView, Linux без речевых пакетов) — молча
// возвращаемся к озвучке HA (Piper/Google), чтобы ответ всё равно прозвучал.
const TTS_KEY = 'photoframe.voiceTts';
export type TtsSource = 'device' | 'ha';

// По умолчанию читает Home Assistant (тот TTS, что выбран в Assist). Локальный голос
// устройства включается вручную — он есть не везде и зависит от системы.
export function ttsSource(): TtsSource {
  try { return localStorage.getItem(TTS_KEY) === 'device' ? 'device' : 'ha'; } catch (e) { return 'ha'; }
}

export function setTtsSource(v: TtsSource) {
  try { localStorage.setItem(TTS_KEY, v); } catch (e) { /* ignore */ }
}

function speechLang(): string {
  return (currentLanguage() || navigator.language || 'ru').slice(0, 2).toLowerCase();
}

function sameLang(v: SpeechSynthesisVoice): boolean {
  return (v.lang || '').replace('_', '-').toLowerCase().slice(0, 2) === speechLang();
}

function allVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  try { return window.speechSynthesis.getVoices() || []; } catch (e) { return []; }
}

export interface DeviceVoice {
  id: string;
  name: string;
  lang: string;
}

// Голоса системы для языка интерфейса — из них выбирается «голос устройства».
export function deviceVoices(): DeviceVoice[] {
  return allVoices()
    .filter(sameLang)
    .map((v) => ({ id: v.voiceURI || v.name, name: v.name, lang: v.lang }));
}

const DEVICE_VOICE_KEY = 'photoframe.voiceDeviceVoice';

export function deviceVoiceId(): string {
  try { return localStorage.getItem(DEVICE_VOICE_KEY) || ''; } catch (e) { return ''; }
}

export function setDeviceVoiceId(id: string) {
  try {
    if (id) localStorage.setItem(DEVICE_VOICE_KEY, id);
    else localStorage.removeItem(DEVICE_VOICE_KEY);
  } catch (e) { /* ignore */ }
}

const DEVICE_RATE_KEY = 'photoframe.voiceDeviceRate';

export function deviceSpeechRate(): number {
  try {
    const n = parseFloat(localStorage.getItem(DEVICE_RATE_KEY) || '1');
    return n >= 0.6 && n <= 1.6 ? n : 1;
  } catch (e) { return 1; }
}

export function setDeviceSpeechRate(rate: number) {
  try { localStorage.setItem(DEVICE_RATE_KEY, String(rate)); } catch (e) { /* ignore */ }
}

function deviceVoice(): SpeechSynthesisVoice | null {
  if (typeof SpeechSynthesisUtterance === 'undefined') return null;
  const voices = allVoices();
  if (!voices.length) return null;
  const id = deviceVoiceId();
  // Выбранный голос уважаем, пока он есть в системе и подходит по языку.
  const chosen = id ? voices.filter((v) => sameLang(v) && (v.voiceURI || v.name) === id)[0] : null;
  if (chosen) return chosen;
  const matching = voices.filter(sameLang);
  return matching.filter((v) => v.default)[0] || matching[0] || null;
}

export function deviceTtsSupported(): boolean {
  return deviceVoices().length > 0;
}

// Chrome отдаёт голоса асинхронно — просим заранее, чтобы настройка и первый ответ
// уже видели «Милену» / Google TTS, а не пустой список.
try {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.getVoices();
} catch (e) { /* ignore */ }

// ── Wake word ────────────────────────────────────────────
// Локальное детектирование через openWakeWord (WASM + ONNX в браузере).
// Модели: hey_jarvis, alexa, hey_mycroft, hey_rhasspy, hey_jarvis_v2.
const WAKE_KEY = 'photoframe.wakeWord';
const WAKE_MODELS = ['hey_jarvis', 'alexa', 'hey_mycroft', 'hey_rhasspy', 'hey_jarvis_v2'] as const;

export type WakeModel = (typeof WAKE_MODELS)[number];

export function wakeWordModel(): WakeModel | '' {
  try {
    const v = localStorage.getItem(WAKE_KEY) || '';
    return WAKE_MODELS.includes(v as WakeModel) ? (v as WakeModel) : '';
  } catch (e) { return ''; }
}

export function setWakeWordModel(model: WakeModel | '') {
  try {
    if (model) localStorage.setItem(WAKE_KEY, model);
    else localStorage.removeItem(WAKE_KEY);
  } catch (e) { /* ignore */ }
}

export const WAKE_WORD_OPTIONS = WAKE_MODELS;

export function deviceTtsReady(): boolean {
  return ttsSource() === 'device' && deviceTtsSupported();
}

// Длинные ответы Chrome обрывает на одном utterance — режем на фразы и читаем по очереди.
function speechChunks(text: string): string[] {
  const clean = text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`#>]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return [];
  const parts = clean.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) || [clean];
  const out: string[] = [];
  let buf = '';
  parts.forEach((p) => {
    if (buf && (buf + ' ' + p).trim().length > 220) { out.push(buf.trim()); buf = p; }
    else buf = (buf + ' ' + p).trim();
  });
  if (buf) out.push(buf.trim());
  return out;
}

// Вернуть true, если устройство реально начало говорить. Токен отмены — чтобы замолчать
// мгновенно (кнопка «Стоп», «хватит» или окно закрыли).
interface SpeechToken { cancelled: boolean }
function speakOnDevice(text: string, token: SpeechToken, onDone: (ok: boolean) => void): boolean {
  const voice = deviceVoice();
  const synth = window.speechSynthesis;
  if (!voice || !synth) return false;
  const chunks = speechChunks(text);
  if (!chunks.length) return false;
  const rate = deviceSpeechRate();
  let at = 0;
  let spoke = false;
  const next = () => {
    if (token.cancelled) return;
    if (at >= chunks.length) { onDone(true); return; }
    try {
      const u = new SpeechSynthesisUtterance(chunks[at++]);
      u.voice = voice;
      u.lang = voice.lang || speechLang() + '-' + speechLang().toUpperCase();
      u.rate = rate;
      u.onstart = () => { spoke = true; };
      u.onend = () => next();
      u.onerror = (e: any) => {
        if (token.cancelled || e.error === 'interrupted' || e.error === 'canceled') return;
        // Ничего не успели сказать (iOS без жеста, движок без голоса) — пусть озвучит HA.
        onDone(spoke);
      };
      synth.speak(u);
    } catch (e) { onDone(spoke); }
  };
  try { synth.cancel(); } catch (e) { /* ignore */ }
  // cancel() и speak() в одном кадре некоторые движки игнорируют — даём кадр.
  window.setTimeout(next, 0);
  return true;
}


function micApi(): ((c: MediaStreamConstraints) => Promise<MediaStream>) | null {
  const nav = navigator as any;
  if (nav.mediaDevices && nav.mediaDevices.getUserMedia) {
    return (c: MediaStreamConstraints) => nav.mediaDevices.getUserMedia(c);
  }
  if (nav.webkitGetUserMedia) {
    // Chrome 37: в старых WebView ещё нет navigator.mediaDevices.
    return (c: MediaStreamConstraints) => new Promise<MediaStream>((resolve, reject) => {
      nav.webkitGetUserMedia(c, resolve, reject);
    });
  }
  return null;
}

// Почему микрофона нет — до запроса разрешения. null — можно пробовать.
export function micProblem(): 'insecure' | 'unsupported' | null {
  const secure = (window as any).isSecureContext;
  if (typeof secure === 'boolean' && !secure) return 'insecure';
  return micApi() ? null : 'unsupported';
}

// Разрешение на микрофон уже дано — тогда стоп-слово можно слушать, не спрашивая пользователя заново.
let micGranted = false;

function micAllowed(): Promise<boolean> {
  if (micGranted) return Promise.resolve(true);
  const perms = (navigator as any).permissions;
  if (!perms || !perms.query) return Promise.resolve(false);
  try {
    return perms.query({ name: 'microphone' }).then(
      (p: any) => p && p.state === 'granted',
      () => false,
    );
  } catch (e) {
    return Promise.resolve(false);
  }
}

// Ассистенты из настроек Home Assistant (Assist → Ассистенты). Для голоса годятся только те,
// у которых настроены распознавание речи и озвучка: остальные не смогут ни слушать, ни ответить.
export function listVoicePipelines(): Promise<VoicePipeline[]> {
  const session = haSession();
  if (!session) return Promise.reject(new Error('auth'));
  return accessToken().then((token) => new Promise<VoicePipeline[]>((resolve, reject) => {
    if (!token) { reject(new Error('auth')); return; }
    const url = session.hassUrl.replace(/\/+$/, '').replace(/^http/i, 'ws') + '/api/websocket';
    let sock: WebSocket;
    try { sock = new WebSocket(url); } catch (e) { reject(new Error('network')); return; }
    const timer = window.setTimeout(() => {
      try { sock.close(); } catch (e) { /* ignore */ }
      reject(new Error('timeout'));
    }, 10000);
    const end = (err?: Error, list?: VoicePipeline[]) => {
      clearTimeout(timer);
      try { sock.close(); } catch (e) { /* ignore */ }
      if (err) reject(err); else resolve(list || []);
    };
    sock.onmessage = (ev: MessageEvent) => {
      let msg: any;
      try { msg = JSON.parse(ev.data as string); } catch (e) { return; }
      if (msg.type === 'auth_required') {
        try { sock.send(JSON.stringify({ type: 'auth', access_token: token })); } catch (e) { end(new Error('network')); }
      } else if (msg.type === 'auth_invalid') {
        end(new Error('auth'));
      } else if (msg.type === 'auth_ok') {
        try { sock.send(JSON.stringify({ id: 1, type: 'assist_pipeline/pipeline/list' })); } catch (e) { end(new Error('network')); }
      } else if (msg.type === 'result' && msg.id === 1) {
        if (!msg.success) { end(new Error('run')); return; }
        const list = (msg.result && msg.result.pipelines) || [];
        end(undefined, list.map((p: any) => ({
          id: p.id,
          name: p.name,
          ready: !!p.stt_engine && !!p.tts_engine,
        })));
      }
    };
    sock.onerror = () => end(new Error('network'));
  }));
}

// Один AudioContext на всё приложение: он же играет ответ. Создаём/будим его прямо в обработчике
// нажатия (primeVoice), иначе iOS и Chrome не дадут потом воспроизвести озвучку без нового касания.
let audio: any = null;

function audioContext(): any {
  if (audio) return audio;
  const C = (window as any).AudioContext || (window as any).webkitAudioContext;
  if (!C) return null;
  try { audio = new C(); } catch (e) { audio = null; }
  return audio;
}

export function primeVoice(): void {
  const ctx = audioContext();
  if (ctx && ctx.state === 'suspended') {
    try { ctx.resume(); } catch (e) { /* ignore */ }
  }
  // Заодно просим браузер загрузить список голосов: в Chrome он приходит асинхронно,
  // а ответ может поспеть раньше первого getVoices().
  try { if ('speechSynthesis' in window) window.speechSynthesis.getVoices(); } catch (e) { /* ignore */ }
}

// Короткие сигналы без файлов — Web Audio. Слышно, что помощник включился, и чем закончилась команда:
// «listen» — вверх, «ok» — мажорная пара нот, «no» — низкий нисходящий.
export function voiceCue(kind: 'listen' | 'ok' | 'no'): void {
  const ctx = audioContext();
  if (!ctx) return;
  try { if (ctx.state === 'suspended') ctx.resume(); } catch (e) { /* ignore */ }
  const notes: Array<[number, number, number]> =
    kind === 'ok' ? [[784, 0, 0.1], [1175, 0.1, 0.18]] :
    kind === 'no' ? [[330, 0, 0.15], [220, 0.17, 0.26]] :
    [[880, 0, 0.08], [1100, 0.08, 0.12]];
  const level = kind === 'no' ? 0.13 : 0.11;
  const t0 = ctx.currentTime + 0.01;
  notes.forEach(([freq, at, dur]) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = t0 + at;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(level, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + dur + 0.02);
    } catch (e) { /* ignore */ }
  });
}

interface Capture { stop: () => void }

function startCapture(stream: MediaStream, onPcm: (pcm: Int16Array) => void): Capture {
  const ctx = audioContext();
  const source = ctx.createMediaStreamSource(stream);
  const proc = ctx.createScriptProcessor(4096, 1, 1);
  // Выход процессора должен куда-то идти, чтобы он работал; gain 0 — чтобы не было эха в динамиках.
  const mute = ctx.createGain();
  mute.gain.value = 0;
  source.connect(proc);
  proc.connect(mute);
  mute.connect(ctx.destination);

  const ratio = ctx.sampleRate / SAMPLE_RATE;
  let tail = new Float32Array(0);

  proc.onaudioprocess = (e: any) => {
    const input: Float32Array = e.inputBuffer.getChannelData(0);
    let data: Float32Array;
    if (tail.length) {
      data = new Float32Array(tail.length + input.length);
      data.set(tail, 0);
      data.set(input, tail.length);
    } else {
      data = input;
    }
    // Линейная передискретизация к 16 кГц: HA умеет и сам, но так в сеть уходит втрое меньше.
    const count = Math.max(0, Math.floor((data.length - 1) / ratio));
    if (!count) { tail = new Float32Array(data); return; }
    const out = new Int16Array(count);
    for (let i = 0; i < count; i++) {
      const p = i * ratio, j = p | 0, f = p - j;
      const v = data[j] + (data[j + 1] - data[j]) * f;
      out[i] = v >= 1 ? 32767 : v <= -1 ? -32768 : (v * 32767) | 0;
    }
    tail = new Float32Array(data.subarray(Math.floor((count - 1) * ratio)));
    onPcm(out);
  };

  return {
    stop() {
      proc.onaudioprocess = null as any;
      try { source.disconnect(); } catch (e) { /* ignore */ }
      try { proc.disconnect(); } catch (e) { /* ignore */ }
      try { mute.disconnect(); } catch (e) { /* ignore */ }
      stream.getTracks().forEach((t) => { try { t.stop(); } catch (e) { /* ignore */ } });
    },
  };
}

// Громкость кадра — чтобы не ждать 15 секунд, если человек молчит или уже закончил.
function rms(pcm: Int16Array): number {
  let sum = 0, n = 0;
  for (let i = 0; i < pcm.length; i += 4) {
    const v = pcm[i] / 32768;
    sum += v * v;
    n++;
  }
  return n ? Math.sqrt(sum / n) : 0;
}

function failCode(code: string): string {
  if (code === 'stt-no-text-recognized') return 'no-speech';
  if (code === 'timeout') return 'timeout';
  if (/engine-missing|engine-not-supported|pipeline-not-found/.test(code)) return 'setup';
  return 'run';
}

// ── Прерывание ответа голосом ───────────────────────────
// Пока звучит озвучка, микрофон отдельно слушает короткое слово («хватит», «стоп»). Это второй,
// одноразовый pipeline только из STT: разговорный агент его не видит, устройства он не трогает.
// Слушаем лишь при уже выданном разрешении на микрофон — иначе каждый ответ просил бы доступ.
const STOP_WORDS = ['хватит', 'стоп', 'остановись', 'замолчи', 'помолчи', 'достаточно', 'тихо', 'не надо', 'stop', 'enough', 'quiet', 'cancel'];
// «Дай полный ответ» — прочитать весь текст с экрана, а не только начало.
const FULL_WORDS = ['полный ответ', 'весь ответ', 'весь текст', 'прочитай полностью', 'прочитай весь', 'полностью', 'до конца', 'full answer', 'read it all', 'read all', 'read everything'];

function normalizeSpeech(text: string): string {
  return text.toLowerCase().replace(/[^a-zа-яё\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function isStopWord(text: string): boolean {
  const norm = normalizeSpeech(text);
  if (!norm) return false;
  return STOP_WORDS.some((w) => norm === w || norm.indexOf(w + ' ') === 0);
}

function isFullWord(text: string): boolean {
  const norm = normalizeSpeech(text);
  if (!norm) return false;
  return FULL_WORDS.some((w) => norm.indexOf(w) !== -1);
}

interface StopWatch { stop: () => void }

// Сколько ответа произносим вслух. Полный текст остаётся на экране, а «эфир» короткий:
// первое предложение, а если оно совсем короткое — ещё и второе; максимум ~240 символов.
function shortSpeech(text: string): string {
  const clean = text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`#>]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return '';
  const sentences = clean.match(/[^.!?…]+[.!?…]+/g) || [clean];
  let out = (sentences[0] || clean).trim();
  if (out.length < 90 && sentences[1]) out += ' ' + sentences[1].trim();
  if (out.length > 240) {
    out = out.slice(0, 240);
    out = out.slice(0, out.lastIndexOf(' ') > 120 ? out.lastIndexOf(' ') : out.length).replace(/[,;:\-–—]+$/, '');
    out += '…';
  }
  return out;
}

function watchSpeech(onStop: () => void, onFull: () => void, pipeline?: string): StopWatch {
  let dead = false;
  let ws: WebSocket | null = null;
  let mic: Capture | null = null;
  let handler: number | null = null;
  let queued: Int16Array[] = [];
  let timer = 0;
  let attempt = 0;

  const stop = () => {
    if (dead) return;
    dead = true;
    clearTimeout(timer);
    if (mic) { try { mic.stop(); } catch (e) { /* ignore */ } mic = null; }
    if (ws) {
      const sock = ws;
      ws = null;
      try { sock.close(); } catch (e) { /* ignore */ }
    }
    queued = [];
  };

  const send = (pcm: Int16Array) => {
    if (!ws || ws.readyState !== 1 || handler === null) return;
    const buf = new Uint8Array(pcm.length * 2 + 1);
    buf[0] = handler;
    const view = new DataView(buf.buffer, 1);
    for (let i = 0; i < pcm.length; i++) view.setInt16(i * 2, pcm[i], true);
    try { ws.send(buf); } catch (e) { /* ignore */ }
  };

  const open = (token: string) => {
    if (dead) return;
    const session = haSession();
    if (!session) { stop(); return; }
    clearTimeout(timer);
    const url = session.hassUrl.replace(/\/+$/, '').replace(/^http/i, 'ws') + '/api/websocket';
    let sock: WebSocket;
    try { sock = new WebSocket(url); } catch (e) { stop(); return; }
    ws = sock;
    handler = null;
    sock.onmessage = (ev: MessageEvent) => {
      let msg: any;
      try { msg = JSON.parse(ev.data as string); } catch (e) { return; }
      if (msg.type === 'auth_required') {
        try { sock.send(JSON.stringify({ type: 'auth', access_token: token })); } catch (e) { stop(); }
      } else if (msg.type === 'auth_invalid') {
        stop();
      } else if (msg.type === 'auth_ok') {
        try {
          const cmd: any = {
            id: 1,
            type: 'assist_pipeline/run',
            start_stage: 'stt',
            end_stage: 'stt',
            input: { sample_rate: SAMPLE_RATE },
          };
          if (pipeline) cmd.pipeline = pipeline;
          sock.send(JSON.stringify(cmd));
        } catch (e) { stop(); return; }
        timer = window.setTimeout(stop, 15000);
      } else if (msg.type === 'result') {
        if (msg.success === false) stop();
      } else if (msg.type === 'event') {
        const event = msg.event || {};
        if (event.type === 'run-start') {
          const id = event.data && event.data.runner_data && event.data.runner_data.stt_binary_handler_id;
          if (typeof id === 'number') handler = id;
          const buffered = queued;
          queued = [];
          buffered.forEach(send);
        } else if (event.type === 'stt-end') {
          const text = (event.data && event.data.stt_output && event.data.stt_output.text) || '';
          if (isStopWord(text)) {
            stop();
            onStop();
          } else if (isFullWord(text)) {
            stop();
            onFull();
          } else if (attempt < 2) {
            // Сказали что-то другое — слушаем дальше, пока звучит ответ.
            attempt++;
            const old = ws;
            ws = null;
            handler = null;
            try { old && old.close(); } catch (e) { /* ignore */ }
            open(token);
          } else {
            stop();
          }
        } else if (event.type === 'error') {
          stop();
        }
      }
    };
    sock.onerror = () => { if (ws === sock) stop(); };
    sock.onclose = () => { if (ws === sock) stop(); };
  };

  const onPcm = (pcm: Int16Array) => {
    if (handler === null) {
      if (queued.length < 40) queued.push(pcm);
      return;
    }
    send(pcm);
  };

  micAllowed().then((ok) => {
    if (dead || !ok) { stop(); return; }
    const get = micApi();
    if (!get) { stop(); return; }
    get({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true } })
      .then((stream) => {
        if (dead) { stream.getTracks().forEach((t) => { try { t.stop(); } catch (e) { /* ignore */ } }); return; }
        micGranted = true;
        mic = startCapture(stream, onPcm);
        accessToken().then((token) => {
          if (dead) return;
          if (!token) { stop(); return; }
          open(token);
        }, stop);
      }, stop);
  });

  return { stop };
}

function run(mode: 'audio' | 'text' | 'speak', text: string, handlers: VoiceHandlers, conversationId?: string, pipeline?: string, speak = true, deviceId?: string): VoiceRun {
  const session = haSession();
  let dead = false;
  let finished = false;
  let ws: WebSocket | null = null;
  let mic: Capture | null = null;
  let handler: number | null = null;
  let audioClosed = false;
  let queued: Int16Array[] = [];
  let ttsPending = false;
  let source: any = null;
  let maxTimer = 0;
  let runTimer = 0;
  let silence = 0;
  let heard = false;
  let stopWatch: StopWatch | null = null;
  // id второго запуска (только TTS). Первый — STT+агент: до озвучки он не доходит.
  let ttsId: number | null = null;
  let ttsSeq = 1;
  // Полный текст ответа и токен нативной озвучки — чтобы можно было прочитать всё и мгновенно замолчать.
  let fullReply = '';
  let speech: SpeechToken | null = null;

  const notify = (patch: VoicePatch) => { if (!dead) handlers.onStatus(patch); };

  const stopNative = () => {
    if (!speech) return;
    speech.cancelled = true;
    speech = null;
    try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ }
  };

  const finish = () => {
    if (finished) return;
    finished = true;
    stopNative();
    cleanup();
    notify({ phase: 'done' });
  };

  const cleanup = () => {
    clearTimeout(maxTimer);
    clearTimeout(runTimer);
    maxTimer = 0;
    runTimer = 0;
    if (stopWatch) { try { stopWatch.stop(); } catch (e) { /* ignore */ } stopWatch = null; }
    if (mic) { try { mic.stop(); } catch (e) { /* ignore */ } mic = null; }
    if (ws) {
      const sock = ws;
      ws = null;
      try { sock.close(); } catch (e) { /* ignore */ }
    }
  };

  const stopSource = () => {
    stopNative();
    if (!source) return;
    try { source.stop(); } catch (e) { /* ignore */ }
    source = null;
  };

  const cancel = () => {
    dead = true;
    finished = true;
    stopSource();
    cleanup();
  };

  const fail = (code: string) => {
    if (dead || finished) return;
    finished = true;
    cleanup();
    notify({ phase: 'error', error: code });
    voiceCue('no');
  };

  // Оборвать ответ на полуслове: кнопкой («Стоп») или голосом. Оставляем текст на экране,
  // состояние — «Готово», чтобы можно было сразу спросить снова.
  const abortAnswer = () => {
    if (dead) return;
    finished = true;
    stopSource();
    cleanup();
    // Услышали «хватит» / «стоп» — подтверждаем коротким низким сигналом, что оборвали ответ.
    voiceCue('no');
    notify({ phase: 'done' });
  };

  const sendPcm = (pcm: Int16Array) => {
    if (!ws || ws.readyState !== 1 || handler === null) return;
    const buf = new Uint8Array(pcm.length * 2 + 1);
    buf[0] = handler;
    const view = new DataView(buf.buffer, 1);
    for (let i = 0; i < pcm.length; i++) view.setInt16(i * 2, pcm[i], true);
    try { ws.send(buf); } catch (e) { fail('network'); }
  };

  const stopListening = () => {
    if (mode !== 'audio' || audioClosed) return;
    audioClosed = true;
    clearTimeout(maxTimer);
    if (mic) { try { mic.stop(); } catch (e) { /* ignore */ } mic = null; }
    // Один байт handler id — «речь закончилась».
    if (handler !== null && ws && ws.readyState === 1) {
      try { ws.send(new Uint8Array([handler])); } catch (e) { /* ignore */ }
    }
    notify({ phase: 'thinking' });
  };

  const onPcm = (pcm: Int16Array) => {
    if (audioClosed) return;
    const level = rms(pcm);
    if (level > 0.02) {
      silence = 0;
      heard = true;
    } else {
      silence += pcm.length / SAMPLE_RATE;
      if (heard && silence > 1.6) { stopListening(); return; }
      if (!heard && silence > 5) { stopListening(); return; }
    }
    if (handler === null) {
      // Ещё ждём run-start: держим не больше ~4 секунд.
      if (queued.length < 48) queued.push(pcm);
      return;
    }
    sendPcm(pcm);
  };

  const play = (url: string) => {
    const ctx = audioContext();
    if (!ctx || !session) { ttsPending = false; finish(); return; }
    try { ctx.resume(); } catch (e) { /* ignore */ }
    const base = session.hassUrl.replace(/\/+$/, '');
    const full = /^https?:/i.test(url) ? url : base + (url.charAt(0) === '/' ? '' : '/') + url;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', full);
    xhr.responseType = 'arraybuffer';
    xhr.timeout = 20000;
    const done = () => { ttsPending = false; finish(); };
    xhr.onload = () => {
      if (dead) return;
      if (xhr.status < 200 || xhr.status >= 300) { done(); return; }
      try {
        ctx.decodeAudioData(xhr.response, (buffer: any) => {
          if (dead) return;
          try {
            const src = ctx.createBufferSource();
            src.buffer = buffer;
            src.connect(ctx.destination);
            source = src;
            src.onended = () => {
              if (source === src) source = null;
              if (stopWatch) { stopWatch.stop(); stopWatch = null; }
              ttsPending = false;
              finish();
            };
            src.start(0);
            notify({ phase: 'speaking' });
            // Пока говорит — ждём «хватит»/«стоп» или «дай полный ответ».
            if (!stopWatch) stopWatch = watchSpeech(abortAnswer, readFull, pipeline);
          } catch (e) { done(); }
        }, done);
      } catch (e) { done(); }
    };
    xhr.onerror = done;
    xhr.ontimeout = done;
    try { xhr.send(); } catch (e) { done(); }
  };

  const onEvent = (ev: any, id: number) => {
    if (dead || finished || !ev) return;
    const data = ev.data || {};
    switch (ev.type) {
      case 'run-start':
        // run-start второго запуска (TTS) не должен снова включать «слушаю».
        if (id !== 1) break;
        if (data.runner_data && typeof data.runner_data.stt_binary_handler_id === 'number') {
          handler = data.runner_data.stt_binary_handler_id;
        }
        if (mode === 'audio') {
          notify({ phase: 'listening' });
          if (audioClosed) {
            if (handler !== null && ws && ws.readyState === 1) {
              try { ws.send(new Uint8Array([handler])); } catch (e) { /* ignore */ }
            }
          } else {
            const buffered = queued;
            queued = [];
            buffered.forEach(sendPcm);
            clearTimeout(maxTimer);
            maxTimer = window.setTimeout(stopListening, MAX_LISTEN_MS);
          }
        } else {
          notify({ phase: 'thinking' });
        }
        break;
      case 'stt-vad-end':
        if (id === 1) stopListening();
        break;
      case 'stt-end':
        if (id === 1 && data.stt_output && data.stt_output.text) notify({ transcript: data.stt_output.text });
        break;
      case 'intent-end': {
        if (id !== 1 || mode === 'speak') break;
        const out = data.intent_output || {};
        const speechOut = (out.response && out.response.speech) || {};
        const reply = (speechOut.plain && speechOut.plain.speech) || (speechOut.ssml && speechOut.ssml.speech) || '';
        const short = shortSpeech(reply);
        fullReply = reply;
        notify({ reply: reply || undefined, conversationId: out.conversation_id, shortened: speak && !!reply && short !== reply });
        // Успех/неудача — по типу ответа агента; сам ответ ещё озвучивается следом.
        const type = out.response && out.response.response_type;
        voiceCue(type === 'error' || type === 'no_intent' || type === 'no_valid_targets' ? 'no' : 'ok');
        // Вслух — только начало ответа; полный текст уже на экране. Для текстового вопроса
        // озвучку можно выключить — тогда run-end первого запуска просто завершит сессию.
        if (speak && short) say(short);
        break;
      }
      case 'tts-start':
        if (id === ttsId) notify({ phase: 'speaking' });
        break;
      case 'tts-end':
        if (id === ttsId && data.tts_output && data.tts_output.url) {
          ttsPending = true;
          play(data.tts_output.url);
        }
        break;
      case 'error':
        fail(failCode(data.code || 'run'));
        break;
      case 'run-end':
        // Второй запуск (TTS) закончился — звук уже отдан плееру, ждём его конца.
        if (ttsId !== null && id !== ttsId) break;
        if (ttsPending) break;
        finish();
        break;
    }
  };

  // Озвучка: сначала голос устройства (если выбран и есть русский голос), иначе — TTS-запуск в HA.
  const say = (text: string) => {
    if (dead || !text) return;
    if (deviceTtsReady()) {
      const token: SpeechToken = { cancelled: false };
      speech = token;
      ttsPending = true;
      if (speakOnDevice(text, token, (ok) => {
        if (speech !== token) return;
        speech = null;
        ttsPending = false;
        // Устройство не смогло заговорить (iOS без жеста, нет движка) — читаем через HA.
        if (!ok) { speakText(text); return; }
        finish();
      })) {
        notify({ phase: 'speaking' });
        if (!stopWatch) stopWatch = watchSpeech(abortAnswer, readFull, pipeline);
        return;
      }
      ttsPending = false;
      speech = null;
    }
    speakText(text);
  };

  // Второй запуск: только TTS. Первый запуск агента уже отработал.
  const speakText = (text: string) => {
    if (!ws || ws.readyState !== 1 || dead) { finish(); return; }
    ttsId = ++ttsSeq;
    clearTimeout(runTimer);
    runTimer = window.setTimeout(() => fail('timeout'), MAX_RUN_MS);
    try {
      const cmd: any = {
        id: ttsId,
        type: 'assist_pipeline/run',
        start_stage: 'tts',
        end_stage: 'tts',
        input: { text },
      };
      if (pipeline) cmd.pipeline = pipeline;
      ws.send(JSON.stringify(cmd));
    } catch (e) { fail('network'); }
  };

  // «Дай полный ответ»: обрываем краткую озвучку и читаем весь текст с экрана.
  const readFull = () => {
    if (dead || finished || !fullReply) return;
    if (stopWatch) { stopWatch.stop(); stopWatch = null; }
    stopSource();
    ttsPending = false;
    // Старый TTS-запуск (если ещё считался) больше не должен зазвучать.
    ttsId = ++ttsSeq;
    notify({ shortened: false });
    say(fullReply);
  };

  const begin = () => {
    if (!ws || dead || finished) return;
    if (mode === 'speak') {
      // Только озвучка готового текста (кнопка «Прочитать полностью» после завершения ответа).
      ttsId = ++ttsSeq;
      clearTimeout(runTimer);
      runTimer = window.setTimeout(() => fail('timeout'), MAX_RUN_MS);
      try {
        const cmd: any = { id: ttsId, type: 'assist_pipeline/run', start_stage: 'tts', end_stage: 'tts', input: { text } };
        if (pipeline) cmd.pipeline = pipeline;
        ws.send(JSON.stringify(cmd));
      } catch (e) { fail('network'); }
      return;
    }
    const cmd: any = {
      id: 1,
      type: 'assist_pipeline/run',
      start_stage: mode === 'audio' ? 'stt' : 'intent',
      // До озвучки: текст ответа получаем здесь, а говорим только начало — отдельным запуском TTS.
      end_stage: 'intent',
      input: mode === 'audio' ? { sample_rate: SAMPLE_RATE } : { text },
    };
    if (conversationId) cmd.conversation_id = conversationId;
    if (pipeline) cmd.pipeline = pipeline;
    // Рамка — устройство в HA: по нему ассистент понимает, в какой комнате включить свет.
    if (deviceId) cmd.device_id = deviceId;
    try { ws.send(JSON.stringify(cmd)); } catch (e) { fail('network'); return; }
    runTimer = window.setTimeout(() => fail('timeout'), MAX_RUN_MS);
  };

  const openWs = (token: string) => {
    if (dead || finished) return;
    if (!session) {
      fail('auth');
      return;
    }
    const url = session.hassUrl.replace(/\/+$/, '').replace(/^http/i, 'ws') + '/api/websocket';
    let sock: WebSocket;
    try { sock = new WebSocket(url); } catch (e) { fail('network'); return; }
    ws = sock;
    sock.onmessage = (ev: MessageEvent) => {
      let msg: any;
      try { msg = JSON.parse(ev.data as string); } catch (e) { return; }
      if (msg.type === 'auth_required') {
        try { sock.send(JSON.stringify({ type: 'auth', access_token: token })); } catch (e) { fail('network'); }
      } else if (msg.type === 'auth_invalid') {
        fail('auth');
      } else if (msg.type === 'auth_ok') {
        begin();
      } else if (msg.type === 'result') {
        if (msg.success === false) fail(failCode((msg.error && msg.error.code) || 'run'));
      } else if (msg.type === 'event') {
        onEvent(msg.event, typeof msg.id === 'number' ? msg.id : 1);
      }
    };
    sock.onerror = () => fail('network');
    sock.onclose = () => {
      if (!finished && !dead) fail('closed');
    };
  };

  // Обычный путь: WebSocket в HA и запуск pipeline (STT/агент или только TTS).
  const startHa = () => {
    if (dead || finished) return;
    notify({ phase: 'connecting' });
    if (!session) { fail('auth'); return; }
    accessToken().then((token) => {
      if (dead || finished) return;
      if (!token) { fail('auth'); return; }
      openWs(token);
    }, () => fail('network'));
  };

  // Только озвучка и только голосом устройства — сервер и вход в HA не нужны вовсе.
  if (mode === 'speak' && deviceTtsReady()) {
    const token: SpeechToken = { cancelled: false };
    speech = token;
    ttsPending = true;
    if (speakOnDevice(text, token, (ok) => {
      if (speech !== token) return;
      speech = null;
      ttsPending = false;
      // Устройство не заговорило — читаем через HA, как обычный TTS-запуск.
      if (!ok) { startHa(); return; }
      finish();
    })) {
      notify({ phase: 'speaking' });
      stopWatch = watchSpeech(() => { stopSource(); finish(); }, () => { /* уже читаем всё */ }, pipeline);
      return {
        stop() { /* записи нет */ },
        cancel() {
          dead = true;
          finished = true;
          stopSource();
          cleanup();
        },
      };
    }
    ttsPending = false;
    speech = null;
  }

  if (mode === 'audio') {
    const problem = micProblem();
    if (problem) {
      fail(problem);
      return { stop() { /* already failed */ }, cancel() { /* nothing */ } };
    }
    const get = micApi();
    if (!get) {
      fail('unsupported');
      return { stop() { /* already failed */ }, cancel() { /* nothing */ } };
    }
    get({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true } })
      .then((stream) => {
        if (dead || finished) { stream.getTracks().forEach((t) => { try { t.stop(); } catch (e) { /* ignore */ } }); return; }
        if (!audioContext()) { fail('unsupported'); return; }
        micGranted = true;
        mic = startCapture(stream, onPcm);
      })
      .catch((e: any) => {
        const name = e && e.name;
        fail(name === 'NotAllowedError' || name === 'PermissionDeniedError' ? 'denied'
          : name === 'NotFoundError' || name === 'DevicesNotFoundError' ? 'no-mic' : 'unsupported');
      });
  }

  startHa();

  return {
    stop: stopListening,
    cancel,
    readFull,
  };
}

export function listenVoice(handlers: VoiceHandlers, conversationId?: string, pipeline?: string, deviceId?: string): VoiceRun {
  return run('audio', '', handlers, conversationId, pipeline, true, deviceId);
}

// Прочитать готовый текст: голосом устройства сразу, иначе — TTS-запуском в HA.
export function speakVoice(text: string, handlers: VoiceHandlers, pipeline?: string): VoiceRun {
  return run('speak', text, handlers, undefined, pipeline, true);
}

export function askVoice(text: string, handlers: VoiceHandlers, conversationId?: string, pipeline?: string, speak = true, deviceId?: string): VoiceRun {
  return run('text', text, handlers, conversationId, pipeline, speak, deviceId);
}
