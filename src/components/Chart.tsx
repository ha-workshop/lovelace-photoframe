import { useRef, useState } from 'preact/hooks';
import type { Point, Range, Series } from '../lib/history';
import { t, tList } from '../i18n';

// Графики на чистом SVG — без библиотек, работают и в WebView Android 5.
// Цвета проверены валидатором палитры на тёмном фоне карточки: cyan 600 — данные, amber 600 — «включено».
export const SERIES = '#0891b2';
export const ON = '#d97706';
const OFF = 'rgba(255,255,255,0.13)';
const NA = 'rgba(255,255,255,0.04)';
const GRID = 'rgba(255,255,255,0.08)';
const SURFACE = '#141620';

const H = 210;
const PAD = { l: 46, r: 14, t: 14, b: 26 };

function pad2(n: number) { return n < 10 ? '0' + n : String(n); }
export function fmtTime(t: number) { const d = new Date(t); return pad2(d.getHours()) + ':' + pad2(d.getMinutes()); }
export function fmtDay(ms: number) { const d = new Date(ms); return t('date.day_month', { day: d.getDate(), month: tList('date.months_short')[d.getMonth()] }); }
export function fmtWhen(t: number, range: Range) { return range === '24h' ? fmtTime(t) : fmtDay(t) + ', ' + fmtTime(t); }

export function fmtNum(v: number) {
  const a = Math.abs(v);
  const s = a >= 100 ? v.toFixed(0) : a >= 10 ? v.toFixed(1) : a >= 1 ? v.toFixed(2) : v.toFixed(3);
  return s.indexOf('.') === -1 ? s : s.replace(/\.?0+$/, '');
}

// «Круглые» деления оси: 1, 2, 5 × 10^n.
function niceTicks(lo: number, hi: number, count: number) {
  if (lo === hi) { lo -= 1; hi += 1; }
  const raw = (hi - lo) / count;
  const mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
  const step = [1, 2, 5, 10].map((k) => k * mag).filter((s) => s >= raw)[0];
  const ticks: number[] = [];
  for (let v = Math.floor(lo / step) * step; v <= hi + step * 0.001; v += step) ticks.push(+v.toFixed(10));
  if (ticks[ticks.length - 1] < hi) ticks.push(ticks[ticks.length - 1] + step);
  return ticks;
}

function xTicks(from: number, to: number, range: Range) {
  const out: Array<{ t: number; label: string }> = [];
  const d = new Date(from);
  if (range === '24h') {
    d.setMinutes(0, 0, 0);
    d.setHours(Math.ceil(d.getHours() / 6) * 6);
    for (; d.getTime() <= to; d.setHours(d.getHours() + 6)) out.push({ t: d.getTime(), label: fmtTime(d.getTime()) });
  } else {
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 1);
    const every = range === '7d' ? 1 : 5;
    for (; d.getTime() <= to; d.setDate(d.getDate() + every)) {
      out.push({ t: d.getTime(), label: range === '7d' ? tList('date.weekdays_short')[d.getDay()] : d.getDate() + '.' + pad2(d.getMonth() + 1) });
    }
  }
  return out;
}

interface Props { series: Series; unit: string; range: Range; width: number }

