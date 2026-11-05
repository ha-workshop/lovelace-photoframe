// Иконки — только Lucide, все 1900+ значков одного стиля.
// Группировка и поиск — по тегам из lucide-static.
// Динамический импорт — Vite всё tree-shake'ит.
import type { ComponentType } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import tagsRaw from 'lucide-static/tags.json';

const ALL_TAGS = tagsRaw as Record<string, string[]>;

// ── TODO: после динамического импорта все экспорты ниже — в загрузчик ──
// Сейчас собираем их вручную, чтобы tsc не ругался. Vite при билде всё равно
// tree-shake'ит неиспользованные.

// ── Группы по темам ──────────────────────────────────────
const GROUPS: Record<string, string[]> = {
  rooms: ['home', 'house', 'room', 'furniture', 'door', 'window', 'bed', 'kitchen', 'bathroom', 'bath',
    'shower', 'garden', 'garage', 'living', 'child', 'baby', 'toy'],
  lighting: ['light', 'lamp', 'bulb', 'lighting', 'ceiling light'],
  climate: ['weather', 'temperature', 'thermometer', 'snowflake', 'flame', 'wind',
    'air conditioner', 'fan', 'humidity', 'droplet'],
  media: ['tv', 'television', 'speaker', 'music', 'audio', 'video', 'play',
    'media player', 'headphones', 'radio'],
  devices: ['camera', 'printer', 'computer', 'monitor', 'phone', 'tablet', 'laptop',
    'device', 'robot', 'vacuum', 'smartphone'],
  energy: ['power', 'energy', 'battery', 'electricity', 'zap', 'plug', 'socket', 'solar'],
  security: ['security', 'shield', 'lock', 'alarm', 'bell', 'camera', 'guard', 'safety',
    'fingerprint', 'key'],
  transport: ['car', 'bus', 'train', 'plane', 'plane', 'bike', 'truck', 'vehicle',
    'transportation', 'bicycle'],
  nature: ['tree', 'plant', 'flower', 'leaf', 'water', 'fire', 'mountain', 'cloud',
    'rain', 'sun', 'moon', 'star'],
  'food-drink': ['food', 'drink', 'cup', 'coffee', 'wine', 'beer', 'utensil', 'kitchen', 'cooking'],
  sports: ['sport', 'ball', 'gym', 'fitness', 'run', 'bike', 'exercise', 'game'],
  people: ['user', 'person', 'people', 'face', 'man', 'woman', 'child', 'baby', 'family'],
  objects: ['gift', 'book', 'clock', 'watch', 'bag', 'box', 'tool', 'keyboard'],
  arrows: ['arrow', 'chevron', 'direction', 'move', 'navigation'],
  shapes: ['circle', 'square', 'triangle', 'shape', 'symbol'],
};

export interface IconGroup {
  titleKey: string;
  keys: string[];
}

// Группировка иконок по темам — на основе тегов lucide-static.
let groupsCache: IconGroup[] | null = null;

function buildGroups(): IconGroup[] {
  if (groupsCache) return groupsCache;
  const keys = Object.keys(ALL_TAGS);
  groupsCache = Object.entries(GROUPS).map(([groupId, keywords]) => ({
    titleKey: 'icons.group.' + groupId,
    keys: keys.filter((name) =>
      (ALL_TAGS[name] || []).some((tag: string) =>
        keywords.some((kw) => tag.toLowerCase().indexOf(kw) !== -1),
      ),
    ),
  }));
  return groupsCache;
}

export function useIconGroups(): IconGroup[] {
  // Обновляем при монтировании, кэш остаётся навсегда.
  return buildGroups();
}

