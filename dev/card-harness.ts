// Тестовый стенд карточки: имитирует дашборд HA. Живые состояния — с вашего HA (только чтение),
// сохранение конфига дашборда и медиатека подменены локальными заглушками, чтобы не менять настоящий HA.
// HA — по входу через его страницу входа: card-harness.html?ha=http://192.168.1.10:8123 (дальше вход помнится).
import { HAClient } from '../src/lib/ha';
import { accessToken, finishLogin, haSession, login } from '../src/lib/haAuth';
import '../src/card';

const KEY = 'photoframe.harness.config';
await finishLogin();
const session = haSession();
if (!session) {
  const url = new URLSearchParams(location.search).get('ha');
  if (url) login(url);
  else document.body.textContent = 'Укажите адрес HA: card-harness.html?ha=http://192.168.1.10:8123';
}
const ha = new HAClient(session ? session.hassUrl : '', accessToken);
ha.connect();

async function initialConfig() {
  const saved = localStorage.getItem(KEY);
  if (saved) return JSON.parse(saved);
  return { type: 'custom:photoframe-card', media_folder: 'photoframe', layouts: {} };
}

type CardEl = HTMLElement & { setConfig(c: unknown): void; hass: unknown };
let card = document.createElement('photoframe-card') as CardEl;

function recreateCard() {
  const next = document.createElement('photoframe-card') as CardEl;
  next.setConfig(config);
  next.hass = hass();
  card.replaceWith(next);
  card = next;
  (window as any).__recreated = ((window as any).__recreated || 0) + 1;
}
let config: any;

function hass() {
  return {
    states: ha.states,
    user: { is_admin: true, name: 'Тест' },
    // ?lang=en — как язык в профиле пользователя HA.
    language: new URLSearchParams(location.search).get('lang') || undefined,
    auth: { data: { access_token: '' } },
    callWS(msg: any) {
      if (msg.type === 'lovelace/config') return Promise.resolve({ views: [{ type: 'panel', cards: [JSON.parse(JSON.stringify(config))] }] });
      if (msg.type === 'lovelace/config/save') {
        config = msg.config.views[0].cards[0];
        localStorage.setItem(KEY, JSON.stringify(config));
        // Как HA: после сохранения дашборда карточка создаётся заново (новый элемент), а не обновляется.
        setTimeout(() => recreateCard(), 50);
        return Promise.resolve(null);
      }
      if (msg.type === 'media_source/browse_media') return Promise.resolve({ children: [] });
      // Автонастройка: список/создание дашбордов — только записываем вызовы.
      if (msg.type === 'lovelace/dashboards/list') return Promise.resolve([]);
      if (msg.type === 'lovelace/dashboards/create' || (msg.type === 'lovelace/config/save' && msg.url_path === 'photo-frame')) {
        (window as any).__setupCalls = ((window as any).__setupCalls || []).concat(msg);
        return Promise.resolve(null);
      }
      return ha.call(msg);
    },
    callService(_d: string, service: string, data: any, target: any) {
      console.info('[стенд] вызов службы не отправлен:', service, target, data);
      return Promise.resolve();
    },
    connection: {
      subscribeMessage(cb: (e: unknown) => void, msg: Record<string, unknown>) {
        const off = ha.subscribeMessage(msg, cb);
        return Promise.resolve(() => Promise.resolve(off()));
      },
    },
  };
}

// ?hadom — повторяем структуру фронтенда HA (Shadow DOM, меню, шапка), чтобы проверить режим киоска.
function mountInHaDom(): HTMLElement {
  const mk = (tag: string, parent: Element | ShadowRoot, css = '') => {
    const el = document.createElement(tag);
    if (css) el.setAttribute('style', css);
    parent.appendChild(el);
    return el;
  };
  document.querySelector('header')!.remove();
  const ha = mk('home-assistant', document.body);
  const main = mk('home-assistant-main', ha.attachShadow({ mode: 'open' }));
  const mainRoot = main.attachShadow({ mode: 'open' });
  const drawer = mk('ha-drawer', mainRoot, 'display:block;--mdc-drawer-width:256px');
  // Как mwc-drawer: меню в aside, контент с отступом слева. Отступ зашит числом — так в реальном HA
  // осталась пустая полоса, когда прятали только переменную.
  drawer.attachShadow({ mode: 'open' }).innerHTML =
    '<aside class="mdc-drawer" style="position:fixed;top:0;left:0;bottom:0;width:256px;background:#e8e8e8"><slot name="drawer"></slot></aside>'
    + '<div class="mdc-drawer-app-content" style="margin-left:256px"><slot name="appContent"></slot></div>';
  const side = mk('ha-sidebar', drawer, 'display:block;height:100vh');
  side.setAttribute('slot', 'drawer');
  side.textContent = 'Боковое меню HA';
  const resolver = mk('partial-panel-resolver', drawer, 'display:block;min-width:0');
  resolver.setAttribute('slot', 'appContent');
  const panel = mk('ha-panel-lovelace', resolver);
  const hui = mk('hui-root', panel.attachShadow({ mode: 'open' }), 'display:block;--header-height:56px');
  const huiRoot = hui.attachShadow({ mode: 'open' });
  const head = mk('div', huiRoot);
  head.className = 'header';
  head.setAttribute('style', 'height:var(--header-height);background:#1c1f26;color:#ddd;padding:16px');
  head.textContent = 'Шапка дашборда HA';
  const view = mk('div', huiRoot);
  view.id = 'view';
  return view;
}

initialConfig().then((c) => {
  config = c;
  card.setConfig(config);
  const hadom = new URLSearchParams(location.search).has('hadom');
  (hadom ? mountInHaDom() : document.getElementById('view')!).appendChild(card);
  // Как во фронтенде HA: у элемента home-assistant есть hass.
  if (hadom) (document.querySelector('home-assistant') as any).hass = hass();
  const push = () => { card.hass = hass(); };
  ha.subscribe(push);
  push();
});