export function Chart({ series, unit, range, width }: Props) {
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const W = Math.max(200, width);
  const plotW = W - PAD.l - PAD.r;
  const plotH = H - PAD.t - PAD.b;
  const { from, to } = series;
  const x = (t: number) => PAD.l + ((t - from) / (to - from)) * plotW;

  const empty = series.kind === 'timeline' ? !series.segments.length : !series.points.length;
  if (empty) return <div class="chart-empty">{t('chart.no_data')}</div>;

  // Ближайшая к пальцу точка (или отрезок для timeline) — для перекрестия и подсказки.
  const track = (clientX: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const r = svg.getBoundingClientRect();
    const t = from + ((clientX - r.left - PAD.l) / plotW) * (to - from);
    if (series.kind === 'timeline') {
      let k = 0;
      series.segments.forEach((s, i) => { if (s.from <= t) k = i; });
      setHover(k);
      return;
    }
    const p = series.points;
    const off = series.kind === 'bars' ? series.bucketMs / 2 : 0;
    let best = 0;
    p.forEach((pt, i) => { if (Math.abs(pt.t + off - t) < Math.abs(p[best].t + off - t)) best = i; });
    setHover(best);
  };
  const handlers = {
    onMouseMove: (e: MouseEvent) => track(e.clientX),
    onMouseLeave: () => setHover(null),
    onTouchStart: (e: TouchEvent) => track(e.touches[0].clientX),
    onTouchMove: (e: TouchEvent) => track(e.touches[0].clientX),
  };

  const xt = xTicks(from, to, range);
  const xAxis = xt.map((k) => (
    <text key={k.t} x={x(k.t)} y={H - 6} class="chart-tick" text-anchor="middle">{k.label}</text>
  ));

  if (series.kind === 'timeline') {
    const y0 = PAD.t + plotH / 2 - 16;
    const hs = hover != null ? series.segments[hover] : null;
    return (
      <div class="chart" style={{ width: W }}>
        <svg ref={svgRef} width={W} height={H} {...handlers}>
          {series.segments.map((s, i) => {
            const x1 = x(s.from), x2 = x(s.to);
            // 2px зазор между соседними отрезками.
            const w = Math.max(1, x2 - x1 - (x2 - x1 > 3 ? 2 : 0));
            return <rect key={i} x={x1} y={y0} width={w} height={32} rx={3} fill={s.on ? ON : s.on === null ? NA : OFF} stroke={s.on === null ? 'rgba(255,255,255,0.25)' : 'none'} stroke-dasharray="3 3" opacity={hover == null || hover === i ? 1 : 0.55} />;
          })}
          <line x1={PAD.l} x2={W - PAD.r} y1={y0 + 44} y2={y0 + 44} stroke={GRID} />
          {xAxis}
        </svg>
        <div class="chart-legend">
          <span><i style={{ background: ON }} />{t('switch.on')}</span>
          <span><i style={{ background: OFF }} />{t('switch.off')}</span>
          {series.segments.some((s) => s.on === null) && <span><i class="key-na" />{t('chart.no_connection')}</span>}
        </div>
        {hs && (
          <Tip x={x(hs.from) + Math.min(x(hs.to) - x(hs.from), 40) / 2} W={W}>
            <b>{hs.on ? t('switch.on') : hs.on === null ? t('chart.no_connection') : t('switch.off')}</b>
            <span>{fmtWhen(hs.from, range)} — {fmtWhen(hs.to, range)}</span>
          </Tip>
        )}
      </div>
    );
  }

  const p = series.points;
  const hasBand = p.some((pt) => pt.min != null && pt.max != null);
  let lo = Infinity, hi = -Infinity;
  p.forEach((pt) => {
    lo = Math.min(lo, pt.min != null ? pt.min : pt.v);
    hi = Math.max(hi, pt.max != null ? pt.max : pt.v);
  });
  if (series.kind === 'bars') lo = Math.min(0, lo);
  const ticks = niceTicks(lo, hi, 4);
  const yMin = ticks[0], yMax = ticks[ticks.length - 1];
  const y = (v: number) => PAD.t + plotH - ((v - yMin) / (yMax - yMin)) * plotH;

  const grid = ticks.map((v) => (
    <g key={v}>
      <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke={GRID} />
      <text x={PAD.l - 8} y={y(v) + 4} class="chart-tick" text-anchor="end">{fmtNum(v)}</text>
    </g>
  ));

  const hp = hover != null ? p[hover] : null;

  if (series.kind === 'bars') {
    const slot = (series.bucketMs / (to - from)) * plotW;
    const bw = Math.max(2, Math.min(24, slot - 2));
    // Посуточные столбики подписываем по центру столбика, а не на границе суток — иначе день «съезжает».
    const daily = series.bucketMs >= 864e5;
    const dayAxis = daily && p.map((pt, i) => {
      const d = new Date(pt.t);
      if (range === '30d' && (p.length - 1 - i) % 5) return null;
      return (
        <text key={pt.t} x={x(pt.t) + slot / 2} y={H - 6} class="chart-tick" text-anchor="middle">
          {range === '7d' ? tList('date.weekdays_short')[d.getDay()] : d.getDate() + '.' + pad2(d.getMonth() + 1)}
        </text>
      );
    });
    return (
      <div class="chart" style={{ width: W }}>
        <svg ref={svgRef} width={W} height={H} {...handlers}>
          {grid}
          {p.map((pt, i) => {
            const bx = x(pt.t) + (slot - bw) / 2;
            const top = y(Math.max(0, pt.v)), base = y(0);
            const h = Math.max(0, base - top);
            const r = Math.min(4, bw / 2, h);
            // Скругление только у верхнего края, у основания — прямой угол.
            const d = 'M' + bx + ',' + base + 'V' + (top + r) + 'Q' + bx + ',' + top + ' ' + (bx + r) + ',' + top
              + 'H' + (bx + bw - r) + 'Q' + (bx + bw) + ',' + top + ' ' + (bx + bw) + ',' + (top + r) + 'V' + base + 'Z';
            return <path key={i} d={d} fill={SERIES} opacity={hover == null || hover === i ? 1 : 0.5} />;
          })}
          {daily ? dayAxis : xAxis}
        </svg>
        {hp && (
          <Tip x={x(hp.t) + slot / 2} W={W}>
            <b>{fmtNum(hp.v)} {unit}</b>
            <span>{series.bucketMs >= 864e5 ? fmtDay(hp.t) : fmtDay(hp.t) + ', ' + fmtTime(hp.t) + '–' + fmtTime(hp.t + series.bucketMs)}</span>
          </Tip>
        )}
      </div>
    );
  }

  // Линия: сырая история тянется последним значением до «сейчас».
  const pts: Point[] = hasBand ? p : p.concat({ t: to, v: p[p.length - 1].v });
  const line = pts.map((pt, i) => (i ? 'L' : 'M') + x(Math.max(pt.t, from)).toFixed(1) + ',' + y(pt.v).toFixed(1)).join('');
  const area = line + 'L' + x(pts[pts.length - 1].t).toFixed(1) + ',' + y(yMin) + 'L' + x(Math.max(pts[0].t, from)).toFixed(1) + ',' + y(yMin) + 'Z';
  const band = hasBand
    ? p.map((pt, i) => (i ? 'L' : 'M') + x(pt.t).toFixed(1) + ',' + y(pt.max as number).toFixed(1)).join('')
      + p.slice().reverse().map((pt) => 'L' + x(pt.t).toFixed(1) + ',' + y(pt.min as number).toFixed(1)).join('') + 'Z'
    : '';
  const last = p[p.length - 1];

  return (
    <div class="chart" style={{ width: W }}>
      <svg ref={svgRef} width={W} height={H} {...handlers}>
        {grid}
        {hasBand ? <path d={band} fill={SERIES} opacity={0.22} /> : <path d={area} fill={SERIES} opacity={0.1} />}
        <path d={line} fill="none" stroke={SERIES} stroke-width={2} stroke-linejoin="round" stroke-linecap="round" />
        <circle cx={x(hasBand ? last.t : to)} cy={y(last.v)} r={4} fill={SERIES} stroke={SURFACE} stroke-width={2} />
        {hp && (
          <g>
            <line x1={x(hp.t)} x2={x(hp.t)} y1={PAD.t} y2={PAD.t + plotH} stroke="rgba(255,255,255,0.35)" />
            <circle cx={x(hp.t)} cy={y(hp.v)} r={5} fill={SERIES} stroke={SURFACE} stroke-width={2} />
          </g>
        )}
        {xAxis}
      </svg>
      {hasBand && <div class="chart-legend"><span><i class="key-line" style={{ background: SERIES }} />{t('chart.mean')}</span><span><i style={{ background: SERIES, opacity: 0.35 }} />{t('chart.min_max')}</span></div>}
      {hp && (
        <Tip x={x(hp.t)} W={W}>
          <b>{fmtNum(hp.v)} {unit}</b>
          {hp.min != null && hp.max != null && <span>{fmtNum(hp.min)} … {fmtNum(hp.max)} {unit}</span>}
          <span>{fmtWhen(hp.t, range)}</span>
        </Tip>
      )}
    </div>
  );
}

function Tip(props: { x: number; W: number; children: preact.ComponentChildren }) {
  // Подсказка не вылезает за края графика.
  const left = Math.max(60, Math.min(props.W - 60, props.x));
  return <div class="chart-tip" style={{ left }}>{props.children}</div>;
}
