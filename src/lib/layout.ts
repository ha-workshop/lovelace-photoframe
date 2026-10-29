// Раскладка дашборда: какие карточки есть, что в них и как они выглядят.
// У каждого устройства своя (в HA — по frame_id); общая раскладка — образец для новых рамок.
import { t } from '../i18n';

export type CardType = 'climate' | 'switches' | 'cameras' | 'sensors' | 'scenes' | 'ac' | 'speakers' | 'tv' | 'weather';

export interface Item {
  entity: string;
  name?: string;
  icon?: string;
  // climate: вторая сущность — влажность
  hum?: string;
  // ac: датчик температуры в комнате, если у кондиционера своего нет
  temp?: string;
  // Устройство целиком: в карточке раскрывается в подходящие его сущности (entity — запасная, пока нет реестра).
  device?: string;
  // Сущности устройства, которые в карточке не показывать (например, «Всего энергия» у счётчика).
  skip?: string[];
  // Порядок сущностей устройства (id; новых тут нет — они в конце) и свои имена для них.
  order?: string[];
  names?: Record<string, string>;
}

export interface Card {
  id: string;
  type: CardType;
  title: string;
  icon?: string;
  // Позиция и размер в клетках сетки GRID_COLS×∞. Клетка квадратная: высота ряда = ширине колонки.
  x: number;
  y: number;
  w: number;
  h: number;
  color?: string;    // ключ из ACCENTS; пусто — цвет из фото
  chip?: boolean;    // показывать информер на фото
  // Камеры: как вписать кадр. cover — заполнить с обрезкой (по умолчанию),
  // width — во всю ширину, height — во всю высоту; пропорции сохраняются, пустое место — тёмные поля.
  fit?: CameraFit;
  // Место и размер в узком (телефонном) виде — своя сетка MOBILE_COLS колонок; hide — не показывать там.
  // Нет — карточка встаёт сама по порядку широкой сетки (см. mobileView).
  m?: MobileBox;
  items: Item[];
}

export type CameraFit = 'cover' | 'width' | 'height';

export interface Layout {
  // Число колонок, под которое записаны координаты. Старые раскладки (2×2 «по-крупному») его не имеют.
  cols?: number;
  cards: Card[];
}

// Экран дома: своя сетка карточек («Гостиная», «Камеры», «Климат»). Экраны листаются свайпом.
export interface Screen extends Layout {
  id: string;
  name: string;
}

// Как дом хранится в сервисе и в конфиге карточки HA.
export interface HomeScreens {
  screens: Screen[];
}

export const GRID_COLS = 12;
export const MIN_W = 2;
export const MIN_H = 2;
// Узкий экран (телефон): своя сетка на 4 колонки с квадратными клетками.
export const MOBILE_COLS = 4;

export interface MobileBox { x: number; y: number; w: number; h: number; hide?: boolean }

// Названия и подсказки — в переводах: card.<тип>.title / card.<тип>.hint (см. cardTypeTitle).
export const CARD_TYPES: Record<CardType, { icon: string; domains: string[] }> = {
  climate: { icon: 'thermometer', domains: ['sensor', 'weather'] },
  switches: { icon: 'lightbulb', domains: ['light', 'switch', 'fan', 'input_boolean'] },
  cameras: { icon: 'video', domains: ['camera'] },
  sensors: { icon: 'shield', domains: ['binary_sensor', 'sensor', 'lock', 'cover'] },
  scenes: { icon: 'sparkles', domains: ['scene', 'script', 'automation'] },
  ac: { icon: 'air-vent', domains: ['climate'] },
  speakers: { icon: 'speaker', domains: ['media_player'] },
  tv: { icon: 'tv', domains: ['media_player'] },
  weather: { icon: 'cloud-sun', domains: ['weather', 'sensor'] },
};

export function cardTypeTitle(type: CardType) {
  return t('card.' + type + '.title');
}

export function cardTypeHint(type: CardType) {
  return t('card.' + type + '.hint');
}

