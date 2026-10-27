// Общее состояние рамки: настройки, дома и их экраны, альбом.
// Источник правды — Home Assistant: конфиг карточки на дашборде «Фоторамка» (её же показывает HA)
// и медиатека /media/photoframe. Рамка-PWA входит в HA через его страницу входа (lib/haAuth).
// Пока входа нет или в HA нет дашборда — всё живёт в этом браузере: localStorage + IndexedDB.
import { useEffect, useState } from 'preact/hooks';
import { defaultLayout, newScreenId, normalizeScreens, type HomeScreens, type Layout, type Screen } from './layout';
import * as local from './photos';
import { CardBackend, loadCardConfig, type CardConfig } from './cardBackend';
import { HAClient } from './ha';
import { accessToken, haSession } from './haAuth';
import { createDashboard, DASHBOARD_PATH } from './setup';
import { t } from '../i18n';

export interface Settings {
  // Адрес HA для входа (пусто — домен, с которого открыта рамка).
  haUrl: string;
  slideIntervalMs: number;
  // Через сколько секунд без касаний прятать управление и возвращаться к фото; 0 — не прятать.
  idleSec: number;
}

// id: число — фото из IndexedDB, строка — media_content_id из медиатеки HA.
export interface Photo { id: number | string; url: string }

// card — всё хранится в конфиге карточки HA (в самой карточке или в PWA, вошедшей в HA);
// local — в этом браузере (входа в HA нет или в HA нет дашборда); connecting — ещё не решили.
export type Sync = 'connecting' | 'local' | 'card';

// Дом — свой набор экранов (все дома живут в одном HA).
export interface Home { id: string; name: string }

export const MAIN_HOME = 'main';

interface State {
  settings: Settings;
  homes: Home[];
  // Экраны каждого дома: свои сетки карточек, листаются свайпом.
  screens: Record<string, Screen[]>;
  // Какой дом и какой его экран сейчас показаны; layout — раскладка этого экрана (для удобства компонентов).
  active: string;
  screen: string;
  layout: Screen;
  photos: Photo[];
  sync: Sync;
}


const CACHE_KEY = 'photoframe.cache';
// Главный дом и его стартовый экран — настройка конкретного устройства, в сервис не уходит.
const MAIN_KEY = 'photoframe.mainHome';
const START_KEY = 'photoframe.startScreen';

export function mainHome(): string {
  try { return localStorage.getItem(MAIN_KEY) || MAIN_HOME; } catch (e) { return MAIN_HOME; }
}

// Пусто — первый экран главного дома.
export function startScreen(): string {
  try { return localStorage.getItem(START_KEY) || ''; } catch (e) { return ''; }
}

const mainScreens = () => normalizeScreens(null, defaultLayout);

// Вошла ли PWA в HA (вход через страницу HA или сессия HA, внутри которого открыта рамка — lib/haAuth).
export function haConnected(): boolean {
  return !!haSession();
}

// Хранилище PWA в HA: connecting — подключаемся и читаем дашборд; ready — всё в HA;
// missing — в HA нет дашборда «Фоторамка» с карточкой; error — не удалось прочитать.
export type HaLink = 'none' | 'connecting' | 'ready' | 'missing' | 'error';

// Что лежало в браузере до перехода на хранилище HA — можно перенести одной кнопкой.
const BACKUP_KEY = 'photoframe.localBackup';
const MIGRATED_KEY = 'photoframe.migrated';
interface LocalBackup { homes: Home[]; screens: Record<string, Screen[]> }

// Как экраны дома уходят в хранилище.
function packHome(list: Screen[]): HomeScreens {
  return { screens: list.map((x) => ({ id: x.id, name: x.name, cols: x.cols, cards: x.cards })) };
}


