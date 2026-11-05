import { useEffect, useRef, useState } from 'preact/hooks';
import { X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { stepCamera, useStreamState, type CameraFeed } from '../lib/camera';
import { t } from '../i18n';
import { CameraStream } from './CameraStream';

// Просмотр камер — как фото в Telegram: на весь экран, на чёрном, видео целиком.
// Влево-вправо — соседняя камера (карусель: текущая уходит за пальцем, сбоку въезжает кадр соседней);
// вверх-вниз — закрыть (кадр уезжает за пальцем, фон светлеет; не дотянул — возвращается). Двумя пальцами и
// двойным касанием — зум, приближенный кадр водят одним пальцем. Касание — спрятать/показать шапку.
// С клавиатуры и пульта: ← → — камеры, Назад / Esc — закрыть (App). Поток к камере один: при смене камеры
// меняется адрес у того же <img>.
const MAX = 5;
const DOUBLE = 2.5;
const STILL = 8;         // px — дрожание пальца
const SWITCH = 0.25;     // доля ширины — дальше отпустили, камера меняется
const CLOSE = 0.18;      // доля высоты — дальше отпустили, просмотр закрывается
const FLICK = 0.5;       // px/мс — резкий взмах срабатывает и на коротком пути
const EASE = 'cubic-bezier(0.2, 0.7, 0.2, 1)';

interface Props {
  feeds: CameraFeed[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}

type Styled = CSSStyleDeclaration & { webkitTransform?: string; webkitTransition?: string };

function look(el: HTMLElement | null, transform: string, transition: string) {
  if (!el) return;
  const s = el.style as Styled;
  s.webkitTransition = transition; s.transition = transition;
  s.webkitTransform = transform; s.transform = transform;
}

export function CameraViewer(props: Props) {
  const ha = useHA();
  const count = props.feeds.length;
  const index = Math.min(Math.max(0, props.index), Math.max(0, count - 1));
  const current = props.feeds[index];
  const entity = current ? current.entity : '';
  const url = current ? ha.cameraStreamUrl(current.entity) : '';
  const stream = useStreamState(entity);
  const [bar, setBar] = useState(true);

  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  // Свежие значения для обработчиков жестов (они ставятся один раз).
  const live = useRef({ index, count, props, ha });
  live.current = { index, count, props, ha };

  // ← → с клавиатуры и пульта — соседняя камера.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key || '';
      const dir = k === 'ArrowRight' || k === 'Right' ? 1 : k === 'ArrowLeft' || k === 'Left' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      e.stopPropagation();
      const L = live.current;
      if (L.count > 1) L.props.onIndex(stepCamera(L.index, dir, L.count));
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, []);

  useEffect(() => {
    const box = root.current, st = stage.current;
    if (!box || !st) return;
    const img = () => st.querySelector('img') as HTMLImageElement | null;

    // ── Зум (масштаб и сдвиг кадра от левого верхнего угла) ──
    let s = 1, x = 0, y = 0;
    const W = () => st.clientWidth || 1;
    const H = () => st.clientHeight || 1;
    const applyZoom = (anim: boolean) => {
      s = Math.max(1, Math.min(MAX, s));
      x = Math.min(0, Math.max(W() - W() * s, x));
      y = Math.min(0, Math.max(H() - H() * s, y));
      look(img(), s === 1 ? '' : 'translate(' + x + 'px, ' + y + 'px) scale(' + s + ')', anim ? 'transform 0.25s ease' : 'none');
    };
    const resetZoom = (anim: boolean) => { s = 1; x = 0; y = 0; applyZoom(anim); };
    const zoomAt = (s2: number, px: number, py: number) => {
      const k = Math.max(1, Math.min(MAX, s2)) / s;
      x = px - (px - x) * k; y = py - (py - y) * k; s *= k;
      applyZoom(true);
    };
    const local = (cx: number, cy: number) => {
      const r = st.getBoundingClientRect();
      return { px: cx - r.left, py: cy - r.top };
    };

    // ── Карусель: кадр соседней камеры, въезжающий сбоку ──
    let ghost: HTMLDivElement | null = null;
    let ghostDir = 0;
    const dropGhost = () => { if (ghost && ghost.parentNode) ghost.parentNode.removeChild(ghost); ghost = null; ghostDir = 0; };
    const ensureGhost = (dir: number) => {
      const L = live.current;
      if (L.count < 2) { dropGhost(); return null; }
      if (ghost && ghostDir === dir) return ghost;
      if (!ghost) {
        ghost = document.createElement('div');
        ghost.className = 'cam-viewer-peek';
        box.appendChild(ghost);
      }
      const next = L.props.feeds[stepCamera(L.index, dir, L.count)];
      const u = next ? L.ha.cameraSnapshotUrl(next.entity) : '';
      ghost.style.backgroundImage = u ? 'url("' + u + '")' : '';
      ghostDir = dir;
      return ghost;
    };
    const slideX = (dx: number, transition: string) => {
      look(st, dx ? 'translateX(' + Math.round(dx) + 'px)' : '', transition);
      const dir = dx < 0 ? 1 : dx > 0 ? -1 : ghostDir;
      const g = dir ? ensureGhost(dir) : ghost;
      if (g) look(g, 'translateX(' + Math.round(dx + dir * W()) + 'px)', transition);
    };

    // ── Закрытие жестом вверх-вниз ──
    const dragY = (dy: number, transition: string) => {
      const k = Math.min(1, Math.abs(dy) / H());
      look(st, dy ? 'translateY(' + Math.round(dy) + 'px) scale(' + (1 - k * 0.15).toFixed(3) + ')' : '', transition);
      box.style.backgroundColor = 'rgba(0, 0, 0, ' + (1 - Math.min(0.85, k * 1.6)).toFixed(3) + ')';
      box.style.transition = transition.replace(/transform/g, 'background-color');
      box.classList.toggle('dragging', !!dy);
    };

    // ── Касания ──
    let start: { x: number; y: number; t: number } | null = null;
    let axis = '';
    let pinch: { d: number; s: number; mx: number; my: number; x: number; y: number } | null = null;
    let pan: { cx: number; cy: number; x: number; y: number } | null = null;
    let lastTap = 0, tapX = 0, tapY = 0, moved = false, tapTimer = 0;
    const dist = (a: Touch, b: Touch) => Math.sqrt(Math.pow(a.clientX - b.clientX, 2) + Math.pow(a.clientY - b.clientY, 2));

    const onStart = (e: TouchEvent) => {
      moved = false;
      if (e.touches.length === 2) {
        const a = e.touches[0], b = e.touches[1];
        const m = local((a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2);
        pinch = { d: dist(a, b) || 1, s, mx: m.px, my: m.py, x, y };
        start = null; pan = null; axis = '';
        slideX(0, 'none'); dragY(0, 'none');
      } else if (e.touches.length === 1) {
        const a = e.touches[0];
        start = { x: a.clientX, y: a.clientY, t: Date.now() };
        pan = { cx: a.clientX, cy: a.clientY, x, y };
        axis = '';
      }
    };
    const onMove = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault();
      if (pinch && e.touches.length === 2) {
        moved = true;
        const a = e.touches[0], b = e.touches[1];
        const m = local((a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2);
        const s2 = Math.max(1, Math.min(MAX, pinch.s * dist(a, b) / pinch.d));
        x = m.px - (pinch.mx - pinch.x) * (s2 / pinch.s);
        y = m.py - (pinch.my - pinch.y) * (s2 / pinch.s);
        s = s2;
        applyZoom(false);
        return;
      }
      if (!start || e.touches.length !== 1) return;
      const a = e.touches[0];
      const dx = a.clientX - start.x, dy = a.clientY - start.y;
      if (Math.abs(dx) > STILL || Math.abs(dy) > STILL) moved = true;
      // Приближенный кадр — водим по нему, листать и закрывать нельзя.
      if (s > 1 && pan) { x = pan.x + dx; y = pan.y + dy; applyZoom(false); return; }
      if (!axis && moved) axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (axis === 'x') slideX(dx, 'none');
      else if (axis === 'y') dragY(dy, 'none');
    };
    const onEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) pinch = null;
      if (e.touches.length === 1) { const a = e.touches[0]; pan = { cx: a.clientX, cy: a.clientY, x, y }; start = null; return; }
      if (e.touches.length) return;
      const a = e.changedTouches[0];
      const st0 = start;
      start = null;
      if (!a || !st0) return;
      const dx = a.clientX - st0.x, dy = a.clientY - st0.y;
      const dt = Math.max(1, Date.now() - st0.t);
      const L = live.current;
      if (axis === 'x') {
        const go = L.count > 1 && (Math.abs(dx) > W() * SWITCH || Math.abs(dx) / dt > FLICK);
        if (!go) { slideX(0, 'transform 0.25s ' + EASE); window.setTimeout(dropGhost, 260); return; }
        const dir = dx < 0 ? 1 : -1;
        slideX(-dir * W(), 'transform 0.28s ' + EASE);
        window.setTimeout(() => {
          L.props.onIndex(stepCamera(L.index, dir, L.count));
          look(st, '', 'none');
          // Кадр соседа держим поверх, пока новое видео не пришло (или полсекунды).
          const m = img(), g = ghost;
          let done = false;
          const clear = () => { if (done) return; done = true; if (m) m.removeEventListener('load', clear); if (ghost === g) dropGhost(); };
          if (m) m.addEventListener('load', clear);
          window.setTimeout(clear, 600);
        }, 280);
        return;
      }
      if (axis === 'y') {
        const go = Math.abs(dy) > H() * CLOSE || Math.abs(dy) / dt > FLICK;
        if (!go) { dragY(0, 'transform 0.25s ' + EASE); return; }
        dragY((dy > 0 ? 1 : -1) * H(), 'transform 0.22s ease-in');
        window.setTimeout(() => L.props.onClose(), 200);
        return;
      }
      if (moved) return;
      // Касание: двойное — зум к точке / обратно; одиночное — спрятать или показать шапку.
      const now = Date.now();
      if (now - lastTap < 300 && Math.abs(a.clientX - tapX) < 30 && Math.abs(a.clientY - tapY) < 30) {
        lastTap = 0;
        clearTimeout(tapTimer);
        const p = local(a.clientX, a.clientY);
        if (s > 1) resetZoom(true); else zoomAt(DOUBLE, p.px, p.py);
      } else {
        lastTap = now; tapX = a.clientX; tapY = a.clientY;
        tapTimer = window.setTimeout(() => setBar((b) => !b), 300);
      }
    };

    // Мышь: колесо — зум, двойной клик — зум к точке, перетаскивание приближенного кадра.
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const p = local(e.clientX, e.clientY);
      const k = Math.max(1, Math.min(MAX, s * Math.exp(-e.deltaY * 0.002))) / s;
      x = p.px - (p.px - x) * k; y = p.py - (p.py - y) * k; s *= k;
      applyZoom(false);
    };
    const onDbl = (e: MouseEvent) => {
      const p = local(e.clientX, e.clientY);
      if (s > 1) resetZoom(true); else zoomAt(DOUBLE, p.px, p.py);
    };
    let drag: { cx: number; cy: number; x: number; y: number } | null = null;
    const onDown = (e: MouseEvent) => { if (e.button === 0 && s > 1) { e.preventDefault(); drag = { cx: e.clientX, cy: e.clientY, x, y }; } };
    const onMouseMove = (e: MouseEvent) => { if (drag) { x = drag.x + e.clientX - drag.cx; y = drag.y + e.clientY - drag.cy; applyZoom(false); } };
    const onUp = () => { drag = null; };
    const onResize = () => applyZoom(false);

    st.addEventListener('touchstart', onStart, { passive: true } as any);
    st.addEventListener('touchmove', onMove, { passive: false } as any);
    st.addEventListener('touchend', onEnd);
    st.addEventListener('touchcancel', onEnd);
    st.addEventListener('wheel', onWheel, { passive: false } as any);
    st.addEventListener('dblclick', onDbl);
    st.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(tapTimer);
      dropGhost();
      st.removeEventListener('touchstart', onStart);
      st.removeEventListener('touchmove', onMove);
      st.removeEventListener('touchend', onEnd);
      st.removeEventListener('touchcancel', onEnd);
      st.removeEventListener('wheel', onWheel);
      st.removeEventListener('dblclick', onDbl);
      st.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Сменили камеру — зум сброшен (новый кадр целиком).
  useEffect(() => {
    const st = stage.current;
    const m = st && st.querySelector('img') as HTMLImageElement | null;
    look(m, '', 'none');
  }, [entity]);

  return (
    <div class={'cam-viewer' + (bar ? '' : ' bare')} ref={root}>
      <div class="cam-viewer-stage" ref={stage}>
        <CameraStream src={url} {...stream.img} />
        {(!url || stream.state === 'error') && <div class="cam-empty"><span>{t('camera.no_stream')}</span></div>}
        {stream.state === 'loading' && <div class="cam-loading"><i class="cam-spinner" /><span>{t('camera.loading')}</span></div>}
      </div>
      <div class="cam-viewer-bar">
        <span class="cam-viewer-name">{current ? current.name : t('camera.live_title')}</span>
        <button class="cam-viewer-close" onClick={props.onClose} title={t('camera.close')} aria-label={t('camera.close')}><X size={22} /></button>
      </div>
      {count > 1 && (
        <div class="cam-viewer-dots">
          {props.feeds.map((c, i) => (
            <button key={c.entity + i} class={i === index ? 'active' : ''} title={c.name} aria-label={c.name}
              onClick={() => props.onIndex(i)} />
          ))}
        </div>
      )}
    </div>
  );
}
