import { useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
import { Power, Table2 } from 'lucide-preact';
import { isAvailable, isUnknown, unitOf, useHA } from '../lib/hooks';
import { deviceSiblings, kindOf, load, summarize, RANGE_MS, type Range, type Series, type Summary } from '../lib/history';
import type { HAClient } from '../lib/ha';
import { Chart, fmtDay, fmtNum, fmtTime, fmtWhen } from './Chart';
import { Modal } from './Modals';
import { WeatherCard } from './Weather';
import { t } from '../i18n';

const RANGES: Range[] = ['24h', '7d', '30d'];
const TOGGLABLE = ['switch', 'light', 'fan', 'input_boolean'];

function name(ha: HAClient, id: string) {
  const s = ha.states[id];
  return String((s && s.attributes.friendly_name) || id);
}

// У сущностей одного устройства имена начинаются одинаково («Квартира Напряжение…», «Квартира Ток…») —
// в чипах убираем общий префикс, чтобы было коротко.
function shortNames(names: string[]) {
  if (names.length < 2) return names;
  const words = names.map((n) => n.split(' '));
  let k = 0;
  while (words.every((w) => w.length > k + 1 && w[k] === words[0][k])) k++;
  return words.map((w) => w.slice(k).join(' '));
}

function duration(ms: number) {
  const m = Math.round(ms / 60000);
  const d = Math.floor(m / 1440), h = Math.floor((m % 1440) / 60), mm = m % 60;
  return [d ? t('duration.days', { n: d }) : '', h || d ? t('duration.hours', { n: h }) : '', d ? '' : t('duration.minutes', { n: mm })].filter(Boolean).join(' ');
}

// Выключение из карточки — в два касания: у автомата это обесточит квартиру (и рамку вместе с ней).
function ToggleButton({ entity }: { entity: string }) {
  const ha = useHA();
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    if (!confirm) return;
    const t = setTimeout(() => setConfirm(false), 4000);
    return () => clearTimeout(t);
  }, [confirm]);
  const on = ha.states[entity] && ha.states[entity].state === 'on';
  const press = () => {
    if (on && !confirm) { setConfirm(true); return; }
    setConfirm(false);
    ha.toggle(entity);
  };
  return (
    <button class={'btn ' + (confirm ? 'btn-danger' : on ? 'btn-ghost' : 'btn-accent')} onClick={press}>
      <Power size={16} /><span>{confirm ? t('detail.confirm_off') : on ? t('common.turn_off') : t('common.turn_on')}</span>
    </button>
  );
}

function Stat(props: { label: string; value: string; note?: string }) {
  return (
    <div class="stat">
      <div class="stat-label">{props.label}</div>
      <div class="stat-value">{props.value}</div>
      {props.note && <div class="stat-note">{props.note}</div>}
    </div>
  );
}

function Stats({ series, sum, unit, range, current }: { series: Series; sum: Summary; unit: string; range: Range; current: string }) {
  const u = unit ? ' ' + unit : '';
  if (series.kind === 'timeline') {
    const total = series.to - series.from;
    return (
      <div class="stats">
        <Stat label={t('stat.now')} value={current} />
        <Stat label={t('stat.turned_on')} value={String(sum.onCount || 0)} note={t('stat.times')} />
        <Stat label={t('stat.on_time')} value={duration(sum.onMs || 0)} />
        <Stat label={t('stat.on_share')} value={Math.round(((sum.onMs || 0) / total) * 100) + '%'} />
      </div>
    );
  }
  if (series.kind === 'bars') {
    const perLabel = series.bucketMs >= 864e5 ? t('stat.avg_per_day') : t('stat.avg_per_hour');
    return (
      <div class="stats">
        <Stat label={t('stat.total')} value={sum.total != null ? fmtNum(sum.total) + u : '—'} />
        <Stat label={perLabel} value={sum.avg != null ? fmtNum(sum.avg) + u : '—'} />
        <Stat label={t('stat.peak')} value={sum.peak ? fmtNum(sum.peak.v) + u : '—'}
          note={sum.peak ? (series.bucketMs >= 864e5 ? fmtDay(sum.peak.t) : fmtTime(sum.peak.t)) : undefined} />
        <Stat label={t('stat.counter_now')} value={current} />
      </div>
    );
  }
  return (
    <div class="stats">
      <Stat label={t('stat.now')} value={current} />
      <Stat label={t('stat.min')} value={sum.min ? fmtNum(sum.min.v) + u : '—'} note={sum.min ? fmtWhen(sum.min.t, range) : undefined} />
      <Stat label={t('stat.max')} value={sum.max ? fmtNum(sum.max.v) + u : '—'} note={sum.max ? fmtWhen(sum.max.t, range) : undefined} />
      <Stat label={t('stat.avg')} value={sum.avg != null ? fmtNum(sum.avg) + u : '—'} />
    </div>
  );
}

