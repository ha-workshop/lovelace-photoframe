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
const STEP = 36;       // px — после этого жест считается свайпом
const STILL = 8;       // px — дрожание пальца, ещё не движение

interface Start { x: number; y: number }

export function useSwipeStep(onStep: (dir: number) => void, onTap?: () => void) {
  const start = useRef<Start | null>(null);
  // Клик после свайпа браузер всё равно присылает — его надо пропустить, иначе откроется полный экран.
  const swiped = useRef(false);
  // После касания браузер шлёт ещё и мышиные события — их не считаем вторым жестом.
  const lastTouch = useRef(0);

  const begin = (x: number, y: number) => {
    start.current = { x, y };
    swiped.current = false;
  };
  const move = (x: number, y: number, prevent?: (e: Event) => void, e?: Event) => {
    if (!start.current) return;
    const dx = x - start.current.x;
    const dy = y - start.current.y;
    if (Math.abs(dx) > STILL && Math.abs(dx) > Math.abs(dy)) {
      // Горизонтальный жест — не отдаём его прокрутке страницы.
      if (prevent && e && e.cancelable) prevent(e);
    }
  };
  const finish = (x: number, y: number) => {
    const s = start.current;
    start.current = null;
    if (!s) return;
    const dx = x - s.x;
    const dy = y - s.y;
    if (Math.abs(dx) > STEP && Math.abs(dx) > Math.abs(dy) * 1.2) {
      swiped.current = true;
      onStep(dx < 0 ? 1 : -1);
    }
  };
  const cancel = () => { start.current = null; };

  const touchStart = (e: TouchEvent) => {
    lastTouch.current = Date.now();
    const t = e.touches[0];
    if (t) begin(t.clientX, t.clientY);
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
    begin(e.clientX, e.clientY);
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
