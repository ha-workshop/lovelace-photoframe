import type { RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ChevronDown, ChevronUp, Plus, WifiOff, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { iconFor } from '../lib/icons';
import { formatDate, formatTime, useNow } from '../lib/time';
import { cardTypeTitle, type Card } from '../lib/layout';
import {
  CLOCK_COLOR, FONT_WEIGHT, setLockPrefs, sortWidgets, useLockPrefs,
  type ChipStyle, type ClockColor, type ClockFont, type ClockSize, type DatePos, type LockLayout, type LockPrefs, type WidgetsPos,
} from '../lib/lockscreen';
import { summary } from './CardView';
import { AmbientWeather } from './Weather';
import { t } from '../i18n';

// Режим покоя — как экран блокировки iPhone: фото на весь экран, большие часы и виджеты (плашки) карточек
// с галочкой «на фото». Вид часов и набор виджетов — свои на каждом устройстве (lib/lockscreen):
// долгое нажатие на фото → режим настройки, нажатие на часы или виджеты открывает их настройки.
// Большие часы перерисовываются сами, не трогая виджеты.
type Region = [number, number, number, number];

function layoutOf(prefs: LockPrefs) {
  return prefs.layout === 'auto' ? (window.innerWidth <= 700 ? 'center' : 'corner') : prefs.layout;
}

// Где на экране часы и где виджеты — оттуда и берём фон для цвета «в обратку» (доли ширины и высоты кадра).
function clockRegion(prefs: LockPrefs): Region {
  const layout = layoutOf(prefs);
  if (layout === 'top') return [0.2, 0.05, 0.8, 0.35];
  if (layout === 'corner') return [0, 0.55, 0.55, 0.95];
  return [0.2, 0.55, 0.8, 0.9];
}

function widgetsRegion(prefs: LockPrefs): Region {
  if (prefs.widgetsPos === 'top') return [0.15, 0, 0.85, 0.2];
  if (prefs.widgetsPos === 'bottom') return [0.15, 0.78, 0.85, 0.96];
  return layoutOf(prefs) === 'corner' ? [0.5, 0.7, 1, 0.96] : clockRegion(prefs);
}

const HINT_REGION: Region = [0.25, 0.88, 0.75, 1];

function luminance([r, g, b]: number[]) {
  const f = (v: number) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

// Цвет часов «в обратку» к участку фото под ними: обратный цвет; если он сливается с фоном (серое на сером) —
// белый или почти чёрный, что виднее. Считается по крошечной копии кадра — дёшево и на старых рамках.
interface Ink { color: string; dark: boolean }
const WHITE: Ink = { color: '#ffffff', dark: false };

function useContrastColor(thumb: string | undefined, region: Region, active: boolean): Ink {
  const [ink, setInk] = useState<Ink>(WHITE);
  const key = region.join(',');
  useEffect(() => {
    if (!active || !thumb) return;
    const img = new Image();
    img.onload = () => {
      try {
        const c = document.createElement('canvas');
        c.width = img.width; c.height = img.height;
        const ctx = c.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        const x = Math.floor(region[0] * c.width), y = Math.floor(region[1] * c.height);
        const w = Math.max(1, Math.floor((region[2] - region[0]) * c.width)), h = Math.max(1, Math.floor((region[3] - region[1]) * c.height));
        const px = ctx.getImageData(x, y, w, h).data;
        const sum = [0, 0, 0];
        for (let i = 0; i < px.length; i += 4) { sum[0] += px[i]; sum[1] += px[i + 1]; sum[2] += px[i + 2]; }
        const n = px.length / 4;
        const bg = sum.map((v) => v / n);
        const inv = bg.map((v) => 255 - v);
        const lb = luminance(bg), li = luminance(inv);
        const ratio = (Math.max(lb, li) + 0.05) / (Math.min(lb, li) + 0.05);
        const pick = ratio >= 3 ? inv : lb > 0.35 ? [17, 17, 17] : [255, 255, 255];
        setInk({ color: 'rgb(' + pick.map(Math.round).join(',') + ')', dark: luminance(pick) < 0.25 });
      } catch (e) { setInk(WHITE); }
    };
    img.src = thumb;
  }, [thumb, key, active]);
  return active ? ink : WHITE;
}

function AmbientTime({ prefs }: { prefs: LockPrefs }) {
  const now = useNow(5000);
  // «В обратку» — цвет задаёт весь блок часов (вместе с датой и погодой), здесь его просто наследуем.
  const color = prefs.color === 'contrast' ? '' : CLOCK_COLOR[prefs.color];
  const above = prefs.datePos === 'above' || (prefs.datePos !== 'below' && prefs.layout === 'top');
  const date = prefs.date && <div class={'ambient-date' + (above ? ' above' : '')}>{formatDate(now)}</div>;
  return (
    <>
      {above && date}
      <div class={'ambient-time' + (prefs.color === 'accent' ? ' accent-text' : '')} style={{ fontWeight: FONT_WEIGHT[prefs.font], color: color || undefined }}>
        {formatTime(now)}
      </div>
      {!above && date}
    </>
  );
}

interface Props {
  visible: boolean;
  showHint: boolean;
  innerRef: RefObject<HTMLDivElement>;
  // Крошечная копия кадра на экране — для цвета часов «в обратку».
  photoThumb?: string;
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

  // «В обратку» к фото — все надписи: часы с датой и погодой, виджеты и подсказка, каждые по своему участку кадра.
  const contrast = prefs.color === 'contrast';
  const clockInk = useContrastColor(props.photoThumb, clockRegion(prefs), contrast);
  const widgetsInk = useContrastColor(props.photoThumb, widgetsRegion(prefs), contrast);
  const hintInk = useContrastColor(props.photoThumb, HINT_REGION, contrast);
  const cls = 'ambient' + (contrast ? ' text-contrast' : '') + (props.visible ? ' visible' : '') + ' lock-' + prefs.layout + ' lock-size-' + prefs.size
    + ' chips-' + prefs.chipStyle + ' widgets-' + prefs.widgetsPos + (edit ? ' customizing' : '') + (edit && panel ? ' panel-up' : '');
  return (
    <>
      <div ref={props.innerRef} class={cls}>
        <div class={'ambient-clock' + (clockInk.dark ? ' ink-dark' : '')} style={contrast ? { color: clockInk.color } : undefined} onClick={edit ? () => setPanel('clock') : undefined}>
          <AmbientTime prefs={prefs} />
          {prefs.weather && weather && <AmbientWeather entity={weather.items[0].entity} />}
        </div>

        <div class={'glances' + (widgetsInk.dark ? ' ink-dark' : '')} style={contrast ? { color: widgetsInk.color } : undefined} onClick={edit ? () => setPanel('widgets') : undefined}>
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
          <div class={'grabber-text' + (props.showHint ? ' visible' : '') + (hintInk.dark ? ' ink-dark' : '')} style={contrast ? { color: hintInk.color } : undefined}>{t('ambient.swipe_hint')}</div>
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
// Авто («в обратку» к фото) — первым, с буквой А.
const COLORS: ClockColor[] = ['contrast', 'white', 'accent', 'warm', 'mint', 'sky', 'rose'];
const SIZES: ClockSize[] = ['xs', 's', 'm', 'l', 'xl'];
const WIDGET_POS: WidgetsPos[] = ['clock', 'top', 'bottom'];
const DATE_POS: DatePos[] = ['auto', 'above', 'below'];
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
              <button key={c} title={t('lock.color.' + c)} class={'lock-color' + (p.color === c ? ' on' : '') + (c === 'accent' ? ' accent-bg' : '') + (c === 'contrast' ? ' lock-color-contrast' : '')}
                style={c === 'accent' || c === 'contrast' ? undefined : { background: CLOCK_COLOR[c] }} onClick={() => setLockPrefs({ color: c })}>{c === 'contrast' ? <span>A</span> : null}</button>
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
          {p.date && (
            <div class="option">
              <label>{t('lock.date_pos')}</label>
              <div class="seg">
                {DATE_POS.map((d) => <button key={d} class={p.datePos === d ? 'active' : ''} onClick={() => setLockPrefs({ datePos: d })}>{t('lock.date_pos.' + d)}</button>)}
              </div>
            </div>
          )}
          {props.hasWeather && (
            <label class="check"><input type="checkbox" checked={p.weather} onChange={(e) => setLockPrefs({ weather: e.currentTarget.checked })} />{t('lock.weather')}</label>
          )}
        </>
      ) : (
        <>
          <div class="option">
            <label>{t('lock.widgets_pos')}</label>
            <div class="seg">
              {WIDGET_POS.map((w) => <button key={w} class={p.widgetsPos === w ? 'active' : ''} onClick={() => setLockPrefs({ widgetsPos: w })}>{t('lock.widgets_pos.' + w)}</button>)}
            </div>
          </div>
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
