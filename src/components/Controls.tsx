import { useEffect, useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';
import { Check, ChevronLeft, ChevronRight, Image, Menu, Pencil, Plus, Settings, Trash2, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { screenTitle, type Card } from '../lib/layout';
import { store } from '../lib/store';
import type { Home } from '../lib/store';
import { formatDate, formatTime, useNow } from '../lib/time';
import type { Status } from '../lib/ha';
import { Grid } from './Grid';
import { goToMainDashboard, useKioskActive } from '../lib/kiosk';
import { useSize } from '../lib/useSize';
import { t } from '../i18n';

const statusText = (s: Status) => t('status.' + s);

// Часы — отдельным компонентом: раз в секунду перерисовываются только они, а не вся сетка карточек.
function BarClock() {
  const now = useNow();
  return (
    <>
      <span class="bar-clock">{formatTime(now)}</span>
      <span class="bar-date">{formatDate(now)}</span>
    </>
  );
}

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
  // Свайп: следующий/предыдущий экран (за последним экраном дома — экраны следующего дома).
  onStep: (dir: number) => void;
}

// Экраны показанного дома. Одного экрана не видно (пока не редактируем); в редактировании —
// имя показанного экрана правится прямо во вкладке, рядом сдвиг, удаление и «+ экран».
function ScreenTabs(props: { editing: boolean }) {
  const { active, screen, screens } = store.state;
  const list = screens[active] || [];
  // Удаление экрана с карточками — в два касания: первое только спрашивает.
  const [confirm, setConfirm] = useState('');
  useEffect(() => setConfirm(''), [screen, props.editing]);
  if (list.length < 2 && !props.editing) return null;
  return (
    <div class="screen-tabs">
      {list.map((x, i) => (props.editing && x.id === screen ? (
        <span key={x.id} class="screen-tab on editing">
          {i > 0 && <button class="screen-move" onClick={() => store.moveScreen(x.id, -1)}><ChevronLeft size={14} /></button>}
          <input value={x.name} placeholder={screenTitle(x, i)} size={Math.max(6, (x.name || screenTitle(x, i)).length)}
            onChange={(e) => store.renameScreen(x.id, e.currentTarget.value.trim())} />
          {i < list.length - 1 && <button class="screen-move" onClick={() => store.moveScreen(x.id, 1)}><ChevronRight size={14} /></button>}
          {list.length > 1 && (
            <button class={'screen-del' + (confirm === x.id ? ' sure' : '')} title={t('screen.delete')}
              onClick={() => (confirm === x.id || !x.cards.length ? store.removeScreen(x.id) : setConfirm(x.id))}>
              {confirm === x.id ? <span>{t('screen.delete_sure')}</span> : <Trash2 size={14} />}
            </button>
          )}
        </span>
      ) : (
        <button key={x.id} class={'screen-tab' + (x.id === screen ? ' on' : '')} onClick={() => store.setActive(active, x.id)}>
          {screenTitle(x, i)}
        </button>
      )))}
      {props.editing && (
        <button class="screen-tab add" onClick={() => store.addScreen('')}><Plus size={14} /><span>{t('screen.add')}</span></button>
      )}
    </div>
  );
}

// Боковой свайп по панели — следующий/предыдущий экран. Вертикальное движение (прокрутка, закрытие) не мешает.
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
  const many = props.homes.length > 1;
  const kiosk = useKioskActive();
  const total = props.homes.reduce((n, h) => n + (store.state.screens[h.id] || []).length, 0);
  const swipe = useHomeSwipe(total > 1 && !props.editing, props.onStep);
  const home = props.homes.filter((h) => h.id === props.active)[0];
  // Выйти из редактирования, когда панель спрятали.
  useEffect(() => { if (!props.visible && props.editing) props.onEditing(false); }, [props.visible]);
  // Узкая панель (телефон): дом — ровно по центру, кнопки — под бургером, меню выезжает влево поверх шапки.
  const size = useSize(props.innerRef);
  const narrow = size.w > 0 && size.w < 760;
  const [menu, setMenu] = useState(false);
  useEffect(() => { if (!props.visible || !narrow) setMenu(false); }, [props.visible, narrow]);
  useEffect(() => {
    if (!menu) return;
    // Тап мимо меню — закрыть.
    const close = () => setMenu(false);
    const id = window.setTimeout(() => document.addEventListener('click', close), 0);
    return () => { clearTimeout(id); document.removeEventListener('click', close); };
  }, [menu]);
  const canEdit = !store.card || store.card.canEdit;
  const actions = (
    <>
      {canEdit && <button class="round" onClick={() => props.onEditing(true)} title={t('controls.customize')}><Pencil size={18} /></button>}
      <button class="round" onClick={props.onSettings} title={t('controls.settings')}><Settings size={20} /></button>
      <button class="round accent" onClick={props.onPhotos} title={t('controls.to_photos')}><Image size={20} /></button>
    </>
  );

  return (
    <div ref={props.innerRef} class={'controls' + (props.visible ? ' visible' : '')}>
      <header class={'bar' + (narrow ? ' bar-narrow' : '') + (menu ? ' menu-open' : '') + (props.editing ? ' bar-editing' : '')}>
        {/* В киоске мини-часы — выход на главный дашборд HA (меню HA скрыто, иначе не уйти). */}
        <div class={'bar-time' + (kiosk ? ' clock-link' : '')} onClick={kiosk ? goToMainDashboard : undefined}>
          <BarClock />
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
          ) : narrow ? (
            <div class="burger">
              <div class="burger-items">{actions}</div>
              <button class={'round burger-btn conn-' + ha.status} onClick={() => setMenu(!menu)} title={statusText(ha.status)}>
                {menu ? <X size={20} /> : <Menu size={20} />}<i class="burger-dot" />
              </button>
            </div>
          ) : (
            <>
              <span class={'conn conn-' + ha.status}><i />{statusText(ha.status)}</span>
              {actions}
            </>
          )}
        </div>
      </header>
      <ScreenTabs editing={props.editing} />
      <div key={props.active + '/' + store.state.screen} class={'home-pane' + (props.slide ? ' slide-' + props.slide : '')} {...swipe}>
        <Grid editing={props.editing} onCamera={props.onCamera} onEdit={props.onEditCard} />
      </div>
    </div>
  );
}
