// Общее состояние рамки: настройки, раскладка, альбом.
// Источник правды — сервис (SQLite), изменения приходят по SSE от других рамок.
// Если сервиса нет (PWA лежит как статика), всё работает локально: localStorage + IndexedDB.
import { useEffect, useState } from 'preact/hooks';
import { absolute, clientId, request } from './api';
import { defaultLayout, normalize, type Layout } from './layout';
import * as local from './photos';
import type { CardBackend, CardConfig } from './cardBackend';
import { t } from '../i18n';

export interface Settings {
  haUrl: string;
  // Токен HA. Когда есть сервис, он хранится только там: здесь пусто, а hasToken говорит, задан ли он.
  token: string;
  hasToken?: boolean;
  slideIntervalMs: number;
  // Через сколько секунд без касаний прятать управление и возвращаться к фото; 0 — не прятать.
  idleSec: number;
}

// id: число — фото сервиса или IndexedDB, строка — media_content_id из медиатеки HA.
export interface Photo { id: number | string; url: string }

// card — рамка работает карточкой дашборда HA, всё хранится в конфиге карточки.
export type Sync = 'connecting' | 'synced' | 'offline' | 'local' | 'card';

// Дом: своя раскладка и свой HA (пустой haUrl — тот же HA, что у главного). Токен на рамку не приходит;
// token здесь бывает только в момент сохранения из настроек.
export interface Home { id: string; name: string; haUrl: string; hasToken?: boolean; token?: string }

export const MAIN_HOME = 'main';

interface State {
  settings: Settings;
  homes: Home[];
  layouts: Record<string, Layout>;
  // Какой дом сейчас на экране; layout — его раскладка (для удобства компонентов).
  active: string;
  layout: Layout;
  photos: Photo[];
  sync: Sync;
}

interface Stored<T> { value: T; version: number }

const CACHE_KEY = 'photoframe.cache';
// Главный дом — настройка конкретного устройства, в сервис не уходит.
const MAIN_KEY = 'photoframe.mainHome';

function emptyLayout(): Layout {
  return { cols: 12, cards: [] };
}

export function mainHome(): string {
  try { return localStorage.getItem(MAIN_KEY) || MAIN_HOME; } catch (e) { return MAIN_HOME; }
}


function defaults(): State {
  return {
    settings: {
      haUrl: '',
      token: '',
      slideIntervalMs: 10000,
      idleSec: 45,
    },
    homes: [{ id: MAIN_HOME, name: t('home.default_name'), haUrl: '' }],
    layouts: { [MAIN_HOME]: defaultLayout() },
    active: mainHome(),
    layout: defaultLayout(),
    photos: [],
    sync: 'connecting',
  };
}

function readCache(): State {
  const d = defaults();
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const c = JSON.parse(raw);
      const layouts: Record<string, Layout> = {};
      // Старый кэш хранил одну раскладку — это раскладка главного дома.
      const cached = c.layouts || (c.layout ? { [MAIN_HOME]: c.layout } : {});
      Object.keys(cached).forEach((id) => { layouts[id] = normalize(cached[id]); });
      if (!layouts[MAIN_HOME]) layouts[MAIN_HOME] = d.layout;
      return { ...d, settings: { ...d.settings, ...c.settings }, homes: c.homes || d.homes, layouts, photos: c.photos || [] };
    }
    // Миграция со старого ключа, где жили только настройки.
    const old = localStorage.getItem('photoframe.settings');
    if (old) return { ...d, settings: { ...d.settings, ...JSON.parse(old) } };
  } catch (e) { /* ignore */ }
  return d;
}

// Старые версии держали токен на рамке — убираем, когда рамка работает через сервис.
function forgetLocalToken() {
  try {
    localStorage.removeItem('photoframe.settings');
  } catch (e) { /* ignore */ }
}

class Store {
  state: State = readCache();
  private listeners: Array<() => void> = [];
  private events: EventSource | null = null;
  card: CardBackend | null = null;
  private photoTimer = 0;