function defaults(): State {
  return {
    settings: {
      haUrl: '',
      slideIntervalMs: 10000,
      idleSec: 45,
    },
    homes: [{ id: MAIN_HOME, name: t('home.default_name') }],
    screens: { [MAIN_HOME]: mainScreens() },
    active: mainHome(),
    screen: startScreen(),
    layout: mainScreens()[0],
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
      const screens: Record<string, Screen[]> = {};
      // Старый кэш: раскладка на дом (layouts) или одна раскладка (layout) — каждая станет одним экраном.
      if (c.screens) Object.keys(c.screens).forEach((id) => { screens[id] = normalizeScreens({ screens: c.screens[id] }); });
      else {
        const cached = c.layouts || (c.layout ? { [MAIN_HOME]: c.layout } : {});
        Object.keys(cached).forEach((id) => { screens[id] = normalizeScreens(cached[id]); });
      }
      if (!screens[MAIN_HOME]) screens[MAIN_HOME] = d.screens[MAIN_HOME];
      const cs = c.settings || {};
      const settings = { ...d.settings };
      if (typeof cs.haUrl === 'string') settings.haUrl = cs.haUrl;
      if (typeof cs.slideIntervalMs === 'number') settings.slideIntervalMs = cs.slideIntervalMs;
      if (typeof cs.idleSec === 'number') settings.idleSec = cs.idleSec;
      const homes = c.homes ? c.homes.map((h: Home) => ({ id: h.id, name: h.name })) : d.homes;
      return { ...d, settings, homes, screens, photos: c.photos || [] };
    }
  } catch (e) { /* ignore */ }
  return d;
}


class Store {
  state: State = readCache();
  private listeners: Array<() => void> = [];
  card: CardBackend | null = null;
  // Состояние экрана, которое должно пережить пересоздание карточки: HA создаёт карточку заново
  // после каждого сохранения дашборда (перенос карточки в редакторе) — без этого рамка «схлопывалась» на фото.
  ui = { controls: false, editing: false };
  private photoTimer = 0;

