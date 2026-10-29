// Хранилище рамки в Home Assistant.
// Раскладки, дома и настройки лежат в конфиге карточки на дашборде: HA хранит их и раздаёт всем устройствам.
// Фото — из медиатеки HA (по умолчанию /media/photoframe).
// Работает и в самой карточке (через hass фронтенда), и в PWA без сервиса — через её подключение к HA
// (standalone): тогда PWA и карточка на дашборде photo-frame — одна и та же рамка.
import type { HAClient } from './ha';
import type { HomeScreens, Layout } from './layout';
import type { Home, Photo, Settings } from './store';
import { resize } from './photos';
import { targetSize } from './quality';
import { frameId } from './frame';
import { t } from '../i18n';

export const CARD_TYPE = 'custom:photoframe-card';

export interface CardConfig {
  type: string;
  // Дома в карточке — только раскладки одного HA: id и имя, без адресов и токенов.
  media_folder?: string;
  // Источник «Моих медиа» (обычно local; в media_dirs его можно назвать иначе) — сообщает интеграция.
  media_source?: string;
  // Альбомы — подпапки папки фото (от интеграции).
  albums?: string[];
  // Прятать меню и шапку HA, пока карточка на экране (на устройстве можно переопределить).
  kiosk?: boolean;
  settings?: Partial<Settings>;
  homes?: Home[];
  // Экраны каждого дома ({ screens }); у старых конфигов — одна раскладка на дом.
  layouts?: Record<string, HomeScreens | Layout>;
}

interface Lovelace { views?: Array<Record<string, any>> }

// Папка медиатеки внутри папки фото: count — кадров в ней самой, total — вместе с подпапками.
export interface FrameFolder { path: string; count: number; total: number }

// Ищем свою карточку в конфиге дашборда — она может лежать в карточках вида, в секциях или во вложенных стеках.
function findCard(node: any): Record<string, any> | null {
  if (!node || typeof node !== 'object') return null;
  if (node.type === CARD_TYPE) return node;
  const lists = [node.views, node.cards, node.sections, node.card ? [node.card] : null];
  for (const list of lists) {
    if (!Array.isArray(list)) continue;
    for (const child of list) {
      const hit = findCard(child);
      if (hit) return hit;
    }
  }
  return null;
}

function dashboardPath(): string | null {
  // /lovelace/0 — дашборд по умолчанию (url_path = null), /photoframe/kiosk — дашборд «photoframe».
  const first = location.pathname.split('/')[1] || 'lovelace';
  return first === 'lovelace' ? null : first;
}

// Интеграция Photo Frame (ha-photoframe): если стоит — дома, экраны и настройки лежат в её хранилище
// (.storage/photoframe), а не в конфиге карточки. null — интеграции нет, работаем через дашборд.
export interface IntegrationConfig extends CardConfig { can_edit?: boolean }

export function loadIntegration(client: HAClient): Promise<IntegrationConfig | null> {
  // frame_id — у каждого устройства своя раскладка дашборда (дома и настройки общие).
  return client.call<IntegrationConfig>({ type: 'photoframe/config', frame_id: frameId() })
    .then((c) => ({ ...c, type: CARD_TYPE }), () => null);
}

// Конфиг карточки с дашборда (url_path = null — дашборд по умолчанию). null — карточки там нет.
export function loadCardConfig(client: HAClient, url_path: string | null): Promise<CardConfig | null> {
  return client.call<Lovelace>({ type: 'lovelace/config', url_path }).then(
    (cfg) => findCard(cfg) as CardConfig | null,
    (e: Error) => {
      // Дашборда нет или он пустой — это «карточки нет», а не сбой связи.
      if (/not found|config_not_found|No config/i.test(e.message)) return null;
      throw e;
    },
  );
}

export class CardBackend {
  // dashboard — путь дашборда с карточкой; не задан — тот, на котором открыта карточка.
  // standalone — это PWA со своим подключением к HA, а не карточка внутри фронтенда HA.
  // integration — данные в интеграции Photo Frame (photoframe/config/*), а не в конфиге дашборда.
  constructor(
    readonly client: HAClient,
    public config: IntegrationConfig,
    private dashboard?: string | null,
    readonly standalone = false,
    readonly integration = false,
  ) {}

  // Альбом этой рамки (подпапка папки фото) — выбирается в HA, у устройства рамки; all — вся папка.
  album = '';

  // Папка медиатеки внутри папки фото (для дерева в настройках): путь, фото в ней и во всех подпапках.
  folderTree(): Promise<FrameFolder[]> {
    if (!this.integration) return Promise.resolve([]);
    return this.client.call<{ folders?: FrameFolder[] }>({ type: 'photoframe/folders' })
      .then((r) => r.folders || [], () => []);
  }

