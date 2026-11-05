import { useEffect, useRef } from 'preact/hooks';

// Курсор задержался на камере — включаем видео, не дожидаясь клика.
// Короткое удержание (450 мс) отсекает случайный проезд мышью по карточке.
// Увели курсор — видео, включённое наведением, останавливаем (onStop); запущенное кнопкой ▶ продолжает идти.
const HOVER_HOLD = 450;

export function useHoverStart(onStart: () => void, enabled: boolean, onStop?: () => void) {
  const timer = useRef(0);
  const stop = () => {
    if (timer.current) { window.clearTimeout(timer.current); timer.current = 0; }
  };
  useEffect(() => stop, []);
  return {
    onMouseEnter: () => {
      if (!enabled || timer.current) return;
      timer.current = window.setTimeout(() => { timer.current = 0; onStart(); }, HOVER_HOLD);
    },
    onMouseLeave: () => {
      stop();
      if (onStop) onStop();
    },
  };
}

// Свайп влево-вправо по видео: листает камеры, а обычное касание открывает полный экран.
// Работает и пальцем, и мышью — на большом экране тоже можно проверить.
// Как карусель: слайд — вся рамка целиком (видео с полями и значками) — идёт за пальцем один к одному, а сбоку
// въезжает такой же слайд соседней камеры (peek — её снимок, вписанный так же, на том же фоне). Отпустили дальше порога или резко махнули — слайды доезжают и камера меняется; нет — всё
// возвращается. Только transform (дёшево и на Android 5).
const STEP = 36;       // px — меньше этого жест не считается свайпом
const STILL = 8;       // px — дрожание пальца, ещё не движение
const SWITCH = 0.25;   // доля ширины рамки — дальше этого отпустили, камера меняется
const FLICK = 0.5;     // px/мс — резкий взмах меняет камеру и на коротком пути
const SLIDE = 'transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1)';

interface Start { x: number; y: number; t: number }

type Styled = CSSStyleDeclaration & { webkitTransform?: string; webkitTransition?: string };

// Сдвиг поверх собственного transform элемента (например, центровка видео «по высоте» — translateX(-50%)):
// свой запоминаем в начале жеста, иначе картинка на время свайпа уезжает к краю.
const BASE = '__swipeBase';
function shift(el: HTMLElement, x: number, transition: string) {
  const s = el.style as Styled;
  const rec = el as HTMLElement & { [BASE]?: string };
  if (rec[BASE] === undefined) {
    const t = window.getComputedStyle(el).transform || (window.getComputedStyle(el) as Styled).webkitTransform || '';
    rec[BASE] = t && t !== 'none' ? t : '';
  }
  s.webkitTransition = transition; s.transition = transition;
  const tr = x ? 'translateX(' + Math.round(x) + 'px)' + (rec[BASE] ? ' ' + rec[BASE] : '') : '';
  s.webkitTransform = tr; s.transform = tr;
  if (!x) delete rec[BASE];
}

