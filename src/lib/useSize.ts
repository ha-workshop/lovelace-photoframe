import { useLayoutEffect, useState } from 'preact/hooks';
import type { RefObject } from 'preact';

// Размер элемента с обновлением при любом изменении места, а не только окна: в карточке HA
// режим киоска убирает меню — окно то же, а карточка становится шире. ResizeObserver это видит;
// в старых WebView (Android 5) его нет — там следим за окном, как раньше.
export function useSize(ref: RefObject<HTMLElement>) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth, h = el.clientHeight;
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }));
    };
    measure();
    const RO = (window as unknown as { ResizeObserver?: typeof ResizeObserver }).ResizeObserver;
    if (RO) {
      const ro = new RO(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  return size;
}
