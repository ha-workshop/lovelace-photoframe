// Экран с фото — как экран блокировки iPhone: вид часов, что под ними и какие виджеты (плашки) показывать.
// Настройка конкретного устройства (localStorage): кухонная рамка и телефон выглядят по-своему.
// Меняется прямо на экране: долгое нажатие на фото → «Настроить» (components/LockCustomizer).
import { useEffect, useState } from 'preact/hooks';

export type ClockFont = 'thin' | 'light' | 'regular' | 'bold';
export type ClockColor = 'white' | 'accent' | 'warm' | 'mint' | 'sky' | 'rose';
export type ClockSize = 's' | 'm' | 'l';
// auto — в углу на большом экране, по центру на телефоне; top — по центру сверху, как на iPhone.
export type LockLayout = 'auto' | 'corner' | 'center' | 'top';
// auto — текстом на большом экране, значками на телефоне.
export type ChipStyle = 'auto' | 'text' | 'icons';

export interface LockPrefs {
  font: ClockFont;
  color: ClockColor;
  size: ClockSize;
  layout: LockLayout;
  date: boolean;
  weather: boolean;
  chipStyle: ChipStyle;
  // Виджеты: какие спрятаны и в каком порядке остальные (id карточек). Новых карточек в order нет — они в конце.
  hidden: string[];
  order: string[];
}

export const FONT_WEIGHT: Record<ClockFont, number> = { thin: 200, light: 300, regular: 500, bold: 700 };
export const CLOCK_COLOR: Record<ClockColor, string> = {
  white: '#ffffff', accent: '', warm: '#fcd34d', mint: '#6ee7b7', sky: '#7dd3fc', rose: '#fda4af',
};

const KEY = 'photoframe.lockscreen';
// Раньше спрятанные плашки хранились отдельно — подхватываем.
const OLD_HIDDEN_KEY = 'photoframe.hiddenChips';
const listeners: Array<() => void> = [];

function defaults(): LockPrefs {
  return { font: 'thin', color: 'white', size: 'm', layout: 'auto', date: true, weather: true, chipStyle: 'auto', hidden: [], order: [] };
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
