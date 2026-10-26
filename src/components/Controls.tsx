import { useEffect, useRef } from 'preact/hooks';
import type { RefObject } from 'preact';
import { Check, Image, Pencil, Plus, Settings } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import type { Card } from '../lib/layout';
import { store } from '../lib/store';
import type { Home } from '../lib/store';
import { formatDate, formatTime, useNow } from '../lib/time';
import type { Status } from '../lib/ha';
import { Grid } from './Grid';
import { goToMainDashboard, useKioskActive } from '../lib/kiosk';
import { t } from '../i18n';

const statusText = (s: Status) => t('status.' + s);

interface Props {
  innerRef: RefObject<HTMLDivElement>;
  visible: boolean;
  editing: boolean;
  onEditing: (v: boolean) => void;
  onPhotos: () => void;
  onSettings: () => void;
  onCamera: (url: string) => void;
  onEditCard: (card: Card) => void;
  onAddCard: () => void;
  homes: Home[];
  active: string;
  slide: '' | 'next' | 'prev';
  onSwitchHome: (dir: number) => void;
}

// Боковой свайп по панели — следующий/предыдущий дом. Вертикальное движение (прокрутка, закрытие) не мешает.
function useHomeSwipe(enabled: boolean, onSwitch: (dir: number) => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const pt = (e: TouchEvent | MouseEvent) => ('touches' in e ? e.touches[0] || e.changedTouches[0] : e);
  return {
    onTouchStart: (e: TouchEvent) => { if (enabled) { const p = pt(e); start.current = { x: p.clientX, y: p.clientY }; } },
    onMouseDown: (e: MouseEvent) => { if (enabled) start.current = { x: e.clientX, y: e.clientY }; },
    onTouchEnd: (e: TouchEvent) => end(pt(e)),
    onMouseUp: (e: MouseEvent) => end(e),
  };
  function end(p: { clientX: number; clientY: number }) {
    const s = start.current;
    start.current = null;
    if (!s) return;
    const dx = p.clientX - s.x, dy = p.clientY - s.y;
    if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 2) onSwitch(dx < 0 ? 1 : -1);
  }
}

export function Controls(props: Props) {
  const ha = useHA();
  const now = useNow();
  const many = props.homes.length > 1;
  const kiosk = useKioskActive();
  const swipe = useHomeSwipe(many && !props.editing, props.onSwitchHome);
  const home = props.homes.filter((h) => h.id === props.active)[0];
  // Выйти из редактирования, когда панель спрятали.
  useEffect(() => { if (!props.visible && props.editing) props.onEditing(false); }, [props.visible]);

  return (
    <div ref={props.innerRef} class={'controls' + (props.visible ? ' visible' : '')}>
      <div class="grabber-top"><div class="grabber-bar" /></div>
      <header class="bar">
        {/* В киоске мини-часы — выход на главный дашборд HA (меню HA скрыто, иначе не уйти). */}
        <div class={'bar-time' + (kiosk ? ' clock-link' : '')} onClick={kiosk ? goToMainDashboard : undefined}>
          <span class="bar-clock">{formatTime(now)}</span>
          <span class="bar-date">{formatDate(now)}</span>
        </div>
        {many && (
          <button class="home-switch" onClick={() => props.onSwitchHome(1)} title={t('controls.next_home')}>
            <span class="home-name">{home ? home.name : ''}</span>
            <span class="home-dots">{props.homes.map((h) => <i key={h.id} class={h.id === props.active ? 'on' : ''} />)}</span>
          </button>
        )}
        <div class="bar-actions">
          {props.editing ? (
            <>
              <button class="round" onClick={props.onAddCard} title={t('controls.add_card')}><Plus size={20} /></button>
              <button class="pill-btn accent-bg" onClick={() => props.onEditing(false)}><Check size={18} /><span>{t('common.done')}</span></button>
            </>
          ) : (
            <>
              <span class={'conn conn-' + ha.status}><i />{statusText(ha.status)}</span>
              {(!store.card || store.card.canEdit) && (
                <button class="round" onClick={() => props.onEditing(true)} title={t('controls.customize')}><Pencil size={18} /></button>
              )}
              <button class="round" onClick={props.onSettings} title={t('controls.settings')}><Settings size={20} /></button>
              <button class="round accent" onClick={props.onPhotos} title={t('controls.to_photos')}><Image size={20} /></button>
            </>
          )}
        </div>
      </header>
      <div key={props.active} class={'home-pane' + (props.slide ? ' slide-' + props.slide : '')} {...swipe}>
        <Grid editing={props.editing} onCamera={props.onCamera} onEdit={props.onEditCard} />
      </div>
    </div>
  );
}
