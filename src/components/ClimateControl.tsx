import { useEffect, useRef, useState } from 'preact/hooks';
import { AirVent, Droplets, Fan, Flame, Minus, Plus, Power, Snowflake, Sparkles } from 'lucide-preact';
import { isUnknown, stateOf, useHA } from '../lib/hooks';
import type { Card, Item } from '../lib/layout';
import type { Size } from './CardView';
import { itemName } from './CardView';
import { ON, SERIES, fmtNum } from './Chart';
import { t } from '../i18n';

// Кондиционер: шкала с целевой температурой, ± по шагу кондиционера, режимы и скорость вентилятора.

const MODES: Record<string, { Icon: typeof Snowflake; color: string }> = {
  cool: { Icon: Snowflake, color: SERIES },
  heat: { Icon: Flame, color: ON },
  heat_cool: { Icon: Sparkles, color: '#a3a3a3' },
  auto: { Icon: Sparkles, color: '#a3a3a3' },
  dry: { Icon: Droplets, color: '#a3a3a3' },
  fan_only: { Icon: Fan, color: '#a3a3a3' },
  off: { Icon: Power, color: 'rgba(255,255,255,0.25)' },
};

const FANS = ['auto', 'low', 'medium', 'middle', 'high', 'quiet', 'turbo', 'diffuse', 'focus'];
const fanText = (f: string) => (FANS.indexOf(f) !== -1 ? t('ac.fan.' + f) : f);
const modeText = (m: string) => (MODES[m] ? t('ac.mode.' + m) : m);

// Дуга 270° снизу-слева направо-вниз.
function arc(cx: number, cy: number, r: number, from: number, to: number) {
  const a0 = (135 + from * 270) * Math.PI / 180;
  const a1 = (135 + to * 270) * Math.PI / 180;
  const large = (to - from) * 270 > 180 ? 1 : 0;
  return 'M' + (cx + r * Math.cos(a0)).toFixed(1) + ',' + (cy + r * Math.sin(a0)).toFixed(1)
    + 'A' + r + ',' + r + ' 0 ' + large + ' 1 ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1);
}

function Unit({ it, size }: { it: Item; size: Size }) {
  const ha = useHA();
  const s = ha.states[it.entity];
  const a = s ? s.attributes : {};
  const mode = s ? s.state : 'off';
  const off = mode === 'off';
  const step = a.target_temp_step || 0.5;
  const min = a.min_temp != null ? a.min_temp : 16;
  const max = a.max_temp != null ? a.max_temp : 31;

  // Целевую температуру меняем сразу на экране, а в HA отправляем, когда пальцы перестали жать ±.
  const [target, setTarget] = useState<number | null>(null);
  const timer = useRef(0);
  const shown = target != null ? target : a.temperature;
  useEffect(() => { setTarget(null); }, [a.temperature]);
  const bump = (d: number) => {
    const base = shown != null ? shown : (min + max) / 2;
    const next = Math.max(min, Math.min(max, Math.round((base + d * step) / step) * step));
    setTarget(next);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => ha.callService(it.entity, 'set_temperature', { temperature: next }), 800);
  };

  const room: string | undefined = a.current_temperature != null ? String(a.current_temperature) : it.temp ? stateOf(ha, it.temp) : undefined;
  const m = MODES[mode] || MODES.auto;
  const compact = size.h < 260 || size.w < 260;
  const D = compact ? 132 : 176;
  const frac = shown != null ? (shown - min) / (max - min) : 0;
  const modes = (a.hvac_modes as string[] | undefined) || [];
  const fans = (a.fan_modes as string[] | undefined) || [];

  return (
    <div class={'ac' + (compact ? ' compact' : '')}>
      <div class="ac-main">
        <button class="ac-step" disabled={off} onClick={() => bump(-1)}><Minus size={22} /></button>
        <div class="ac-dial" style={{ width: D, height: D }}>
          <svg width={D} height={D}>
            <path d={arc(D / 2, D / 2, D / 2 - 8, 0, 1)} stroke="rgba(255,255,255,0.1)" stroke-width={8} fill="none" stroke-linecap="round" />
            {!off && shown != null && (
              <path d={arc(D / 2, D / 2, D / 2 - 8, 0, Math.max(0.01, frac))} stroke={m.color} stroke-width={8} fill="none" stroke-linecap="round" />
            )}
          </svg>
          <div class="ac-center">
            <div class="ac-target">{shown != null && !off ? fmtNum(shown) : '—'}<sup>°</sup></div>
            <div class="ac-mode">{modeText(mode)}</div>
            {room != null && !isUnknown(room) && <div class="ac-room">{t('ac.room', { t: fmtNum(Number(room)) })}</div>}
          </div>
        </div>
        <button class="ac-step" disabled={off} onClick={() => bump(1)}><Plus size={22} /></button>
      </div>

      <div class="ac-modes">
        {modes.map((key) => {
          const mm = MODES[key] || { Icon: AirVent, color: '#a3a3a3' };
          return (
            <button key={key} class={'ac-mode-btn' + (key === mode ? ' active' : '')} title={modeText(key)}
              style={key === mode && key !== 'off' ? { background: mm.color, borderColor: mm.color } : undefined}
              onClick={() => ha.callService(it.entity, 'set_hvac_mode', { hvac_mode: key })}>
              <mm.Icon size={18} />
            </button>
          );
        })}
      </div>

      {!compact && fans.length > 0 && !off && (
        <div class="seg seg-wide ac-fan">
          {fans.map((f) => (
            <button key={f} class={a.fan_mode === f ? 'active' : ''} onClick={() => ha.callService(it.entity, 'set_fan_mode', { fan_mode: f })}>{fanText(f)}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ClimateControl({ card, size }: { card: Card; size: Size }) {
  const ha = useHA();
  const [active, setActive] = useState(0);
  const it = card.items[Math.min(active, card.items.length - 1)];
  return (
    <div class="ac-wrap">
      {card.items.length > 1 && (
        <div class="seg seg-inline">
          {card.items.map((c, i) => <button key={c.entity} class={i === active ? 'active' : ''} onClick={() => setActive(i)}>{itemName(ha, c)}</button>)}
        </div>
      )}
      <Unit key={it.entity} it={it} size={size} />
    </div>
  );
}
