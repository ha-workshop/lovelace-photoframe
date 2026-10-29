import type { ComponentType } from 'preact';
import {
  Activity, AirVent, CloudSun, Baby, Bed, Blinds, CookingPot, DoorOpen, Droplets, Fan, Flame, Gauge, House, Lamp, LampCeiling, LampDesk,
  Lightbulb, Lock, Moon, Plug, Shield, Snowflake, Sofa, Sparkles, Speaker, Sun, Thermometer, Tv, Video, WashingMachine, Wind, Zap,
} from 'lucide-preact';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FA_SOLID, FA_SOLID_GROUPS } from './fa-solid';
import { FA_REGULAR, FA_REGULAR_GROUPS } from './fa-regular';

// Иконки, из которых можно выбирать в редакторе. Ключ хранится в раскладке.
// Lucide — линейные значки, Font Awesome — обычные (fa-) и контурные (far-).
export const ICONS = {
  lightbulb: Lightbulb, lamp: Lamp, 'lamp-ceiling': LampCeiling, 'lamp-desk': LampDesk,
  plug: Plug, fan: Fan, tv: Tv, speaker: Speaker,
  thermometer: Thermometer, droplets: Droplets, snowflake: Snowflake, flame: Flame, wind: Wind, sun: Sun, moon: Moon,
  shield: Shield, door: DoorOpen, lock: Lock, blinds: Blinds, video: Video,
  'washing-machine': WashingMachine, zap: Zap, gauge: Gauge, activity: Activity,
  'air-vent': AirVent, 'cloud-sun': CloudSun,
  sparkles: Sparkles, house: House, sofa: Sofa, bed: Bed, 'cooking-pot': CookingPot, baby: Baby,
} as const;

export type LucideKey = keyof typeof ICONS;
export type IconKey = LucideKey | keyof typeof FA_SOLID | keyof typeof FA_REGULAR;

export interface IconGroup {
  titleKey: string;
  keys: IconKey[];
}

// В редакторе сначала свои линейные, потом Font Awesome по темам.
export const ICON_GROUPS: IconGroup[] = [
  { titleKey: 'icons.group.lucide', keys: Object.keys(ICONS) as LucideKey[] },
  ...(FA_SOLID_GROUPS as IconGroup[]),
  ...(FA_REGULAR_GROUPS as IconGroup[]),
];

