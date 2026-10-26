import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import type { HAClient } from './ha';

export const HAContext = createContext<HAClient | null>(null);

// Перерисовка компонента при любом обновлении состояний HA.
export function useHA(): HAClient {
  const client = useContext(HAContext)!;
  const [, tick] = useState(0);
  useEffect(() => client.subscribe(() => tick((n) => n + 1)), [client]);
  return client;
}

export function isOn(state: string | undefined) {
  return state === 'on' || state === 'open' || state === 'playing';
}

export function isUnknown(state: string | undefined) {
  return state === undefined || state === 'unavailable' || state === 'unknown';
}

// Недоступные датчики (unavailable или пропавшие из HA) не показываем.
// Пока связи с HA нет, скрывать нечего — иначе опустеют все карточки разом.
export function isAvailable(client: HAClient, id: string) {
  if (client.status !== 'connected' || !client.loaded) return true;
  const s = client.states[id];
  return !!s && s.state !== 'unavailable';
}

export function stateOf(client: HAClient, id: string) {
  const s = id ? client.states[id] : undefined;
  return s && !isUnknown(s.state) ? s.state : undefined;
}

export function fmtNum(v: string | undefined, digits = 1) {
  if (v === undefined || isNaN(parseFloat(v))) return '--';
  return parseFloat(v).toFixed(digits);
}

export function unitOf(client: HAClient, id: string) {
  const s = client.states[id];
  return s && s.attributes.unit_of_measurement ? ' ' + s.attributes.unit_of_measurement : '';
}

// Открыть карточку подробностей (график и статистика). Первая сущность — основная,
// остальные (например, влажность к температуре) показываются рядом чипами.
export const DetailContext = createContext<(entities: string[]) => void>(() => {});

export function useDetail() {
  return useContext(DetailContext);
}
