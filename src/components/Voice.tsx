import { useEffect, useRef, useState } from 'preact/hooks';
import { Mic, Send, Sparkles, Square, Trash2, Volume2, VolumeX, X } from 'lucide-preact';
import { askVoice, listenVoice, primeVoice, voiceCue, FOLLOW_UP_NO_SPEECH_MS, type VoicePhase, type VoicePatch, type VoiceRun } from '../lib/voice';
import { WAKE_EVENT, stopWakeWord, startWakeWord } from './WakeWord';
import { useStore } from '../lib/store';
import { t } from '../i18n';

interface State {
  phase: VoicePhase;
  transcript?: string;
  reply?: string;
  error?: string;
  shortened?: boolean;
}

// Код ошибки из pipeline HA → понятная строка. Незнакомые коды — общий текст.
function errorText(code: string): string {
  const known = ['insecure', 'unsupported', 'denied', 'no-mic', 'auth', 'network', 'timeout', 'no-speech', 'setup', 'closed', 'run'];
  return t(known.indexOf(code) === -1 ? 'voice.error.run' : 'voice.error.' + code);
}

// ── Ответ агента: мини-Markdown ─────────────────────────
// Разговорные агенты HA отвечают Markdown-ом: «**Жирный:**», списки через «* пункт», переносы строк.
// Иногда весь ответ приходит одной строкой, и маркеры списка идут прямо в тексте — их тоже разбираем.
// Полный парсер не нужен (и весил бы больше всего окна), поэтому свои несколько правил.
function inline(text: string): any[] {
  const out: any[] = [];
  const re = /(\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*|_[^_\n]+_|`[^`\n]+`|\[[^\]\n]+\]\([^)\n]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const token = m[0];
    const key = 'i' + m.index;
    if (token.slice(0, 2) === '**' || token.slice(0, 2) === '__') out.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    else if (token[0] === '`') out.push(<code key={key}>{token.slice(1, -1)}</code>);
    else if (token[0] === '[') out.push(token.slice(1, token.indexOf(']')));
    else out.push(<em key={key}>{token.slice(1, -1)}</em>);
    last = m.index + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Reply(props: { text: string }) {
  const lines = props.text
    .replace(/\r/g, '')
    // Маркер списка может стоять посреди строки: «…умею: * **Пункт:** …». Пробел после «*» —
    // признак пункта, а не курсива (курсив звёздочкой пробел не отделяет).
    .replace(/(^|[\s])[*•]\s+(?=\S)/g, '\n* ')
    .split('\n');
  const blocks: any[] = [];
  let items: string[] = [];
  let nums: string[] = [];
  const flush = () => {
    if (items.length) {
      const list = items;
      items = [];
      blocks.push(<ul key={'u' + blocks.length}>{list.map((li, i) => <li key={i}>{inline(li)}</li>)}</ul>);
    }
    if (nums.length) {
      const list = nums;
      nums = [];
      blocks.push(<ol key={'o' + blocks.length}>{list.map((li, i) => <li key={i}>{inline(li)}</li>)}</ol>);
    }
  };
  lines.forEach((raw, i) => {
    const line = raw.trim();
    // Заголовки Markdown: «### Ранние годы». Агенты часто ими структурируют длинный ответ.
    const heading = /^(#{1,6})\s+(.*?)\s*#*$/.exec(line);
    if (heading) {
      flush();
      const level = Math.min(3, heading[1].length);
      blocks.push(<div class={'voice-h h' + level} key={'h' + i}>{inline(heading[2])}</div>);
      return;
    }
    const bullet = /^[*•·—–-]\s+(.*)$/.exec(line);
    if (bullet) { items.push(bullet[1]); return; }
    const num = /^\d+[.)]\s+(.*)$/.exec(line);
    if (num) { nums.push(num[1]); return; }
    flush();
    if (!line || /^[-—_*]{3,}$/.test(line)) return; // пустая строка или горизонтальная линия
    blocks.push(<p key={'p' + i}>{inline(line)}</p>);
  });
  flush();
  return <div class="voice-reply">{blocks}</div>;
}

// Ответ «печатается» на экране: пока идёт анимация — ровный текст с курсором,
// когда допечатался — тот же текст, но уже разобранный как Markdown.
function useTyped(text: string, animate: boolean): { shown: string; typing: boolean } {
  const [n, setN] = useState(animate ? 0 : text.length);
  useEffect(() => {
    if (!animate) { setN(text.length); return; }
    if (!text) { setN(0); return; }
    const reduce = typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setN(text.length); return; }
    setN(0);
    // Скорость не зависит от длины: короткий ответ печатается не мгновенно,
    // длинный — не заставляет ждать дольше полутора секунд.
    const duration = Math.min(1600, Math.max(450, text.length * 9));
    const started = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - started) / duration);
      setN(Math.max(1, Math.round(text.length * p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, animate]);
  return { shown: text.slice(0, n), typing: n < text.length };
}

// Строка «хода работы»: вызов инструмента HA или кусок ответа от агента.
interface Step { text: string; kind: 'tool' | 'text' }

// Переписка в окне: последние сообщения храним на устройстве, чтобы после закрытия
// можно было вернуться к разговору. Старые вытесняются — окно не превращается в архив.
interface ChatMessage { id: string; role: 'user' | 'assistant'; text: string; ts: number; fresh?: boolean }

const CHAT_KEY = 'photoframe.chat';
const CHAT_LIMIT = 20;

function loadChat(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(CHAT_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    if (!Array.isArray(list)) return [];
    return list
      .filter((m: any) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.text === 'string' && m.text)
      .map((m: any) => ({ id: String(m.id || m.ts || Math.random()), role: m.role, text: m.text, ts: Number(m.ts) || 0 }))
      .slice(-CHAT_LIMIT);
  } catch (e) { return []; }
}

// Окно голосового помощника: открыли — сразу слушаем. Ответ показывает текстом и озвучивает;
// если микрофона нет (HTTP, старый WebView), остаётся поле «спросить текстом» — тот же pipeline HA.
export function Voice(props: { onClose: () => void; onSettings?: () => void }) {
  const store = useStore();
  const [status, setStatus] = useState<State>({ phase: 'connecting' });
  // Ответ на текст, набранный руками: вслух или только на экране. Голосовой вопрос всегда озвучиваем.
  const [speak, setSpeak] = useState<boolean>(() => {
    try { return localStorage.getItem('photoframe.voiceSpeak') !== '0'; } catch (e) { return true; }
  });
  const toggleSpeak = () => setSpeak((v) => {
    const next = !v;
    try { localStorage.setItem('photoframe.voiceSpeak', next ? '1' : '0'); } catch (e) { /* ignore */ }
    return next;
  });
  // Для Assist эта рамка — устройство в HA: по нему ассистент понимает, в какой комнате включать свет.
  const deviceId = store.frameDeviceId || undefined;

  // Останавливаем wake word, пока диалог открыт — микрофон нужен Assist
  useEffect(() => {
    stopWakeWord();
    return () => startWakeWord();
  }, []);

  const [text, setText] = useState('');
  const [steps, setSteps] = useState<Step[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadChat());
  const bodyRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const atBottom = useRef(true);
  const firstScroll = useRef(true);
  const session = useRef<VoiceRun | null>(null);
  const conversation = useRef<string | undefined>(undefined);
  const phase = useRef<VoicePhase>('connecting');
  // Авто-дослушивание: после ответа микрофон ещё ждёт follow-up (frameSize тишины STT ~5 сек).
  const followUpKey = useRef('');
  // Сообщение текущего хода: распознанный текст приходит один раз, ответ — один раз.
  const turnUser = useRef('');
  const lastReply = useRef('');
  const seq = useRef(0);
  // Любая активность пользователя (нажатие, ввод, wake word) сбрасывает таймер автозакрытия.
  const lastActivity = useRef(Date.now());
  const markActivity = () => { lastActivity.current = Date.now(); };

  const pushMessage = (role: ChatMessage['role'], value: string) => {
    if (!value) return;
    const msg: ChatMessage = {
      id: Date.now() + '-' + (++seq.current),
      role,
      text: value,
      ts: Date.now(),
      // «Свежий» ответ печатается на экране; загруженные из истории — сразу готовым текстом.
      fresh: role === 'assistant',
    };
    setMessages((prev) => [...prev, msg].slice(-CHAT_LIMIT));
  };

  // Переписку держим на устройстве: закрыли окно — открыли и видим последние сообщения.
  useEffect(() => {
    try {
      localStorage.setItem(CHAT_KEY, JSON.stringify(messages.map(({ id, role, text, ts }) => ({ id, role, text, ts }))));
    } catch (e) { /* ignore */ }
  }, [messages]);

  const apply = (patch: VoicePatch) => {
    if (patch.phase) phase.current = patch.phase;
    // Уровень микрофона живёт только во время прослушивания.
    if (patch.phase && patch.phase !== 'listening') cardRef.current?.style.setProperty('--voice-level', '0');
    // Молчание (пустая распознанная речь) — не ошибка, а «диалог ждёт следующий вопрос».
    if (patch.phase === 'error' && (patch.error === 'no-speech' || patch.error === 'timeout')) {
      phase.current = 'done';
      patch = { phase: 'done', error: '' };
    }
    if (patch.transcript && !turnUser.current) {
      turnUser.current = patch.transcript;
      pushMessage('user', patch.transcript);
    }
    if (patch.conversationId) {
      conversation.current = patch.conversationId;
      // Сохраняем на рамку — следующий открытый диалог продолжит беседу (HA хранит историю ~5 минут).
      try { localStorage.setItem('photoframe.conversation', patch.conversationId); } catch (e) { /* ignore */ }
    }
    if (patch.progress) {
      const line: Step = { text: patch.progress, kind: patch.progressKind || 'text' };
      setSteps((prev) => (prev.length && prev[prev.length - 1].text === line.text ? prev : [...prev, line].slice(-5)));
    }
    setStatus((s) => ({ ...s, ...patch, error: patch.phase && patch.phase !== 'error' ? '' : patch.error || s.error }));
  };

  // Живой отклик орба на голос: пишем CSS-переменную напрямую, без перерисовки всей переписки.
  const onLevel = (level: number) => {
    const el = cardRef.current;
    if (el) el.style.setProperty('--voice-level', level.toFixed(3));
  };
  const handlers = { onStatus: apply, onLevel };

  const listen = () => {
    markActivity();
    setSteps([]);
    turnUser.current = '';
    lastReply.current = '';
    if (session.current) session.current.cancel();
    primeVoice();
    voiceCue('listen');
    phase.current = 'connecting';
    setStatus({ phase: 'connecting', reply: '', error: '', transcript: '' });
    session.current = listenVoice(handlers, conversation.current, store.state.settings.voicePipeline, deviceId);
  };

  // Ответ агента пришёл — дописываем его в переписку (один раз на ход).
  useEffect(() => {
    if (!status.reply) return;
    const key = turnUser.current + '|' + status.reply;
    if (key === lastReply.current) return;
    lastReply.current = key;
    pushMessage('assistant', status.reply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status.reply]);

  useEffect(() => {
    listen();
    return () => {
      // Окно закрыли (крестик, фон, Esc или Назад на пульте) — обрываем сессию и коротко сообщаем
      // низким сигналом, что выполнение прервано. Если уже готово/ошибка — молчим.
      const p = phase.current;
      if (session.current) session.current.cancel();
      if (p === 'connecting' || p === 'listening' || p === 'thinking' || p === 'speaking') voiceCue('no');
    };
    // Слушаем один раз при открытии; дальше — по кнопке «ещё раз».
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => {
    if (session.current) session.current.cancel();
    props.onClose();
  };

  const ask = (value: string) => {
    markActivity();
    const query = value.trim();
    if (!query) return;
    setText('');
    setSteps([]);
    turnUser.current = query;
    lastReply.current = '';
    pushMessage('user', query);
    if (session.current) session.current.cancel();
    primeVoice();
    phase.current = 'thinking';
    setStatus({ phase: 'thinking', transcript: query, reply: '', error: '' });
    session.current = askVoice(query, handlers, conversation.current, store.state.settings.voicePipeline, speak, deviceId);
  };

  const submit = (e: Event) => {
    e.preventDefault();
    ask(text);
  };

  // Новый разговор: чистим и экран, и контекст в HA — иначе ассистент помнит старые реплики.
  const clearChat = () => {
    markActivity();
    setMessages([]);
    turnUser.current = '';
    lastReply.current = '';
    conversation.current = undefined;
    try {
      localStorage.removeItem(CHAT_KEY);
      localStorage.removeItem('photoframe.conversation');
    } catch (e) { /* ignore */ }
  };

  const orb = () => {
    const p = phase.current;
    if (p === 'listening') {
      if (session.current) session.current.stop();
      return;
    }
    // Пока думает или говорит — тот же микрофон работает кнопкой «стоп»: ответ обрывается сразу.
    if (p === 'connecting' || p === 'thinking' || p === 'speaking') {
      stopAnswer();
      return;
    }
    listen();
  };

  // После ответа — ждём follow-up: автоматически открываем прослушивание ещё раз.
  // Если пользователь ничего не сказал, STT молча завершится, диалог так и останется в ожидании.
  useEffect(() => {
    if (status.phase === 'done' && status.reply) {
      const key = (status.reply || '') + '|' + (conversation.current || '');
      if (followUpKey.current === key) return;
      followUpKey.current = key;
      const timer = window.setTimeout(() => {
        if (phase.current === 'done') {
          primeVoice();
          voiceCue('listen');
          turnUser.current = '';
          lastReply.current = '';
          phase.current = 'connecting';
          setStatus((s) => ({ ...s, phase: 'connecting' }));
          session.current = listenVoice(handlers, conversation.current, store.state.settings.voicePipeline, deviceId, FOLLOW_UP_NO_SPEECH_MS);
        }
      }, 800);
      return () => window.clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status.phase, status.reply]);

  const stopAnswer = () => {
    markActivity();
    if (session.current) session.current.cancel();
    voiceCue('no');
    phase.current = 'done';
    setStatus((s) => ({ ...s, phase: 'done', error: '' }));
  };

  // Автозакрытие: ответ получен, новых обращений нет, в диалоге нет активности 30 секунд — закрываем.
  useEffect(() => {
    const timer = window.setInterval(() => {
      const p = phase.current;
      // Пока ассистент обрабатывает/говорит — это тоже активность
      if (p === 'connecting' || p === 'listening' || p === 'thinking' || p === 'speaking') {
        markActivity();
        return;
      }
      if (Date.now() - lastActivity.current > 30000) {
        close();
      }
    }, 1000);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Wake word при уже открытом диалоге — физически «нажимаем на микрофон» (то же самое, что кнопка orb).
  useEffect(() => {
    const onWake = () => { markActivity(); orb(); };
    document.addEventListener(WAKE_EVENT, onWake);
    return () => document.removeEventListener(WAKE_EVENT, onWake);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Восстанавливаем conversation_id при открытии — если HA ещё не забыл диалог.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('photoframe.conversation');
      if (saved) conversation.current = saved;
    } catch (e) { /* ignore */ }
  }, []);

  const answering = status.phase === 'thinking' || status.phase === 'speaking';
  const orbTitle = phase.current === 'listening' ? t('voice.stop') : answering ? t('voice.stop_answer') : t('voice.listen');
  const last = messages.length ? messages[messages.length - 1] : null;
  // Печатаем только свежий ответ текущего хода; историю показываем готовой.
  const typingLast = !!(last && last.role === 'assistant' && last.fresh);
  const typed = useTyped(typingLast ? last!.text : '', typingLast);
  const working = status.phase === 'thinking' && !status.reply;

  // Автопрокрутка вниз: при открытии — всегда в конец истории, дальше — только если
  // пользователь сам не отлистал вверх (иначе читать старые сообщения невозможно).
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (firstScroll.current) {
      firstScroll.current = false;
      // Ждём раскладку истории (шрифты, переносы) и прыгаем в самый низ.
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
        window.setTimeout(() => { el.scrollTop = el.scrollHeight; }, 80);
      });
      return;
    }
    if (atBottom.current) el.scrollTop = el.scrollHeight;
  }, [messages, steps, status.phase, typed.shown.length]);

  const onBodyScroll = () => {
    const el = bodyRef.current;
    if (!el) return;
    atBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  };

  return (
    <div class={'modal voice-modal phase-' + status.phase} onPointerDown={markActivity} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div class={'voice-card phase-' + status.phase} ref={cardRef}>
        <div class="voice-aura" aria-hidden="true"><i /><i /><i /></div>
        <div class="voice-top">
          <div class="voice-brand"><Sparkles size={16} /><span>{t('voice.title')}</span></div>
          <div class="voice-actions">
            <button class="icon-btn" onClick={clearChat} disabled={!messages.length || answering}
              title={t('voice.clear')} aria-label={t('voice.clear')}>
              <Trash2 size={18} />
            </button>
            <button class="icon-btn" onClick={close} title={t('voice.close')} aria-label={t('voice.close')}>
              <X size={20} />
            </button>
          </div>
        </div>
        <div class="voice-head">
          <button class={'voice-orb ' + status.phase} onClick={orb}
            title={orbTitle} aria-label={orbTitle}>
            {(status.phase === 'connecting' || status.phase === 'listening' || status.phase === 'speaking') && (
              <>
                <span class="voice-ring" />
                <span class="voice-ring r2" />
                <span class="voice-ring r3" />
              </>
            )}
            {answering ? <Square size={28} fill="currentColor" /> : <Mic size={34} />}
          </button>
          <div class="voice-wave" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div class="voice-state" aria-live="polite">{t('voice.state.' + status.phase)}</div>
          {status.error && <div class="voice-error">{errorText(status.error)}</div>}
          {status.error === 'auth' && props.onSettings && (
            <button class="pill-btn voice-signin" onClick={() => { close(); props.onSettings!(); }}>{t('voice.sign_in')}</button>
          )}
        </div>
        <div class="voice-body" ref={bodyRef} onScroll={onBodyScroll}>
          <div class="voice-chat">
            {messages.length === 0 && !working && (
              <div class="voice-empty">
                <Sparkles size={22} />
                <p>{t('voice.empty')}</p>
              </div>
            )}
            {messages.map((m) => (
              m.role === 'user' ? (
                <div class="voice-msg user" key={m.id}>
                  <div class="voice-bubble">{m.text}</div>
                </div>
              ) : (
                <div class="voice-msg bot" key={m.id}>
                  {m.fresh && m.id === (last && last.id) && typed.typing
                    ? <div class="voice-reply voice-typing">{typed.shown}<span class="voice-caret" /></div>
                    : <Reply text={m.text} />}
                </div>
              )
            ))}
            {working && (
              <div class="voice-progress" aria-live="polite">
                <div class="voice-progress-head">
                  <span class="voice-dots"><i /><i /><i /></span>
                  <span>{steps.length ? t('voice.progress.title') : t('voice.progress.wait')}</span>
                </div>
                {steps.length > 0 && (
                  <ul class="voice-steps">
                    {steps.map((s, i) => (
                      <li key={i} class={'kind-' + s.kind + (i === steps.length - 1 ? ' current' : '')}>
                        {s.kind === 'tool' && <b>{t('voice.progress.tool')}</b>} {s.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {messages.length === 0 && !working && (
              <div class="voice-suggest">
                <button type="button" onClick={() => ask(t('voice.suggest.lights'))}>{t('voice.suggest.lights')}</button>
                <button type="button" onClick={() => ask(t('voice.suggest.weather'))}>{t('voice.suggest.weather')}</button>
                <button type="button" onClick={() => ask(t('voice.suggest.help'))}>{t('voice.suggest.help')}</button>
              </div>
            )}
          </div>
        </div>
        <form class="voice-ask" onSubmit={submit}>
          <button type="button" class={'voice-mode' + (speak ? ' on' : '')} onClick={toggleSpeak}
            title={t(speak ? 'voice.reply_voice' : 'voice.reply_text')}
            aria-label={t(speak ? 'voice.reply_voice' : 'voice.reply_text')} aria-pressed={speak}>
            {speak ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span>{t(speak ? 'voice.reply_voice_short' : 'voice.reply_text_short')}</span>
          </button>
          <input value={text} onInput={(e) => { setText(e.currentTarget.value); markActivity(); }}
            placeholder={t('voice.ask')} aria-label={t('voice.ask')} enterkeyhint="send" />
          <button type="submit" disabled={!text.trim()} title={t('voice.send')} aria-label={t('voice.send')}>
            <Send size={18} />
          </button>
        </form>
        <div class="voice-note">{t('voice.note')}</div>
      </div>
    </div>
  );
}