  subscribe(fn: () => void) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter((l) => l !== fn); };
  }

  private set(patch: Partial<State>) {
    const next = { ...this.state, ...patch };
    if (!next.homes.some((h) => h.id === next.active)) next.active = MAIN_HOME;
    const list = next.screens[next.active] || normalizeScreens(null);
    const screen = list.filter((x) => x.id === next.screen)[0] || list[0];
    next.screen = screen.id;
    next.layout = screen;
    this.state = next;
    if (patch.settings || patch.screens || patch.homes || patch.photos) {
      try {
        const { settings, homes, screens, photos } = this.state;
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          settings,
          homes,
          screens,
          photos: this.state.sync === 'local' ? [] : photos,
        }));
      } catch (e) { /* ignore */ }
    }
    this.listeners.forEach((l) => l());
  }

  // Показать дом (и его экран; без экрана — первый).
  setActive(id: string, screen = '') {
    if (id !== this.state.active || (screen && screen !== this.state.screen)) this.set({ active: id, screen });
  }

  // Все экраны всех домов подряд: свайп листает их по кругу, переходя от дома к дому.
  step(dir: number) {
    const all: Array<{ home: string; screen: string }> = [];
    this.state.homes.forEach((h) => (this.state.screens[h.id] || []).forEach((x) => all.push({ home: h.id, screen: x.id })));
    if (all.length < 2) return;
    let i = 0;
    all.forEach((x, k) => { if (x.home === this.state.active && x.screen === this.state.screen) i = k; });
    const next = all[(i + dir + all.length) % all.length];
    this.set({ active: next.home, screen: next.screen });
  }

  // Стартовый экран этого устройства — сюда рамка возвращается, когда её оставили в покое.
  setStart(home: string, screen: string) {
    try {
      localStorage.setItem(MAIN_KEY, home);
      localStorage.setItem(START_KEY, screen);
    } catch (e) { /* ignore */ }
    this.listeners.forEach((l) => l());
  }

  goStart() {
    this.setActive(mainHome(), startScreen());
  }

  // Карточки всех экранов дома — информеры на фото собираются со всех.
  homeCards(home = this.state.active) {
    return (this.state.screens[home] || []).reduce<Layout['cards']>((all, x) => all.concat(x.cards), []);
  }

  // Фото, вшитые в сборку PWA (src/photos). Задаёт точка входа PWA; в карточке HA их нет.
  bundled: string[] = [];

  get photoUrls(): string[] {
    return this.bundled.concat(this.state.photos.map((p) => p.url));
  }

  // PWA: пока работаем из браузера и, если вход в HA есть, подключаемся — хранилище переедет в HA.
  start() {
    if (this.card || this.state.sync !== 'connecting') return;
    this.set({ sync: 'local' });
    this.reloadLocalPhotos();
    this.connectHa();
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
      ? cfg.homes.map((h) => ({ id: h.id, name: h.name }))
      : [{ id: MAIN_HOME, name: t('home.default_name') }];
    const screens: Record<string, Screen[]> = {};
    homes.forEach((h) => {
      const l = cfg.layouts && cfg.layouts[h.id];
      screens[h.id] = l ? normalizeScreens(l) : h.id === MAIN_HOME ? mainScreens() : normalizeScreens(null);
    });
    // Из настроек берём только слайдшоу — подключение к HA карточке не нужно.
    const cs = cfg.settings || {};
    const settings = { ...this.state.settings };
    if (typeof cs.slideIntervalMs === 'number') settings.slideIntervalMs = cs.slideIntervalMs;
    if (typeof cs.idleSec === 'number') settings.idleSec = cs.idleSec;
    this.set({ sync: 'card', homes, screens, settings });
  }

  // Последняя ошибка с фото (нет папки, нет прав) — показывается во вкладке «Фото».
  photoError = '';

  reloadCardPhotos() {
    if (!this.card) return Promise.resolve();
    return this.card.listPhotos().then(
      (photos) => { this.photoError = ''; this.set({ photos }); },
      (e: Error) => { this.photoError = e.message; this.set({ photos: [] }); },
    );
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


  // ── PWA без сервиса: хранилище в HA ─────────────────────
  // Подключение к HA (через него же — хранилище: карточка на дашборде photo-frame, общая с карточкой HA).
  haClient: HAClient | null = null;
  haLink: HaLink = 'none';
  // Данные из браузера, которые можно перенести в HA: свои экраны и/или N фото.
  migration: { screens: boolean; photos: number } | null = null;

  private notify() { this.listeners.forEach((l) => l()); }

  private connectHa() {
    const session = haSession();
    if (!session || this.haClient) return;
    const client = new HAClient(session.hassUrl, accessToken);
    this.haClient = client;
    this.haLink = 'connecting';
    let was = '';
    client.subscribe(() => {
      if (client.status === was) return;
      was = client.status;
      if (client.status === 'connected') {
        // При каждом (пере)подключении: свежий конфиг и подписка на его изменения
        // (HA шлёт lovelace_updated после каждого сохранения дашборда — из карточки или с другой рамки).
        this.loadHaCard();
        client.subscribeMessage({ type: 'subscribe_events', event_type: 'lovelace_updated' }, (ev) => {
          if (ev && ev.data && ev.data.url_path === DASHBOARD_PATH) this.loadHaCard();
        });
      } else if (client.status === 'auth_invalid') {
        this.haLink = 'error';
        this.notify();
      }
    });
    client.connect();
    this.notify();
  }

  private loadHaCard() {
    const client = this.haClient;
    if (!client) return;
    // Своё же сохранение ещё в пути — дождёмся события от последнего, иначе раскладка мигнёт назад.
    if (this.card && this.card.busy) return;
    loadCardConfig(client, DASHBOARD_PATH).then((cfg) => {
      if (!cfg) { this.haLink = 'missing'; this.notify(); return; }
      this.haLink = 'ready';
      if (this.card) {
        this.card.config = cfg;
        this.applyCardConfig(cfg);
        return;
      }
      this.offerMigration();
      this.attachCard(new CardBackend(client, cfg, DASHBOARD_PATH, true));
    }, () => { this.haLink = 'error'; this.notify(); });
  }

  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard(): Promise<void> {
    const client = this.haClient;
    if (!client) return Promise.reject(new Error('not connected'));
    return createDashboard((msg) => client.call(msg)).then(() => this.loadHaCard());
  }

  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  private offerMigration() {
    let done = '';
    try { done = localStorage.getItem(MIGRATED_KEY) || ''; } catch (e) { /* ignore */ }
    if (done === 'done') return;
    if (!done) {
      const { homes, screens } = this.state;
      const custom = homes.length > 1 || JSON.stringify(packHome(screens[MAIN_HOME] || [])) !== JSON.stringify(packHome(mainScreens()));
      try {
        if (custom) localStorage.setItem(BACKUP_KEY, JSON.stringify({ homes, screens }));
        localStorage.setItem(MIGRATED_KEY, 'pending');
      } catch (e) { /* ignore */ }
    }
    const backup = this.backup();
    local.listPhotos().then((list) => list.length, () => 0).then((photos) => {
      if (backup || photos) { this.migration = { screens: !!backup, photos }; this.notify(); } else this.finishMigration();
    });
  }

  private backup(): LocalBackup | null {
    try { const raw = localStorage.getItem(BACKUP_KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
  }

  // Заменить экраны в HA теми, что были в браузере.
  migrateScreens() {
    const b = this.backup();
    if (!b || !this.card) return;
    const homes = b.homes.map((h) => ({ id: h.id, name: h.name }));
    const screens: Record<string, Screen[]> = {};
    homes.forEach((h) => { screens[h.id] = normalizeScreens({ screens: b.screens[h.id] || [] }); });
    this.set({ homes, screens });
    this.saveCard({ homes, layouts: this.packAll() });
    try { localStorage.removeItem(BACKUP_KEY); } catch (e) { /* ignore */ }
    this.updateMigration({ screens: false });
  }

  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(onProgress?: (done: number, total: number) => void): Promise<void> {
    const card = this.card;
    if (!card) return Promise.resolve();
    return local.listPhotos().then((list) => list.reduce<Promise<unknown>>(
      (p, ph, i) => p.then(() => card.addPhotoData(ph.data, 'frame-' + ph.id + '.jpg')).then(() => { if (onProgress) onProgress(i + 1, list.length); }),
      Promise.resolve(),
    )).then(() => local.clearPhotos()).then(() => {
      this.updateMigration({ photos: 0 });
      return this.reloadCardPhotos();
    });
  }

  dismissMigration() {
    try { localStorage.removeItem(BACKUP_KEY); } catch (e) { /* ignore */ }
    this.finishMigration();
  }

  private updateMigration(patch: Partial<{ screens: boolean; photos: number }>) {
    const next = { ...(this.migration || { screens: false, photos: 0 }), ...patch };
    if (!next.screens && !next.photos) this.finishMigration();
    else { this.migration = next; this.notify(); }
  }

  private finishMigration() {
    try { localStorage.setItem(MIGRATED_KEY, 'done'); } catch (e) { /* ignore */ }
    this.migration = null;
    this.notify();
  }

  private reloadLocalPhotos() {
    return local.listPhotos()
      .then((list) => this.set({ photos: list.map((p) => ({ id: p.id, url: p.data })) }))
      .catch(() => this.set({ photos: [] }));
  }

  private applyHomes(homes: Home[]) {
    const screens: Record<string, Screen[]> = {};
    homes.forEach((h) => { screens[h.id] = this.state.screens[h.id] || normalizeScreens(null); });
    this.set({ homes, screens });
  }

  saveHomes(homes: Home[]) {
    const plain = homes.map((h) => ({ id: h.id, name: h.name }));
    this.applyHomes(plain);
    if (this.card) this.saveCard({ homes: plain, layouts: this.packAll() });
  }

  // Адрес HA — только этого устройства; слайдшоу — общее (в карточке HA).
  saveSettings(settings: Settings) {
    this.set({ settings });
    if (this.card) this.saveCard({ settings: { slideIntervalMs: settings.slideIntervalMs, idleSec: settings.idleSec } });
  }

  // Раскладка показанного экрана.
  saveLayout(layout: Layout) {
    const id = this.state.screen;
    this.saveScreens(this.state.active, this.screensOf().map((x) => (x.id === id ? { ...x, cols: layout.cols, cards: layout.cards } : x)));
  }

  private screensOf(home = this.state.active) {
    return this.state.screens[home] || normalizeScreens(null);
  }

  private packAll(): Record<string, HomeScreens> {
    const out: Record<string, HomeScreens> = {};
    Object.keys(this.state.screens).forEach((id) => { out[id] = packHome(this.state.screens[id]); });
    return out;
  }

  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  private saveScreens(home: string, list: Screen[], show?: string) {
    const patch: Partial<State> = { screens: { ...this.state.screens, [home]: list } };
    if (show) patch.screen = show;
    this.set(patch);
    if (this.card) this.saveCard({ layouts: this.packAll() });
  }

  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(name: string) {
    const screen: Screen = { id: newScreenId(), name, cols: 12, cards: [] };
    this.saveScreens(this.state.active, this.screensOf().concat(screen), screen.id);
  }

  renameScreen(id: string, name: string) {
    this.saveScreens(this.state.active, this.screensOf().map((x) => (x.id === id ? { ...x, name } : x)));
  }

  // Последний экран дома не удаляется — у дома всегда есть хотя бы один.
  removeScreen(id: string) {
    const list = this.screensOf();
    if (list.length < 2) return;
    const i = list.map((x) => x.id).indexOf(id);
    const rest = list.filter((x) => x.id !== id);
    this.saveScreens(this.state.active, rest, rest[Math.max(0, i - 1)].id);
  }

  // Сдвинуть экран в списке (dir −1 — левее, +1 — правее).
  moveScreen(id: string, dir: number) {
    const list = this.screensOf().slice();
    const i = list.map((x) => x.id).indexOf(id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= list.length) return;
    const tmp = list[i]; list[i] = list[j]; list[j] = tmp;
    this.saveScreens(this.state.active, list);
  }

  // Пачка фото — строго по одному, чтобы не держать в памяти все исходники разом.
  // Ошибка одного файла не останавливает остальные; в конце сообщаем, сколько не загрузилось.
  addPhotos(files: File[], onProgress?: (done: number, total: number) => void): Promise<void> {
    const card = this.card;
    const one: (f: File) => Promise<unknown> = card ? (f) => card.addPhoto(f) : (f) => local.addPhoto(f);
    const reload = (): Promise<unknown> => (card ? this.reloadCardPhotos() : this.reloadLocalPhotos());
    const errors: string[] = [];
    let done = 0;
    return files.reduce<Promise<unknown>>(
      (p, f) => p
        .then(() => one(f))
        .catch((e: Error) => { errors.push((e && e.message) || String(e)); })
        .then(() => { done++; if (onProgress) onProgress(done, files.length); }),
      Promise.resolve(),
    ).then(() => (done > errors.length ? reload() : undefined)).then(() => {
      if (!errors.length) return;
      if (errors.length === files.length) throw new Error(errors[0]);
      throw new Error(t('errors.upload_some', { failed: errors.length, total: files.length }) + ' — ' + errors[0]);
    });
  }

  deletePhoto(id: number | string): Promise<void> {
    if (this.card) return this.card.deletePhoto(String(id)).then(() => this.reloadCardPhotos());
    return local.deletePhoto(Number(id)).then(() => this.reloadLocalPhotos());
  }

  clearPhotos(): Promise<void> {
    if (this.card) {
      return this.state.photos.reduce<Promise<unknown>>((p, ph) => p.then(() => this.card!.deletePhoto(String(ph.id))), Promise.resolve())
        .then(() => this.reloadCardPhotos());
    }
    return local.clearPhotos().then(() => this.reloadLocalPhotos());
  }
}

export const store = new Store();

export function useStore() {
  const [, tick] = useState(0);
  useEffect(() => store.subscribe(() => tick((n) => n + 1)), []);
  return store;
}