// Поиск иконки: по ключу и по-русски. Ключи FA английские, поэтому для частых значков есть подсказки.
const SEARCH: Record<string, string> = {
  lightbulb: 'лампа свет', lamp: 'лампа свет', 'lamp-ceiling': 'люстра свет', 'lamp-desk': 'настольная лампа свет',
  plug: 'розетка вилка', fan: 'вентилятор', tv: 'телевизор', speaker: 'колонка динамик',
  thermometer: 'температура термометр', droplets: 'влажность вода капли', snowflake: 'снег холод кондиционер',
  flame: 'огонь котёл', wind: 'ветер', sun: 'солнце', moon: 'луна ночь', shield: 'защита охрана',
  door: 'дверь', lock: 'замок', blinds: 'шторы жалюзи', video: 'камера видео', 'washing-machine': 'стиральная машина',
  zap: 'электричество энергия', gauge: 'датчик счётчик', activity: 'движение активность', 'air-vent': 'кондиционер воздух',
  'cloud-sun': 'погода', sparkles: 'сценарии сцены', house: 'дом', sofa: 'диван', bed: 'кровать', 'cooking-pot': 'кухня плита', baby: 'ребёнок детская',
  'fa-house': 'дом', 'fa-house-chimney': 'дом коттедж', 'fa-building': 'здание квартира', 'fa-warehouse': 'склад гараж',
  'fa-tree': 'дерево сад', 'fa-couch': 'диван', 'fa-bed': 'кровать', 'fa-chair': 'стул', 'fa-table': 'стол',
  'fa-door-open': 'дверь открыта', 'fa-door-closed': 'дверь закрыта', 'fa-bath': 'ванная', 'fa-shower': 'душ',
  'fa-toilet': 'туалет', 'fa-utensils': 'кухня еда', 'fa-mug-saucer': 'кофе чай', 'fa-wine-glass': 'вино',
  'fa-baby': 'ребёнок', 'fa-child': 'ребёнок', 'fa-person': 'человек', 'fa-dog': 'собака', 'fa-cat': 'кошка',
  'fa-car': 'машина авто', 'fa-bicycle': 'велосипед', 'fa-plane': 'самолёт', 'fa-train': 'поезд', 'fa-truck': 'грузовик',
  'fa-lightbulb': 'лампа свет', 'fa-plug': 'розетка вилка', 'fa-power-off': 'питание выключить', 'fa-toggle-on': 'включено',
  'fa-toggle-off': 'выключено', 'fa-sun': 'солнце', 'fa-moon': 'луна ночь', 'fa-star': 'звезда', 'fa-fire': 'огонь котёл',
  'fa-bolt': 'молния электричество', 'fa-wand-magic-sparkles': 'сценарии сцены', 'fa-rainbow': 'радуга',
  'fa-temperature-high': 'температура жара', 'fa-temperature-low': 'температура холод', 'fa-thermometer': 'термометр',
  'fa-droplet': 'вода влажность капля', 'fa-water': 'вода', 'fa-snowflake': 'снег холод кондиционер', 'fa-wind': 'ветер',
  'fa-fan': 'вентилятор кондиционер', 'fa-cloud': 'облако', 'fa-cloud-sun': 'погода', 'fa-cloud-rain': 'дождь',
  'fa-cloud-bolt': 'гроза', 'fa-umbrella': 'зонт дождь', 'fa-leaf': 'лист растение', 'fa-seedling': 'росток растение',
  'fa-recycle': 'переработка', 'fa-solar-panel': 'солнечная панель', 'fa-shield': 'защита охрана', 'fa-shield-halved': 'защита охрана',
  'fa-lock': 'замок', 'fa-lock-open': 'замок открыт', 'fa-key': 'ключ', 'fa-video': 'камера видео', 'fa-camera': 'камера',
  'fa-eye': 'глаз наблюдение', 'fa-bell': 'звонок уведомление', 'fa-bell-slash': 'без звука', 'fa-triangle-exclamation': 'тревога',
  'fa-fire-extinguisher': 'огнетушитель пожар', 'fa-fingerprint': 'отпечаток доступ', 'fa-user-shield': 'охрана пользователь',
  'fa-tv': 'телевизор', 'fa-display': 'монитор экран', 'fa-desktop': 'компьютер', 'fa-laptop': 'ноутбук',
  'fa-mobile-screen': 'телефон', 'fa-tablet-screen-button': 'планшет', 'fa-volume-high': 'громкость звук',
  'fa-volume-low': 'громкость тихо', 'fa-volume-xmark': 'без звука', 'fa-music': 'музыка', 'fa-radio': 'радио',
  'fa-headphones': 'наушники', 'fa-gamepad': 'игра', 'fa-film': 'фильм видео', 'fa-play': 'играть', 'fa-pause': 'пауза',
  'fa-stop': 'стоп', 'fa-circle-play': 'играть', 'fa-circle-pause': 'пауза', 'fa-gauge': 'датчик счётчик',
  'fa-gauge-high': 'датчик счётчик', 'fa-chart-line': 'график', 'fa-heart-pulse': 'пульс здоровье', 'fa-microchip': 'чип',
  'fa-wifi': 'вайфай сеть', 'fa-signal': 'сигнал сеть', 'fa-battery-full': 'батарея', 'fa-battery-half': 'батарея',
  'fa-battery-quarter': 'батарея', 'fa-battery-empty': 'батарея', 'fa-gear': 'настройки шестерёнка', 'fa-sliders': 'настройки',
  'fa-wrench': 'инструмент ремонт', 'fa-calendar-days': 'календарь', 'fa-clock': 'часы время', 'fa-stopwatch': 'секундомер',
  'fa-alarm-clock': 'будильник', 'fa-location-dot': 'место геолокация', 'fa-compass': 'компас', 'fa-globe': 'глобус',
  'fa-flag': 'флаг', 'fa-heart': 'сердце', 'fa-thumbs-up': 'нравится', 'fa-comments': 'сообщения', 'fa-envelope': 'письмо',
  'fa-phone': 'телефон', 'fa-user': 'пользователь', 'fa-users': 'пользователи', 'fa-person-walking': 'идти',
  'fa-person-running': 'бег', 'fa-dumbbell': 'спорт', 'fa-puzzle-piece': 'пазл', 'fa-gift': 'подарок',
  'fa-hourglass': 'время', 'fa-newspaper': 'новости', 'fa-note-sticky': 'заметка', 'fa-copy': 'копия',
  'fa-trash-can': 'корзина удалить', 'fa-square-check': 'галочка готово', 'fa-circle-check': 'галочка готово',
  'fa-face-smile': 'смайлик', 'fa-keyboard': 'клавиатура', 'fa-message': 'сообщение', 'fa-paper-plane': 'отправить',
  'far-house': 'дом', 'far-lightbulb': 'лампа свет', 'far-snowflake': 'снег холод', 'far-moon': 'луна ночь',
  'far-sun': 'солнце', 'far-bell': 'звонок', 'far-star': 'звезда', 'far-heart': 'сердце', 'far-clock': 'часы время',
  'far-calendar-days': 'календарь', 'far-eye': 'глаз', 'far-comment': 'сообщение', 'far-envelope': 'письмо',
  'far-folder': 'папка', 'far-file': 'файл', 'far-image': 'картинка', 'far-circle-play': 'играть',
  'far-circle-pause': 'пауза', 'far-face-smile': 'смайлик', 'far-thumbs-up': 'нравится', 'far-user': 'пользователь',
  'far-message': 'сообщение', 'far-paper-plane': 'отправить', 'far-square-check': 'галочка готово',
  'far-circle-check': 'галочка готово', 'far-trash-can': 'корзина удалить', 'far-hourglass': 'время',
  'far-life-ring': 'помощь', 'far-building': 'здание', 'far-hospital': 'больница', 'far-newspaper': 'новости',
};

