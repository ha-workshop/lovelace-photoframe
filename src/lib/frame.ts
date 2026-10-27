// Эта рамка как устройство в HA (интеграция Photo Frame): постоянный id, имя и подписка
// photoframe/frame/connect. Пока подписка жива — в HA рамка «в сети»; по ней же приходят
// её альбом и стартовый экран (их меняют в HA) и команды — следующее фото, показать камеру и т.п.
import type { HAClient } from './ha';

declare const __VERSION__: string;

const ID_KEY = 'photoframe.frameId';
const NAME_KEY = 'photoframe.frameName';

export interface FrameState { type: 'state'; name?: string; album?: string; start_screen?: string | null; screen_on?: boolean; brightness?: number }
export interface FrameCommand { type: 'command'; command: string; entity?: string; duration?: number; screen?: string }

function read(key: string) {
  try { return localStorage.getItem(key) || ''; } catch (e) { return ''; }
}

function write(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

export function frameId(): string {
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
export function reportFrame(client: HAClient, data: { photo?: string | null; photo_url?: string | null; screen?: string | null; screen_on?: boolean }) {
  client.call({ type: 'photoframe/frame/report', frame_id: frameId(), ...data }).catch(() => {});
}
