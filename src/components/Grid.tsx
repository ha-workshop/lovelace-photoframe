import { useRef, useState } from 'preact/hooks';
import { EyeOff, Pencil, Plus, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { GRID_COLS, MOBILE_COLS, bottom, clampBox, mobileView, settle, withMobile, type Card } from '../lib/layout';
import { CardAside, CardBody, Panel, cardTitle } from './CardView';
import { useSize } from '../lib/useSize';
import { t } from '../i18n';

// Сетка на 12 колонок с квадратными клетками: высота ряда = ширине колонки.
// В режиме редактирования карточку тянут (перенос) или за уголок (размер) — с привязкой к клеткам.
// Пальцем перенос — только после удержания: иначе на телефоне, где карточки занимают весь экран,
// страницу было бы не прокрутить. Повели пальцем сразу — это прокрутка страницы, а не перенос.
// На узком экране (телефон) — своя сетка на MOBILE_COLS колонок: места и размеры карточек там свои (card.m),
// а содержимое общее; × там прячет карточку только на телефоне.

const GAP = 12;
// Поле вокруг сетки внутри прокручиваемой области: в него выступают кнопки-«значки» на углах карточек.
const PAD = 16;
const NARROW = 700;     // уже — телефонная сетка
const DRAG_START = 6;   // px, после которых касание считается перетаскиванием
const HOLD = 350;       // мс удержания пальца, после которых карточку можно тащить
// Место под шапку и поля панели: содержимому достаётся меньше, чем размер карточки.
const BODY_PAD_X = 44;
const BODY_PAD_Y = 84;

interface Drag {
  id: string;
  mode: 'move' | 'resize';
  x0: number;
  y0: number;
  orig: Card;
  dx: number;
  dy: number;
  active: boolean;
  preview: Card[];
}

function point(e: TouchEvent | MouseEvent) {
  const t = 'touches' in e ? e.touches[0] || e.changedTouches[0] : e;
  return { x: t.clientX, y: t.clientY };
}

interface Props {
  editing: boolean;
  onCamera: (url: string) => void;
  onEdit: (card: Card) => void;
}

export function Grid({ editing, onCamera, onEdit }: Props) {
  const ha = useHA();
  const store = useStore();
  const ref = useRef<HTMLDivElement>(null);
  const box = useSize(ref);
  const [drag, setDrag] = useState<Drag | null>(null);
  const dragRef = useRef<Drag | null>(null);
  const all = store.state.layout.cards;

  const innerW = box.w - PAD * 2;
  const innerH = box.h - PAD * 2;
  const narrow = box.w > 0 && innerW < NARROW;
  const cols = narrow ? MOBILE_COLS : GRID_COLS;
  const cards = narrow ? mobileView(all) : all;
  const hidden = narrow ? all.filter((c) => c.m && c.m.hide) : [];
  const cell = (innerW - GAP * (cols - 1)) / cols;
  const step = cell + GAP;
  // Сколько целых рядов клеток помещается без прокрутки. Остаток (меньше клетки) делим поровну
  // сверху и снизу — карточки стоят по центру экрана, а не прилипают к шапке.
  const fitRows = Math.max(1, Math.floor((innerH + GAP) / step));
  const offsetY = Math.max(0, (innerH - (fitRows * step - GAP)) / 2);
  const rect = (c: Card) => ({ left: c.x * step, top: c.y * step, width: c.w * step - GAP, height: c.h * step - GAP });

  const start = (e: TouchEvent | MouseEvent, card: Card, mode: Drag['mode']) => {
    if (!editing) return;
    if ('button' in e && e.button !== 0) return;
    e.stopPropagation();
    const touch = 'touches' in e;
    // Палец на карточке: перенос — после удержания; уголок размера — сразу.
    const hold = touch && mode === 'move';
    const p = point(e);
    const d: Drag = { id: card.id, mode, x0: p.x, y0: p.y, orig: card, dx: 0, dy: 0, active: mode === 'resize', preview: cards };
    dragRef.current = d;
    let picked = !hold;
    let holdTimer = 0;
    if (hold) {
      holdTimer = window.setTimeout(() => {
        const cur = dragRef.current;
        if (!cur) return;
        picked = true;
        // Карточка «поднялась» — теперь её можно тащить; лёгкий отклик вибрацией, где она есть.
        const next = { ...cur, active: true };
        dragRef.current = next;
        setDrag(next);
        try { if (navigator.vibrate) navigator.vibrate(15); } catch (_) { /* нет вибрации */ }
      }, HOLD);
    } else {
      setDrag(d);
    }

    const move = (ev: TouchEvent | MouseEvent) => {
      const cur = dragRef.current;
      if (!cur) return;
      const q = point(ev);
      const dx = q.x - cur.x0, dy = q.y - cur.y0;
      if (!picked) {
        // Повели пальцем до удержания — это прокрутка страницы: карточку не трогаем.
        if (Math.abs(dx) > DRAG_START || Math.abs(dy) > DRAG_START) up();
        return;
      }
      const active = cur.active || Math.abs(dx) > DRAG_START || Math.abs(dy) > DRAG_START;
      if (!active) return;
      if (ev.cancelable) ev.preventDefault();
      const o = cur.orig;
      const target = clampBox(cur.mode === 'move'
        ? { ...o, x: o.x + dx / step, y: o.y + dy / step }
        : { ...o, w: o.w + dx / step, h: o.h + dy / step }, cols);
      const next = { ...cur, dx, dy, active, preview: settle(cards, target) };
      dragRef.current = next;
      setDrag(next);
    };
    const up = () => {
      clearTimeout(holdTimer);
      const cur = dragRef.current;
      dragRef.current = null;
      setDrag(null);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move, { passive: false } as any);
      document.removeEventListener('touchend', up);
      document.removeEventListener('touchcancel', up);
      if (cur && cur.active) save(cur.preview);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    // passive: false — иначе современный Chrome не даст отменить прокрутку во время перетаскивания.
    document.addEventListener('touchmove', move, { passive: false } as any);
    document.addEventListener('touchend', up);
    document.addEventListener('touchcancel', up);
  };

  // Узкий вид пишет только места на телефоне (m), широкий — саму раскладку.
  const save = (view: Card[]) => store.saveLayout({ ...store.state.layout, cards: narrow ? withMobile(all, view) : view });
  const shown = drag && drag.active ? drag.preview : cards;
  // На телефоне × — «скрыть здесь», на широком экране — удалить карточку совсем.
  const remove = (card: Card) => {
    if (!narrow) { store.saveLayout({ ...store.state.layout, cards: settle(all.filter((c) => c.id !== card.id)) }); return; }
    const view = cards.filter((c) => c.id !== card.id);
    const next = withMobile(all, settle(view)).map((c) => (c.id === card.id ? { ...c, m: { x: 0, y: 0, w: MOBILE_COLS, h: 3, hide: true } } : c));
    store.saveLayout({ ...store.state.layout, cards: next });
  };
  // Вернуть скрытую на телефоне карточку — в конец телефонной сетки.
  const unhide = (card: Card) => {
    const h = 3;
    const next = withMobile(all, cards).map((c) => (c.id === card.id ? { ...c, m: { x: 0, y: bottom(cards), w: MOBILE_COLS, h } } : c));
    store.saveLayout({ ...store.state.layout, cards: next });
  };

  // В редактировании сетка клеток заполняет весь экран (новые карточки добавляются кнопкой «+» в шапке).
  const used = bottom(shown);
  const rows = editing ? Math.max(fitRows, used) : used;
  // Центрируем, только когда всё помещается; если есть прокрутка — начинаем сверху.
  const top = rows <= fitRows ? offsetY : 0;
  return (
    <main class={'grid' + (editing ? ' editing' : '') + (drag && drag.active ? ' dragging-card' : '') + (narrow ? ' narrow' : '')} ref={ref}>
      {editing && narrow && (
        <div class="grid-note">
          <span>{t('grid.narrow_note')}</span>
          {hidden.length > 0 && (
            <div class="hidden-cards">
              <span class="muted"><EyeOff size={14} />{t('grid.hidden_on_phone')}</span>
              {hidden.map((c) => (
                <button key={c.id} class="chip" onClick={() => unhide(c)}><Plus size={14} /><span>{cardTitle(ha, c)}</span></button>
              ))}
            </div>
          )}
        </div>
      )}
      <div class="grid-inner" style={{ height: Math.max(0, rows * step - GAP), margin: (PAD + top) + 'px ' + PAD + 'px' }}>
        {editing && box.w > 0 && <GridDots rows={rows} cols={cols} cell={cell} step={step} />}
        {box.w > 0 && shown.map((card) => {
          const isDragged = !!drag && drag.active && drag.id === card.id;
          let style = rect(card);
          if (isDragged && drag) {
            // Перетаскиваемая карточка идёт за пальцем, на её будущем месте — пунктирная подложка.
            const o = rect(drag.orig);
            style = drag.mode === 'move'
              ? { ...o, left: o.left + drag.dx, top: o.top + drag.dy }
              : { ...o, width: Math.max(cell * 2, o.width + drag.dx), height: Math.max(cell * 2, o.height + drag.dy) };
          }
          return (
            <div key={card.id}>
              {isDragged && <div class="drop-slot" style={rect(card)} />}
              <Cell
                card={card}
                style={style}
                editing={editing}
                dragged={isDragged}
                onCamera={onCamera}
                onEdit={onEdit}
                onRemove={remove}
                narrow={narrow}
                onStart={start}
                ha={ha}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

function GridDots({ rows, cols, cell, step }: { rows: number; cols: number; cell: number; step: number }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<div key={r + ':' + c} class="grid-dot" style={{ left: c * step, top: r * step, width: cell, height: cell }} />);
    }
  }
  return <div class="grid-dots">{dots}</div>;
}

interface CellProps {
  card: Card;
  style: Record<string, number>;
  editing: boolean;
  dragged?: boolean;
  ha: ReturnType<typeof useHA>;
  onCamera: (url: string) => void;
  onEdit: (card: Card) => void;
  onRemove: (card: Card) => void;
  narrow?: boolean;
  onStart?: (e: TouchEvent | MouseEvent, card: Card, mode: 'move' | 'resize') => void;
}

function Cell({ card, style, editing, dragged, ha, onCamera, onEdit, onRemove, narrow, onStart }: CellProps) {
  const tint = card.color ? ' tint-' + card.color : '';
  return (
    <div
      class={'cell' + tint + (dragged ? ' dragged' : '')}
      style={style}
      onMouseDown={onStart ? (e) => onStart(e as unknown as MouseEvent, card, 'move') : undefined}
      onTouchStart={onStart ? (e) => onStart(e as unknown as TouchEvent, card, 'move') : undefined}
    >
      <Panel title={cardTitle(ha, card)} aside={!editing && <CardAside card={card} />} class={'card-' + card.type}>
        <div class="panel-body"><CardBody card={card} onCamera={onCamera} size={{ w: style.width - BODY_PAD_X, h: style.height - BODY_PAD_Y }} /></div>
      </Panel>
      {editing && (
        <>
          <button class="badge-btn badge-del" onMouseDown={stop} onTouchStart={stop} onClick={() => onRemove(card)} title={narrow ? t('grid.hide_on_phone') : t('common.delete')}>{narrow ? <EyeOff size={14} /> : <X size={16} />}</button>
          <button class="badge-btn badge-edit" onMouseDown={stop} onTouchStart={stop} onClick={() => onEdit(card)} title={t('common.edit')}><Pencil size={14} /></button>
          {onStart && (
            <div
              class="resize-handle"
              onMouseDown={(e) => onStart(e as unknown as MouseEvent, card, 'resize')}
              onTouchStart={(e) => onStart(e as unknown as TouchEvent, card, 'resize')}
            />
          )}
          <span class="size-tag">{card.w}×{card.h}</span>
        </>
      )}
    </div>
  );
}

function stop(e: Event) { e.stopPropagation(); }
