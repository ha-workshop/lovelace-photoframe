// Дашборд, карточки и окна с пульта и клавиатуры: стрелки переводят фокус на ближайший элемент в ту сторону
// (как на телевизоре), OK / Enter нажимает его. Фокус виден, только пока управляют клавишами: на html — класс
// kbd-nav, касание или мышь его снимают (у старых WebView рамок нет :focus-visible).
const FOCUSABLE = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea, .tappable, [tabindex]:not([tabindex="-1"])';

type Dir = 'left' | 'right' | 'up' | 'down';

export function arrowDir(key: string): Dir | null {
  if (key === 'ArrowLeft' || key === 'Left') return 'left';
  if (key === 'ArrowRight' || key === 'Right') return 'right';
  if (key === 'ArrowUp' || key === 'Up') return 'up';
  if (key === 'ArrowDown' || key === 'Down') return 'down';
  return null;
}

// «Назад» с пульта или клавиатуры: Esc, Backspace, кнопка Back телевизоров (Tizen — 10009, webOS — 461,
// Android TV в браузере — GoBack / BrowserBack). Backspace в поле ввода — это стирание, не «Назад».
export function isBack(e: KeyboardEvent, typing: boolean): boolean {
  const k = e.key || '';
  if (k === 'Escape' || k === 'Esc' || k === 'GoBack' || k === 'BrowserBack') return true;
  if (e.keyCode === 10009 || e.keyCode === 461) return true;
  return k === 'Backspace' && !typing;
}

export function markKeyboard(on: boolean) {
  const html = document.documentElement;
  if (on) html.classList.add('kbd-nav');
  else html.classList.remove('kbd-nav');
}

function visible(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return false;
  const s = window.getComputedStyle(el);
  return s.visibility !== 'hidden' && s.display !== 'none' && s.pointerEvents !== 'none';
}

function candidates(scope: HTMLElement): HTMLElement[] {
  const all = scope.querySelectorAll(FOCUSABLE);
  const out: HTMLElement[] = [];
  for (let i = 0; i < all.length; i++) {
    const el = all[i] as HTMLElement;
    // Внутри кнопки (плитка в плитке) — берём внешнюю.
    if (el.parentElement && el.parentElement.closest && el.parentElement.closest('button')) continue;
    if (visible(el)) out.push(el);
  }
  return out;
}

function focus(el: HTMLElement) {
  if (!el.hasAttribute('tabindex') && !/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) el.tabIndex = 0;
  try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
  const r = el.getBoundingClientRect();
  if (r.top < 0 || r.bottom > window.innerHeight || r.left < 0 || r.right > window.innerWidth) {
    el.scrollIntoView({ block: 'center', inline: 'nearest' });
  }
}

// Ход фокуса в сторону dir внутри scope. Нет фокуса в scope — встаём на первый элемент.
// Возвращает false, если идти некуда (край).
export function moveFocus(scope: HTMLElement, dir: Dir): boolean {
  const list = candidates(scope);
  if (!list.length) return false;
  const cur = document.activeElement as HTMLElement | null;
  if (!cur || !scope.contains(cur) || list.indexOf(cur) === -1) {
    focus(list[0]);
    return true;
  }
  const a = cur.getBoundingClientRect();
  const ax = a.left + a.width / 2, ay = a.top + a.height / 2;
  let best: HTMLElement | null = null;
  let bestScore = Infinity;
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    if (el === cur) continue;
    const b = el.getBoundingClientRect();
    const bx = b.left + b.width / 2, by = b.top + b.height / 2;
    // Расстояние вдоль направления (между краями) и смещение поперёк — поперёк штрафуем сильнее.
    let along: number, across: number;
    if (dir === 'right') { along = b.left - a.right; across = Math.abs(by - ay); if (bx <= ax + 1) continue; }
    else if (dir === 'left') { along = a.left - b.right; across = Math.abs(by - ay); if (bx >= ax - 1) continue; }
    else if (dir === 'down') { along = b.top - a.bottom; across = Math.abs(bx - ax); if (by <= ay + 1) continue; }
    else { along = a.top - b.bottom; across = Math.abs(bx - ax); if (by >= ay - 1) continue; }
    const score = Math.max(along, 0) + across * 2;
    if (score < bestScore) { bestScore = score; best = el; }
  }
  if (!best) return false;
  focus(best);
  return true;
}

// OK на элементе, который сам Enter не понимает (плитка-div), — как нажатие.
export function pressFocused(scope: HTMLElement): boolean {
  const el = document.activeElement as HTMLElement | null;
  if (!el || !scope.contains(el)) return false;
  if (/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(el.tagName)) return false;
  el.click();
  return true;
}

// Открылось окно или карточка — фокус на первый элемент её содержимого (не на крестик в шапке).
export function focusFirst(scope: HTMLElement) {
  const list = candidates(scope);
  if (!list.length) return;
  const body = list.filter((el) => !(el.closest && el.closest('.panel-head, .modal-head')));
  focus(body.length ? body[0] : list[0]);
}
