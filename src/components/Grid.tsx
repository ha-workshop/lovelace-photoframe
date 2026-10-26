import { useRef, useState } from 'preact/hooks';
import { Pencil, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { GRID_COLS, bottom, clampBox, settle, type Card } from '../lib/layout';
import { CardAside, CardBody, Panel, cardTitle } from './CardView';
import { useSize } from '../lib/useSize';
import { t } from '../i18n';

// Сетка на 12 колонок с квадратными клетками: высота ряда = ширине колонки.
// В режиме редактирования карточку тянут пальцем (перенос) или за уголок (размер) — с привязкой к клеткам.

const GAP = 12;
// Поле вокруг сетки внутри прокручиваемой области: в него выступают кнопки-«значки» на углах карточек.
const PAD = 16;
const NARROW = 700;     // уже — карточки идут столбиком на всю ширину
const DRAG_START = 6;   // px, после которых касание считается перетаскиванием
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
  const cards = store.state.layout.cards;

  const innerW = box.w - PAD * 2;
  const innerH = box.h - PAD * 2;
  const narrow = box.w > 0 && innerW < NARROW;
  const cell = (innerW - GAP * (GRID_COLS - 1)) / GRID_COLS;
  const step = cell + GAP;
  // Сколько целых рядов клеток помещается без прокрутки. Остаток (меньше клетки) делим поровну
  // сверху и снизу — карточки стоят по центру экрана, а не прилипают к шапке.
  const fitRows = Math.max(1, Math.floor((innerH + GAP) / step));
  const offsetY = Math.max(0, (innerH - (fitRows * step - GAP)) / 2);
  const rect = (c: Card) => ({ left: c.x * step, top: c.y * step, width: c.w * step - GAP, height: c.h * step - GAP });

  const start = (e: TouchEvent | MouseEvent, card: Card, mode: Drag['mode']) => {
    if (!editing || narrow) return;
    if ('button' in e && e.button !== 0) return;
    e.stopPropagation();
    const p = point(e);
    const d: Drag = { id: card.id, mode, x0: p.x, y0: p.y, orig: card, dx: 0, dy: 0, active: mode === 'resize', preview: cards };
    dragRef.current = d;
    setDrag(d);

    const move = (ev: TouchEvent | MouseEvent) => {
      const cur = dragRef.current;
      if (!cur) return;
      const q = point(ev);
      const dx = q.x - cur.x0, dy = q.y - cur.y0;
      const active = cur.active || Math.abs(dx) > DRAG_START || Math.abs(dy) > DRAG_START;
      if (!active) return;
      if (ev.cancelable) ev.preventDefault();
      const o = cur.orig;
      const target = clampBox(cur.mode === 'move'
        ? { ...o, x: o.x + dx / step, y: o.y + dy / step }
        : { ...o, w: o.w + dx / step, h: o.h + dy / step });
      const next = { ...cur, dx, dy, active, preview: settle(cards, target) };
      dragRef.current = next;
      setDrag(next);
    };
    const up = () => {
      const cur = dragRef.current;
      dragRef.current = null;
      setDrag(null);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move, { passive: false } as any);
      document.removeEventListener('touchend', up);
      document.removeEventListener('touchcancel', up);
      if (cur && cur.active) store.saveLayout({ ...store.state.layout, cards: cur.preview });
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    // passive: false — иначе современный Chrome не даст отменить прокрутку во время перетаскивания.
    document.addEventListener('touchmove', move, { passive: false } as any);
    document.addEventListener('touchend', up);
    document.addEventListener('touchcancel', up);
  };

  const shown = drag && drag.active ? drag.preview : cards;
  const remove = (card: Card) => store.saveLayout({ ...store.state.layout, cards: settle(cards.filter((c) => c.id !== card.id)) });

  // Узкий экран: столбиком в порядке сетки, высота — как у карточки той же «клеточной» высоты на 6 колонках.
  if (narrow) {
    const cell6 = (innerW - GAP * 5) / 6;
    let top = 0;
    const list = cards.slice().sort((a, b) => a.y - b.y || a.x - b.x).map((card) => {
      const height = Math.max(3, Math.min(card.h, 6)) * (cell6 + GAP) - GAP;
      const style = { left: 0, top, width: innerW, height };
      top += height + GAP;
      return { card, style };
    });
    return (
      <main class="grid" ref={ref}>
        {editing && <div class="grid-note">{t('grid.narrow_note')}</div>}
        <div class="grid-inner" style={{ height: top, margin: PAD }}>
          {list.map(({ card, style }) => (
            <Cell key={card.id} card={card} style={style} editing={editing} onCamera={onCamera} onEdit={onEdit} onRemove={remove} ha={ha} />
          ))}
        </div>
      </main>
    );
  }

  // В редактировании сетка клеток заполняет весь экран (новые карточки добавляются кнопкой «+» в шапке).
  const used = bottom(shown);
  const rows = editing ? Math.max(fitRows, used) : used;
  // Центрируем, только когда всё помещается; если есть прокрутка — начинаем сверху.
  const top = rows <= fitRows ? offsetY : 0;
  return (
    <main class={'grid' + (editing ? ' editing' : '') + (drag && drag.active ? ' dragging-card' : '')} ref={ref}>
      <div class="grid-inner" style={{ height: Math.max(0, rows * step - GAP), margin: (PAD + top) + 'px ' + PAD + 'px' }}>
        {editing && box.w > 0 && <GridDots rows={rows} cell={cell} step={step} />}
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

function GridDots({ rows, cell, step }: { rows: number; cell: number; step: number }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
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
  onStart?: (e: TouchEvent | MouseEvent, card: Card, mode: 'move' | 'resize') => void;
}

function Cell({ card, style, editing, dragged, ha, onCamera, onEdit, onRemove, onStart }: CellProps) {
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
          <button class="badge-btn badge-del" onMouseDown={stop} onTouchStart={stop} onClick={() => onRemove(card)} title={t('common.delete')}><X size={16} /></button>
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