export function iconMatches(key: string, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return key.toLowerCase().indexOf(q) !== -1 || (SEARCH[key] || '').indexOf(q) !== -1;
}

// Font Awesome приходит путями SVG: рисуем сами, без webfont и лишних запросов.
function FaSvg(props: { def: IconDefinition; size: number; class?: string }) {
  const [width, height, , , path] = props.def.icon;
  const paths = Array.isArray(path) ? path : [path];
  return (
    <svg class={props.class} width={props.size} height={props.size} viewBox={`0 0 ${width} ${height}`}
      fill="currentColor" aria-hidden="true" focusable="false">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

// Единая иконка: Lucide по ключу, Font Awesome — по префиксу fa-/far-.
export function Icon(props: { name?: string; size?: number; class?: string }) {
  const key = props.name || 'house';
  const Lucide = ICONS[key as LucideKey] as ComponentType<{ size?: number; class?: string }> | undefined;
  if (Lucide) return <Lucide size={props.size || 18} class={props.class} />;
  const def = FA_SOLID[key as keyof typeof FA_SOLID] || FA_REGULAR[key as keyof typeof FA_REGULAR];
  if (def) return <FaSvg def={def} size={props.size || 18} class={props.class} />;
  const Fallback = ICONS.house;
  return <Fallback size={props.size || 18} class={props.class} />;
}

// Иконка по умолчанию для сущности HA — по домену и классу устройства.
export function guessIcon(entity: string, deviceClass?: string): IconKey {
  const domain = entity.split('.')[0];
  if (domain === 'light') return 'lamp-ceiling';
  if (domain === 'switch') return 'lamp';
  if (domain === 'fan') return 'fan';
  if (domain === 'camera') return 'video';
  if (domain === 'climate') return 'air-vent';
  if (domain === 'weather') return 'cloud-sun';
  if (domain === 'media_player') return deviceClass === 'tv' ? 'tv' : 'speaker';
  if (domain === 'lock') return 'lock';
  if (domain === 'cover') return 'blinds';
  if (domain === 'scene' || domain === 'script' || domain === 'automation') return 'sparkles';
  if (deviceClass === 'temperature') return 'thermometer';
  if (deviceClass === 'humidity' || deviceClass === 'moisture') return 'droplets';
  if (deviceClass === 'door' || deviceClass === 'window' || deviceClass === 'opening') return 'door';
  if (deviceClass === 'power' || deviceClass === 'voltage' || deviceClass === 'energy' || deviceClass === 'current') return 'zap';
  if (deviceClass === 'motion' || deviceClass === 'occupancy') return 'activity';
  return 'gauge';
}
