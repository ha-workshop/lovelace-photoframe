import { useEffect } from 'preact/hooks';
import type { RefObject } from 'preact';

// Свайп вверх по фото открывает панель (как экран блокировки iOS), свайп вниз за шапку — закрывает.
// Пока палец на экране, стили меняются напрямую, без перерисовки Preact: на слабых рамках так плавно.

const OPEN_DISTANCE = 0.18;   // доля высоты экрана, после которой жест засчитывается
const FLICK_SPEED = 0.5;      // px/ms — короткий быстрый взмах тоже засчитывается

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

export function useSwipe(t: Targets, open: boolean, setOpen: (v: boolean) => void, enabled: boolean) {
  useEffect(() => {
    const root = t.root.current;
    if (!root || !enabled) return;

    let startY = 0, startT = 0, dy = 0, active = false;

    const paint = (p: number) => {
      // p: 0 — фото, 1 — панель
      const c = t.controls.current, a = t.ambient.current, s = t.soft.current;
      if (c) { c.style.opacity = String(p); c.style.transform = 'translateY(' + Math.round((1 - p) * 60) + 'px)'; }
      if (a) { a.style.opacity = String(1 - p); a.style.transform = 'translateY(' + Math.round(-p * 80) + 'px)'; }
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
      if (open && (!closest(target, '.bar, .grabber-top') || closest(target, 'button'))) return;
      startY = point(e); startT = Date.now(); dy = 0; active = true;
      root.classList.add('dragging');
    };
    const move = (e: TouchEvent | MouseEvent) => {
      if (!active) return;
      dy = point(e) - startY;
      const h = root.clientHeight;
      const p = open ? 1 - Math.max(0, dy) / h * 1.6 : Math.max(0, -dy) / h * 1.6;
      paint(Math.min(1, Math.max(0, p)));
      if (e.cancelable) e.preventDefault();
    };
    const up = () => {
      if (!active) return;
      active = false;
      root.classList.remove('dragging');
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
      root.removeEventListener('touchstart', down);
      root.removeEventListener('touchmove', move);
      root.removeEventListener('touchend', up);
      root.removeEventListener('touchcancel', up);
      root.removeEventListener('mousedown', down);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
  }, [open, enabled]);
}