// Те же данные таблицей — значения доступны не только с графика.
function DataTable({ series, unit, range }: { series: Series; unit: string; range: Range }) {
  const rows = series.kind === 'timeline'
    ? series.segments.slice().reverse().slice(0, 60).map((s) => [fmtWhen(s.from, range), s.on ? t('switch.on') : s.on === null ? t('chart.no_connection') : t('switch.off'), '—'])
    : series.points.slice().reverse().slice(0, 60).map((p) => [
      series.kind === 'bars' && series.bucketMs >= 864e5 ? fmtDay(p.t) : fmtWhen(p.t, range),
      fmtNum(p.v) + (unit ? ' ' + unit : ''),
      p.min != null && p.max != null ? fmtNum(p.min) + ' … ' + fmtNum(p.max) : '—',
    ]);
  const hasRange = series.kind === 'line' && series.points.some((p) => p.min != null);
  return (
    <div class="table-wrap">
      <table class="diag">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}><td>{r[0]}</td><td class="strong">{r[1]}</td>{hasRange && <td class="muted">{r[2]}</td>}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DetailModal(props: { entities: string[]; onClose: () => void }) {
  const ha = useHA();
  const [active, setActive] = useState(props.entities[0]);
  const [range, setRange] = useState<Range>('24h');
  const [series, setSeries] = useState<Series | null>(null);
  const [error, setError] = useState('');
  const [siblings, setSiblings] = useState<string[]>([]);
  const [table, setTable] = useState(false);
  const [width, setWidth] = useState(600);
  const boxRef = useRef<HTMLDivElement>(null);

  const state = ha.states[active];
  const unit = unitOf(ha, active).trim();
  const kind = kindOf(state);

  useLayoutEffect(() => {
    const measure = () => { if (boxRef.current) setWidth(boxRef.current.clientWidth); };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    deviceSiblings(ha, props.entities[0]).then((ids) => setSiblings(ids.filter((id) => !!ha.states[id])), () => {});
  }, [props.entities[0]]);

  useEffect(() => {
    if (!state) return;
    let alive = true;
    setSeries(null);
    setError('');
    load(ha, state, range).then(
      (s) => { if (alive) setSeries(s); },
      (e: Error) => { if (alive) setError(e.message); },
    );
    return () => { alive = false; };
  }, [active, range, ha.status]);

  // Недоступные датчики устройства не показываем; проверка на каждой отрисовке — датчик может вернуться в сеть.
  const related = props.entities
    .concat(siblings.filter((id) => props.entities.indexOf(id) === -1))
    .filter((id) => id === active || isAvailable(ha, id));
  const labels = shortNames(related.map((id) => name(ha, id)));
  const current = !state || isUnknown(state.state)
    ? t('sensor.no_data')
    : kind === 'timeline'
      ? (state.state === 'on' ? t('switch.on') : state.state === 'off' ? t('switch.off') : state.state)
      : fmtNum(parseFloat(state.state)) + (unit ? ' ' + unit : '');
  const domain = active.split('.')[0];

  // Погода — вместо графика полный прогноз.
  if (domain === 'weather') {
    return (
      <Modal title={name(ha, active)} onClose={props.onClose} wide>
        <div class="detail" ref={boxRef}>
          <WeatherCard card={{ id: 'detail', type: 'weather', title: '', x: 0, y: 0, w: 6, h: 6, items: [{ entity: active }] }} size={{ w: width, h: 560 }} />
        </div>
      </Modal>
    );
  }

  return (
    <Modal title={name(ha, active)} onClose={props.onClose} wide>
      <div class="detail" ref={boxRef}>
        <div class="detail-hero">
          <div>
            <div class="hero-value">{current}</div>
            {state && <div class="muted small">{t('detail.updated', { when: fmtWhen(Date.parse(state.last_changed || '') || Date.now(), '7d') })}</div>}
          </div>
          {TOGGLABLE.indexOf(domain) !== -1 && state && <ToggleButton key={active} entity={active} />}
        </div>

        {related.length > 1 && (
          <div class="chips">
            {related.map((id, i) => {
              const s = ha.states[id];
              const val = !s || isUnknown(s.state) ? '—'
                : !isNaN(parseFloat(s.state)) ? fmtNum(parseFloat(s.state)) + unitOf(ha, id)
                  : s.state === 'on' ? t('chip.state_on') : s.state === 'off' ? t('chip.state_off') : s.state;
              return (
                <button key={id} class={'chip' + (id === active ? ' active' : '')} onClick={() => setActive(id)}>
                  <span>{labels[i]}</span><b>{val}</b>
                </button>
              );
            })}
          </div>
        )}

        <div class="detail-tools">
          <div class="seg">
            {RANGES.map((r) => <button key={r} class={r === range ? 'active' : ''} onClick={() => setRange(r)}>{t('range.' + r)}</button>)}
          </div>
          <button class={'chip-btn' + (table ? ' on' : '')} onClick={() => setTable(!table)}><Table2 size={14} /><span>{t('detail.table')}</span></button>
        </div>

        {error && <div class="chart-empty c-red">{t('detail.load_error', { error })}</div>}
        {!error && !series && <div class="chart-empty">{t('common.loading')}</div>}
        {series && (table ? <DataTable series={series} unit={unit} range={range} /> : <Chart series={series} unit={unit} range={range} width={width} />)}
        {series && <Stats series={series} sum={summarize(series)} unit={unit} range={range} current={current} />}
        {series && series.kind !== 'timeline' && range !== '24h' && (
          <div class="muted small detail-foot">
            {series.kind === 'bars' ? t('detail.foot_bars') : t(range === '7d' ? 'detail.foot_hourly' : 'detail.foot_daily')}
            {' · '}{t('detail.days', { n: Math.round(RANGE_MS[range] / 864e5) })}
          </div>
        )}
      </div>
    </Modal>
  );
}
