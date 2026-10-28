// Экран с фото — как экран блокировки iPhone: вид часов, что под ними и какие виджеты (плашки) показывать.
// Настройка конкретного устройства (localStorage): кухонная рамка и телефон выглядят по-своему.
// Меняется прямо на экране: долгое нажатие на фото → «Настроить» (components/LockCustomizer).
import { useEffect, useState } from 'preact/hooks';

export type ClockFont = 'thin' | 'light' | 'regular' | 'bold';
// contrast — «в обратку» к фото под часами (считается по кадру, см. Ambient).
// custom — свой цвет (hex) в customColor / widgetsCustomColor.
export type ClockColor = 'white' | 'contrast' | 'accent' | 'warm' | 'mint' | 'sky' | 'rose' | 'custom';
export type ClockSize = 'xs' | 's' | 'm' | 'l' | 'xl';
// auto — в углу на большом экране, по центру на телефоне; top — по центру сверху, как на iPhone.
export type LockLayout = 'auto' | 'corner' | 'center' | 'top';
// auto — текстом на большом экране, значками на телефоне.
export type ChipStyle = 'auto' | 'text' | 'icons';
// Где виджеты (плашки управления домом): рядом с часами или отдельно — вверху или внизу экрана.
export type WidgetsPos = 'clock' | 'top' | 'bottom';
// Дата над часами или под ними; auto — над, когда часы по центру сверху (как на iPhone), иначе под.
export type DatePos = 'auto' | 'above' | 'below';

// Сетка экрана с фото: блоки «часы» (с датой и погодой) и «виджеты» стоят где угодно, по ячейкам GRID×GRID.
// null — обычные варианты расположения (layout, widgetsPos). Своя у каждого устройства; рамка сообщает её в HA,
// и другую рамку можно настроить так же (Настройки → Раскладка).
export const GRID = 12;
// Выравнивание содержимого внутри блока; нет — по стороне экрана, к которой блок ближе.
export type HAlign = 'left' | 'center' | 'right';
export type VAlign = 'top' | 'middle' | 'bottom';
export interface GridRect { x: number; y: number; w: number; h: number; ha?: HAlign; va?: VAlign }
export interface LockGrid { clock: GridRect; widgets: GridRect }

export interface LockPrefs {
  font: ClockFont;
  color: ClockColor;
  // Цвет текста и значков виджетов; '' — как у часов.
  widgetsColor: ClockColor | '';
  customColor: string;
  widgetsCustomColor: string;
  size: ClockSize;
  layout: LockLayout;
  date: boolean;
  datePos: DatePos;
  weather: boolean;
  chipStyle: ChipStyle;
  widgetsPos: WidgetsPos;
  // Виджеты: какие спрятаны и в каком порядке остальные (id карточек). Новых карточек в order нет — они в конце.
  hidden: string[];
  order: string[];
  // Сетка своя для каждой ориентации экрана: grid — горизонтальная, gridPortrait — вертикальная.
  grid: LockGrid | null;
  gridPortrait: LockGrid | null;
  // Последняя сетка, присланная из HA (редактор «Фоторамки»): номер правки — чтобы не затереть своё старым.
  gridRev: number;
}

export const FONT_WEIGHT: Record<ClockFont, number> = { thin: 200, light: 300, regular: 500, bold: 700 };
export const CLOCK_COLOR: Record<ClockColor, string> = {
  white: '#ffffff', contrast: '', accent: '', warm: '#fcd34d', mint: '#6ee7b7', sky: '#7dd3fc', rose: '#fda4af', custom: '',
};

export const HEX = /^#[0-9a-f]{6}$/i;

// Цвет для CSS: из палитры или свой; '' — не задан (белый по умолчанию, «авто» или «под цвет фото» — классами).
export function colorValue(c: ClockColor, custom: string) {
  return c === 'custom' ? (HEX.test(custom) ? custom : '') : CLOCK_COLOR[c];
}

const KEY = 'photoframe.lockscreen';
// Раньше спрятанные плашки хранились отдельно — подхватываем.
const OLD_HIDDEN_KEY = 'photoframe.hiddenChips';
const listeners: Array<() => void> = [];

function defaults(): LockPrefs {
  return { font: 'thin', color: 'white', widgetsColor: '', customColor: '#ffb86b', widgetsCustomColor: '#ffb86b', size: 'm', layout: 'auto', date: true, datePos: 'auto', weather: true, chipStyle: 'auto', widgetsPos: 'clock', hidden: [], order: [], grid: null, gridPortrait: null, gridRev: 0 };
}

