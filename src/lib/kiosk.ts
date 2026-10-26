import { useEffect, useState } from 'preact/hooks';

// Режим киоска в Home Assistant: пока карточка на экране, прячем шапку дашборда и боковое меню HA.
// Элементы фронтенда HA лежат в Shadow DOM: home-assistant → home-assistant-main → ha-drawer (меню)
// и ha-panel-lovelace → hui-root (шапка). Всё, что меняем, запоминаем и возвращаем при уходе с дашборда.

const PREF_KEY = 'photoframe.kiosk';
const listeners: Array<() => void> = [];

export type KioskPref = '' | 'on' | 'off';

// Выбор хранится отдельно для каждого дашборда: если карточка стоит и на главном дашборде,
// киоск там не включится сам — иначе выход «на главный» по часам вёл бы обратно в киоск.
function prefKey() {
  return PREF_KEY + ':' + (location.pathname.split('/')[1] || 'lovelace');
}

// Выбор на этом устройстве для текущего дашборда: '' — как в конфиге карточки.
export function kioskPref(): KioskPref {
  try {
    // Раньше выбор был общий для всех дашбордов — переносим его на тот, где его открыли первым.
    const legacy = localStorage.getItem(PREF_KEY);
    if (legacy !== null) {
      localStorage.setItem(prefKey(), legacy);
      localStorage.removeItem(PREF_KEY);
    }
    return (localStorage.getItem(prefKey()) as KioskPref) || '';
  } catch (e) { return ''; }
}

export function setKioskPref(v: KioskPref) {
  try { localStorage.setItem(prefKey(), v); } catch (e) { /* ignore */ }
  listeners.forEach((l) => l());
}

export function onKioskPref(fn: () => void) {
  listeners.push(fn);
  return () => { listeners.splice(listeners.indexOf(fn), 1); };
}

// ?kiosk или ?kiosk=1 — включить, ?kiosk=0 — выключить (как у плагина kiosk-mode); затем выбор устройства; затем конфиг.
export function kioskWanted(configDefault: boolean): boolean {
  const q = new URLSearchParams(location.search);
  if (q.has('kiosk')) return q.get('kiosk') !== '0' && q.get('kiosk') !== 'false';
  const pref = kioskPref();
  if (pref) return pref === 'on';
  return configDefault;
}

function shadow(el: Element | null | undefined): ShadowRoot | null {
  return el && (el as HTMLElement).shadowRoot ? (el as HTMLElement).shadowRoot : null;
}

const STYLE_ID = 'photoframe-kiosk';

// Активен ли киоск сейчас — интерфейсу (тап по часам ведёт на главный дашборд).
let active = false;
const activeListeners: Array<() => void> = [];

export function kioskActive() {
  return active;
}

export function onKioskActive(fn: () => void) {
  activeListeners.push(fn);
  return () => { activeListeners.splice(activeListeners.indexOf(fn), 1); };
}

function setActive(v: boolean) {
  if (v === active) return;
  active = v;
  activeListeners.forEach((l) => l());
}

// Вставить стиль в shadow root и запомнить, как его убрать.
function addStyle(root: ShadowRoot | null, css: string, undo: Array<() => void>) {
  if (!root || root.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  root.appendChild(style);
  undo.push(() => style.remove());
}

// Хук для интерфейса: перерисовка при включении/выключении киоска.
export function useKioskActive() {
  const [on, setOn] = useState(active);
  useEffect(() => {
    const off = onKioskActive(() => setOn(active));
    // Киоск мог включиться между отрисовкой и подпиской — сверяемся сразу.
    setOn(active);
    return off;
  }, []);
  return on;
}

// Главный дашборд пользователя HA: «/» — фронтенд сам откроет панель по умолчанию.
export function goToMainDashboard() {
  history.pushState(null, '', '/');
  window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } }));
}

// Возвращает функцию отката или null, если фронтенд HA ещё не отрисовал нужные элементы.
export function enterKiosk(): (() => void) | null {
  const main = shadow(document.querySelector('home-assistant'))?.querySelector('home-assistant-main');
  const mainRoot = shadow(main);
  if (!mainRoot) return null;
  const panel = mainRoot.querySelector('ha-panel-lovelace');
  const huiRoot = shadow(panel)?.querySelector('hui-root') as HTMLElement | null;
  const huiShadow = shadow(huiRoot);
  if (!huiRoot || !huiShadow) return null;

  const undo: Array<() => void> = [];
  const setVar = (el: HTMLElement, name: string, value: string) => {
    const prev = el.style.getPropertyValue(name);
    el.style.setProperty(name, value);
    undo.push(() => (prev ? el.style.setProperty(name, prev) : el.style.removeProperty(name)));
  };

  // Боковое меню. В разных версиях HA ширина и отступ контента задаются по-разному — закрываем все,
  // иначе меню прячется, а пустая полоса на его месте остаётся:
  //  - HA 2026.x: --ha-sidebar-width, меню в .sidebar-shell, отступ — padding-inline-start у .app-content;
  //  - старые версии (mwc-drawer): --mdc-drawer-width, меню в aside, отступ у .mdc-drawer-app-content.
  const drawer = mainRoot.querySelector('ha-drawer') as HTMLElement | null;
  [main as HTMLElement, drawer].forEach((el) => {
    if (!el) return;
    setVar(el, '--ha-sidebar-width', '0px');
    setVar(el, '--mdc-drawer-width', '0px');
  });
  addStyle(mainRoot, ':host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}', undo);
  addStyle(shadow(drawer), '.sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}'
    + '.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;'
    + 'padding-left:0!important;padding-inline-start:0!important;width:100%!important}', undo);
  const sidebar = mainRoot.querySelector('ha-sidebar') as HTMLElement | null;
  if (sidebar) {
    const prev = sidebar.style.display;
    sidebar.style.display = 'none';
    undo.push(() => { sidebar.style.display = prev; });
  }

  // Шапка дашборда: высота 0 (по ней же считает высоту и наша карточка) и скрытие на всякий случай.
  setVar(huiRoot, '--header-height', '0px');
  addStyle(huiShadow, '.header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}', undo);

  setActive(true);
  return () => {
    undo.splice(0).reverse().forEach((f) => f());
    setActive(false);
  };
}
