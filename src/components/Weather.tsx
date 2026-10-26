import { Droplets, Gauge, Wind } from 'lucide-preact';
import { stateOf, useDetail, useHA } from '../lib/hooks';
import { condition, pressureMm, useForecast, windMs } from '../lib/weather';
import type { Card } from '../lib/layout';
import type { Size } from './CardView';
import { itemName } from './CardView';
import { fmtTime } from './Chart';
import { t, tList } from '../i18n';


function round(v: unknown) {
  const n = Number(v);
  return isNaN(n) ? '—' : String(Math.round(n));
}

// Высоты блоков для раскладки по месту: что не помещается — не показываем, что помещается — показываем целиком.
const H_NOW = 64, H_FACTS = 32, H_ROOM = 36, H_HOURS = 84, H_DAY = 33;

export function WeatherCard({ card, size }: { card: Card; size: Size }) {
  const ha = useHA();
  const detail = useDetail();
  // Прогноз — первая погодная сущность; остальное (градусники квартиры, погода других мест) — строками ниже.
  const forecast = card.items.filter((it) => it.entity.indexOf('weather.') === 0)[0];
  const rooms = card.items.filter((it) => it !== forecast);
  const entity = forecast && forecast.entity;
  const s = entity ? ha.states[entity] : undefined;
  const { hourly, days } = useForecast(ha, entity);

  // Бюджет высоты по приоритету: сейчас → комнаты → часы → дни (сколько влезет).
  let left = size.h - (s ? H_NOW + H_FACTS : 0);
  const roomsN = Math.max(0, Math.min(rooms.length, Math.floor(left / H_ROOM)));
  left -= roomsN * H_ROOM + (roomsN ? 10 : 0);
  const showHours = !!s && hourly.length > 0 && left >= H_HOURS;
  if (showHours) left -= H_HOURS + 12;
  const daysN = s ? Math.max(0, Math.min(days.length, 7, Math.floor((left - 10) / H_DAY))) : 0;
  const shownDays = days.slice(0, daysN);

  // Общая шкала для полосок «мин–макс» по дням, как в погоде на iOS.
  const lo = Math.min.apply(null, shownDays.map((d) => (d.lo != null ? d.lo : 99)));
  const hi = Math.max.apply(null, shownDays.map((d) => (d.hi != null ? d.hi : -99)));
  const pos = (v: number) => ((v - lo) / Math.max(1, hi - lo)) * 100;
  const now = Date.now();
  const a = s ? s.attributes : {};
  const c = condition(s && s.state);
  const wind = windMs(a.wind_speed, a.wind_speed_unit);
  const press = pressureMm(a.pressure, a.pressure_unit);

  return (
    <div class="weather">
      {s && (
        <div class="weather-now">
          <c.Icon size={size.w > 360 ? 54 : 40} />
          <div class="weather-temp">{round(a.temperature)}<sup>°</sup></div>
          <div class="weather-desc">
            <b>{c.label}</b>
            {a.apparent_temperature != null && <span>{t('weather.feels_like', { t: round(a.apparent_temperature) })}</span>}
            {days[0] && days[0].hi != null && <span>{round(days[0].lo)}° … {round(days[0].hi)}°</span>}
          </div>
        </div>
      )}

      {s && (
        <div class="weather-facts">
          {wind != null && <span><Wind size={14} />{t('weather.wind', { v: wind.toFixed(1) })}</span>}
          {a.humidity != null && <span><Droplets size={14} />{round(a.humidity)}%</span>}
          {press != null && <span><Gauge size={14} />{t('weather.pressure', { v: Math.round(press) })}</span>}
        </div>
      )}

      {roomsN > 0 && (
        <div class="weather-rooms">
          {rooms.slice(0, roomsN).map((it) => {
            const rs = ha.states[it.entity];
            const isWeather = it.entity.indexOf('weather.') === 0;
            const temp = isWeather ? rs && rs.attributes.temperature : rs && rs.state;
            const hum = isWeather ? rs && rs.attributes.humidity : it.hum ? stateOf(ha, it.hum) : undefined;
            return (
              <div class="wroom tappable" key={it.entity} onClick={() => detail(it.hum ? [it.entity, it.hum] : [it.entity])}>
                <span class="wroom-name">{itemName(ha, it)}</span>
                {hum != null && <span class="wroom-hum"><Droplets size={12} />{round(hum)}%</span>}
                <b class="wroom-temp">{fmtTemp(temp)}°</b>
              </div>
            );
          })}
        </div>
      )}

      {showHours && (
        <div class="weather-hours">
          {hourly.filter((h) => Date.parse(h.datetime) > now - 3600e3).slice(0, 12).map((h) => {
            const hc = condition(h.condition);
            return (
              <div class="hour" key={h.datetime}>
                <span class="muted">{fmtTime(Date.parse(h.datetime))}</span>
                <hc.Icon size={18} />
                <b>{round(h.temperature)}°</b>
              </div>
            );
          })}
        </div>
      )}

      {shownDays.length > 0 && (
        <div class="weather-days">
          {shownDays.map((d, i) => {
            const dc = condition(d.condition);
            return (
              <div class="day" key={d.t}>
                <span class="day-name">{i === 0 ? t('weather.today') : tList('date.weekdays_short')[new Date(d.t).getDay()]}</span>
                <dc.Icon size={18} />
                <span class="day-lo">{round(d.lo)}°</span>
                <span class="day-bar">
                  {d.lo != null && d.hi != null && <i style={{ left: pos(d.lo) + '%', width: Math.max(4, pos(d.hi) - pos(d.lo)) + '%' }} />}
                </span>
                <span class="day-hi">{round(d.hi)}°</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Температура с десятыми для комнат, целая — для крупных чисел.
function fmtTemp(v: unknown) {
  const n = Number(v);
  return isNaN(n) ? '—' : (Math.round(n * 10) / 10).toFixed(1);
}

// Погода под часами на фото: иконка, температура, состояние, мин–макс на сегодня.
export function AmbientWeather({ entity }: { entity: string }) {
  const ha = useHA();
  const s = ha.states[entity];
  const { days } = useForecast(ha, entity);
  if (!s || s.state === 'unavailable') return null;
  const c = condition(s.state);
  const today = days[0];
  return (
    <div class="ambient-weather">
      <c.Icon size={30} />
      <span class="aw-temp">{round(s.attributes.temperature)}°</span>
      <span class="aw-desc">
        {c.label}
        {today && today.hi != null && <small>{round(today.lo)}° … {round(today.hi)}°</small>}
      </span>
    </div>
  );
}