export function lockPrefs(): LockPrefs {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...defaults(), ...JSON.parse(raw) };
    const old = localStorage.getItem(OLD_HIDDEN_KEY);
    return old ? { ...defaults(), hidden: JSON.parse(old) } : defaults();
  } catch (e) { return defaults(); }
}

export function setLockPrefs(patch: Partial<LockPrefs>) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...lockPrefs(), ...patch }));
    localStorage.removeItem(OLD_HIDDEN_KEY);
  } catch (e) { /* ignore */ }
  listeners.forEach((l) => l());
}

// Подписка вне компонентов (store сообщает сетку этой рамки в HA).
export function onLockPrefs(fn: () => void) {
  listeners.push(fn);
  return () => { listeners.splice(listeners.indexOf(fn), 1); };
}

export function useLockPrefs(): LockPrefs {
  const [, tick] = useState(0);
  useEffect(() => {
    const fn = () => tick((n) => n + 1);
    listeners.push(fn);
    return () => { listeners.splice(listeners.indexOf(fn), 1); };
  }, []);
  return lockPrefs();
}

// Карточки-виджеты в порядке устройства: сначала по order, новые — в конце в своём порядке.
export function sortWidgets<T extends { id: string }>(list: T[], prefs: LockPrefs): T[] {
  const pos = (id: string) => { const i = prefs.order.indexOf(id); return i === -1 ? 1e6 : i; };
  return list.map((c, i) => ({ c, i })).sort((a, b) => pos(a.c.id) - pos(b.c.id) || a.i - b.i).map((x) => x.c);
}

// Сетка по умолчанию — повторяет нынешнее расположение, чтобы включение сетки ничего не сдвинуло.
export function defaultGrid(prefs: LockPrefs, wide: boolean): LockGrid {
  const layout = prefs.layout === 'auto' ? (wide ? 'corner' : 'center') : prefs.layout;
  const clock: GridRect = layout === 'top' ? { x: 2, y: 1, w: 8, h: 4 }
    : layout === 'corner' ? { x: 0, y: 6, w: 6, h: 5 } : { x: 2, y: 6, w: 8, h: 4 };
  const widgets: GridRect = prefs.widgetsPos === 'top' ? { x: 2, y: 0, w: 8, h: 1 }
    : prefs.widgetsPos === 'bottom' ? { x: 2, y: 10, w: 8, h: 1 }
    : layout === 'corner' ? { x: 6, y: 10, w: 6, h: 1 } : { x: 2, y: clock.y + clock.h, w: 8, h: 1 };
  return { clock, widgets };
}

// Блок не выходит за сетку и не меньше ячейки.
export function clampRect(r: GridRect): GridRect {
  const w = Math.max(1, Math.min(GRID, Math.round(r.w)));
  const h = Math.max(1, Math.min(GRID, Math.round(r.h)));
  const out: GridRect = { w, h, x: Math.max(0, Math.min(GRID - w, Math.round(r.x))), y: Math.max(0, Math.min(GRID - h, Math.round(r.y))) };
  if (r.ha === 'left' || r.ha === 'center' || r.ha === 'right') out.ha = r.ha;
  if (r.va === 'top' || r.va === 'middle' || r.va === 'bottom') out.va = r.va;
  return out;
}

export function validGrid(g: unknown): LockGrid | null {
  const v = g as LockGrid;
  const ok = (r: GridRect) => r && [r.x, r.y, r.w, r.h].every((n) => typeof n === 'number' && isFinite(n));
  return v && ok(v.clock) && ok(v.widgets) ? { clock: clampRect(v.clock), widgets: clampRect(v.widgets) } : null;
}

// ── Ориентация ────────────────────────────────────────
export type Orientation = 'landscape' | 'portrait';

export function orientationNow(): Orientation {
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
}

// Повернули рамку — перерисоваться с сеткой другой ориентации.
export function useOrientation(): Orientation {
  const [o, setO] = useState(orientationNow());
  useEffect(() => {
    const fn = () => setO(orientationNow());
    window.addEventListener('resize', fn);
    window.addEventListener('orientationchange', fn);
    return () => { window.removeEventListener('resize', fn); window.removeEventListener('orientationchange', fn); };
  }, []);
  return o;
}

export function activeGrid(p: LockPrefs, o: Orientation): LockGrid | null {
  return o === 'portrait' ? p.gridPortrait : p.grid;
}

export function gridPatch(o: Orientation, g: LockGrid | null): Partial<LockPrefs> {
  return o === 'portrait' ? { gridPortrait: g } : { grid: g };
}
