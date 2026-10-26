// Устройства в карточках: устройство из HA раскрывается в те свои сущности, что подходят типу карточки.
import type { HAClient, HassState } from './ha';
import { CARD_TYPES, type Card, type CardType, type Item } from './layout';

// Подходит ли сущность карточке — одно правило и для выбора в редакторе, и для раскрытия устройства.
export function fits(type: CardType, s: HassState | undefined): boolean {
  if (!s) return false;
  if (CARD_TYPES[type].domains.indexOf(s.entity_id.split('.')[0]) === -1) return false;
  const dc = s.attributes.device_class;
  const weather = s.entity_id.indexOf('weather.') === 0;
  // Климат и погода смешиваются: в климат можно «На улице», в погоду — комнатные градусники.
  if (type === 'climate' || type === 'weather') return weather || dc === 'temperature';
  // Колонки и телевизоры — в одной карточке; каждое устройство рисуется своим плеером.
  return true;
}

function sibling(ha: HAClient, ids: string[], dc: string) {
  return ids.filter((id) => ha.states[id] && ha.states[id].entity_id.indexOf('sensor.') === 0 && ha.states[id].attributes.device_class === dc)[0];
}

export function expandItem(ha: HAClient, type: CardType, it: Item): Item[] {
  if (!it.device) return [it];
  const dev = ha.devices[it.device];
  // Реестр ещё не загружен — пока показываем запомненную сущность устройства.
  if (!dev) return it.entity ? [{ entity: it.entity, name: it.name }] : [];
  const ids = dev.entities.filter((id) => ha.registry[id] && ha.registry[id].ec == null && !!ha.states[id]);
  const mine = ids.filter((id) => fits(type, ha.states[id]));
  const single = mine.length === 1;
  const short = (id: string) => (single ? it.name || dev.name : ha.registry[id].en || dev.name || undefined);
  if (type === 'climate') return mine.map((id) => ({ entity: id, hum: sibling(ha, ids, 'humidity'), name: short(id) }));
  if (type === 'ac') return mine.map((id) => ({ entity: id, temp: it.temp || sibling(ha, ids, 'temperature'), name: short(id) }));
  return mine.map((id) => ({ entity: id, name: short(id), icon: undefined }));
}

export function expandCard(ha: HAClient, card: Card): Card {
  if (!card.items.some((it) => it.device)) return card;
  const seen: Record<string, boolean> = {};
  const items: Item[] = [];
  card.items.forEach((it) => expandItem(ha, card.type, it).forEach((x) => {
    if (!seen[x.entity]) { seen[x.entity] = true; items.push(x); }
  }));
  return { ...card, items };
}