  // Выбранная на рамке папка — запоминается у её устройства в HA; all (пусто) — вся папка фото.
  setAlbum(album: string): Promise<void> {
    this.album = album && album !== 'all' ? album : 'all';
    if (!this.integration) return Promise.resolve();
    return this.client.call({ type: 'photoframe/frame/album', frame_id: frameId(), album: this.album })
      .then(() => undefined, (e: Error) => { throw e; });
  }

  get folder() {
    const base = (this.config.media_folder || 'photoframe').replace(/^\/+|\/+$/g, '');
    return this.album && this.album !== 'all' ? base + '/' + this.album : base;
  }

  // Источник «Моих медиа»: от интеграции, а без неё — спрашиваем у HA. Обычно это local (= /media),
  // но в configuration.yaml media_dirs его можно назвать иначе (media: /media) — тогда local не существует.
  private sourceJob: Promise<string> | null = null;

  private source(): Promise<string> {
    if (this.config.media_source) return Promise.resolve(this.config.media_source);
    if (!this.sourceJob) {
      type Node = { media_content_id?: string; children?: Array<{ media_content_id: string }> };
      this.sourceJob = this.client.call<Node>({ type: 'media_source/browse_media', media_content_id: 'media-source://media_source' }).then((root) => {
        // Один источник — HA сразу показывает его содержимое (id вида …/media_source/<источник>/.),
        // несколько — список источников.
        const ids = [root.media_content_id || ''].concat((root.children || []).map((c) => c.media_content_id));
        const found = ids.map((id) => (/^media-source:\/\/media_source\/([^/]+)\//.exec(id) || [])[1]).filter(Boolean) as string[];
        return found.indexOf('local') !== -1 ? 'local' : found[0] || 'local';
      }, () => 'local');
    }
    return this.sourceJob;
  }

  // Ссылка на папку фото (или альбом) в медиатеке HA — там их смотрят, удаляют и раскладывают.
  mediaBrowserUrl(album?: string): Promise<string> {
    return this.source().then((source) => {
      const base = 'media-source://media_source/' + source + '/' + (this.config.media_folder || 'photoframe').replace(/^\/+|\/+$/g, '');
      const steps = ['app,media-source://media_source', ',' + base];
      if (album && album !== 'all') steps.push(',' + base + '/' + album);
      return this.client.resolveUrl('/media-browser/browser/' + steps.map(encodeURIComponent).join('/'));
    });
  }

  private folderId(): Promise<string> {
    return this.source().then((source) => 'media-source://media_source/' + source + '/' + this.folder);
  }

  get canEdit() {
    return this.integration ? this.config.can_edit !== false : this.client.isAdmin;
  }

  // Изменения от других устройств (интеграция рассылает конфиг после каждого сохранения).
  // Пока свои сохранения в пути — пропускаем, иначе раскладка мигнёт назад.
  watch(onChange: (config: IntegrationConfig) => void): () => void {
    if (!this.integration) return () => {};
    return this.client.subscribeMessage({ type: 'photoframe/config/subscribe', frame_id: frameId() }, (c: IntegrationConfig) => {
      if (this.busy) return;
      this.config = { ...c, type: CARD_TYPE };
      onChange(this.config);
    });
  }

  // Сохранения идут строго по очереди: каждое читает свежий конфиг дашборда. Иначе два сохранения подряд
  // (настройки и дома по одной кнопке) прочитают один и тот же старый конфиг, и второе затрёт первое.
  private queue: Promise<unknown> = Promise.resolve();

  // Записываем изменения в конфиг дашборда. Нужны права администратора и дашборд в режиме UI (не YAML).
  // Сколько сохранений ещё в пути.
  private saving = 0;
  get busy() { return this.saving > 0; }

  save(patch: Partial<CardConfig>): Promise<void> {
    this.saving++;
    const run = () => {
      if (this.integration) {
        // Раскладки сохраняются для этого устройства (frame_id); дома и настройки — общие.
        const msg: Record<string, unknown> = { type: 'photoframe/config/save', frame_id: frameId() };
        (['homes', 'layouts', 'settings'] as const).forEach((k) => { if (k in patch) msg[k] = patch[k]; });
        this.config = { ...this.config, ...patch };
        return this.client.call<void>(msg);
      }
      const url_path = this.dashboard !== undefined ? this.dashboard : dashboardPath();
      return this.client.call<Lovelace>({ type: 'lovelace/config', url_path }).then((cfg) => {
        const card = findCard(cfg);
        if (!card) throw new Error(t('errors.card_not_found', { type: CARD_TYPE }));
        Object.keys(patch).forEach((k) => { card[k] = (patch as any)[k]; });
        this.config = { ...this.config, ...patch };
        return this.client.call<void>({ type: 'lovelace/config/save', url_path, config: cfg });
      });
    };
    const next = this.queue.then(run, run);
    const done = () => { this.saving--; };
    next.then(done, done);
    this.queue = next.catch(() => {});
    return next;
  }

  // Только id фото в папке (без подписанных ссылок) — дёшево проверить, не поменялся ли набор.
  // С интеграцией фото готовит сервер: список альбома со ссылками на кадры под размер этого экрана.
  private integrationPhotos(): Promise<Photo[]> {
    const size = targetSize();
    return this.client.call<{ photos: Array<{ id: string; url: string }> }>({
      type: 'photoframe/photos',
      album: this.album || 'all',
      width: size.w,
      height: size.h,
    }).then((r) => r.photos.map((p) => ({ id: p.id, url: this.client.resolveUrl(p.url) })));
  }

  listPhotoIds(): Promise<string[]> {
    if (this.integration) return this.integrationPhotos().then((list) => list.map((p) => String(p.id)));
    return this.folderId().then((folder) => this.client.call<{ children?: Array<{ media_content_id: string; media_class: string }> }>({
      type: 'media_source/browse_media',
      media_content_id: folder,
    })).then((dir) => (dir.children || []).filter((c) => c.media_class === 'image').map((c) => c.media_content_id));
  }

  // Папки нет — HA отвечает ошибкой; отдаём понятный текст, чтобы показать его в настройках.
  listPhotos(): Promise<Photo[]> {
    if (this.integration) return this.integrationPhotos();
    return this.folderId().then((folder) => this.client.call<{ children?: Array<{ media_content_id: string; media_class: string; title: string }> }>({
      type: 'media_source/browse_media',
      media_content_id: folder,
    })).then((dir) => {
      const images = (dir.children || []).filter((c) => c.media_class === 'image');
      // Подписанные ссылки живут сутки; список перечитываем раньше, чем они истекут.
      return Promise.all(images.map((c) => this.client.call<{ url: string }>({
        type: 'media_source/resolve_media',
        media_content_id: c.media_content_id,
        expires: 86400,
      }).then((r): Photo => ({ id: c.media_content_id, url: this.client.resolveUrl(r.url) }))));
    }, () => { throw new Error(t('errors.upload_folder', { folder: this.folder })); });
  }

  // album: куда загрузить (подпапка); не задан — альбом этой рамки, а «все» — корень папки фото.
  addPhoto(f: File, album?: string): Promise<void> {
    if (this.integration) {
      // Файл как есть: поворот по EXIF, HEIC → JPEG и уменьшение делает сервер.
      const form = new FormData();
      form.append('album', album != null ? album : this.album && this.album !== 'all' ? this.album : '');
      form.append('file', f, f.name);
      return this.client.fetch('/api/photoframe/upload', { method: 'POST', body: form }).then((r) => {
        if (r.ok) return;
        if (r.status === 401 || r.status === 403) throw new Error(t('errors.upload_admin'));
        if (r.status === 415) throw new Error(t('errors.decode', { name: f.name }));
        throw new Error(t('errors.upload', { status: r.status }));
      });
    }
    return resize(f).then((dataUrl) => this.addPhotoData(dataUrl, f.name.replace(/\.[^.]+$/, '') + '.jpg'));
  }

  // Уже уменьшенный кадр (dataURL JPEG) — так же лежат фото, загруженные в браузер до перехода на HA.
  addPhotoData(dataUrl: string, name: string): Promise<void> {
    return this.folderId().then((folder) => {
      const bin = atob(dataUrl.split(',')[1]);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const form = new FormData();
      form.append('media_content_id', folder);
      form.append('file', new Blob([bytes], { type: 'image/jpeg' }), name);
      return this.client.fetch('/api/media_source/local_source/upload', { method: 'POST', body: form }).then((r) => {
        if (r.ok) return;
        // Понятные причины вместо голого кода ответа.
        if (r.status === 401 || r.status === 403) throw new Error(t('errors.upload_admin'));
        if (r.status === 400 || r.status === 404) throw new Error(t('errors.upload_folder', { folder: this.folder }));
        throw new Error(t('errors.upload', { status: r.status }));
      });
    });
  }

  deletePhoto(id: string): Promise<void> {
    return this.client.call<void>({ type: 'media_source/local_source/remove', media_content_id: id });
  }
}
