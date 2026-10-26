import {
  Activity, AirVent, CloudSun, Baby, Bed, Blinds, CookingPot, DoorOpen, Droplets, Fan, Flame, Gauge, House, Lamp, LampCeiling, LampDesk,
  Lightbulb, Lock, Moon, Plug, Shield, Snowflake, Sofa, Sparkles, Speaker, Sun, Thermometer, Tv, Video, WashingMachine, Wind, Zap,
} from 'lucide-preact';

// Иконки, из которых можно выбирать в редакторе. Ключ хранится в раскладке.
export const ICONS = {
  lightbulb: Lightbulb, lamp: Lamp, 'lamp-ceiling': LampCeiling, 'lamp-desk': LampDesk,
  plug: Plug, fan: Fan, tv: Tv, speaker: Speaker,
  thermometer: Thermometer, droplets: Droplets, snowflake: Snowflake, flame: Flame, wind: Wind, sun: Sun, moon: Moon,
  shield: Shield, door: DoorOpen, lock: Lock, blinds: Blinds, video: Video,
  'washing-machine': WashingMachine, zap: Zap, gauge: Gauge, activity: Activity,
  'air-vent': AirVent, 'cloud-sun': CloudSun,
  sparkles: Sparkles, house: House, sofa: Sofa, bed: Bed, 'cooking-pot': CookingPot, baby: Baby,
};

export type IconKey = keyof typeof ICONS;

export function iconFor(key: string | undefined, fallback: IconKey = 'house') {
  return ICONS[(key as IconKey)] || ICONS[fallback];
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
