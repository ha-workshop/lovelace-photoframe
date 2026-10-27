// Первая настройка после установки из HACS. Сам JS начинает работать, только когда открыт какой-нибудь
// дашборд, — поэтому при первом заходе администратора предлагаем создать дашборд «Фоторамка» одной кнопкой.
import { applyLanguage, t } from '../i18n';
import { CARD_TYPE } from './cardBackend';
import type { Hass } from './hassClient';

const DONE_KEY = 'photoframe.setup';
// HA требует дефис в адресе дашборда.
export const DASHBOARD_PATH = 'photo-frame';

interface HaElement extends HTMLElement { hass?: Hass }

function waitForHass(timeoutMs: number): Promise<Hass | null> {
  const started = Date.now();
  return new Promise((resolve) => {
    const tick = () => {
      const ha = document.querySelector('home-assistant') as HaElement | null;
      if (ha && ha.hass && ha.hass.user) return resolve(ha.hass);
      if (Date.now() - started > timeoutMs) return resolve(null);
      setTimeout(tick, 1000);
    };
    tick();
  });
}

function remember(v: 'done' | 'dismissed') {
  try { localStorage.setItem(DONE_KEY, v); } catch (e) { /* ignore */ }
}

// Переход внутри фронтенда HA без перезагрузки страницы.
function navigate(path: string) {
  history.pushState(null, '', path);
  window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } }));
}

// Дашборд «Фоторамка» с карточкой. callWS — запрос к HA: hass фронтенда или подключение PWA.
export function createDashboard(callWS: (msg: Record<string, unknown>) => Promise<unknown>): Promise<string> {
  const title = t('setup.dashboard_title');
  return callWS({
    type: 'lovelace/dashboards/create',
    url_path: DASHBOARD_PATH,
    title,
    icon: 'mdi:image-frame',
    mode: 'storage',
    show_in_sidebar: true,
    require_admin: false,
  }).then(() => callWS({
    type: 'lovelace/config/save',
    url_path: DASHBOARD_PATH,
    config: { title, views: [{ title, path: 'frame', type: 'panel', cards: [{ type: CARD_TYPE, media_folder: 'photoframe' }] }] },
  })).then(() => '/' + DASHBOARD_PATH + '/frame');
}

function banner(hass: Hass) {
  const box = document.createElement('div');
  box.setAttribute('style', [
    'position:fixed', 'right:16px', 'bottom:16px', 'z-index:9999', 'max-width:360px', 'padding:16px 18px',
    'border-radius:16px', 'background:#141620', 'color:#f5f7fb', 'box-shadow:0 12px 40px rgba(0,0,0,.45)',
    'font:14px/1.45 Roboto,-apple-system,sans-serif', 'border:1px solid rgba(255,255,255,.12)',
  ].join(';'));
  const title = document.createElement('b');
  title.textContent = t('setup.title');
  const text = document.createElement('div');
  text.setAttribute('style', 'margin:6px 0 12px;color:rgba(245,247,251,.72)');
  text.textContent = t('setup.text');
  const row = document.createElement('div');
  row.setAttribute('style', 'display:flex;justify-content:flex-end;gap:8px');
  const btn = (label: string, primary: boolean) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.setAttribute('style', 'border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;'
      + (primary ? 'background:#7dd3fc;color:#0b0d14' : 'background:rgba(255,255,255,.1);color:#f5f7fb'));
    row.appendChild(b);
    return b;
  };
  const later = btn(t('setup.later'), false);
  const create = btn(t('setup.create'), true);
  box.appendChild(title);
  box.appendChild(text);
  box.appendChild(row);
  document.body.appendChild(box);

  later.onclick = () => { remember('dismissed'); box.remove(); };
  create.onclick = () => {
    create.disabled = true;
    create.textContent = t('common.loading');
    createDashboard((msg) => hass.callWS(msg)).then((path) => {
      remember('done');
      box.remove();
      navigate(path);
    }, (e: Error) => {
      create.disabled = false;
      create.textContent = t('setup.create');
      text.textContent = t('setup.failed', { error: (e && e.message) || String(e) });
    });
  };
}

// Вызывается при загрузке модуля. Ничего не делает вне HA, у не-администраторов и после ответа пользователя.
export function offerSetup() {
  try { if (localStorage.getItem(DONE_KEY)) return; } catch (e) { return; }
  waitForHass(30000).then((hass) => {
    if (!hass || !hass.user || !hass.user.is_admin) return;
    applyLanguage(hass.language);
    return hass.callWS<Array<{ url_path: string }>>({ type: 'lovelace/dashboards/list' }).then((list) => {
      if (list.some((d) => d.url_path === DASHBOARD_PATH)) { remember('done'); return; }
      banner(hass);
    });
  }).catch(() => { /* не получилось — спросим в следующий раз */ });
}
