// Режим киоска в Home Assistant: пока карточка на экране, прячем шапку дашборда и боковое меню HA.
// Элементы фронтенда HA лежат в Shadow DOM: home-assistant → home-assistant-main → ha-drawer (меню)
// и ha-panel-lovelace → hui-root (шапка). Всё, что меняем, запоминаем и возвращаем при уходе с дашборда.

const PREF_KEY = 'photoframe.kiosk';
const listeners: Array<() => void> = [];

export type KioskPref = '' | 'on' | 'off';

// Выбор на этом устройстве: '' — как в конфиге карточки.
export function kioskPref(): KioskPref {
  try { return (localStorage.getItem(PREF_KEY) as KioskPref) || ''; } catch (e) { return ''; }
}

export function setKioskPref(v: KioskPref) {
  try { localStorage.setItem(PREF_KEY, v); } catch (e) { /* ignore */ }
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

  // Боковое меню: ширина ящика 0, сам сайдбар скрыт.
  const drawer = mainRoot.querySelector('ha-drawer') as HTMLElement | null;
  if (drawer) setVar(drawer, '--mdc-drawer-width', '0px');
  const sidebar = mainRoot.querySelector('ha-sidebar') as HTMLElement | null;
  if (sidebar) {
    const prev = sidebar.style.display;
    sidebar.style.display = 'none';
    undo.push(() => { sidebar.style.display = prev; });
  }

  // Шапка дашборда: высота 0 (по ней же считает высоту и наша карточка) и скрытие на всякий случай.
  setVar(huiRoot, '--header-height', '0px');
  if (!huiShadow.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = '.header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}';
    huiShadow.appendChild(style);
    undo.push(() => style.remove());
  }

  return () => undo.splice(0).reverse().forEach((f) => f());
}
