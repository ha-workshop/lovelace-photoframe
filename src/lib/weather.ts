import { useEffect, useState } from 'preact/hooks';
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Moon, Snowflake, Sun, Wind } from 'lucide-preact';
import type { HAClient } from './ha';
import { t } from '../i18n';

// Погода из HA. Прогноз в новых версиях HA не лежит в атрибутах — его отдаёт подписка weather/subscribe_forecast.

const CONDITIONS: Record<string, { Icon: typeof Sun }> = {
  'clear-night': { Icon: Moon },
  cloudy: { Icon: Cloud },
  exceptional: { Icon: CloudLightning },
  fog: { Icon: CloudFog },
  hail: { Icon: CloudSnow },
  lightning: { Icon: CloudLightning },
  'lightning-rainy': { Icon: CloudLightning },
  partlycloudy: { Icon: CloudSun },
  pouring: { Icon: CloudRain },
  rainy: { Icon: CloudDrizzle },
  snowy: { Icon: Snowflake },
  'snowy-rainy': { Icon: CloudSnow },
  sunny: { Icon: Sun },
  windy: { Icon: Wind },
  'windy-variant': { Icon: Wind },
};

export function condition(key: string | undefined) {
  const c = CONDITIONS[key || ''];
  return { label: c ? t('weather.' + key) : key || '—', Icon: c ? c.Icon : Cloud };
}

export interface ForecastEntry {
  datetime: string;
  condition?: string;
  temperature?: number;
  templow?: number;
  precipitation?: number;
  is_daytime?: boolean;
}

export interface Day { t: number; hi?: number; lo?: number; condition?: string }

// supported_features: 1 — по дням, 2 — по часам, 4 — день/ночь.
export function useForecast(ha: HAClient, entity: string | undefined) {
  const [hourly, setHourly] = useState<ForecastEntry[]>([]);
  const [days, setDays] = useState<Day[]>([]);
  const s = entity ? ha.states[entity] : undefined;
  const feat = s ? Number(s.attributes.supported_features) || 0 : 0;

  useEffect(() => {
    if (!entity || ha.status !== 'connected' || !feat) return;
    const offs: Array<() => void> = [];
    if (feat & 2) {
      offs.push(ha.subscribeMessage({ type: 'weather/subscribe_forecast', entity_id: entity, forecast_type: 'hourly' },
        (ev) => setHourly(ev.forecast || [])));
    }
    const dayType = feat & 1 ? 'daily' : feat & 4 ? 'twice_daily' : '';
    if (dayType) {
      offs.push(ha.subscribeMessage({ type: 'weather/subscribe_forecast', entity_id: entity, forecast_type: dayType },
        (ev) => setDays(toDays(ev.forecast || [], dayType === 'twice_daily'))));
    }
    return () => offs.forEach((off) => off());
  }, [entity, ha.status, feat]);

  return { hourly, days };
}

// День/ночь склеиваем в сутки: максимум дня, минимум ночи.
function toDays(list: ForecastEntry[], twice: boolean): Day[] {
  if (!twice) return list.map((f) => ({ t: Date.parse(f.datetime), hi: f.temperature, lo: f.templow, condition: f.condition }));
  const byDate: Record<string, Day> = {};
  const order: string[] = [];
  list.forEach((f) => {
    const d = new Date(Date.parse(f.datetime));
    const key = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    if (!byDate[key]) { byDate[key] = { t: d.getTime() }; order.push(key); }
    const day = byDate[key];
    const vals = [f.temperature, f.templow].filter((v): v is number => typeof v === 'number');
    vals.forEach((v) => {
      day.hi = day.hi == null ? v : Math.max(day.hi, v);
      day.lo = day.lo == null ? v : Math.min(day.lo, v);
    });
    if (f.is_daytime !== false || !day.condition) day.condition = f.condition;
  });
  return order.map((k) => byDate[k]);
}

// Скорость ветра в м/с — привычнее, чем км/ч.
export function windMs(speed: unknown, unit: unknown) {
  const v = Number(speed);
  if (isNaN(v)) return undefined;
  return unit === 'm/s' ? v : unit === 'mph' ? v * 0.447 : v / 3.6;
}

export function pressureMm(p: unknown, unit: unknown) {
  const v = Number(p);
  if (isNaN(v)) return undefined;
  return unit === 'mmHg' ? v : unit === 'inHg' ? v * 25.4 : v * 0.750062;
}