// Русские подсказки для поиска частых иконок
const RU_SEARCH: Record<string, string> = {
  house: 'дом', sofa: 'диван', bed: 'кровать', 'cooking-pot': 'кухня плита', baby: 'ребёнок детская',
  bath: 'ванна', 'shower-head': 'душ', car: 'машина авто', bus: 'автобус', train: 'поезд',
  dog: 'собака', cat: 'кошка', fish: 'рыбка', gift: 'подарок', rocket: 'ракета',
  lightbulb: 'лампа свет', lamp: 'лампа свет', 'lamp-ceiling': 'люстра свет', 'lamp-desk': 'настольная лампа свет',
  plug: 'розетка вилка', fan: 'вентилятор', tv: 'телевизор', speaker: 'колонка динамик',
  thermometer: 'температура термометр', droplets: 'влажность вода капли', snowflake: 'снег холод кондиционер',
  flame: 'огонь котёл', wind: 'ветер', sun: 'солнце', moon: 'луна ночь', shield: 'защита охрана',
  'door-open': 'дверь', lock: 'замок', blinds: 'шторы жалюзи', video: 'камера видео',
  'washing-machine': 'стиральная машина', zap: 'электричество энергия', gauge: 'датчик счётчик',
  activity: 'движение активность', 'air-vent': 'кондиционер воздух', 'cloud-sun': 'погода',
  sparkles: 'сценарии сцены', 'tree-pine': 'дерево', armchair: 'кресло',
  'paw-print': 'лапа животное', 'toy-brick': 'кубики лего игрушка', dices: 'кости настольная игра',
};

export function iconMatches(key: string, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  // Прямой поиск по ключу (kebab-case)
  if (key.toLowerCase().indexOf(q) !== -1) return true;
  // По тегам Lucide
  const t = ALL_TAGS[key];
  if (t && t.some((tag: string) => tag.toLowerCase().indexOf(q) !== -1)) return true;
  // По русским подсказкам
  const ru = RU_SEARCH[key];
  if (ru && ru.indexOf(q) !== -1) return true;
  return false;
}

// ── Динамическая загрузка Lucide-компонентов ─────────────
// Загружаем модуль один раз, при первом запросе.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LucideComp = any;
let icons: Record<string, LucideComp> | null = null;
let loadingId: Promise<void> | null = null;
const waiters: Array<() => void> = [];

async function loadLucide(): Promise<void> {
  if (icons) return;
  if (!loadingId) {
    loadingId = (async () => {
      try {
        const m: Record<string, LucideComp> = await import('lucide-preact');
        icons = m;
      } finally {
        waiters.splice(0).forEach((f) => f());
      }
    })();
  }
  return loadingId;
}

// ⚠️ useLucide() — не экспортируется, используется внутри Icon.
// Для предзагрузки вне Icon используйте preloadLucide().
export function preloadLucide() { loadLucide(); }

export type IconKey = string;

// Единая иконка: загружает Lucide динамически при первом вызове.
export function Icon(props: { name?: string; size?: number; class?: string }) {
  const key = props.name || 'house';
  const [, tick] = useState(0);

  useEffect(() => {
    if (icons && icons[key]) return;
    let alive = true;
    const cb = () => { if (alive) tick((n) => n + 1); };
    waiters.push(cb);
    loadLucide();
    return () => { const i = waiters.indexOf(cb); if (i !== -1) waiters.splice(i, 1); };
    // подгружаем только если иконка ещё не загружена
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const Lucide = icons && icons[key];
  if (Lucide) return <Lucide size={props.size || 18} class={props.class} />;
  // Плейсхолдер — пустой квадрат того же размера, чтобы вёрстка не прыгала.
  const sz = props.size || 18;
  return <svg class={props.class} width={sz} height={sz} aria-hidden="true" focusable="false" />;
}

// Иконка по умолчанию для сущности HA — по домену и классу устройства.
export function guessIcon(entity: string, deviceClass?: string): string {
  const domain = entity.split('.')[0];
  if (domain === 'light') return 'lamp-ceiling';
  if (domain === 'switch') return 'lamp';
  if (domain === 'fan') return 'fan';
  if (domain === 'camera') return 'camera';
  if (domain === 'climate') return 'air-vent';
  if (domain === 'weather') return 'cloud-sun';
  if (domain === 'media_player') return deviceClass === 'tv' ? 'tv' : 'speaker';
  if (domain === 'lock') return 'lock';
  if (domain === 'cover') return 'blinds';
  if (domain === 'scene' || domain === 'script' || domain === 'automation') return 'sparkles';
  if (deviceClass === 'temperature') return 'thermometer';
  if (deviceClass === 'humidity' || deviceClass === 'moisture') return 'droplets';
  if (deviceClass === 'door' || deviceClass === 'window' || deviceClass === 'opening') return 'door-open';
  if (deviceClass === 'power' || deviceClass === 'voltage' || deviceClass === 'energy' || deviceClass === 'current') return 'zap';
  if (deviceClass === 'motion' || deviceClass === 'occupancy') return 'activity';
  return 'gauge';
}
