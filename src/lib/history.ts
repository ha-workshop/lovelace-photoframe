// История и статистика из Home Assistant для карточки подробностей.
// 24 часа — сырая история (каждое изменение), 7 и 30 дней — долгосрочная статистика recorder
// (почасовые/посуточные mean/min/max или прирост для счётчиков).
import type { HAClient, HassState } from './ha';

export type Range = '24h' | '7d' | '30d';
// line — измерение (температура, напряжение), bars — счётчик (kWh), timeline — вкл/выкл.
export type Kind = 'line' | 'bars' | 'timeline';

export interface Point { t: number; v: number; min?: number; max?: number }
// on: null — устройство было недоступно (нет связи), это не «выключено».
export interface Segment { from: number; to: number; on: boolean | null }

export interface Series {
  kind: Kind;
  from: number;
  to: number;
  points: Point[];
  segments: Segment[];
  // Для bars — длина одного столбика (час/сутки).
  bucketMs: number;
}

const HOUR = 3600e3;
const DAY = 24 * HOUR;
export const RANGE_MS: Record<Range, number> = { '24h': DAY, '7d': 7 * DAY, '30d': 30 * DAY };

const TIMELINE_DOMAINS = ['binary_sensor', 'switch', 'light', 'input_boolean', 'fan', 'lock', 'cover', 'media_player'];
const ON_STATES = ['on', 'open', 'unlocked', 'playing', 'home'];

export function kindOf(s: HassState | undefined): Kind {
  if (!s) return 'line';
  if (TIMELINE_DOMAINS.indexOf(s.entity_id.split('.')[0]) !== -1) return 'timeline';
  const sc = s.attributes.state_class;
  if (sc === 'total' || sc === 'total_increasing') return 'bars';
  return isNaN(parseFloat(s.state)) ? 'timeline' : 'line';
}

interface HistoryRow { s: string; lu?: number; lc?: number }
interface StatRow { start: number | string; mean?: number | null; min?: number | null; max?: number | null; change?: number | null }

function iso(t: number) { return new Date(t).toISOString(); }
function ms(v: number | string) { return typeof v === 'number' ? v : Date.parse(v); }

function history(ha: HAClient, entity: string, from: number, to: number) {
  return ha.call<Record<string, HistoryRow[]>>({
    type: 'history/history_during_period',
    start_time: iso(from),
    end_time: iso(to),
    entity_ids: [entity],
    minimal_response: true,
    no_attributes: true,
  }).then((r) => (r[entity] || []).map((x) => ({ s: x.s, t: ((x.lu || x.lc || 0) * 1000) || from })));
}

function statistics(ha: HAClient, entity: string, from: number, to: number, period: 'hour' | 'day', types: string[]) {
  return ha.call<Record<string, StatRow[]>>({
    type: 'recorder/statistics_during_period',
    start_time: iso(from),
    end_time: iso(to),
    statistic_ids: [entity],
    period,
    types,
  }).then((r) => r[entity] || []);
}

function numeric(rows: Array<{ s: string; t: number }>): Point[] {
  const out: Point[] = [];
  rows.forEach((r) => {
    const v = parseFloat(r.s);
    if (!isNaN(v)) out.push({ t: r.t, v });
  });
  return out;
}

export function load(ha: HAClient, state: HassState, range: Range): Promise<Series> {
  const entity = state.entity_id;
  const kind = kindOf(state);
  const to = Date.now();
  const from = to - RANGE_MS[range];
  const empty: Series = { kind, from, to, points: [], segments: [], bucketMs: 0 };

  if (kind === 'timeline') {
    return history(ha, entity, from, to).then((rows) => {
      const segments: Segment[] = rows.map((r, i) => ({
        from: Math.max(from, r.t),
        to: i + 1 < rows.length ? rows[i + 1].t : to,
        on: r.s === 'unavailable' || r.s === 'unknown' ? null : ON_STATES.indexOf(r.s) !== -1,
      }));
      return { ...empty, segments };
    });
  }

  if (kind === 'bars') {
    const period = range === '24h' ? 'hour' : 'day';
    return statistics(ha, entity, from, to, period, ['change']).then((rows) => ({
      ...empty,
      bucketMs: period === 'hour' ? HOUR : DAY,
      points: rows.filter((r) => r.change != null).map((r) => ({ t: ms(r.start), v: r.change as number })),
    }));
  }

  if (range === '24h') return history(ha, entity, from, to).then((rows) => ({ ...empty, points: numeric(rows) }));
  // Длинные периоды — по статистике; у датчиков без state_class её нет, тогда берём сырую историю.
  return statistics(ha, entity, from, to, range === '7d' ? 'hour' : 'day', ['mean', 'min', 'max']).then((rows) => {
    const points = rows
      .filter((r) => r.mean != null)
      .map((r) => ({ t: ms(r.start), v: r.mean as number, min: r.min == null ? undefined : r.min, max: r.max == null ? undefined : r.max }));
    if (points.length) return { ...empty, points };
    return history(ha, entity, from, to).then((h) => ({ ...empty, points: numeric(h) }));
  });
}

// ── Сводка ────────────────────────────────────────────

export interface Summary {
  min?: Point;
  max?: Point;
  avg?: number;
  total?: number;      // bars: сумма за период
  peak?: Point;        // bars: самый большой столбик
  onCount?: number;    // timeline: сколько раз включалось
  onMs?: number;       // timeline: сколько было включено
}

export function summarize(series: Series): Summary {
  const p = series.points;
  if (series.kind === 'timeline') {
    // Включение — только переход из «выключено»; возврат после потери связи не считается.
    let onCount = 0, onMs = 0, prev: boolean | null = null;
    series.segments.forEach((s) => {
      if (s.on) {
        onMs += s.to - s.from;
        if (prev === false) onCount++;
      }
      if (s.on !== null) prev = s.on;
    });
    return { onCount, onMs };
  }
  if (!p.length) return {};
  if (series.kind === 'bars') {
    let total = 0, peak = p[0];
    p.forEach((x) => { total += x.v; if (x.v > peak.v) peak = x; });
    return { total, peak, avg: total / p.length };
  }
  let min = p[0], max = p[0];
  p.forEach((x) => {
    if ((x.min != null ? x.min : x.v) < (min.min != null ? min.min : min.v)) min = x;
    if ((x.max != null ? x.max : x.v) > (max.max != null ? max.max : max.v)) max = x;
  });
  // Сырая история ступенчатая: среднее считаем с весом по времени, а не по числу точек.
  let sum = 0, span = 0;
  p.forEach((x, i) => {
    const next = i + 1 < p.length ? p[i + 1].t : series.to;
    const dt = Math.max(0, next - Math.max(x.t, series.from));
    sum += x.v * dt;
    span += dt;
  });
  return {
    min: { t: min.t, v: min.min != null ? min.min : min.v },
    max: { t: max.t, v: max.max != null ? max.max : max.v },
    avg: span ? sum / span : undefined,
  };
}

// Сущности того же устройства (для автомата: напряжение, ток, мощность, энергия, выключатель).
// list_for_display не требует прав администратора и кэшируется на время работы рамки.
// ec — категория (диагностика/настройки: прошивка, батарея, RSSI) — такие в чипы не берём.
// Реестр HA-клиент грузит сам после подключения; здесь только ответ по нему.
export function deviceSiblings(ha: HAClient, entity: string): Promise<string[]> {
  const me = ha.registry[entity];
  const dev = me && me.di ? ha.devices[me.di] : undefined;
  if (!dev) return Promise.resolve([]);
  return Promise.resolve(dev.entities.filter((id) => id !== entity && ha.registry[id].ec == null));
}
