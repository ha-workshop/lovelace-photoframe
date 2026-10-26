// Запросы к сервису рамок. XMLHttpRequest, а не fetch: fetch появился только в Chrome 42.

const SERVICE_KEY = 'photoframe.service';

// Адрес сервиса. Пусто — тот же origin (PWA раздаёт сам сервис).
// В APK с зашитым PWA адрес задаётся в настройках.
export function serviceBase(): string {
  try { return (localStorage.getItem(SERVICE_KEY) || '').replace(/\/+$/, ''); } catch (e) { return ''; }
}

export function setServiceBase(url: string) {
  try { localStorage.setItem(SERVICE_KEY, url.trim()); } catch (e) { /* ignore */ }
}

export function absolute(path: string) {
  return /^(data:|https?:)/.test(path) ? path : serviceBase() + path;
}

export const clientId = Math.random().toString(36).slice(2);

export function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, serviceBase() + path);
    xhr.timeout = 15000;
    xhr.setRequestHeader('X-Client-Id', clientId);
    if (body !== undefined) xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try { resolve(JSON.parse(xhr.responseText)); } catch (e) { reject(e); }
      } else {
        reject(new Error('HTTP ' + xhr.status));
      }
    };
    xhr.onerror = xhr.ontimeout = () => reject(new Error('network'));
    xhr.send(body === undefined ? null : JSON.stringify(body));
  });
}
