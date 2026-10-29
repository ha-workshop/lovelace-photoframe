import { useRef, useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { Droplets, Power, VideoOff } from 'lucide-preact';
import { fmtNum, isAvailable, isOn, isUnknown, stateOf, unitOf, useDetail, useHA } from '../lib/hooks';
import { guessIcon, iconFor } from '../lib/icons';
import type { HAClient } from '../lib/ha';
import { cardTypeTitle, type Card, type Item } from '../lib/layout';
import { ClimateControl } from './ClimateControl';
import { Media } from './Media';
import { WeatherCard } from './Weather';
import { condition } from '../lib/weather';
import { expandCard } from '../lib/devices';
import { t } from '../i18n';

// Отрисовка карточек по типу. Один и тот же код — в панели, в карточке поверх фото и в информерах.

// Карточка, какой её показывать: устройства раскрыты в сущности, недоступные убраны.
// Для климата смотрим на датчик температуры.
export function visibleCard(ha: HAClient, full: Card): Card {
  // Пустое название — показываем название типа на языке этого устройства.
  const card = expandCard(ha, full.title ? full : { ...full, title: cardTypeTitle(full.type) });
  const items = card.items.filter((it) => isAvailable(ha, it.entity));
  return items.length === card.items.length ? card : { ...card, items };
}

export function itemName(ha: HAClient, item: Item) {
  const s = ha.states[item.entity];
  return item.name || (s && s.attributes.friendly_name) || item.entity;
}

function deviceClass(ha: HAClient, entity: string): string | undefined {
  const s = ha.states[entity];
  return s ? s.attributes.device_class : undefined;
}

// Классы бинарных датчиков с собственными словами для «вкл/выкл» (sensor.<класс>.on/off в переводах).
const BINARY_CLASSES = ['door', 'window', 'opening', 'garage_door', 'moisture', 'smoke', 'gas', 'problem', 'safety',
  'motion', 'occupancy', 'presence', 'connectivity', 'power', 'plug'];
const ALERT_CLASSES = ['door', 'window', 'opening', 'garage_door', 'moisture', 'smoke', 'gas', 'problem', 'safety'];

// Состояние датчика человеческими словами + нужно ли подсветить тревогу.
export function describe(ha: HAClient, entity: string): { text: string; alert: boolean; on: boolean } {
  const s = ha.states[entity];
  if (!s || isUnknown(s.state)) return { text: t('sensor.no_data'), alert: false, on: false };
  const domain = entity.split('.')[0];
  const dc = s.attributes.device_class;
  if (domain === 'binary_sensor') {
    const on = s.state === 'on';
    const base = BINARY_CLASSES.indexOf(dc) !== -1 ? 'sensor.' + dc + '.' : 'sensor.';
    return { text: t(base + (on ? 'on' : 'off')), alert: on && ALERT_CLASSES.indexOf(dc) !== -1, on };
  }
  if (domain === 'lock') return { text: s.state === 'locked' ? t('sensor.locked') : t('sensor.unlocked'), alert: s.state !== 'locked', on: s.state !== 'locked' };
  if (domain === 'cover') return { text: s.state === 'open' ? t('sensor.open') : s.state === 'closed' ? t('sensor.closed') : s.state, alert: false, on: s.state === 'open' };
  const num = parseFloat(s.state);
  return { text: (isNaN(num) ? s.state : String(Math.round(num * 10) / 10)) + unitOf(ha, entity), alert: false, on: false };
}

// Размер карточки в пикселях — по нему содержимое решает, сколько плиток в ряд и нужен ли компактный вид.
export interface Size { w: number; h: number }

function tileCols(size: Size) {
  return Math.max(1, Math.min(5, Math.floor(size.w / 150)));
}

// Плитки под размер карточки: если ряды не помещаются по высоте — больше колонок (пока плитки не уже 120 px),
// потом компактные плитки, потом строки «значок + имя». Не влезают и строки — тогда прокрутка.
function tileClass(n: number, size: Size) {
  const GAP = 10;
  const height = (cols: number) => (size.h + GAP) / Math.ceil(n / cols) - GAP;
  let cols = tileCols(size);
  while (cols < Math.min(n, 6) && height(cols) < 96 && size.w / (cols + 1) >= 120) cols++;
  const h = height(cols);
  return 'lights cols-' + cols + (h >= 96 ? '' : h >= 70 ? ' compact' : ' list');
}

function Climate({ card, size }: { card: Card; size: Size }) {
  const ha = useHA();
  const detail = useDetail();
  // На комнату нужно ~90px высоты для крупных цифр.
  const compact = size.h / Math.max(1, card.items.length) < 95;
  return (
    <div class={'rooms' + (compact ? ' compact' : '')}>
      {card.items.map((it) => {
        // Погода в климате — строка «на улице»: температура и влажность из атрибутов, значок погоды.
        const w = it.entity.indexOf('weather.') === 0 ? ha.states[it.entity] : undefined;
        const W = w ? condition(w.state).Icon : null;
        return (
          <div class={'room tappable' + (w ? ' room-outside' : '')} key={it.entity} onClick={() => detail(it.hum ? [it.entity, it.hum] : [it.entity])}>
            <div class="room-name">{W && <W size={14} />}{itemName(ha, it)}</div>
            <div class="room-vals">
              <span class="room-temp">{w ? fmtNum(String(w.attributes.temperature)) : fmtNum(stateOf(ha, it.entity))}<sup>°</sup></span>
              {w && w.attributes.humidity != null && <span class="room-hum"><Droplets size={14} />{Math.round(w.attributes.humidity)}%</span>}
              {!w && it.hum && isAvailable(ha, it.hum) && <span class="room-hum"><Droplets size={14} />{fmtNum(stateOf(ha, it.hum), 0)}%</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Долгое нажатие на плитку открывает график, обычное — переключает.
function useLongPress(onLong: () => void, onTap: () => void) {
  const timer = useRef(0);
  const fired = useRef(false);
  const start = () => {
    fired.current = false;
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => { fired.current = true; onLong(); }, 550);
  };
  const cancel = () => clearTimeout(timer.current);
  return {
    onTouchStart: start,
    onMouseDown: start,
    onTouchEnd: cancel,
    onTouchMove: cancel,
    onMouseUp: cancel,
    onMouseLeave: cancel,
    onContextMenu: (e: Event) => e.preventDefault(),
    onClick: () => { if (fired.current) fired.current = false; else onTap(); },
  };
}

function SwitchTile({ it }: { it: Item }) {
  const ha = useHA();
  const detail = useDetail();
  const press = useLongPress(() => detail([it.entity]), () => ha.toggle(it.entity));
  const st = stateOf(ha, it.entity);
  const on = isOn(st);
  const Icon = iconFor(it.icon || guessIcon(it.entity));
  return (
    <button class={'light' + (on ? ' on' : '') + (st === undefined ? ' na' : '')} {...press}>
      <span class="light-icon"><Icon size={22} /></span>
      <span class="light-name">{itemName(ha, it)}</span>
      <span class="light-state">{st === undefined ? t('switch.unavailable') : on ? t('switch.on') : t('switch.off')}</span>
    </button>
  );
}

function Switches({ card, size }: { card: Card; size: Size }) {
  return (
    <div class={tileClass(card.items.length, size)}>
      {card.items.map((it) => <SwitchTile key={it.entity} it={it} />)}
    </div>
  );
}

function Cameras({ card, onCamera }: { card: Card; onCamera: (url: string) => void }) {
  const ha = useHA();
  const [active, setActive] = useState(0);
  const it = card.items[Math.min(active, card.items.length - 1)];
  const url = it ? ha.cameraStreamUrl(it.entity) : '';
  return (
    <div class="cam-wrap">
      {card.items.length > 1 && (
         <div class="seg seg-inline seg-full">
          {card.items.map((c, i) => (
            <button key={c.entity + i} class={i === active ? 'active' : ''} onClick={() => setActive(i)}>{itemName(ha, c)}</button>
          ))}
        </div>
      )}
      <div class={'cam fit-' + (card.fit || 'cover')} onClick={() => url && onCamera(url)}>
        {url ? <img src={url} alt="" /> : <div class="cam-empty"><VideoOff size={26} /><span>{t('camera.no_stream')}</span></div>}
        {url && <span class="live"><i />LIVE</span>}
      </div>
    </div>
  );
}

function Sensors({ card }: { card: Card }) {
  const ha = useHA();
  const detail = useDetail();
  return (
    <div class="sensors">
      {card.items.map((it) => {
        const d = describe(ha, it.entity);
        const Icon = iconFor(it.icon || guessIcon(it.entity, deviceClass(ha, it.entity)));
        return (
          <div key={it.entity} class={'status-row tappable' + (d.alert ? ' alert' : '')} onClick={() => detail([it.entity])}>
            <span class="status-icon"><Icon size={20} /></span>
            <span class="status-text">
              <b>{itemName(ha, it)}</b>
              <small>{d.text}</small>
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Scenes({ card, size }: { card: Card; size: Size }) {
  const ha = useHA();
  const [fired, setFired] = useState('');
  const run = (entity: string) => {
    const domain = entity.split('.')[0];
    ha.callService(entity, domain === 'automation' ? 'trigger' : 'turn_on');
    setFired(entity);
    setTimeout(() => setFired(''), 1200);
  };
  return (
    <div class={tileClass(card.items.length, size)}>
      {card.items.map((it) => {
        const Icon = iconFor(it.icon || 'sparkles');
        return (
          <button key={it.entity} class={'light scene' + (fired === it.entity ? ' on' : '')} onClick={() => run(it.entity)}>
            <span class="light-icon"><Icon size={22} /></span>
            <span class="light-name">{itemName(ha, it)}</span>
            <span class="light-state">{fired === it.entity ? t('scene.started') : t('scene.tap_to_run')}</span>
          </button>
        );
      })}
    </div>
  );
}

export function CardBody(props: { card: Card; size: Size; onCamera: (url: string) => void }) {
  const ha = useHA();
  const { size, onCamera } = props;
  if (!props.card.items.length) return <div class="card-empty">{t('card.empty')}</div>;
  const card = visibleCard(ha, props.card);
  if (!card.items.length) return <div class="card-empty">{t('card.all_unavailable')}</div>;
  switch (card.type) {
    case 'climate': return <Climate card={card} size={size} />;
    case 'switches': return <Switches card={card} size={size} />;
    case 'cameras': return <Cameras card={card} onCamera={onCamera} />;
    case 'sensors': return <Sensors card={card} />;
    case 'scenes': return <Scenes card={card} size={size} />;
    case 'ac': return <ClimateControl card={card} size={size} />;
    case 'speakers':
    case 'tv': return <Media card={card} size={size} />;
    case 'weather': return <WeatherCard card={card} size={size} />;
  }
}

// Дополнительная кнопка в шапке карточки.
export function CardAside(props: { card: Card }) {
  const ha = useHA();
  const card = visibleCard(ha, props.card);
  if (card.type !== 'switches') return null;
  const lit = card.items.filter((it) => isOn(stateOf(ha, it.entity)));
  if (!lit.length) return null;
  return <button class="chip-btn" onClick={() => lit.forEach((it) => ha.turnOff(it.entity))}><Power size={14} /><span>{t('switches.all_off')}</span></button>;
}

export function cardTitle(ha: HAClient, full: Card) {
  const card = visibleCard(ha, full);
  if (card.type === 'switches') {
    const lit = card.items.filter((it) => isOn(stateOf(ha, it.entity))).length;
    return t('switches.title_count', { title: card.title, on: lit, total: card.items.length });
  }
  return card.title;
}

// Сводка для информера на фото.
export function summary(ha: HAClient, full: Card): { text: string; lit: boolean; alert: boolean } {
  const card = visibleCard(ha, full);
  const first = card.items[0];
  if (card.type === 'climate') {
    // Информер — первая комнатная температура (погоду для фото и так показывают под часами).
    const room = card.items.filter((it) => it.entity.indexOf('weather.') !== 0)[0];
    return { text: room ? fmtNum(stateOf(ha, room.entity)) + '°' : card.title, lit: false, alert: false };
  }
  if (card.type === 'switches') {
    const n = card.items.filter((it) => isOn(stateOf(ha, it.entity))).length;
    return { text: n ? t('chip.on_count', { title: card.title, n }) : t('chip.off', { title: card.title }), lit: n > 0, alert: false };
  }
  if (card.type === 'sensors') {
    for (let i = 0; i < card.items.length; i++) {
      const d = describe(ha, card.items[i].entity);
      if (d.alert) return { text: itemName(ha, card.items[i]) + ': ' + d.text.toLowerCase(), lit: false, alert: true };
    }
    return { text: first ? describe(ha, first.entity).text : card.title, lit: false, alert: false };
  }
  if (card.type === 'ac' && first) {
    const s = ha.states[first.entity];
    if (!s || s.state === 'off') return { text: t('chip.off', { title: card.title }), lit: false, alert: false };
    return { text: card.title + ': ' + s.attributes.temperature + '°', lit: true, alert: false };
  }
  if ((card.type === 'speakers' || card.type === 'tv') && card.items.length) {
    const playing = card.items.filter((it) => ha.states[it.entity] && ha.states[it.entity].state === 'playing')[0];
    const s = playing && ha.states[playing.entity];
    if (s) return { text: '♪ ' + (s.attributes.media_title || itemName(ha, playing)), lit: true, alert: false };
    const on = card.items.filter((it) => ha.states[it.entity] && ['on', 'idle', 'paused'].indexOf(ha.states[it.entity].state) !== -1);
    return { text: on.length && card.type === 'tv' ? t('chip.on', { title: card.title }) : card.title, lit: false, alert: false };
  }
  if (card.type === 'weather' && first) {
    const s = ha.states[first.entity];
    return { text: s ? Math.round(s.attributes.temperature) + '° ' + condition(s.state).label.toLowerCase() : card.title, lit: false, alert: false };
  }
  return { text: card.title, lit: false, alert: false };
}

export function Panel(props: { title: ComponentChildren; aside?: ComponentChildren; class?: string; children: ComponentChildren }) {
  return (
    <section class={'panel ' + (props.class || '')}>
      <div class="panel-head">
        <h2>{props.title}</h2>
        {props.aside}
      </div>
      {props.children}
    </section>
  );
}