// Цвета карточек. Пусто — акцент берётся из текущего фото.
export const ACCENTS: Record<string, string> = {
  amber: '#fbbf24',
  sky: '#7dd3fc',
  green: '#34d399',
  pink: '#f9a8d4',
  violet: '#c4b5fd',
  red: '#fb7185',
};

let seq = 0;
export function newId() {
  return 'c' + Date.now().toString(36) + (seq++).toString(36);
}

// Стартовая раскладка для нового дома: пустые карточки, устройства добавляются в редакторе.
// Названия пустые — карточки показывают название типа на языке устройства.
export function defaultLayout(): Layout {
  return {
    cols: GRID_COLS,
    cards: [
      { id: 'climate', type: 'climate', title: '', icon: 'thermometer', x: 0, y: 0, w: 3, h: 6, chip: true, items: [] },
      { id: 'lights', type: 'switches', title: '', icon: 'lightbulb', x: 3, y: 0, w: 6, h: 6, chip: true, color: 'amber', items: [] },
      { id: 'weather', type: 'weather', title: '', icon: 'cloud-sun', x: 9, y: 0, w: 3, h: 3, chip: true, items: [] },
      { id: 'home', type: 'sensors', title: '', icon: 'shield', x: 9, y: 3, w: 3, h: 3, chip: true, items: [] },
    ],
  };
}

// ── Сетка ─────────────────────────────────────────────
// CSS Grid в WebView Android 5 нет, поэтому раскладку считаем сами, а карточки ставим абсолютно.
// Поведение как у дашбордов: карточки не перекрываются, мешающие сдвигаются вниз,
// затем всё «всплывает» вверх (гравитация), чтобы не оставалось дыр.

type Box = Pick<Card, 'x' | 'y' | 'w' | 'h'>;

function collides(a: Box, b: Box) {
  return a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
}

function byPosition(a: Box, b: Box) {
  return a.y - b.y || a.x - b.x;
}

export function clampBox<T extends Box>(c: T, cols = GRID_COLS): T {
  const w = Math.max(MIN_W, Math.min(cols, Math.round(c.w)));
  const h = Math.max(MIN_H, Math.round(c.h));
  return { ...c, w, h, x: Math.max(0, Math.min(cols - w, Math.round(c.x))), y: Math.max(0, Math.round(c.y)) };
}

// Ставит карточку `moved` на её место, раздвигает остальных и поджимает всё вверх.
export function settle(cards: Card[], moved?: Card): Card[] {
  const fixed: Card[] = [];
  if (moved) fixed.push(moved);
  const others = cards.filter((c) => !moved || c.id !== moved.id).slice().sort(byPosition);
  others.forEach((c) => {
    let y = c.y;
    // Сдвигаем вниз, пока пересекается с уже поставленными.
    for (let guard = 0; guard < 500; guard++) {
      const hit = fixed.filter((f) => collides({ ...c, y }, f));
      if (!hit.length) break;
      y = Math.max.apply(null, hit.map((f) => f.y + f.h));
    }
    fixed.push({ ...c, y });
  });
  // Гравитация: по порядку сверху вниз каждая карточка поднимается, пока есть место.
  const out: Card[] = [];
  fixed.slice().sort((a, b) => byPosition(a, b) || (moved && a.id === moved.id ? -1 : 0)).forEach((c) => {
    let y = c.y;
    while (y > 0 && !out.some((o) => collides({ ...c, y: y - 1 }, o))) y--;
    out.push({ ...c, y });
  });
  // Исходный порядок массива сохраняем — он же порядок информеров на фото.
  return cards.map((c) => out.filter((o) => o.id === c.id)[0]);
}

export function bottom(cards: Box[]) {
  return cards.reduce((m, c) => Math.max(m, c.y + c.h), 0);
}