  subscribe(fn: () => void) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter((l) => l !== fn); };
  }

  private set(patch: Partial<State>) {
    const next = { ...this.state, ...patch };
    if (!next.homes.some((h) => h.id === next.active)) next.active = MAIN_HOME;
    next.layout = next.layouts[next.active] || emptyLayout();
    this.state = next;
    if (patch.settings || patch.layouts || patch.homes || patch.photos) {
      try {
        const { settings, homes, layouts, photos } = this.state;
        const local = this.state.sync === 'local';
        // Токен кэшируется только в автономном режиме — иначе он живёт лишь в сервисе.
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          settings: local ? settings : { ...settings, token: '' },
          homes,
          layouts,
          photos: local ? [] : photos,
        }));
      } catch (e) { /* ignore */ }
    }
    this.listeners.forEach((l) => l());
  }

  setActive(id: string) {
    if (id !== this.state.active) this.set({ active: id });
  }

  setMainHome(id: string) {
    try { localStorage.setItem(MAIN_KEY, id); } catch (e) { /* ignore */ }
    this.listeners.forEach((l) => l());
  }

  // Фото, вшитые в сборку PWA (src/photos). Задаёт точка входа PWA; в карточке HA их нет.
  bundled: string[] = [];

  get photoUrls(): string[] {
    return this.bundled.concat(this.state.photos.map((p) => absolute(p.url)));
  }

  start() {
    if (this.card) return;
    this.pull().then(() => this.listen(), () => this.goLocal());
  }

  // Режим карточки дашборда: источник данных — конфиг карточки, его HA присылает заново при каждом сохранении.
  attachCard(backend: CardBackend) {
    const firstTime = !this.card;
    this.card = backend;
    this.applyCardConfig(backend.config);
    if (firstTime) {
      this.reloadCardPhotos();
      // Подписанные ссылки на фото живут сутки — обновляем раз в 12 часов.
      this.photoTimer = window.setInterval(() => this.reloadCardPhotos(), 12 * 3600e3);
    }
  }

  applyCardConfig(cfg: CardConfig) {
    // В карточке все дома живут в этом же HA: адреса и токены из конфига (если они там остались) не берём.
    const homes = cfg.homes && cfg.homes.length
      ? cfg.homes.map((h) => ({ id: h.id, name: h.name, haUrl: '' }))
      : [{ id: MAIN_HOME, name: t('home.default_name'), haUrl: '' }];
    const layouts: Record<string, Layout> = {};
    homes.forEach((h) => {
      const l = cfg.layouts && cfg.layouts[h.id];
      layouts[h.id] = l ? normalize(l) : h.id === MAIN_HOME ? defaultLayout() : emptyLayout();
    });
    // Из настроек берём только слайдшоу — подключение к HA карточке не нужно.
    const cs = cfg.settings || {};
    const settings = { ...this.state.settings };
    if (typeof cs.slideIntervalMs === 'number') settings.slideIntervalMs = cs.slideIntervalMs;
    if (typeof cs.idleSec === 'number') settings.idleSec = cs.idleSec;
    this.set({ sync: 'card', homes, layouts, settings });
  }

  private reloadCardPhotos() {
    if (!this.card) return Promise.resolve();
    return this.card.listPhotos().then((photos) => this.set({ photos }), () => this.set({ photos: [] }));
  }

  private saveCard(patch: Partial<CardConfig>) {
    if (!this.card) return;
    this.card.save(patch).catch((e: Error) => {
      // Не админ или дашборд в YAML — показываем, почему изменения не сохранились.
      this.cardError = e.message || String(e);
      this.listeners.forEach((l) => l());
    });
  }

  cardError = '';

  private pull() {
    return request<{
      settings: Stored<Partial<Settings>> | null;
      homes?: Home[];
      layouts?: Record<string, Stored<Layout> | null>;
      layout: Stored<Layout> | null;
      photos: Photo[];
    }>('GET', '/api/state')
      .then((s) => {
        const homes = s.homes || [{ id: MAIN_HOME, name: t('home.default_name'), haUrl: '' }];
        const stored = s.layouts || { [MAIN_HOME]: s.layout };
        const layouts: Record<string, Layout> = {};
        homes.forEach((h) => {
          const l = stored[h.id];
          layouts[h.id] = l ? normalize(l.value) : h.id === MAIN_HOME ? this.state.layouts[MAIN_HOME] || defaultLayout() : emptyLayout();
        });
        const patch: Partial<State> = { photos: s.photos, homes, layouts, sync: 'synced' };
        if (s.settings) patch.settings = { ...this.state.settings, ...s.settings.value, token: '' };
        this.set(patch);
        // Сервис пустой (первый запуск) или раскладка главного дома старого формата — сохраняем актуальную.
        const main = stored[MAIN_HOME];
        if (!main || main.value.cols !== layouts[MAIN_HOME].cols) request('PUT', '/api/layout', layouts[MAIN_HOME]).catch(() => {});
        // Сервис пустой, а на рамке остался токен от автономной работы — переносим его в сервис.
        if (!s.settings || (!s.settings.value.hasToken && this.state.settings.token)) {
          request('PUT', '/api/settings', this.state.settings).catch(() => {});
        }
        forgetLocalToken();
        if (this.state.settings.token) this.set({ settings: { ...this.state.settings, token: '', hasToken: true } });
      });
  }

  private listen() {
    if (typeof EventSource === 'undefined' || this.events) return;
    const es = new EventSource(absolute('/api/events'));
    this.events = es;
    es.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.type === 'hello') {
        // Переподключились — могли пропустить изменения, забираем всё заново.
        if (this.state.sync !== 'synced') this.pull().catch(() => {});
        this.set({ sync: 'synced' });
      } else if (msg.source === clientId) {
        // своё же изменение
      } else if (msg.type === 'settings') {
        this.set({ settings: { ...this.state.settings, ...msg.value, token: '' } });
      } else if (msg.type === 'layout') {
        this.set({ layouts: { ...this.state.layouts, [msg.home || MAIN_HOME]: normalize(msg.value) } });
      } else if (msg.type === 'homes') {
        this.applyHomes(msg.homes);
      } else if (msg.type === 'photos') {
        this.set({ photos: msg.photos });
      }
    };
    es.onerror = () => { if (this.state.sync === 'synced') this.set({ sync: 'offline' }); };
  }

  private goLocal() {
    this.set({ sync: 'local' });
    this.reloadLocalPhotos();
  }

  private reloadLocalPhotos() {
    return local.listPhotos()
      .then((list) => this.set({ photos: list.map((p) => ({ id: p.id, url: p.data })) }))
      .catch(() => this.set({ photos: [] }));
  }

  private push(path: string, value: unknown) {
    if (this.state.sync === 'local') return;
    request('PUT', path, value).catch(() => this.set({ sync: 'offline' }));
  }

  private applyHomes(homes: Home[]) {
    const layouts: Record<string, Layout> = {};
    homes.forEach((h) => { layouts[h.id] = this.state.layouts[h.id] || emptyLayout(); });
    this.set({ homes, layouts });
  }

  // Список домов с токенами (если их ввели) уходит в сервис; на рамке остаются без токенов.
  saveHomes(homes: Home[]) {
    if (this.card) {
      // В конфиг дашборда — только имена: никаких адресов и токенов.
      const plain = homes.map((h) => ({ id: h.id, name: h.name, haUrl: '' }));
      this.applyHomes(plain);
      this.saveCard({ homes: plain, layouts: this.state.layouts });
      return;
    }
    this.applyHomes(homes.map((h) => ({ id: h.id, name: h.name, haUrl: h.haUrl, hasToken: h.hasToken || !!h.token })));
    if (this.state.sync === 'local') return;
    request<Home[]>('PUT', '/api/homes', homes).then((saved) => this.applyHomes(saved), () => this.set({ sync: 'offline' }));
  }

  saveSettings(settings: Settings) {
    if (this.card) {
      this.set({ settings });
      this.saveCard({ settings: { slideIntervalMs: settings.slideIntervalMs, idleSec: settings.idleSec } });
      return;
    }
    if (this.state.sync === 'local') {
      this.set({ settings });
      return;
    }
    // Новый токен уходит в сервис и на рамке не остаётся; пустой — «не менять».
    this.set({ settings: { ...settings, token: '', hasToken: settings.hasToken || !!settings.token } });
    this.push('/api/settings', settings);
  }

  // Раскладка активного дома.
  saveLayout(layout: Layout) {
    const home = this.state.active;
    this.set({ layouts: { ...this.state.layouts, [home]: layout } });
    if (this.card) { this.saveCard({ layouts: this.state.layouts }); return; }
    this.push('/api/layout' + (home === MAIN_HOME ? '' : '?home=' + encodeURIComponent(home)), layout);
  }

  addPhotos(files: File[]): Promise<void> {
    if (this.card) return this.card.addPhotos(files).then(() => this.reloadCardPhotos());
    if (this.state.sync === 'local') return local.addPhotos(files).then(() => this.reloadLocalPhotos());
    // По одному: рамка ужимает кадр и отправляет в общий альбом.
    return files.reduce<Promise<unknown>>(
      (p, f) => p.then(() => local.resize(f)).then((data) => request('POST', '/api/photos', { data })),
      Promise.resolve(),
    ).then(() => request<{ photos: Photo[] }>('GET', '/api/state')).then((s) => this.set({ photos: s.photos }));
  }

  deletePhoto(id: number | string): Promise<void> {
    if (this.card) return this.card.deletePhoto(String(id)).then(() => this.reloadCardPhotos());
    if (this.state.sync === 'local') return local.deletePhoto(Number(id)).then(() => this.reloadLocalPhotos());
    this.set({ photos: this.state.photos.filter((p) => p.id !== id) });
    return request('DELETE', '/api/photos/' + id).then(() => undefined);
  }

  clearPhotos(): Promise<void> {
    if (this.card) {
      return this.state.photos.reduce<Promise<unknown>>((p, ph) => p.then(() => this.card!.deletePhoto(String(ph.id))), Promise.resolve())
        .then(() => this.reloadCardPhotos());
    }
    if (this.state.sync === 'local') return local.clearPhotos().then(() => this.reloadLocalPhotos());
    return this.state.photos.reduce<Promise<unknown>>((p, ph) => p.then(() => this.deletePhoto(ph.id)), Promise.resolve())
      .then(() => undefined);
  }
}

export const store = new Store();

export function useStore() {
  const [, tick] = useState(0);
  useEffect(() => store.subscribe(() => tick((n) => n + 1)), []);
  return store;
}