export function useSwipeStep(onStep: (dir: number) => void, onTap?: () => void, peek?: (dir: number) => string | undefined) {
  const start = useRef<Start | null>(null);
  // Рамка (overflow: hidden), видео в ней и кадр соседней камеры, который въезжает сбоку.
  const box = useRef<HTMLElement | null>(null);
  const media = useRef<HTMLElement | null>(null);
  const ghost = useRef<HTMLDivElement | null>(null);
  const ghostDir = useRef(0);
  const horiz = useRef(false);
  // Клик после свайпа браузер всё равно присылает — его надо пропустить, иначе откроется полный экран.
  const swiped = useRef(false);
  // После касания браузер шлёт ещё и мышиные события — их не считаем вторым жестом.
  const lastTouch = useRef(0);

  const dropGhost = () => {
    const g = ghost.current;
    ghost.current = null;
    ghostDir.current = 0;
    if (g && g.parentNode) g.parentNode.removeChild(g);
  };
  // Кадр соседней камеры с той стороны, откуда она въезжает (dir: 1 — следующая, справа).
  const ensureGhost = (dir: number) => {
    const b = box.current, m = media.current;
    if (!b || !peek || ghostDir.current === dir) return ghost.current;
    const url = peek(dir);
    if (!url) { dropGhost(); return null; }
    let g = ghost.current;
    if (!g) {
      // Слайд соседа — фоном, а не <img>: пока снимок грузится, он не «схлопывается» и не прыгает к центру.
      g = document.createElement('div');
      g.className = 'cam-peek';
      // Вписан так же, как текущий кадр: по высоте, по ширине, целиком или с обрезкой.
      const cls = b.className;
      const fit = m ? window.getComputedStyle(m).objectFit : '';
      g.style.backgroundSize = /fit-height/.test(cls) ? 'auto 100%' : /fit-width/.test(cls) ? '100% auto'
        : fit === 'contain' || /fit-contain/.test(cls) ? 'contain' : 'cover';
      g.style.backgroundColor = window.getComputedStyle(b).backgroundColor || '#000';
      b.appendChild(g);
      ghost.current = g;
    }
    g.style.backgroundImage = 'url("' + url + '")';
    ghostDir.current = dir;
    return g;
  };
  // Слайд текущей камеры — всё содержимое рамки (кроме въезжающего соседа).
  const slide = () => {
    const b = box.current;
    const out: HTMLElement[] = [];
    if (b) for (let i = 0; i < b.children.length; i++) if (b.children[i] !== ghost.current) out.push(b.children[i] as HTMLElement);
    return out;
  };
  const place = (dx: number, transition: string) => {
    const b = box.current, m = media.current;
    if (!b || !m) return;
    const w = b.clientWidth || 1;
    slide().forEach((el) => shift(el, dx, transition));
    const dir = dx < 0 ? 1 : dx > 0 ? -1 : ghostDir.current;
    const g = dir ? ensureGhost(dir) : ghost.current;
    if (g) shift(g, dx + dir * w, transition);
  };

  const begin = (x: number, y: number, target: EventTarget | null) => {
    start.current = { x, y, t: Date.now() };
    swiped.current = false;
    horiz.current = false;
    box.current = target as HTMLElement | null;
    media.current = box.current ? box.current.querySelector('img:not(.cam-peek), video') as HTMLElement | null : null;
  };
  const move = (x: number, y: number, prevent?: (e: Event) => void, e?: Event) => {
    if (!start.current) return;
    const dx = x - start.current.x;
    const dy = y - start.current.y;
    if (!horiz.current && Math.abs(dx) > STILL && Math.abs(dx) > Math.abs(dy)) horiz.current = true;
    if (!horiz.current) return;
    // Горизонтальный жест — не отдаём его прокрутке страницы.
    if (prevent && e && e.cancelable) prevent(e);
    place(dx, 'none');
  };
  const finish = (x: number, y: number) => {
    const s = start.current;
    start.current = null;
    if (!s) return;
    const dx = x - s.x;
    const dy = y - s.y;
    const b = box.current, m = media.current;
    const w = b ? b.clientWidth || 1 : 1;
    const fast = Math.abs(dx) / Math.max(1, Date.now() - s.t) > FLICK;
    const go = horiz.current && Math.abs(dx) > STEP && Math.abs(dx) > Math.abs(dy) && (Math.abs(dx) > w * SWITCH || fast);
    if (!go) {
      place(0, SLIDE);
      window.setTimeout(dropGhost, 320);
      return;
    }
    swiped.current = true;
    const dir = dx < 0 ? 1 : -1;
    if (!m || !ghost.current) { onStep(dir); return; }
    // Доезжаем: текущая уходит за край, соседняя встаёт на место; потом меняем камеру по-настоящему
    // и прячем кадр-заглушку, когда новое видео подгрузится (или через полсекунды).
    place(-dir * w, SLIDE);
    window.setTimeout(() => {
      onStep(dir);
      slide().forEach((el) => shift(el, 0, 'none'));
      const g = ghost.current;
      let done = false;
      const clear = () => { if (done) return; done = true; m.removeEventListener('load', clear); if (ghost.current === g) dropGhost(); };
      m.addEventListener('load', clear);
      window.setTimeout(clear, 600);
    }, 300);
  };
  const cancel = () => {
    if (!start.current) return;
    start.current = null;
    place(0, SLIDE);
    window.setTimeout(dropGhost, 320);
  };

  const touchStart = (e: TouchEvent) => {
    lastTouch.current = Date.now();
    const t = e.touches[0];
    if (t) begin(t.clientX, t.clientY, e.currentTarget);
  };
  const touchMove = (e: TouchEvent) => {
    lastTouch.current = Date.now();
    const t = e.touches[0];
    if (t) move(t.clientX, t.clientY, (ev) => ev.preventDefault(), e);
  };
  const touchEnd = (e: TouchEvent) => {
    lastTouch.current = Date.now();
    const t = e.changedTouches[0];
    if (t) finish(t.clientX, t.clientY);
  };

  const mouseDown = (e: MouseEvent) => {
    // Синтетический mousedown после touchend уже обработан выше.
    if (e.button !== 0 || Date.now() - lastTouch.current < 700) return;
    begin(e.clientX, e.clientY, e.currentTarget);
  };
  const mouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
  const mouseUp = (e: MouseEvent) => finish(e.clientX, e.clientY);

  return {
    onTouchStart: touchStart,
    onTouchMove: touchMove,
    onTouchEnd: touchEnd,
    onTouchCancel: cancel,
    onMouseDown: mouseDown,
    onMouseMove: mouseMove,
    onMouseUp: mouseUp,
    onMouseLeave: cancel,
    onDragStart: (e: Event) => e.preventDefault(),
    onClick: () => {
      if (swiped.current) { swiped.current = false; return; }
      if (onTap) onTap();
    },
  };
}
