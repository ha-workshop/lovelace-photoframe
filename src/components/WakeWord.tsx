// Пробуждение по голосу через openWakeWord (WASM+ONNX).
// ONNX runtime и WakeWordEngine загружаются с того же сервера HA.
// Микрофон слушает постоянно. На слово — открывается голосовой диалог.
import { useEffect, useRef, useState } from 'preact/hooks';
import { wakeWordModel, setWakeWordModel } from '../lib/voice';
import { t } from '../i18n';

interface Props { onWake: () => void }
export const WAKE_EVENT = 'photoframe:wake';
export const WAKE_STOP_EVENT = 'photoframe:wake-stop';
export const WAKE_START_EVENT = 'photoframe:wake-start';

export function triggerWake() {
  document.dispatchEvent(new CustomEvent(WAKE_EVENT));
}
export function stopWakeWord() {
  document.dispatchEvent(new CustomEvent(WAKE_STOP_EVENT));
}
export function startWakeWord() {
  document.dispatchEvent(new CustomEvent(WAKE_START_EVENT));
}

let engine: any = null;
let engineReady = false;

// Движок wake word собирается из исходников (см. src/wakeword-standalone.js ->
// public/models/wakeword-standalone.js): полностью автономный, с onnxruntime-web внутри.
const WAKE_SOURCE_KEY = 'photoframe.wakeSource';
type WakeSource = 'local' | 'cdn';

function wakeSource(): WakeSource {
  try { return localStorage.getItem(WAKE_SOURCE_KEY) === 'cdn' ? 'cdn' : 'local'; } catch (e) { return 'local'; }
}

function setWakeSource(v: WakeSource) {
  try { localStorage.setItem(WAKE_SOURCE_KEY, v); } catch (e) { /* ignore */ }
}

function wakeUrls(source: WakeSource) {
  // Локальная сборка (самодостаточна); CDN-режим оставлен для сравнения.
  if (source === 'cdn') {
    return {
      engine: '/photoframe/models/wakeword-standalone.js',
      models: '/photoframe/models',
    };
  }
  return {
    engine: '/photoframe/models/wakeword-standalone.js',
    models: '/photoframe/models',
  };
}

let engineModel = '';

async function ensureEngine(source: WakeSource, model: string) {
  if (engine && engineModel === model) return;
  if (engine) {
    try { await engine.stop().catch(() => {}); } catch (e) { /* ignore */ }
    engine = null;
  }
  engineModel = model;
  const urls = wakeUrls(source);
  if (!(window as any).WakeWordEngine) {
    await new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = urls.engine;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load wakeword engine'));
      document.head.appendChild(s);
    });
  }
  const WakeWordEngine = (window as any).WakeWordEngine;
  engine = new WakeWordEngine({
    keywords: [model],
    baseAssetUrl: urls.models,
    ortWasmPath: urls.models + '/',
    detectionThreshold: 0.5,
    cooldownMs: 3000,
    debug: true,
  });
  engine.on('detect', ({ keyword }: { keyword: string }) => {
    triggerWake();
  });
  engine.on('error', (err: Error) => console.warn('[WakeWord]', err));
  await engine.load();
  engineReady = true;
}

export function WakeWordDetector(props: Props) {
  const mounted = useRef(true);
  const started = useRef(false);

  useEffect(() => {
    const model = wakeWordModel();
    if (!model) return;
    mounted.current = true;

    const tryStart = async () => {
      if (started.current) return;
      try {
        await ensureEngine(wakeSource(), model);
        if (!mounted.current) return;
        engine.setActiveKeywords([model]);
        // iOS Safari требует жеста пользователя для AudioContext — ждём первого касания
        await engine.start().catch((e: any) => console.warn('[WakeWord] start failed:', e));
        started.current = true;
      } catch (err) {
        console.warn('[WakeWord] init failed:', err);
      }
    };

    // Пробуем сразу (Chrome на десктопе/Android допускает AudioContext до жеста при сохранённом разрешении)
    tryStart();
    // iOS: первый жест — обязателен для микрофона/AudioContext.
    const onFirstGesture = () => { tryStart(); };
    document.addEventListener('pointerdown', onFirstGesture, { once: true });
    document.addEventListener('touchend', onFirstGesture, { once: true });
    // Пауза/возобновление wake word во время диалога Assist
    const onStop = () => {
      if (engine && engineReady) {
        engine.stop().catch(() => {});
        started.current = false;
      }
    };
    const onStart = async () => {
      const m = wakeWordModel();
      if (!m) return;
      try {
        await ensureEngine(wakeSource(), m);
        if (!mounted.current) return;
        engine.setActiveKeywords([m]);
        await engine.start().catch((e: any) => console.warn('[WakeWord] restart failed:', e));
        started.current = true;
      } catch (err) {
        console.warn('[WakeWord] restart failed:', err);
      }
    };
    document.addEventListener(WAKE_STOP_EVENT, onStop);
    document.addEventListener(WAKE_START_EVENT, onStart);

    return () => {
      mounted.current = false;
      document.removeEventListener('pointerdown', onFirstGesture);
      document.removeEventListener('touchend', onFirstGesture);
      document.removeEventListener(WAKE_STOP_EVENT, onStop);
      document.removeEventListener(WAKE_START_EVENT, onStart);
    };
  }, []);

  useEffect(() => {
    const handler = () => props.onWake();
    document.addEventListener(WAKE_EVENT, handler);
    return () => document.removeEventListener(WAKE_EVENT, handler);
  }, [props.onWake]);

  return null;
}

export function WakeWordPicker() {
  const [model, setModel] = useState(wakeWordModel());
  const [source, setSource] = useState(wakeSource());
  const models = ['', 'alexa', 'hey_jarvis', 'hey_mycroft', 'hey_rhasspy', 'hey_jarvis_v2'] as const;

  const changeModel = async (value: string) => {
    setModel(value as typeof model);
    setWakeWordModel(value as typeof model);
    if (value) {
      try {
        await ensureEngine(source, value);
        engine.setActiveKeywords([value]);
        await engine.start().catch(() => {});
      } catch (e) { /* offline — без wake word */ }
    }
  };

  const changeSource = (value: string) => {
    const v = value as WakeSource;
    setSource(v);
    setWakeSource(v);
  };

  return (
    <>
      <div className="option">
        <label>{t('settings.wake_word')}</label>
        <select value={model} onChange={(e) => changeModel(e.currentTarget.value)}>
          <option value="">{t('settings.wake_word_off')}</option>
          {models.filter(Boolean).map((m) => (
            <option key={m} value={m}>{t('settings.wake_word_' + m)}</option>
          ))}
        </select>
      </div>
      {model && (
        <div className="option">
          <label>{t('settings.wake_source')}</label>
          <select value={source} onChange={(e) => changeSource(e.currentTarget.value)}>
            <option value="local">{t('settings.wake_source_local')}</option>
            <option value="cdn">{t('settings.wake_source_cdn')}</option>
          </select>
        </div>
      )}
      {model && <div className="hint small" style={{ marginTop: 0 }}>{t('settings.wake_word_hint')}</div>}
    </>
  );
}
