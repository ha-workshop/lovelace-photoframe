// Хранилище рамки в режиме карточки дашборда HA.
// Раскладки, дома и настройки лежат в конфиге самой карточки: HA хранит их и раздаёт всем устройствам.
// Фото — из медиатеки HA (по умолчанию /media/photoframe).
import type { HassClient } from './hassClient';
import type { Layout } from './layout';
import type { Home, Photo, Settings } from './store';
import { resize } from './photos';
import { t } from '../i18n';

export const CARD_TYPE = 'custom:photoframe-card';

export interface CardConfig {
  type: string;
  // Дома в карточке — только раскладки одного HA: id и имя, без адресов и токенов.
  media_folder?: string;
  settings?: Partial<Settings>;
  homes?: Home[];
  layouts?: Record<string, Layout>;
}

interface Lovelace { views?: Array<Record<string, any>> }

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

export class CardBackend {
  constructor(readonly client: HassClient, public config: CardConfig) {}

  get folder() {
    return (this.config.media_folder || 'photoframe').replace(/^\/+|\/+$/g, '');
  }

  private get folderId() {
    return 'media-source://media_source/local/' + this.folder;
  }

  get canEdit() {
    return this.client.isAdmin;
  }

  // Сохранения идут строго по очереди: каждое читает свежий конфиг дашборда. Иначе два сохранения подряд
  // (настройки и дома по одной кнопке) прочитают один и тот же старый конфиг, и второе затрёт первое.
  private queue: Promise<unknown> = Promise.resolve();

  // Записываем изменения в конфиг дашборда. Нужны права администратора и дашборд в режиме UI (не YAML).
  save(patch: Partial<CardConfig>): Promise<void> {
    const run = () => {
      const url_path = dashboardPath();
      return this.client.call<Lovelace>({ type: 'lovelace/config', url_path }).then((cfg) => {
        const card = findCard(cfg);
        if (!card) throw new Error(t('errors.card_not_found', { type: CARD_TYPE }));
        Object.keys(patch).forEach((k) => { card[k] = (patch as any)[k]; });
        this.config = { ...this.config, ...patch };
        return this.client.call<void>({ type: 'lovelace/config/save', url_path, config: cfg });
      });
    };
    const next = this.queue.then(run, run);
    this.queue = next.catch(() => {});
    return next;
  }

  listPhotos(): Promise<Photo[]> {
    return this.client.call<{ children?: Array<{ media_content_id: string; media_class: string; title: string }> }>({
      type: 'media_source/browse_media',
      media_content_id: this.folderId,
    }).then((dir) => {
      const images = (dir.children || []).filter((c) => c.media_class === 'image');
      // Подписанные ссылки живут сутки; список перечитываем раньше, чем они истекут.
      return Promise.all(images.map((c) => this.client.call<{ url: string }>({
        type: 'media_source/resolve_media',
        media_content_id: c.media_content_id,
        expires: 86400,
      }).then((r): Photo => ({ id: c.media_content_id, url: r.url }))));
    });
  }

  addPhotos(files: File[]): Promise<void> {
    return files.reduce<Promise<unknown>>((p, f) => p.then(() => resize(f)).then((dataUrl) => {
      const bin = atob(dataUrl.split(',')[1]);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const form = new FormData();
      form.append('media_content_id', this.folderId);
      form.append('file', new Blob([bytes], { type: 'image/jpeg' }), f.name.replace(/\.[^.]+$/, '') + '.jpg');
      return fetch('/api/media_source/local_source/upload', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + this.client.accessToken },
        body: form,
      }).then((r) => { if (!r.ok) throw new Error(t('errors.upload', { status: r.status })); });
    }), Promise.resolve()).then(() => undefined);
  }

  deletePhoto(id: string): Promise<void> {
    return this.client.call<void>({ type: 'media_source/local_source/remove', media_content_id: id });
  }
}
