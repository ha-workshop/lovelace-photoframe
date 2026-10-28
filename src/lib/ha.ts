import { updateIntervalMs } from './quality';

// Минимальный клиент WebSocket API Home Assistant.
// Без зависимостей и без async/await в горячем пути — чтобы ES5-сборка была лёгкой.

export interface HassState {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed?: string;
}

// Запись реестра сущностей (config/entity_registry/list_for_display — не требует прав администратора):
// ei — entity_id, di — устройство, en — имя сущности внутри устройства, ec — категория (диагностика/настройки).
export interface RegistryEntry { ei: string; di?: string; en?: string; ec?: number }

export interface Device { id: string; name: string; entities: string[] }

export type Status = 'idle' | 'connecting' | 'auth_invalid' | 'connected' | 'disconnected';

type Listener = () => void;

export class HAClient {
  states: Record<string, HassState> = {};
  // Пришёл ли полный список состояний — до этого «нет в states» не значит «удалено из HA».
  loaded = false;
  // Реестр: какое устройство у сущности. Грузится после состояний.
  registry: Record<string, RegistryEntry> = {};
  devices: Record<string, Device> = {};
  status: Status = 'idle';
  // Администратор ли вошедший пользователь HA (сохранять раскладку в дашборд может только он).
  protected admin = false;
  get isAdmin() { return this.admin; }
  private ws: WebSocket | null = null;
  private msgId = 1;
  private listeners: Listener[] = [];
  private retryTimer: number | undefined;
  private stopped = false;
  // Ответы на запросы call() по id. Список состояний — тоже через call, чтобы не путать его с другими result.
  private pending: Record<number, { resolve: (v: any) => void; reject: (e: Error) => void }> = {};
  // Подписки с собственным потоком событий (прогноз погоды): события приходят с id подписки.
  private subs: Record<number, (event: any) => void> = {};

  // baseUrl — адрес HA; token — отдаёт свежий access-токен входа через HA (lib/haAuth).
  constructor(private baseUrl: string, private token: () => Promise<string>) {}

  // Путь на сервере HA (/media/…, /api/…) → полный адрес; рамка может быть открыта не с домена HA.
  resolveUrl(path: string) {
    return !path || /^(data:|blob:|https?:)/.test(path) ? path : this.baseUrl.replace(/\/+$/, '') + path;
  }

