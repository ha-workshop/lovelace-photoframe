import { useEffect } from 'preact/hooks';
import type { RefObject } from 'preact';

// Свайп вверх по фото открывает панель — как разблокировка iPhone: экран с часами целиком уезжает вверх
// за пальцем, а панель проявляется из прозрачности. Свайп вниз за шапку — обратно.
// Пока палец на экране, стили меняются напрямую, без перерисовки Preact: на слабых рамках так плавно.
// Долгое нажатие на фото (без движения) — настройка экрана с фото, как на iPhone.
// Влево-вправо по фото — следующее и предыдущее фото. Куда жест, решает первое заметное движение пальца.

const OPEN_DISTANCE = 0.18;   // доля высоты экрана, после которой жест засчитывается
const FLICK_SPEED = 0.5;      // px/ms — короткий быстрый взмах тоже засчитывается
const LONG_PRESS = 600;       // мс без движения — долгое нажатие
const STILL = 10;             // px — дрожание пальца, которое ещё не движение
const PHOTO_DISTANCE = 0.12;  // доля ширины экрана для смены фото

interface Targets {
  root: RefObject<HTMLElement>;
  controls: RefObject<HTMLElement>;
  ambient: RefObject<HTMLElement>;
  soft: RefObject<HTMLElement>;
}

// Element.closest есть только с Chrome 41 — на Android 5 его нет.
function closest(el: Element | null, selector: string) {
  for (; el && el.nodeType === 1; el = el.parentElement) {
    const m = el.matches || (el as any).webkitMatchesSelector;
    if (m.call(el, selector)) return el;
  }
  return null;
}

function point(e: TouchEvent | MouseEvent) {
  return 'touches' in e ? (e.touches[0] || e.changedTouches[0]).clientY : e.clientY;
}

function pointX(e: TouchEvent | MouseEvent) {
  return 'touches' in e ? (e.touches[0] || e.changedTouches[0]).clientX : e.clientX;
}

// onPhoto(+1) — следующее фото (смахнули влево), onPhoto(-1) — предыдущее (вправо).
export function useSwipe(t: Targets, open: boolean, setOpen: (v: boolean) => void, enabled: boolean, onLongPress?: () => void,
  onPhoto?: (dir: number) => void) {
  useEffect(() => {
    const root = t.root.current;
    if (!root || !enabled) return;

    let startY = 0, startX = 0, startT = 0, dy = 0, dx = 0, active = false, pressTimer = 0;
    // Ось жеста: '' — ещё не ясно, 'y' — вверх-вниз (панель), 'x' — влево-вправо (фото).
    let axis = '';

    const paint = (p: number) => {
      // p: 0 — фото, 1 — панель. Экран с фото идёт за пальцем на всю высоту, панель проявляется.
      const c = t.controls.current, a = t.ambient.current, s = t.soft.current;
      const h = root.clientHeight;
      if (c) { c.style.opacity = String(p); c.style.transform = 'scale(' + (0.96 + 0.04 * p).toFixed(4) + ')'; }
      if (a) a.style.transform = 'translateY(' + Math.round(-p * h) + 'px)';
      if (s) s.style.opacity = String(p);
    };
    const clear = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((el) => {
        if (el) { el.style.opacity = ''; el.style.transform = ''; }
      });
    };

    const down = (e: TouchEvent | MouseEvent) => {
      const target = e.target as HTMLElement;
      // Закрыть можно только потянув за шапку — остальная панель скроллится и нажимается.
      if (open && (!closest(target, '.bar') || closest(target, 'button'))) return;
      startY = point(e); startX = pointX(e); startT = Date.now(); dy = 0; dx = 0; axis = ''; active = true;
      root.classList.add('dragging');
      // Долгое нажатие на фото (не на плашке) — настройка экрана с фото.
      clearTimeout(pressTimer);
      if (!open && onLongPress && !closest(target, 'button')) {
        pressTimer = window.setTimeout(() => {
          if (!active || Math.abs(dy) > STILL) return;
          active = false;
          root.classList.remove('dragging');
          clear();
          onLongPress();
        }, LONG_PRESS);
      }
    };
    const move = (e: TouchEvent | MouseEvent) => {
      if (!active) return;
      dy = point(e) - startY;
      dx = pointX(e) - startX;
      if (Math.abs(dy) > STILL || Math.abs(dx) > STILL) clearTimeout(pressTimer);
      if (!axis && (Math.abs(dy) > STILL || Math.abs(dx) > STILL)) {
        axis = !open && onPhoto && Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }
      if (axis === 'x') {
        if (e.cancelable) e.preventDefault();
        return;
      }
      const h = root.clientHeight;
      // Палец и экран идут один к одному: протянул на половину высоты — панель проявилась наполовину.
      const p = open ? 1 - Math.max(0, dy) / h : Math.max(0, -dy) / h;
      paint(Math.min(1, Math.max(0, p)));
      if (e.cancelable) e.preventDefault();
    };
    const up = () => {
      clearTimeout(pressTimer);
      if (!active) return;
      active = false;
      root.classList.remove('dragging');
      if (axis === 'x') {
        const fast = Math.abs(dx) / Math.max(1, Date.now() - startT) > FLICK_SPEED && Math.abs(dx) > 30;
        if (onPhoto && (Math.abs(dx) > root.clientWidth * PHOTO_DISTANCE || fast)) onPhoto(dx < 0 ? 1 : -1);
        return;
      }
      const h = root.clientHeight;
      const speed = Math.abs(dy) / Math.max(1, Date.now() - startT);
      const far = Math.abs(dy) > h * OPEN_DISTANCE || (speed > FLICK_SPEED && Math.abs(dy) > 30);
      clear();
      if (!open && dy < 0 && far) setOpen(true);
      if (open && dy > 0 && far) setOpen(false);
    };

    root.addEventListener('touchstart', down);
    root.addEventListener('touchmove', move);
    root.addEventListener('touchend', up);
    root.addEventListener('touchcancel', up);
    root.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    return () => {
      clearTimeout(pressTimer);
      root.removeEventListener('touchstart', down);
      root.removeEventListener('touchmove', move);
      root.removeEventListener('touchend', up);
      root.removeEventListener('touchcancel', up);
      root.removeEventListener('mousedown', down);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
  }, [open, enabled, onPhoto]);
}
