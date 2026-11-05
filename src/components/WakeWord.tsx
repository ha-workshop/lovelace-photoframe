// Пробуждение по голосу через openWakeWord (WASM+ONNX).
// ONNX runtime и WakeWordEngine загружаются с того же сервера HA.
// Микрофон слушает постоянно. На слово — открывается голосовой диалог.
import { useEffect, useRef, useState } from 'preact/hooks';
import { wakeWordModel, setWakeWordModel } from '../lib/voice';
import { t } from '../i18n';

interface Props { onWake: () => void }
const WAKE_EVENT = 'photoframe:wake';

export function triggerWake() {
  document.dispatchEvent(new CustomEvent(WAKE_EVENT));
}

let engine: any = null;
let engineReady = false;

// Откуда грузить ONNX runtime: локально с HA или с CDN
const WAKE_SOURCE_KEY = 'photoframe.wakeSource';
type WakeSource = 'local' | 'cdn';

function wakeSource(): WakeSource {
  try { return localStorage.getItem(WAKE_SOURCE_KEY) === 'cdn' ? 'cdn' : 'local'; } catch (e) { return 'local'; }
}

function setWakeSource(v: WakeSource) {
  try { localStorage.setItem(WAKE_SOURCE_KEY, v); } catch (e) { /* ignore */ }
}

function wakeUrls(source: WakeSource) {
  if (source === 'cdn') {
    return {
      ort: 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/ort.all.bundle.min.mjs',
      wasm: 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/',
      engine: '/photoframe/models/wakeword.js',
      models: '/photoframe/models',
    };
  }
  return {
    ort: '/photoframe/models/ort.mjs',
    wasm: '/photoframe/models/',
    engine: '/photoframe/models/wakeword.js',
    models: '/photoframe/models',
  };
}

async function ensureEngine(source: WakeSource) {
  if (engine) return;
  const urls = wakeUrls(source);
  // Load ONNX runtime
  if (!(window as any).ORT) {
    await new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = urls.ort;
      s.type = 'module';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load ONNX runtime'));
      document.head.appendChild(s);
    });
  }
  // Load WakeWordEngine
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
    keywords: [],
    baseAssetUrl: urls.models,
    ortWasmPath: urls.wasm,
    detectionThreshold: 0.5,
    cooldownMs: 3000,
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

  useEffect(() => {
    const model = wakeWordModel();
    if (!model) return;
    mounted.current = true;

    (async () => {
      try {
        await ensureEngine(wakeSource());
        if (!mounted.current) return;
        engine.setActiveKeywords([model]);
        await engine.start().catch(() => {});
      } catch (err) {
        console.warn('[WakeWord] start failed:', err);
      }
    })();

    return () => { mounted.current = false; };
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
        await ensureEngine(source);
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
