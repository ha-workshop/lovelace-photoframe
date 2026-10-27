import { HAClient, type HassState } from './ha';
import { applyLanguage } from '../i18n';

// Рамка как карточка дашборда HA: соединение, авторизацию и состояния даёт сам фронтенд HA через объект hass.
// Токенов и своего WebSocket нет — работаем от имени вошедшего пользователя.

export interface Hass {
  states: Record<string, HassState>;
  user?: { is_admin: boolean; name?: string };
  // Язык интерфейса пользователя HA («ru», «en», «pt-BR»…).
  language?: string;
  auth?: { data?: { access_token?: string } };
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  // fetch с авторизацией фронтенда HA: сам обновляет просроченный токен.
  fetchWithAuth?(path: string, init?: RequestInit): Promise<Response>;
  callService(domain: string, service: string, data?: Record<string, unknown>, target?: Record<string, unknown>): Promise<unknown>;
  connection: {
    subscribeMessage<T>(cb: (event: T) => void, msg: Record<string, unknown>): Promise<() => Promise<void>>;
  };
}

export class HassClient extends HAClient {
  private hass: Hass | null = null;

  constructor() {
    super('', () => Promise.resolve(''));
  }

  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(hass: Hass) {
    const first = !this.hass;
    this.hass = hass;
    applyLanguage(hass.language);
    if (hass.states !== this.states) {
      this.states = hass.states;
      this.loaded = true;
      if (this.status !== 'connected') this.setStatus('connected');
      else this.emit();
    }
    if (first) this.loadRegistry();
  }

  get isAdmin() {
    return !!(this.hass && this.hass.user && this.hass.user.is_admin);
  }

  fetch(path: string, init: RequestInit = {}): Promise<Response> {
    const h = this.hass;
    if (h && h.fetchWithAuth) return h.fetchWithAuth(path, init);
    const headers = { ...(init.headers as Record<string, string> || {}), Authorization: 'Bearer ' + this.accessToken };
    return fetch(path, { ...init, headers });
  }

  get accessToken() {
    return (this.hass && this.hass.auth && this.hass.auth.data && this.hass.auth.data.access_token) || '';
  }

  connect() { /* соединение держит фронтенд HA */ }
  disconnect() { /* и закрывает тоже он */ }

  call<T>(msg: Record<string, unknown>): Promise<T> {
    if (!this.hass) return Promise.reject(new Error('not connected'));
    return this.hass.callWS<T>(msg);
  }

  callService(entityId: string, service: string, data?: Record<string, unknown>) {
    if (!this.hass) return false;
    this.hass.callService(entityId.split('.')[0], service, data, { entity_id: entityId }).catch(() => {});
    return true;
  }

  subscribeMessage(msg: Record<string, unknown>, onEvent: (event: any) => void): () => void {
    if (!this.hass) return () => {};
    let off: (() => Promise<void>) | null = null;
    let cancelled = false;
    this.hass.connection.subscribeMessage(onEvent, msg).then((unsub) => {
      if (cancelled) unsub().catch(() => {});
      else off = unsub;
    }, () => {});
    return () => {
      cancelled = true;
      if (off) off().catch(() => {});
    };
  }

  // Тот же origin, что у HA: поток камеры по access_token камеры, картинки — относительными путями.
  cameraStreamUrl(entityId: string) {
    const s = this.states[entityId];
    const token = s && s.attributes.access_token;
    return token ? '/api/camera_proxy_stream/' + entityId + '?token=' + token : '';
  }

  pictureUrl(path: string | undefined) {
    return path || '';
  }
}
