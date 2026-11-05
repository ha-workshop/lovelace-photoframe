// Телевизор: рамку открыли из Media Station X или из своей оболочки Tizen как обычную страницу,
// а не во фрейме. `?tv=1` ставит MSX; флаг запоминаем в localStorage — после входа в HA адрес
// теряет query (redirect_uri — только путь), а режим должен остаться.
const KEY = 'photoframe.tv';
const topLevel = window.parent === window;
const asked = /(?:^\?|&)tv=1(?:&|$)/.test(location.search);
let tv = false;
if (topLevel) {
  try {
    if (asked) localStorage.setItem(KEY, '1');
    tv = asked || localStorage.getItem(KEY) === '1';
  } catch (e) {
    tv = asked;
  }
}
export const tvMode = tv;

// Вернуться в приложение, из которого открыли рамку. history.go(1 - length) — способ, которым
// MSX рекомендует выходить из внешних HTML5-приложений: он возвращает к первому адресу вкладки,
// то есть к самому MSX (или к оболочке Tizen), вместе с её состоянием.
export function leaveTv(): void {
  try {
    if (history.length > 1) { history.go(1 - history.length); return; }
  } catch (e) { /* ignore */ }
  const tizen = (window as any).tizen;
  try {
    if (tizen && tizen.application) { tizen.application.getCurrentApplication().exit(); return; }
  } catch (e) { /* ignore */ }
  try { window.close(); } catch (e) { /* ignore */ }
}

// Цветные кнопки Tizen приходят, только если их зарегистрировать. В MSX страница чужая (http),
// Tizen API в ней недоступен — там работают стрелки, OK и «Назад».
export function registerTvKeys(): void {
  try {
    const d = (window as any).tizen && (window as any).tizen.tvinputdevice;
    if (d && d.registerKeyBatch) d.registerKeyBatch(['Back', 'Exit', 'ColorF0Red']);
    else if (d && d.registerKey) {
      d.registerKey('Back');
      d.registerKey('Exit');
      d.registerKey('ColorF0Red');
    }
  } catch (e) { /* ignore */ }
}
