import type { RefObject } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { ChevronDown, ChevronUp, Grid3x3, Plus, WifiOff, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { Icon } from '../lib/icons';
import { formatDate, formatTime, useNow } from '../lib/time';
import { cardTypeTitle, type Card } from '../lib/layout';
import {
  CLOCK_COLOR, FONT_WEIGHT, HEX, colorValue, GRID, activeGrid, clampRect, defaultGrid, gridPatch, setLockPrefs, sortWidgets, useLockPrefs, useOrientation,
  type Orientation,
  type GridRect, type HAlign, type LockGrid, type VAlign, type ChipStyle, type ClockColor, type ClockFont, type ClockSize, type DatePos, type LockLayout, type LockPrefs, type WidgetsPos,
} from '../lib/lockscreen';
import { summary } from './CardView';
import { AmbientWeather } from './Weather';
import { useLinger } from '../lib/visibility';
import { t } from '../i18n';

// Режим покоя — как экран блокировки iPhone: фото на весь экран, большие часы и виджеты (плашки) карточек
// с галочкой «на фото». Вид часов и набор виджетов — свои на каждом устройстве (lib/lockscreen):
// долгое нажатие на фото → режим настройки, нажатие на часы или виджеты открывает их настройки.
// Большие часы перерисовываются сами, не трогая виджеты.
type Region = [number, number, number, number];

function layoutOf(prefs: LockPrefs) {
  return prefs.layout === 'auto' ? (window.innerWidth <= 700 ? 'center' : 'corner') : prefs.layout;
}

// Сетка занимает экран с отступом — блоки не прилипают к краям.
export const INSET = 3; // % по каждой стороне
export const SPAN = 100 - INSET * 2;

function rectRegion(r: GridRect): Region {
  const f = (v: number) => (INSET + (v / GRID) * SPAN) / 100;
  return [f(r.x), f(r.y), f(r.x + r.w), f(r.y + r.h)];
}

// Блок на сетке: место в процентах и выравнивание содержимого по тому, к какой стороне он ближе.
function rectStyle(r: GridRect) {
  return {
    left: INSET + (r.x / GRID) * SPAN + '%', top: INSET + (r.y / GRID) * SPAN + '%',
    width: (r.w / GRID) * SPAN + '%', height: (r.h / GRID) * SPAN + '%',
  };
}

function rectAlign(r: GridRect) {
  const cx = r.x + r.w / 2, cy = r.y + r.h / 2;
  return ' g-' + (r.ha || (cx < GRID / 3 ? 'left' : cx > (GRID * 2) / 3 ? 'right' : 'center'))
    + ' g-' + (r.va || (cy < GRID / 3 ? 'top' : cy > (GRID * 2) / 3 ? 'bottom' : 'middle'));
}

// Где на экране часы и где виджеты — оттуда и берём фон для цвета «в обратку» (доли ширины и высоты кадра).
function clockRegion(prefs: LockPrefs, grid: LockGrid | null): Region {
  if (grid) return rectRegion(grid.clock);
  const layout = layoutOf(prefs);
  if (layout === 'top') return [0.2, 0.05, 0.8, 0.35];
  if (layout === 'corner') return [0, 0.55, 0.55, 0.95];
  return [0.2, 0.55, 0.8, 0.9];
}

const HINT_REGION: Region = [0.4, 0.88, 0.6, 1];

function widgetsRegion(prefs: LockPrefs, grid: LockGrid | null): Region {
  if (grid) return rectRegion(grid.widgets);
  if (prefs.widgetsPos === 'top') return [0.15, 0, 0.85, 0.2];
  if (prefs.widgetsPos === 'bottom') return [0.15, 0.78, 0.85, 0.96];
  return layoutOf(prefs) === 'corner' ? [0.5, 0.7, 1, 0.96] : clockRegion(prefs, null);
}

function luminance([r, g, b]: number[]) {
  const f = (v: number) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

// Цвет часов «в обратку» к участку фото под ними: обратный цвет; если он сливается с фоном (серое на сером) —
// белый или почти чёрный, что виднее. Считается по крошечной копии кадра — дёшево и на старых рамках.
interface Ink { color: string; dark: boolean }
const WHITE: Ink = { color: '#ffffff', dark: false };

function useContrastColor(thumb: string | undefined, region: Region, active: boolean): Ink {
  const [ink, setInk] = useState<Ink>(WHITE);
  const key = region.join(',');
  useEffect(() => {
    if (!active || !thumb) return;
    const img = new Image();
    img.onload = () => {
      try {
        const c = document.createElement('canvas');
        c.width = img.width; c.height = img.height;
        const ctx = c.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        const x = Math.floor(region[0] * c.width), y = Math.floor(region[1] * c.height);
        const w = Math.max(1, Math.floor((region[2] - region[0]) * c.width)), h = Math.max(1, Math.floor((region[3] - region[1]) * c.height));
        const px = ctx.getImageData(x, y, w, h).data;
        const sum = [0, 0, 0];
        for (let i = 0; i < px.length; i += 4) { sum[0] += px[i]; sum[1] += px[i + 1]; sum[2] += px[i + 2]; }
        const n = px.length / 4;
        const bg = sum.map((v) => v / n);
        const inv = bg.map((v) => 255 - v);
        const lb = luminance(bg), li = luminance(inv);
        const ratio = (Math.max(lb, li) + 0.05) / (Math.min(lb, li) + 0.05);
        const pick = ratio >= 3 ? inv : lb > 0.35 ? [17, 17, 17] : [255, 255, 255];
        setInk({ color: 'rgb(' + pick.map(Math.round).join(',') + ')', dark: luminance(pick) < 0.25 });
      } catch (e) { setInk(WHITE); }
    };
    img.src = thumb;
  }, [thumb, key, active]);
  return active ? ink : WHITE;
}

function AmbientTime({ prefs }: { prefs: LockPrefs }) {
  const now = useNow(5000);
  // Цвет задаёт весь блок часов (вместе с датой и погодой) — здесь его просто наследуем.
  const above = prefs.datePos === 'above' || (prefs.datePos !== 'below' && prefs.layout === 'top');
  const date = prefs.date && <div class={'ambient-date' + (above ? ' above' : '')}>{formatDate(now)}</div>;
  return (
    <>
      {above && date}
      <div class="ambient-time" style={{ fontWeight: FONT_WEIGHT[prefs.font] }}>
        {formatTime(now)}
      </div>
      {!above && date}
    </>
  );
}

interface Props {
  visible: boolean;
  innerRef: RefObject<HTMLDivElement>;
  // Крошечная копия кадра на экране — для цвета часов «в обратку».
  photoThumb?: string;
  onSheet: (card: Card) => void;
  onConnection: () => void;
  // Стрелка к управлению домом — то же, что смахнуть вверх.
  showHint: boolean;
  onHome: () => void;
  // Режим настройки экрана с фото (долгое нажатие) и выход из него.
  customizing: boolean;
  onDone: () => void;
}

export function Ambient(props: Props) {
  const ha = useHA();
  const store = useStore();
  const prefs = useLockPrefs();
  const [panel, setPanel] = useState<'' | 'clock' | 'widgets'>('');
  // Виджеты — со всех экранов показанного дома; погода с галочкой «на фото» встаёт под часами.
  const all = store.homeCards().filter((c) => c.chip);
  const weather = all.filter((c) => c.type === 'weather' && c.items.length)[0];
  const widgets = sortWidgets(all.filter((c) => c.type !== 'weather'), prefs);
  const chips = widgets.filter((c) => prefs.hidden.indexOf(c.id) === -1);
  const alerts = chips.filter((c) => summary(ha, c).alert);
  const edit = props.customizing;
  const done = () => { setPanel(''); props.onDone(); };
  // Сетка: пока блок тянут, его место — черновик (сохраняется, когда отпустили).
  const [draft, setDraft] = useState<LockGrid | null>(null);
  // Сетка — своя для горизонтального и вертикального положения рамки.
  const orient = useOrientation();
  const saved = activeGrid(prefs, orient);
  const grid = draft || saved;
  const toggleGrid = () => setLockPrefs(gridPatch(orient, saved ? null : defaultGrid(prefs, orient === 'landscape' && window.innerWidth > 700)));

  // «В обратку» к фото — надписи блока по своему участку кадра: часы с датой и погодой (и подсказка) — по цвету
  // часов, виджеты — по своему цвету (или как у часов).
  const contrast = prefs.color === 'contrast';
  const wColor = prefs.widgetsColor || prefs.color;
  const wContrast = wColor === 'contrast';
  // Свой цвет виджетов (текст и значки одним цветом); белый «как у часов» — прежний вид плашек.
  const wFixed = !wContrast && !(prefs.widgetsColor === '' && wColor === 'white');
  const wValue = colorValue(wColor, prefs.widgetsColor ? prefs.widgetsCustomColor : prefs.customColor);
  // Свой цвет часов (не белый и не «авто») — для всего блока: время, дата и погода.
  const cFixed = !contrast && prefs.color !== 'white';
  const cValue = colorValue(prefs.color, prefs.customColor);
  const clockInk = useContrastColor(props.photoThumb, clockRegion(prefs, grid), contrast);
  const widgetsInk = useContrastColor(props.photoThumb, widgetsRegion(prefs, grid), wContrast);
  const hintInk = useContrastColor(props.photoThumb, HINT_REGION, contrast);
  // Редактор сетки: пока идёт настройка, экран виден — содержимое не выгружаем.
  const alive = useLinger(props.visible || edit);
  const cls = 'ambient' + (props.visible ? ' visible' : '')
    + (grid ? ' lock-grid' : ' lock-' + prefs.layout + ' widgets-' + prefs.widgetsPos) + ' lock-size-' + prefs.size
    + ' chips-' + prefs.chipStyle + (edit ? ' customizing' : '');
  return (
    <>
      <div ref={props.innerRef} class={cls}>
        {alive && <>
        <div class={'ambient-clock' + (contrast ? ' text-contrast' : '') + (cFixed ? ' ink-fixed' + (prefs.color === 'accent' ? ' accent-text' : '') : '')
            + (clockInk.dark ? ' ink-dark' : '') + (grid ? rectAlign(grid.clock) : '')}
          style={{ ...(grid ? rectStyle(grid.clock) : {}), ...(contrast ? { color: clockInk.color } : cFixed && cValue ? { color: cValue } : {}) }} onClick={edit ? () => setPanel('clock') : undefined}>
          <AmbientTime prefs={prefs} />
          {prefs.weather && weather && <AmbientWeather entity={weather.items[0].entity} />}
        </div>

        <div class={'glances' + (wContrast ? ' text-contrast' : '') + (wFixed ? ' ink-fixed' + (wColor === 'accent' ? ' accent-text' : '') : '')
            + (widgetsInk.dark ? ' ink-dark' : '') + (grid ? rectAlign(grid.widgets) : '')}
          style={{ ...(grid ? rectStyle(grid.widgets) : {}), ...(wContrast ? { color: widgetsInk.color } : wFixed && wValue ? { color: wValue } : {}) }} onClick={edit ? () => setPanel('widgets') : undefined}>
          {ha.status !== 'connected' && ha.status !== 'connecting' && !edit && (
            <button class="glance warn" onClick={props.onConnection}><WifiOff size={18} /><span>{t('ambient.offline')}</span></button>
          )}
          {edit && !chips.length && <span class="glance glance-add"><Plus size={18} /><span>{t('lock.add_widgets')}</span></span>}
          {/* Тревоги — первыми */}
          {alerts.concat(chips.filter((c) => alerts.indexOf(c) === -1)).map((card) => {
            const s = summary(ha, card);
            return (
              <button key={card.id} class={'glance' + (s.lit ? ' lit' : '') + (s.alert ? ' alert' : '')} title={s.text}
                onClick={edit ? undefined : () => props.onSheet(card)}>
                <Icon name={card.icon} size={18} /><span>{s.text}</span>
              </button>
            );
          })}
        </div>

        {/* Вместо полоски iOS — стрелка к управлению домом: появляется при касании фото, сама гаснет */}
        <button class={'home-hint' + (contrast ? ' text-contrast' : '') + (props.showHint ? ' visible' : '') + (hintInk.dark ? ' ink-dark' : '')} aria-label={t('ambient.home_hint')}
          style={contrast ? { color: hintInk.color } : undefined} onClick={props.onHome} tabIndex={props.showHint ? 0 : -1}>
          <ChevronUp size={36} strokeWidth={1.8} />
        </button>
        {edit && grid && !panel && (
          <GridEditor grid={grid} onDraft={setDraft} onDone={(g) => { setDraft(null); setLockPrefs(gridPatch(orient, g)); }} onTap={setPanel} />
        )}
        </>}
      </div>

      {alive && edit && (
        <div class="lock-ui">
          <div class="lock-top">
            <span>{t(grid ? 'lock.grid_hint' : 'lock.hint')}</span>
            <span class="lock-top-btns">
              <button class={'pill-btn' + (saved ? ' on' : '')} onClick={toggleGrid} title={t('lock.grid')}>
                <Grid3x3 size={16} /><span>{t('lock.grid')}</span>
              </button>
              <button class="pill-btn accent-bg" onClick={done}>{t('common.done')}</button>
            </span>
          </div>
          {/* Настройки блока — окном поверх экрана; сам экран при этом не двигается */}
          {panel && (
            <div class="lock-modal" onClick={(e) => { if (e.target === e.currentTarget) setPanel(''); }}>
              <LockPanel kind={panel} widgets={widgets} hasWeather={!!weather} onClose={() => setPanel('')} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

// Редактор сетки: поверх экрана — линии ячеек и рамки блоков. Тянуть рамку — двигать блок, уголок — размер;
// нажатие без движения открывает настройки блока. Касание и мышь (на Android 5 нет Pointer Events).
const KINDS: Array<'clock' | 'widgets'> = ['clock', 'widgets'];

export function GridEditor(props: { grid: LockGrid; onDraft: (g: LockGrid) => void; onDone: (g: LockGrid) => void; onTap: (k: 'clock' | 'widgets') => void }) {
  const area = useRef<HTMLDivElement>(null);
  const start = (e: TouchEvent | MouseEvent, kind: 'clock' | 'widgets', resize: boolean) => {
    const el = area.current;
    if (!el) return;
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    const box = el.getBoundingClientRect();
    const pt = (ev: TouchEvent | MouseEvent) => {
      const p = 'touches' in ev ? (ev.touches[0] || ev.changedTouches[0]) : ev;
      return { x: p.clientX, y: p.clientY };
    };
    const from = pt(e);
    const base = props.grid[kind];
    const cellW = box.width / GRID, cellH = box.height / GRID;
    // Меньше содержимого блок не сделать: часы — по самой широкой строке и сумме строк,
    // виджеты — по самой широкой плашке, а высота — по числу рядов, в которые плашки лягут при этой ширине.
    const block = el.parentElement ? el.parentElement.querySelector(kind === 'clock' ? '.ambient-clock' : '.glances') as HTMLElement | null : null;
    const items: HTMLElement[] = block ? [].slice.call(block.children) : [];
    const sizes = items.map((c) => {
      const b = c.getBoundingClientRect();
      const st = getComputedStyle(c);
      return { w: b.width + parseFloat(st.marginLeft) + parseFloat(st.marginRight), h: b.height + parseFloat(st.marginTop) + parseFloat(st.marginBottom) };
    });
    const pad = block ? (() => { const st = getComputedStyle(block); return { x: parseFloat(st.paddingLeft) + parseFloat(st.paddingRight), y: parseFloat(st.paddingTop) + parseFloat(st.paddingBottom) }; })() : { x: 0, y: 0 };
    const widest = sizes.reduce((m, z) => Math.max(m, z.w), 0);
    const minW = Math.max(1, Math.ceil((widest + pad.x) / cellW - 0.05));
    const minH = (w: number) => {
      if (!sizes.length) return 1;
      if (kind === 'clock') return Math.max(1, Math.ceil((sizes.reduce((m, z) => m + z.h, 0) + pad.y) / cellH - 0.05));
      // Плашки по рядам, как их разложит flex-wrap
      const room = w * cellW - pad.x;
      let rows = 1, line = 0, rowH = 0, total = 0;
      sizes.forEach((z) => {
        if (line && line + z.w > room) { rows++; total += rowH; line = 0; rowH = 0; }
        line += z.w; rowH = Math.max(rowH, z.h);
      });
      total += rowH;
      return Math.max(1, Math.ceil((total + pad.y) / cellH - 0.05));
    };
    let moved = false;
    let last = props.grid;
    const move = (ev: TouchEvent | MouseEvent) => {
      const p = pt(ev);
      const dx = ((p.x - from.x) / box.width) * GRID, dy = ((p.y - from.y) / box.height) * GRID;
      if (Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) moved = true;
      if (!moved) return;
      if (ev.cancelable) ev.preventDefault();
      let r = resize ? { ...base, w: base.w + dx, h: base.h + dy } : { ...base, x: base.x + dx, y: base.y + dy };
      if (resize) {
        const w = Math.max(minW, Math.round(r.w));
        r = { ...r, w, h: Math.max(minH(w), Math.round(r.h)) };
      }
      last = { ...props.grid, [kind]: clampRect(r) };
      props.onDraft(last);
    };
    const end = () => {
      document.removeEventListener('touchmove', move);
      document.removeEventListener('touchend', end);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', end);
      if (moved) props.onDone(last); else props.onTap(kind);
    };
    document.addEventListener('touchmove', move, { passive: false } as AddEventListenerOptions);
    document.addEventListener('touchend', end);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
  };
  return (
    <div class="grid-editor" ref={area} style={{ left: INSET + '%', top: INSET + '%', width: SPAN + '%', height: SPAN + '%' }}>
      {KINDS.map((kind) => {
        const r = props.grid[kind];
        const pos = { left: (r.x / GRID) * 100 + '%', top: (r.y / GRID) * 100 + '%', width: (r.w / GRID) * 100 + '%', height: (r.h / GRID) * 100 + '%' };
        return (
          <div key={kind} class={'grid-box grid-' + kind} style={pos}
            onTouchStart={(e) => start(e, kind, false)} onMouseDown={(e) => start(e, kind, false)}>
            <span class="grid-label">{t(kind === 'clock' ? 'lock.clock' : 'lock.widgets')}</span>
            <span class="grid-resize" onTouchStart={(e) => start(e, kind, true)} onMouseDown={(e) => start(e, kind, true)} />
          </div>
        );
      })}
    </div>
  );
}

// Палитра: (как часы) · авто · белый · под цвет фото · тёплый · мятный · голубой · розовый · свой (hex).
// Свой — системный выбор цвета; на старых Android его может не быть, поэтому рядом поле для hex.
function ColorRow(props: { value: ClockColor | ''; custom: string; same?: boolean; onPick: (c: ClockColor | '') => void; onCustom: (hex: string) => void }) {
  const [text, setText] = useState(props.custom);
  useEffect(() => setText(props.custom), [props.custom]);
  const own = props.value === 'custom';
  return (
    <>
      <div class="lock-colors">
        {props.same && (
          <button class={'lock-color lock-color-same' + (props.value === '' ? ' on' : '')} title={t('lock.color.same')}
            onClick={() => props.onPick('')}>{t('lock.color.same')}</button>
        )}
        {COLORS.map((c) => (
          <button key={c} title={t('lock.color.' + c)} class={'lock-color' + (props.value === c ? ' on' : '') + (c === 'accent' ? ' accent-bg' : '') + (c === 'contrast' ? ' lock-color-contrast' : '')}
            style={c === 'accent' || c === 'contrast' ? undefined : { background: CLOCK_COLOR[c] }} onClick={() => props.onPick(c)}>{c === 'contrast' ? <span>A</span> : null}</button>
        ))}
        <label class={'lock-color lock-color-custom' + (own ? ' on' : '')} title={t('lock.color.custom')}
          style={own && HEX.test(props.custom) ? { background: props.custom } : undefined} onClick={() => { if (!own) props.onPick('custom'); }}>
          <input type="color" value={HEX.test(props.custom) ? props.custom : '#ffb86b'} onInput={(e) => props.onCustom(e.currentTarget.value)} />
          <span>#</span>
        </label>
      </div>
      {own && (
        <div class="option">
          <label>{t('lock.color.custom')}</label>
          <input class={'hex-input' + (HEX.test(text) ? '' : ' invalid')} value={text} maxLength={7} placeholder="#ffb86b"
            onInput={(e) => {
              let v = e.currentTarget.value.trim();
              if (v && v[0] !== '#') v = '#' + v;
              setText(v);
              if (HEX.test(v)) props.onCustom(v.toLowerCase());
            }} />
        </div>
      )}
    </>
  );
}

const FONTS: ClockFont[] = ['thin', 'light', 'regular', 'bold'];
// Авто («в обратку» к фото) — первым, с буквой А.
const COLORS: ClockColor[] = ['contrast', 'white', 'accent', 'warm', 'mint', 'sky', 'rose'];
const SIZES: ClockSize[] = ['xs', 's', 'm', 'l', 'xl'];
const WIDGET_POS: WidgetsPos[] = ['clock', 'top', 'bottom'];
const DATE_POS: DatePos[] = ['auto', 'above', 'below'];
const LAYOUTS: LockLayout[] = ['auto', 'corner', 'center', 'top'];
const H_ALIGN: Array<HAlign | ''> = ['', 'left', 'center', 'right'];
const V_ALIGN: Array<VAlign | ''> = ['', 'top', 'middle', 'bottom'];

// На сетке «расположение» — это выравнивание внутри самого блока (место блока задаёт сетка).
function BlockAlign(props: { kind: 'clock' | 'widgets'; grid: LockGrid; orient: Orientation }) {
  const r = props.grid[props.kind];
  const set = (patch: Partial<GridRect>) => {
    const next: GridRect = { ...r, ...patch };
    if (!next.ha) delete next.ha;
    if (!next.va) delete next.va;
    setLockPrefs(gridPatch(props.orient, { ...props.grid, [props.kind]: next }));
  };
  return (
    <>
      <div class="option">
        <label>{t('lock.align_h')}</label>
        <div class="seg">
          {H_ALIGN.map((a) => <button key={a} class={(r.ha || '') === a ? 'active' : ''} onClick={() => set({ ha: (a || undefined) as HAlign })}>{t('lock.align.' + (a || 'auto'))}</button>)}
        </div>
      </div>
      <div class="option">
        <label>{t('lock.align_v')}</label>
        <div class="seg">
          {V_ALIGN.map((a) => <button key={a} class={(r.va || '') === a ? 'active' : ''} onClick={() => set({ va: (a || undefined) as VAlign })}>{t('lock.align.' + (a || 'auto'))}</button>)}
        </div>
      </div>
    </>
  );
}
const CHIP_STYLES: ChipStyle[] = ['auto', 'text', 'icons'];

// Панель снизу, как на iPhone: «Часы» — шрифт, цвет, размер, расположение, дата и погода;
// «Виджеты» — какие плашки показывать, в каком порядке и как (текстом или значками).
function LockPanel(props: { kind: 'clock' | 'widgets'; widgets: Card[]; hasWeather: boolean; onClose: () => void }) {
  const p = useLockPrefs();
  const orient = useOrientation();
  const g = activeGrid(p, orient);
  const move = (i: number, dir: number) => {
    const ids = props.widgets.map((c) => c.id);
    const j = i + dir;
    const tmp = ids[i]; ids[i] = ids[j]; ids[j] = tmp;
    setLockPrefs({ order: ids });
  };
  const toggle = (id: string, shown: boolean) => {
    const rest = p.hidden.filter((x) => x !== id);
    setLockPrefs({ hidden: shown ? rest : rest.concat(id) });
  };
  return (
    <div class="lock-panel" onClick={(e) => e.stopPropagation()}>
      <div class="lock-panel-head">
        <b>{props.kind === 'clock' ? t('lock.clock') : t('lock.widgets')}</b>
        <button class="icon-btn" onClick={props.onClose}><X size={20} /></button>
      </div>
      {props.kind === 'clock' ? (
        <>
          <div class="lock-sec">{t('lock.sec.look')}</div>
          <div class="lock-fonts">
            {FONTS.map((f) => (
              <button key={f} class={'lock-font' + (p.font === f ? ' on' : '')} style={{ fontWeight: FONT_WEIGHT[f] }} onClick={() => setLockPrefs({ font: f })}>12</button>
            ))}
          </div>
          <div class="option">
            <label>{t('lock.size')}</label>
            <div class="seg">
              {SIZES.map((s) => <button key={s} class={p.size === s ? 'active' : ''} onClick={() => setLockPrefs({ size: s })}>{t('lock.size.' + s)}</button>)}
            </div>
          </div>
          <div class="lock-sec">{t('lock.sec.color')}</div>
          <ColorRow value={p.color} custom={p.customColor} onPick={(c) => setLockPrefs({ color: c as ClockColor })}
            onCustom={(hex) => setLockPrefs({ color: 'custom', customColor: hex })} />
          <div class="lock-sec">{t('lock.sec.place')}</div>
          {g ? <BlockAlign kind="clock" grid={g} orient={orient} /> : (
            <div class="option">
              <label>{t('lock.layout')}</label>
              <select value={p.layout} onChange={(e) => setLockPrefs({ layout: e.currentTarget.value as LockLayout })}>
                {LAYOUTS.map((l) => <option key={l} value={l}>{t('lock.layout.' + l)}</option>)}
              </select>
            </div>
          )}
          <div class="lock-sec">{t('lock.sec.show')}</div>
          <label class="check"><input type="checkbox" checked={p.date} onChange={(e) => setLockPrefs({ date: e.currentTarget.checked })} />{t('lock.date')}</label>
          {p.date && (
            <div class="option">
              <label>{t('lock.date_pos')}</label>
              <div class="seg">
                {DATE_POS.map((d) => <button key={d} class={p.datePos === d ? 'active' : ''} onClick={() => setLockPrefs({ datePos: d })}>{t('lock.date_pos.' + d)}</button>)}
              </div>
            </div>
          )}
          {props.hasWeather && (
            <label class="check"><input type="checkbox" checked={p.weather} onChange={(e) => setLockPrefs({ weather: e.currentTarget.checked })} />{t('lock.weather')}</label>
          )}
        </>
      ) : (
        <>
          <div class="lock-sec">{t('lock.sec.color')}</div>
          <ColorRow value={p.widgetsColor} custom={p.widgetsCustomColor} same onPick={(c) => setLockPrefs({ widgetsColor: c })}
            onCustom={(hex) => setLockPrefs({ widgetsColor: 'custom', widgetsCustomColor: hex })} />
          <div class="lock-sec">{t('lock.sec.place')}</div>
          {g ? <BlockAlign kind="widgets" grid={g} orient={orient} /> : (
            <div class="option">
              <label>{t('lock.widgets_pos')}</label>
              <div class="seg">
                {WIDGET_POS.map((w) => <button key={w} class={p.widgetsPos === w ? 'active' : ''} onClick={() => setLockPrefs({ widgetsPos: w })}>{t('lock.widgets_pos.' + w)}</button>)}
              </div>
            </div>
          )}
          <div class="lock-sec">{t('lock.sec.look')}</div>
          <div class="option">
            <label>{t('lock.chip_style')}</label>
            <select value={p.chipStyle} onChange={(e) => setLockPrefs({ chipStyle: e.currentTarget.value as ChipStyle })}>
              {CHIP_STYLES.map((s) => <option key={s} value={s}>{t('lock.chip_style.' + s)}</option>)}
            </select>
          </div>
          <div class="lock-sec">{t('lock.sec.which')}</div>
          {!props.widgets.length && <p class="hint">{t('lock.no_widgets')}</p>}
          {props.widgets.map((c, i) => {
            return (
              <div key={c.id} class="lock-widget">
                <label class="check">
                  <input type="checkbox" checked={p.hidden.indexOf(c.id) === -1} onChange={(e) => toggle(c.id, e.currentTarget.checked)} />
                  <Icon name={c.icon} size={16} /><span>{c.title || cardTypeTitle(c.type)}</span>
                </label>
                <button class="icon-btn" disabled={i === 0} onClick={() => move(i, -1)}><ChevronUp size={18} /></button>
                <button class="icon-btn" disabled={i === props.widgets.length - 1} onClick={() => move(i, 1)}><ChevronDown size={18} /></button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
