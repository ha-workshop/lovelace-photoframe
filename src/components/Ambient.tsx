import type { RefObject } from 'preact';
import { useState } from 'preact/hooks';
import { ChevronDown, ChevronUp, Plus, WifiOff, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { iconFor } from '../lib/icons';
import { formatDate, formatTime, useNow } from '../lib/time';
import { cardTypeTitle, type Card } from '../lib/layout';
import {
  CLOCK_COLOR, FONT_WEIGHT, setLockPrefs, sortWidgets, useLockPrefs,
  type ChipStyle, type ClockColor, type ClockFont, type ClockSize, type LockLayout, type LockPrefs,
} from '../lib/lockscreen';
import { summary } from './CardView';
import { AmbientWeather } from './Weather';
import { t } from '../i18n';

// Режим покоя — как экран блокировки iPhone: фото на весь экран, большие часы и виджеты (плашки) карточек
// с галочкой «на фото». Вид часов и набор виджетов — свои на каждом устройстве (lib/lockscreen):
// долгое нажатие на фото → режим настройки, нажатие на часы или виджеты открывает их настройки.
// Большие часы перерисовываются сами, не трогая виджеты.
function AmbientTime({ prefs }: { prefs: LockPrefs }) {
  const now = useNow(5000);
  const color = CLOCK_COLOR[prefs.color];
  return (
    <>
      <div class={'ambient-time' + (prefs.color === 'accent' ? ' accent-text' : '')} style={{ fontWeight: FONT_WEIGHT[prefs.font], color: color || undefined }}>
        {formatTime(now)}
      </div>
      {prefs.date && <div class="ambient-date">{formatDate(now)}</div>}
    </>
  );
}

interface Props {
  visible: boolean;
  showHint: boolean;
  innerRef: RefObject<HTMLDivElement>;
  onSheet: (card: Card) => void;
  onConnection: () => void;
  // Режим настройки экрана с фото (долгое нажатие) и выход из него.
  customizing: boolean;
  onDone: () => void;
}

export function Ambient(props: Props) {
  const ha = useHA();
  const store = useStore();
  const prefs = useLockPrefs();
  const [panel, setPanel] = useState<'' | 'clock' | 'widgets'>('');
  // Виджеты — со всех экранов показанного дома; погода с галочкой «на фото» встаёт под часами.
  const all = store.homeCards().filter((c) => c.chip);
  const weather = all.filter((c) => c.type === 'weather' && c.items.length)[0];
  const widgets = sortWidgets(all.filter((c) => c.type !== 'weather'), prefs);
  const chips = widgets.filter((c) => prefs.hidden.indexOf(c.id) === -1);
  const alerts = chips.filter((c) => summary(ha, c).alert);
  const edit = props.customizing;
  const done = () => { setPanel(''); props.onDone(); };

  const cls = 'ambient' + (props.visible ? ' visible' : '') + ' lock-' + prefs.layout + ' lock-size-' + prefs.size
    + ' chips-' + prefs.chipStyle + (edit ? ' customizing' : '') + (edit && panel ? ' panel-up' : '');
  return (
    <>
      <div ref={props.innerRef} class={cls}>
        <div class="ambient-clock" onClick={edit ? () => setPanel('clock') : undefined}>
          <AmbientTime prefs={prefs} />
          {prefs.weather && weather && <AmbientWeather entity={weather.items[0].entity} />}
        </div>

        <div class="glances" onClick={edit ? () => setPanel('widgets') : undefined}>
          {ha.status !== 'connected' && ha.status !== 'connecting' && !edit && (
            <button class="glance warn" onClick={props.onConnection}><WifiOff size={18} /><span>{t('ambient.offline')}</span></button>
          )}
          {edit && !chips.length && <span class="glance glance-add"><Plus size={18} /><span>{t('lock.add_widgets')}</span></span>}
          {/* Тревоги — первыми */}
          {alerts.concat(chips.filter((c) => alerts.indexOf(c) === -1)).map((card) => {
            const s = summary(ha, card);
            const Icon = iconFor(card.icon);
            return (
              <button key={card.id} class={'glance' + (s.lit ? ' lit' : '') + (s.alert ? ' alert' : '')} title={s.text}
                onClick={edit ? undefined : () => props.onSheet(card)}>
                <Icon size={18} /><span>{s.text}</span>
              </button>
            );
          })}
        </div>

        <div class="grabber">
          <div class={'grabber-text' + (props.showHint ? ' visible' : '')}>{t('ambient.swipe_hint')}</div>
          <div class="grabber-bar" />
        </div>
      </div>

      {edit && (
        <div class="lock-ui">
          <div class="lock-top">
            <span>{t('lock.hint')}</span>
            <button class="pill-btn accent-bg" onClick={done}>{t('common.done')}</button>
          </div>
          {panel && <LockPanel kind={panel} widgets={widgets} hasWeather={!!weather} onClose={() => setPanel('')} />}
        </div>
      )}
    </>
  );
}

const FONTS: ClockFont[] = ['thin', 'light', 'regular', 'bold'];
const COLORS: ClockColor[] = ['white', 'accent', 'warm', 'mint', 'sky', 'rose'];
const SIZES: ClockSize[] = ['s', 'm', 'l'];
const LAYOUTS: LockLayout[] = ['auto', 'corner', 'center', 'top'];
const CHIP_STYLES: ChipStyle[] = ['auto', 'text', 'icons'];

// Панель снизу, как на iPhone: «Часы» — шрифт, цвет, размер, расположение, дата и погода;
// «Виджеты» — какие плашки показывать, в каком порядке и как (текстом или значками).
function LockPanel(props: { kind: 'clock' | 'widgets'; widgets: Card[]; hasWeather: boolean; onClose: () => void }) {
  const p = useLockPrefs();
  const move = (i: number, dir: number) => {
    const ids = props.widgets.map((c) => c.id);
    const j = i + dir;
    const tmp = ids[i]; ids[i] = ids[j]; ids[j] = tmp;
    setLockPrefs({ order: ids });
  };
  const toggle = (id: string, shown: boolean) => {
    const rest = p.hidden.filter((x) => x !== id);
    setLockPrefs({ hidden: shown ? rest : rest.concat(id) });
  };
  return (
    <div class="lock-panel" onClick={(e) => e.stopPropagation()}>
      <div class="lock-panel-head">
        <b>{props.kind === 'clock' ? t('lock.clock') : t('lock.widgets')}</b>
        <button class="icon-btn" onClick={props.onClose}><X size={20} /></button>
      </div>
      {props.kind === 'clock' ? (
        <>
          <div class="lock-fonts">
            {FONTS.map((f) => (
              <button key={f} class={'lock-font' + (p.font === f ? ' on' : '')} style={{ fontWeight: FONT_WEIGHT[f] }} onClick={() => setLockPrefs({ font: f })}>12</button>
            ))}
          </div>
          <div class="lock-colors">
            {COLORS.map((c) => (
              <button key={c} title={t('lock.color.' + c)} class={'lock-color' + (p.color === c ? ' on' : '') + (c === 'accent' ? ' accent-bg' : '')}
                style={c === 'accent' ? undefined : { background: CLOCK_COLOR[c] }} onClick={() => setLockPrefs({ color: c })} />
            ))}
          </div>
          <div class="option">
            <label>{t('lock.size')}</label>
            <div class="seg">
              {SIZES.map((s) => <button key={s} class={p.size === s ? 'active' : ''} onClick={() => setLockPrefs({ size: s })}>{t('lock.size.' + s)}</button>)}
            </div>
          </div>
          <div class="option">
            <label>{t('lock.layout')}</label>
            <select value={p.layout} onChange={(e) => setLockPrefs({ layout: e.currentTarget.value as LockLayout })}>
              {LAYOUTS.map((l) => <option key={l} value={l}>{t('lock.layout.' + l)}</option>)}
            </select>
          </div>
          <label class="check"><input type="checkbox" checked={p.date} onChange={(e) => setLockPrefs({ date: e.currentTarget.checked })} />{t('lock.date')}</label>
          {props.hasWeather && (
            <label class="check"><input type="checkbox" checked={p.weather} onChange={(e) => setLockPrefs({ weather: e.currentTarget.checked })} />{t('lock.weather')}</label>
          )}
        </>
      ) : (
        <>
          <div class="option">
            <label>{t('lock.chip_style')}</label>
            <select value={p.chipStyle} onChange={(e) => setLockPrefs({ chipStyle: e.currentTarget.value as ChipStyle })}>
              {CHIP_STYLES.map((s) => <option key={s} value={s}>{t('lock.chip_style.' + s)}</option>)}
            </select>
          </div>
          {!props.widgets.length && <p class="hint">{t('lock.no_widgets')}</p>}
          {props.widgets.map((c, i) => {
            const Icon = iconFor(c.icon);
            return (
              <div key={c.id} class="lock-widget">
                <label class="check">
                  <input type="checkbox" checked={p.hidden.indexOf(c.id) === -1} onChange={(e) => toggle(c.id, e.currentTarget.checked)} />
                  <Icon size={16} /><span>{c.title || cardTypeTitle(c.type)}</span>
                </label>
                <button class="icon-btn" disabled={i === 0} onClick={() => move(i, -1)}><ChevronUp size={18} /></button>
                <button class="icon-btn" disabled={i === props.widgets.length - 1} onClick={() => move(i, 1)}><ChevronDown size={18} /></button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
