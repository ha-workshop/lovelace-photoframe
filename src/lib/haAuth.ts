// Вход в Home Assistant без долгоживущего токена — как у самого фронтенда HA (OAuth2 с authorization code).
// Рамка без сервиса живёт на том же домене, что и HA (nginx или /local), поэтому:
//  1) если в этом браузере уже выполнен вход в HA («Запомнить меня»), берём его сессию (hassTokens);
//  2) иначе кнопка «Войти через Home Assistant» ведёт на страницу входа HA и возвращает обратно.
// Открыта внутри самого HA (дашборд «Веб-страница», в т.ч. в приложении HA, где браузера нет) —
// вход берём у страницы HA вокруг: в приложении он хранится не в браузере, а у приложения.
// Access-токен живёт 30 минут — обновляем по refresh-токену перед каждым подключением.
// Запросы через XMLHttpRequest: fetch в Chrome 37 нет.

export interface HaSession {
  hassUrl: string;
  clientId: string;
  access_token: string;
  refresh_token: string;
  expires: number;
  // Вход взят у HA, внутри которого открыта рамка: выйти отсюда нельзя.
  embedded?: boolean;
}

interface ParentAuth { expired: boolean; accessToken: string; refreshAccessToken(): Promise<void> }

// hass страницы HA, внутри которой открыта рамка (тот же домен). Иначе null.
function parentAuth(): ParentAuth | null {
  try {
    if (window.parent === window) return null;
    const el = window.parent.document.querySelector('home-assistant') as unknown as { hass?: { auth?: ParentAuth } } | null;
    return (el && el.hass && el.hass.auth) || null;
  } catch (e) { return null; }
}

const KEY = 'photoframe.haAuth';
// Так хранит вход фронтенд HA на этом же домене.
const HA_KEY = 'hassTokens';

function read(key: string): HaSession | null {
  try {
    const raw = localStorage.getItem(key);
    const s = raw ? JSON.parse(raw) : null;
    return s && s.hassUrl && s.refresh_token ? s : null;
  } catch (e) { return null; }
}

function save(s: HaSession | null) {
  try {
    if (s) localStorage.setItem(KEY, JSON.stringify(s));
    else localStorage.removeItem(KEY);
  } catch (e) { /* ignore */ }
}

function trim(url: string) { return url.replace(/\/+$/, ''); }

function clientId() { return location.protocol + '//' + location.host + '/'; }

// Куда HA вернёт после входа — эта же страница без параметров.
function redirectUri() { return location.protocol + '//' + location.host + location.pathname; }

// Своя сессия; если её нет — сессия фронтенда HA с этого же домена.
export function haSession(): HaSession | null {
  if (parentAuth()) {
    return { hassUrl: location.protocol + '//' + location.host, clientId: '', access_token: '', refresh_token: '', expires: 0, embedded: true };
  }
  const own = read(KEY);
  if (own) return own;
  const ha = read(HA_KEY);
  return ha && trim(ha.hassUrl) === trim(location.protocol + '//' + location.host) ? ha : null;
}

export function logout() { save(null); }

function tokenRequest(hassUrl: string, body: Record<string, string>): Promise<{ access_token: string; refresh_token?: string; expires_in: number }> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', trim(hassUrl) + '/auth/token');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.timeout = 15000;
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try { resolve(JSON.parse(xhr.responseText)); } catch (e) { reject(e); }
      } else reject(new Error('auth ' + xhr.status));
    };
    xhr.onerror = xhr.ontimeout = () => reject(new Error('network'));
    xhr.send(Object.keys(body).map((k) => k + '=' + encodeURIComponent(body[k])).join('&'));
  });
}

// Свежий access-токен. Пустая строка — входа нет или он отозван в HA.
export function accessToken(): Promise<string> {
  const parent = parentAuth();
  if (parent) return (parent.expired ? parent.refreshAccessToken() : Promise.resolve()).then(() => parent.accessToken);
  const s = haSession();
  if (!s) return Promise.resolve('');
  if (s.expires > Date.now() + 60000) return Promise.resolve(s.access_token);
  return tokenRequest(s.hassUrl, { grant_type: 'refresh_token', refresh_token: s.refresh_token, client_id: s.clientId }).then(
    (r) => {
      const next: HaSession = { ...s, access_token: r.access_token, expires: Date.now() + r.expires_in * 1000 };
      save(next);
      return next.access_token;
    },
    (e: Error) => {
      // 400 — refresh-токен отозван: забываем вход. Нет сети — пусть клиент переподключится позже.
      if (/auth 4/.test(e.message)) { if (read(KEY)) save(null); return ''; }
      throw e;
    },
  );
}

export function login(hassUrl: string) {
  const url = trim(hassUrl || location.protocol + '//' + location.host);
  location.href = url + '/auth/authorize?response_type=code'
    + '&client_id=' + encodeURIComponent(clientId())
    + '&redirect_uri=' + encodeURIComponent(redirectUri())
    + '&state=' + encodeURIComponent(url);
}

// Вызывается при запуске: если вернулись со страницы входа HA — меняем code на токены.
export function finishLogin(): Promise<string | null> {
  const q: Record<string, string> = {};
  location.search.replace(/^\?/, '').split('&').forEach((p) => {
    const i = p.indexOf('=');
    if (i > 0) q[decodeURIComponent(p.slice(0, i))] = decodeURIComponent(p.slice(i + 1).replace(/\+/g, ' '));
  });
  if (!q.code || !q.state) return Promise.resolve(null);
  const hassUrl = q.state;
  // Код одноразовый — убираем его из адреса сразу, чтобы перезагрузка не повторяла обмен.
  try { history.replaceState(null, '', location.pathname); } catch (e) { /* ignore */ }
  return tokenRequest(hassUrl, { grant_type: 'authorization_code', code: q.code, client_id: clientId() }).then((r) => {
    save({
      hassUrl,
      clientId: clientId(),
      access_token: r.access_token,
      refresh_token: r.refresh_token || '',
      expires: Date.now() + r.expires_in * 1000,
    });
    return hassUrl;
  }, () => null);
}
