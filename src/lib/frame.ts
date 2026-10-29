// Эта рамка как устройство в HA (интеграция Photo Frame): постоянный id, имя и подписка
// photoframe/frame/connect. Пока подписка жива — в HA рамка «в сети»; по ней же приходят
// её альбом и стартовый экран (их меняют в HA) и команды — следующее фото, показать камеру и т.п.
import type { HAClient } from './ha';
import { PREVIEW } from './preview';

declare const __VERSION__: string;

const ID_KEY = 'photoframe.frameId';
const NAME_KEY = 'photoframe.frameName';
// Предпросмотр в разделе «Фоторамки» (?preview=1&frame_id=…) — это выбранная рамка:
// раскладку и её настройки берём у неё, а не у браузера, с которого открыт HA.
const PREVIEW_FRAME_KEY = 'photoframe.previewFrame';

function previewFrame(): string {
  if (!PREVIEW) return '';
  try {
    const fromUrl = new URLSearchParams(location.search).get('frame_id');
    if (fromUrl) sessionStorage.setItem(PREVIEW_FRAME_KEY, fromUrl);
    return sessionStorage.getItem(PREVIEW_FRAME_KEY) || '';
  } catch (e) { return ''; }
}

const PREVIEW_ID = previewFrame();

// layout — сетки экрана с фото, заданные в HA (rev растёт с каждой правкой из редактора).
export interface FrameState {
  type: 'state'; name?: string; album?: string; start_screen?: string | null; screen_on?: boolean; brightness?: number;
  // Экран с фото, заданный в HA (редактор или «Скопировать на…»): rev растёт с каждой правкой.
  lockscreen_push?: { rev: number; patch: unknown } | null;
}
export interface FrameCommand { type: 'command'; command: string; entity?: string; duration?: number; screen?: string }

function read(key: string) {
  try { return localStorage.getItem(key) || ''; } catch (e) { return ''; }
}

function write(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

export function frameId(): string {
  // В предпросмотре «Фоторамки» — id выбранной рамки, чтобы правки ложились в её раскладку.
  if (PREVIEW_ID) return PREVIEW_ID;
  let id = read(ID_KEY);
  if (!id) {
    for (id = ''; id.length < 16;) id += Math.floor(Math.random() * 16).toString(16);
    write(ID_KEY, id);
  }
  return id;
}

export function frameName(): string {
  return read(NAME_KEY);
}

export function setFrameName(name: string) {
  write(NAME_KEY, name);
}

// Что за устройство — для карточки устройства в HA.
function frameModel(): string {
  const ua = navigator.userAgent;
  if (/SmartFrame\//.test(ua)) return 'Android (APK)';
  if (/iPad|iPhone|iPod/.test(ua)) return 'iOS';
  if (/Android/.test(ua)) return 'Android';
  return 'Browser';
}

// APK-оболочка (MainActivity): своя версия и обновление по команде из HA.
interface ApkBridge { getApkVersion?: () => string; updateApk?: (url: string) => void }
const apk = () => (window as unknown as { SmartFrame?: ApkBridge }).SmartFrame;

function apkVersion(): string {
  const b = apk();
  try { return b && b.getApkVersion ? b.getApkVersion() : ''; } catch (e) { return ''; }
}

// «Установить» у обновления рамки в HA: APK берём у этой же интеграции (/photoframe/photoframe.apk).
export function updateApk() {
  const b = apk();
  try { if (b && b.updateApk) b.updateApk(location.protocol + '//' + location.host + '/photoframe/photoframe.apk'); } catch (e) { /* ignore */ }
}

export function connectFrame(client: HAClient, onEvent: (event: FrameState | FrameCommand) => void): () => void {
  const msg: Record<string, unknown> = { type: 'photoframe/frame/connect', frame_id: frameId(), model: frameModel(), version: __VERSION__ };
  if (frameName()) msg.name = frameName();
  if (apkVersion()) msg.apk = apkVersion();
  return client.subscribeMessage(msg, onEvent);
}

// Сообщить HA, что рамка сейчас показывает (фото, экран). Без ответа — это не важно для работы рамки.
export function reportFrame(client: HAClient, data: { photo?: string | null; photo_url?: string | null; screen?: string | null; screen_on?: boolean; lockscreen?: unknown; display?: { w: number; h: number } }) {
  client.call({ type: 'photoframe/frame/report', frame_id: frameId(), ...data }).catch(() => {});
}
