import { absolute } from './api';

function toWs(url: string) {
  // Пустой адрес сервиса — тот же origin, что у страницы.
  const full = /^https?:/.test(url) ? url : location.protocol + '//' + location.host + url;
  return full.replace(/^http/, 'ws');
}

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
  private ws: WebSocket | null = null;
  private msgId = 1;
  private listeners: Listener[] = [];
  private retryTimer: number | undefined;
  private stopped = false;
  // Ответы на запросы call() по id. Список состояний — тоже через call, чтобы не путать его с другими result.
  private pending: Record<number, { resolve: (v: any) => void; reject: (e: Error) => void }> = {};
  // Подписки с собственным потоком событий (прогноз погоды): события приходят с id подписки.
  private subs: Record<number, (event: any) => void> = {};

  // proxy — подключаемся к сервису рамок, он сам авторизуется в HA (токена на рамке нет).
  // Без proxy — напрямую в HA с токеном: только когда сервиса нет.
  // home — какой дом спрашивать у сервиса (у каждого дома может быть свой HA).
  constructor(private baseUrl: string, private token: string, private proxy: boolean, readonly home = 'main') {}

  private homeQuery(sep: string) {
    return this.home === 'main' ? '' : sep + 'home=' + encodeURIComponent(this.home);
  }

  subscribe(fn: Listener) {
    this.listeners.push(fn);
    return () => { this.listeners = this.listeners.filter((l) => l !== fn); };
  }

  protected emit() { this.listeners.forEach((l) => l()); }

  protected setStatus(s: Status) { this.status = s; this.emit(); }

  connect() {
    if (!this.proxy && (!this.baseUrl || !this.token)) { this.setStatus('idle'); return; }
    this.stopped = false;
    this.setStatus('connecting');
    const wsUrl = this.proxy
      ? toWs(absolute('/api/ha/websocket' + this.homeQuery('?')))
      : this.baseUrl.replace(/\/+$/, '').replace(/^http/, 'ws') + '/api/websocket';
    let ws: WebSocket;
    try { ws = new WebSocket(wsUrl); } catch (e) { this.scheduleReconnect(); return; }
    this.ws = ws;

    ws.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      if (data.type === 'auth_required') {
        ws.send(JSON.stringify({ type: 'auth', access_token: this.token }));
      } else if (data.type === 'auth_invalid') {
        // Через сервис токен чинят на стороне сервиса — пробуем снова, но реже.
        this.stopped = true;
        this.setStatus('auth_invalid');
        ws.close();
        if (this.proxy) this.scheduleReconnect(30000);
      } else if (data.type === 'auth_ok') {
        this.setStatus('connected');
        this.send({ type: 'subscribe_events', event_type: 'state_changed' });
        this.call<HassState[]>({ type: 'get_states' }).then((list) => {
          const next: Record<string, HassState> = {};
          list.forEach((s) => { next[s.entity_id] = s; });
          this.states = next;
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
          this.states = { ...this.states, [s.entity_id]: s };
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

  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) грузим как есть,
  // HA-шные (/api/media_player_proxy/…) — через сервис, он добавит авторизацию.
  pictureUrl(path: string | undefined) {
    if (!path) return '';
    if (/^https?:/.test(path)) return path;
    return this.proxy ? absolute('/api/ha/picture?path=' + encodeURIComponent(path) + this.homeQuery('&')) : this.baseUrl.replace(/\/+$/, '') + path;
  }

  toggle(entityId: string) { return this.callService(entityId, 'toggle'); }
  turnOff(entityId: string) { return this.callService(entityId, 'turn_off'); }

  // Через сервис — его прокси с авторизацией. Напрямую camera_proxy_stream принимает
  // не долгоживущий токен, а access_token из атрибутов камеры.
  cameraStreamUrl(entityId: string) {
    if (this.proxy) return absolute('/api/ha/camera/' + entityId + this.homeQuery('?'));
    const s = this.states[entityId];
    const camToken = s && s.attributes.access_token;
    if (!camToken) return '';
    return this.baseUrl.replace(/\/+$/, '') + '/api/camera_proxy_stream/' + entityId + '?token=' + camToken;
  }
}
