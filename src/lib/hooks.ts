import { createContext } from 'preact';
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import type { HAClient } from './ha';

export const HAContext = createContext<HAClient | null>(null);

// Виден ли этот слой. Скрытая панель управления (пока на экране фото) и экран с фото (пока открыта панель)
// не перерисовываются от каждого датчика в доме — на слабой рамке это главная фоновая нагрузка.
// Слой показали — он сразу обновляется до свежих состояний.
export const LiveContext = createContext(true);

// Перерисовка компонента при любом обновлении состояний HA (пока его слой виден).
export function useHA(): HAClient {
  const client = useContext(HAContext)!;
  const live = useContext(LiveContext);
  const [, tick] = useState(0);
  const hidden = useRef(false);
  useEffect(() => {
    if (!live) { hidden.current = true; return; }
    // Слой снова виден — догоняем изменения, пропущенные, пока он был скрыт.
    if (hidden.current) { hidden.current = false; tick((n) => n + 1); }
    return client.subscribe(() => tick((n) => n + 1));
  }, [client, live]);
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