  subscribe(fn: Listener) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter((l) => l !== fn); };
  }

  // Датчики шлют события потоком (у большого HA — десятки в секунду). Перерисовываемся пачкой,
  // не чаще updateIntervalMs(): на слабых устройствах это главная экономия. Статус связи — сразу.
  private emitTimer = 0;
  // Изменения состояний между перерисовками: states копируется один раз на пачку, а не на каждое событие —
  // у большого HA это тысячи сущностей, и копия на каждое событие нагружала слабую рамку и сборщик мусора.
  private changed: Record<string, HassState> | null = null;

  protected emitNow() {
    clearTimeout(this.emitTimer);
    this.emitTimer = 0;
    if (this.changed) {
      const next: Record<string, HassState> = {};
      for (const id in this.states) next[id] = this.states[id];
      for (const id in this.changed) next[id] = this.changed[id];
      this.states = next;
      this.changed = null;
    }
    this.listeners.forEach((l) => l());
  }

  protected emit() {
    if (!this.emitTimer) this.emitTimer = window.setTimeout(() => this.emitNow(), updateIntervalMs());
  }

  protected setStatus(s: Status) { this.status = s; this.emitNow(); }

  connect() {
    if (!this.baseUrl) { this.setStatus('idle'); return; }
    this.stopped = false;
    this.setStatus('connecting');
    // Перед каждым подключением — свежий access-токен (живёт 30 минут).
    this.token().then((value) => {
      if (this.stopped) return;
      if (value) this.open(value);
      else { this.stopped = true; this.setStatus('auth_invalid'); }
    }, () => this.scheduleReconnect());
  }

  private open(token: string) {
    const wsUrl = this.baseUrl.replace(/\/+$/, '').replace(/^http/, 'ws') + '/api/websocket';
    let ws: WebSocket;
    try { ws = new WebSocket(wsUrl); } catch (e) { this.scheduleReconnect(); return; }
    this.ws = ws;

    ws.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      if (data.type === 'auth_required') {
        ws.send(JSON.stringify({ type: 'auth', access_token: token }));
      } else if (data.type === 'auth_invalid') {
        // Вход отозван в HA — нужно войти заново.
        this.stopped = true;
        this.setStatus('auth_invalid');
        ws.close();
      } else if (data.type === 'auth_ok') {
        this.setStatus('connected');
        this.call<{ is_admin?: boolean }>({ type: 'auth/current_user' }).then((u) => { this.admin = !!u.is_admin; this.emit(); }, () => {});
        this.send({ type: 'subscribe_events', event_type: 'state_changed' });
        this.call<HassState[]>({ type: 'get_states' }).then((list) => {
          const next: Record<string, HassState> = {};
          list.forEach((s) => { next[s.entity_id] = s; });
          this.states = next;
          this.changed = null;
          this.loaded = true;
          this.emit();
          this.loadRegistry();
        }, () => {});
      } else if (data.type === 'result') {
        const p = this.pending[data.id];
        if (p) {
          delete this.pending[data.id];
          if (data.success) p.resolve(data.result);
          else p.reject(new Error((data.error && data.error.message) || 'HA error'));
        }
      } else if (data.type === 'event' && this.subs[data.id]) {
        this.subs[data.id](data.event);
      } else if (data.type === 'event' && data.event.event_type === 'state_changed') {
        const s: HassState | null = data.event.data.new_state;
        if (s) {
          (this.changed || (this.changed = {}))[s.entity_id] = s;
          this.emit();
        }
      }
    };

    ws.onclose = () => {
      if (this.ws === ws) this.ws = null;
      // Ответов на висящие запросы уже не будет.
      Object.keys(this.pending).forEach((id) => this.pending[+id].reject(new Error('disconnected')));
      this.pending = {};
      this.subs = {};
      if (!this.stopped) { this.setStatus('disconnected'); this.scheduleReconnect(); }
    };
  }

  private scheduleReconnect(delay = 5000) {
    clearTimeout(this.retryTimer);
    this.retryTimer = window.setTimeout(() => this.connect(), delay);
  }

  disconnect() {
    this.stopped = true;
    clearTimeout(this.retryTimer);
    if (this.ws) this.ws.close();
    this.ws = null;
  }

  private send(msg: Record<string, unknown>) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return false;
    this.ws.send(JSON.stringify({ id: this.msgId++, ...msg }));
    return true;
  }

  protected loadRegistry() {
    this.call<{ entities: RegistryEntry[] }>({ type: 'config/entity_registry/list_for_display' }).then((r) => {
      const registry: Record<string, RegistryEntry> = {};
      const devices: Record<string, Device> = {};
      r.entities.forEach((e) => {
        registry[e.ei] = e;
        if (!e.di) return;
        const d = devices[e.di] || (devices[e.di] = { id: e.di, name: '', entities: [] });
        d.entities.push(e.ei);
        // Имя устройства = friendly_name без имени сущности: «Квартира Напряжение фазы 1» − «Напряжение фазы 1».
        const s = this.states[e.ei];
        const fn = s && String(s.attributes.friendly_name || '');
        if (fn && !d.name) {
          d.name = e.en && fn.length > e.en.length && fn.slice(-e.en.length) === e.en ? fn.slice(0, -e.en.length).trim() : e.en ? '' : fn;
        }
      });
      this.registry = registry;
      this.devices = devices;
      this.emit();
    }, () => {});
  }

  // Подписка: onEvent вызывается на каждое событие, пока не отпишутся. После переподключения
  // подписки пропадают — компоненты подписываются заново по смене status.
  subscribeMessage(msg: Record<string, unknown>, onEvent: (event: any) => void): () => void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return () => {};
    const id = this.msgId++;
    const ws = this.ws;
    this.subs[id] = onEvent;
    ws.send(JSON.stringify({ id, ...msg }));
    return () => {
      delete this.subs[id];
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ id: this.msgId++, type: 'unsubscribe_events', subscription: id }));
    };
  }

  // Запрос с ответом: история, статистика, реестр сущностей.
  call<T>(msg: Record<string, unknown>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) { reject(new Error('not connected')); return; }
      const id = this.msgId++;
      this.pending[id] = { resolve, reject };
      this.ws.send(JSON.stringify({ id, ...msg }));
    });
  }

  callService(entityId: string, service: string, data?: Record<string, unknown>) {
    return this.send({
      type: 'call_service',
      domain: entityId.split('.')[0],
      service,
      target: { entity_id: entityId },
      ...(data ? { service_data: data } : {}),
    });
  }

  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) — как есть, HA-шные
  // (/api/media_player_proxy/…?token=…) уже подписаны токеном сущности — нужен только адрес HA.
  pictureUrl(path: string | undefined) {
    return this.resolveUrl(path || '');
  }

  // Запрос к REST API HA с авторизацией (загрузка фото в медиатеку). XHR, а не fetch: fetch нет в Chrome 37.
  fetch(path: string, init: { method?: string; body?: FormData } = {}): Promise<{ ok: boolean; status: number }> {
    return this.token().then((access) => new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(init.method || 'GET', this.baseUrl.replace(/\/+$/, '') + path);
      xhr.setRequestHeader('Authorization', 'Bearer ' + access);
      xhr.onload = () => resolve({ ok: xhr.status >= 200 && xhr.status < 300, status: xhr.status });
      xhr.onerror = () => reject(new Error('network'));
      xhr.send(init.body || null);
    }));
  }

  toggle(entityId: string) { return this.callService(entityId, 'toggle'); }
  turnOff(entityId: string) { return this.callService(entityId, 'turn_off'); }

  // camera_proxy_stream принимает access_token из атрибутов камеры (он сам обновляется в HA).
  cameraStreamUrl(entityId: string) {
    const s = this.states[entityId];
    const camToken = s && s.attributes.access_token;
    if (!camToken) return '';
    return this.baseUrl.replace(/\/+$/, '') + '/api/camera_proxy_stream/' + entityId + '?token=' + camToken;
  }
}