// Старые раскладки: размеры 1|2 в сетке на 4 колонки, без координат.
// Раскладываем их по-старому и переводим в клетки 12-колоночной сетки (×3).
// Экраны дома из любого сохранённого вида: { screens: [...] } или старая одна раскладка (станет одним экраном).
// Пусто — один экран из fallback (по умолчанию пустой).
export function normalizeScreens(value: unknown, fallback?: () => Layout): Screen[] {
  const v = value as { screens?: unknown; cards?: unknown } | null;
  const list: any[] = v && Array.isArray(v.screens) ? v.screens : v && Array.isArray(v.cards) ? [v] : [];
  const out: Screen[] = list
    .filter((x) => x && Array.isArray(x.cards))
    .map((x, i) => ({ ...normalize(x), id: String(x.id || (i ? 's' + i : 'main')), name: String(x.name || '') }));
  return out.length ? out : [{ ...(fallback ? fallback() : { cols: GRID_COLS, cards: [] }), id: 'main', name: '' }];
}

export function newScreenId() {
  return 's' + Date.now().toString(36) + (seq++).toString(36);
}

// Имя экрана для показа: своё или «Экран 2».
export function screenTitle(screen: Screen, index: number) {
  return screen.name || t('screen.default', { n: index + 1 });
}

export function normalize(layout: Layout): Layout {
  if (layout.cols === GRID_COLS) return repair(layout);
  const taken: boolean[][] = [];
  const free = (x: number, y: number, w: number, h: number) => {
    for (let r = y; r < y + h; r++) for (let c = x; c < x + w; c++) if (taken[r] && taken[r][c]) return false;
    return true;
  };
  const cards = layout.cards.map((card) => {
    const w = Math.min(card.w || 1, 4);
    const h = card.h || 1;
    for (let y = 0; ; y++) {
      for (let x = 0; x + w <= 4; x++) {
        if (free(x, y, w, h)) {
          for (let r = y; r < y + h; r++) {
            taken[r] = taken[r] || [];
            for (let c = x; c < x + w; c++) taken[r][c] = true;
          }
          return { ...card, x: x * 3, y: y * 3, w: w * 3, h: h * 3 };
        }
      }
    }
  });
  return repair({ ...layout, cols: GRID_COLS, cards });
}

// Раскладка могла прийти битой (ручной импорт JSON, старая версия клиента): карточки без координат
// уходят вниз, размеры зажимаются в допустимые, пересечения разводятся.
function repair(layout: Layout): Layout {
  const ok = (n: unknown) => typeof n === 'number' && isFinite(n);
  let floor = layout.cards.reduce((m, c) => (ok(c.y) && ok(c.h) ? Math.max(m, c.y + c.h) : m), 0);
  const cards = layout.cards.map((c) => {
    const w = ok(c.w) ? c.w : 3;
    const h = ok(c.h) ? c.h : 3;
    if (ok(c.x) && ok(c.y)) return clampBox({ ...c, w, h });
    const placed = clampBox({ ...c, x: 0, y: floor, w, h });
    floor += placed.h;
    return placed;
  });
  return { ...layout, cols: GRID_COLS, cards: settle(cards) };
}

// Раскладка узкого экрана: карточки со своими местами (m) — на них, остальные — в конец по порядку широкой
// сетки, во всю ширину, высотой по высоте карточки. Скрытые на телефоне не показываются.
export function mobileView(cards: Card[]): Card[] {
  const sorted = cards.slice().sort(byPosition);
  const own = sorted.filter((c) => c.m && !c.m.hide).map((c) => clampBox({ ...c, x: c.m!.x, y: c.m!.y, w: c.m!.w, h: c.m!.h }, MOBILE_COLS));
  let floor = bottom(own);
  const auto = sorted.filter((c) => !c.m).map((c) => {
    const h = Math.max(MIN_H, Math.min(MOBILE_COLS, Math.round(c.h * 2 / 3)));
    const placed = { ...c, x: 0, y: floor, w: MOBILE_COLS, h };
    floor += h;
    return placed;
  });
  return settle(own.concat(auto));
}

// Места из узкого вида — обратно в карточки (m), широкая раскладка не меняется.
export function withMobile(cards: Card[], view: Card[]): Card[] {
  return cards.map((c) => {
    const v = view.filter((x) => x.id === c.id)[0];
    return v ? { ...c, m: { x: v.x, y: v.y, w: v.w, h: v.h } } : c;
  });
}
