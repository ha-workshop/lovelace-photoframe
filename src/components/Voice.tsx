import { useEffect, useRef, useState } from 'preact/hooks';
import { Mic, Send, Square, Volume2, VolumeX, X } from 'lucide-preact';
import { askVoice, listenVoice, primeVoice, speakVoice, voiceCue, type VoicePhase, type VoicePatch, type VoiceRun } from '../lib/voice';
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
  const [text, setText] = useState('');
  const session = useRef<VoiceRun | null>(null);
  const conversation = useRef<string | undefined>(undefined);
  const phase = useRef<VoicePhase>('connecting');

  const apply = (patch: VoicePatch) => {
    if (patch.phase) phase.current = patch.phase;
    if (patch.conversationId) conversation.current = patch.conversationId;
    setStatus((s) => ({ ...s, ...patch, error: patch.phase && patch.phase !== 'error' ? '' : patch.error || s.error }));
  };

  const listen = () => {
    if (session.current) session.current.cancel();
    primeVoice();
    voiceCue('listen');
    phase.current = 'connecting';
    setStatus({ phase: 'connecting', reply: '', error: '', transcript: '' });
    session.current = listenVoice({ onStatus: apply }, conversation.current, store.state.settings.voicePipeline);
  };

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

  const submit = (e: Event) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setText('');
    if (session.current) session.current.cancel();
    primeVoice();
    phase.current = 'thinking';
    setStatus({ phase: 'thinking', transcript: value, reply: '', error: '' });
    session.current = askVoice(value, { onStatus: apply }, conversation.current, store.state.settings.voicePipeline, speak);
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

  const stopAnswer = () => {
    if (session.current) session.current.cancel();
    voiceCue('no');
    phase.current = 'done';
    setStatus((s) => ({ ...s, phase: 'done', error: '' }));
  };

  // Прочитать весь ответ: пока сессия жива — она сама продолжит полным текстом;
  // после завершения — отдельная озвучка (голосом устройства или через HA).
  const readFull = () => {
    const text = status.reply;
    if (!text) return;
    const active = status.phase === 'thinking' || status.phase === 'speaking';
    if (active && session.current && session.current.readFull) {
      session.current.readFull();
      return;
    }
    if (session.current) session.current.cancel();
    primeVoice();
    phase.current = 'thinking';
    setStatus((s) => ({ ...s, shortened: false, error: '', phase: 'thinking' }));
    session.current = speakVoice(text, { onStatus: apply }, store.state.settings.voicePipeline);
  };

  const answering = status.phase === 'thinking' || status.phase === 'speaking';
  const orbTitle = phase.current === 'listening' ? t('voice.stop') : answering ? t('voice.stop_answer') : t('voice.listen');

  return (
    <div class="modal voice-modal" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div class={'voice-card phase-' + status.phase}>
        <button class="icon-btn voice-close" onClick={close} title={t('voice.close')} aria-label={t('voice.close')}>
          <X size={20} />
        </button>
        <div class="voice-head">
          <button class={'voice-orb ' + status.phase} onClick={orb}
            title={orbTitle} aria-label={orbTitle}>
            {(status.phase === 'connecting' || status.phase === 'listening' || status.phase === 'speaking') && <span class="voice-ring" />}
            {answering ? <Square size={28} fill="currentColor" /> : <Mic size={36} />}
          </button>
          <div class="voice-state" aria-live="polite">{t('voice.state.' + status.phase)}</div>
          {status.transcript && <div class="voice-said">«{status.transcript}»</div>}
          {status.shortened && (
            <div class="voice-short-note">
              <span>{t('voice.short_note')}</span>
              <button class="voice-read-full" onClick={readFull}>{t('voice.read_full')}</button>
            </div>
          )}
          {answering && <div class="voice-stop-hint">{t('voice.stop_hint')}</div>}
          {status.error && <div class="voice-error">{errorText(status.error)}</div>}
          {status.error === 'auth' && props.onSettings && (
            <button class="pill-btn voice-signin" onClick={() => { close(); props.onSettings!(); }}>{t('voice.sign_in')}</button>
          )}
        </div>
        <div class="voice-body">
          {status.reply && <Reply text={status.reply} />}
        </div>
        <form class="voice-ask" onSubmit={submit}>
          <button type="button" class={'voice-mode' + (speak ? ' on' : '')} onClick={toggleSpeak}
            title={t(speak ? 'voice.reply_voice' : 'voice.reply_text')}
            aria-label={t(speak ? 'voice.reply_voice' : 'voice.reply_text')} aria-pressed={speak}>
            {speak ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span>{t(speak ? 'voice.reply_voice_short' : 'voice.reply_text_short')}</span>
          </button>
          <input value={text} onInput={(e) => setText(e.currentTarget.value)}
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
