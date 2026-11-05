import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-preact';
import { HAContext, useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { Icon } from '../lib/icons';
import { useLockPrefs } from '../lib/lockscreen';
import type { Card } from '../lib/layout';
import { cardTitle, summary } from './CardView';
import { lockChips } from './Ambient';
import { t } from '../i18n';
import { isBack, markKeyboard } from '../lib/spatialNav';

// Экран с фото с пульта телевизора и клавиатуры — лента внизу, как в Tizen. В покое клавиши ничего не
// делают, первое нажатие только показывает ленту: слева ‹ › листают фото, дальше — виджеты экрана с фото
// (OK открывает карточку), последней — «Дом» (дашборд, только по OK). ← → ведут фокус, ↑ ↓ / Назад / Esc — спрятать.
// Первое нажатие ставит фокус по клавише: ← → — на свою стрелку, ↓ — первое устройство, ↑ — «Дом».
// Без нажатий лента уходит сама; касание или мышь — тоже прячут её.
const HIDE_MS = 8000;
const LAST = 1000;

type Item = { kind: 'prev' | 'next' | 'home' } | { kind: 'card'; card: Card };

interface Props {
  // Экран с фото на виду и поверх ничего не открыто.
  enabled: boolean;
  onStep: (dir: number) => void;
  onSheet: (card: Card) => void;
  onHome: () => void;
}

const NAV = /^(Arrow(Left|Right|Up|Down)|Left|Right|Up|Down|Enter| |Spacebar)$/;

export function TvBar(props: Props) {
  // Состояние ленты — и в state (для отрисовки), и в ref: на быстрые нажатия подряд (стрелка и сразу OK)
  // обработчик должен видеть уже новое значение, не дожидаясь перерисовки.
  const [shown, setShownState] = useState(false);
  const [focus, setFocusState] = useState(1);
  const shownRef = useRef(false);
  const focusRef = useRef(1);
  const setShown = (v: boolean) => { shownRef.current = v; setShownState(v); };
  const setFocus = (f: number) => { focusRef.current = f; setFocusState(f); };
  const items = useRef<Item[]>([]);
  const timer = useRef(0);
  const live = useRef(props);
  live.current = props;
  // Плитки ленты считаем и в обработчике клавиш — без подписки на HA (она только у видимой ленты).
  const ha = useContext(HAContext)!;
  const store = useStore();
  const prefs = useLockPrefs();
  const build = (): Item[] => {
    const list: Item[] = [{ kind: 'prev' }, { kind: 'next' }];
    lockChips(ha, store, prefs).ordered.forEach((card) => list.push({ kind: 'card', card }));
    list.push({ kind: 'home' });
    return list;
  };

  const hide = () => { clearTimeout(timer.current); setShown(false); };
  const arm = () => { clearTimeout(timer.current); timer.current = window.setTimeout(() => setShown(false), HIDE_MS); };

  // Открыли с ленты карточку или дашборд — по возвращении на экран с фото лента снова на месте, фокус тот же.
  const reopen = useRef(false);
  useEffect(() => {
    if (!props.enabled) { hide(); return; }
    // Только если и дальше управляют с пульта: касание по пути снимает kbd-nav (lib/spatialNav).
    if (reopen.current && document.documentElement.classList.contains('kbd-nav')) { setShown(true); arm(); }
    reopen.current = false;
  }, [props.enabled]);
  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!props.enabled) return;
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      const k = e.key || '';
      const p = live.current;
      const list = build();
      items.current = list;
      if (!shownRef.current) {
        if (!NAV.test(k)) return;
        e.preventDefault();
        markKeyboard(true);
        // С какой плитки начать — по нажатой клавише: ← → — на свою стрелку, ↓ — первое устройство,
        // ↑ — «Дом» (последняя, LAST — с запасом, обрезается до длины ленты), OK — «следующее фото».
        const up = k === 'ArrowUp' || k === 'Up';
        const down = k === 'ArrowDown' || k === 'Down';
        setFocus(Math.min(list.length - 1, k === 'ArrowLeft' || k === 'Left' ? 0 : down ? 2 : up ? LAST : 1));
        setShown(true);
        arm();
        return;
      }
      const f = Math.min(focusRef.current, list.length - 1);
      if (k === 'ArrowLeft' || k === 'Left') setFocus(Math.max(0, f - 1));
      else if (k === 'ArrowRight' || k === 'Right') setFocus(Math.min(list.length - 1, f + 1));
      // ↑ ↓ закрывают ленту (в дашборд — только OK на «Доме»), как и Назад / Esc.
      else if (k === 'ArrowUp' || k === 'Up' || k === 'ArrowDown' || k === 'Down' || isBack(e, false)) hide();
      else if (k === 'Enter' || k === ' ' || k === 'Spacebar') {
        const it = list[f];
        if (!it) return;
        if (it.kind === 'prev') p.onStep(-1);
        else if (it.kind === 'next') p.onStep(1);
        else if (it.kind === 'home') { reopen.current = true; hide(); p.onHome(); }
        else if (it.kind === 'card') { reopen.current = true; hide(); p.onSheet(it.card); }
      } else return;
      e.preventDefault();
      arm();
    };
    const onPointer = () => { reopen.current = false; hide(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('touchstart', onPointer, true);
    document.addEventListener('mousedown', onPointer, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('touchstart', onPointer, true);
      document.removeEventListener('mousedown', onPointer, true);
    };
  }, [props.enabled, ha, store, prefs]);

  return (
    <div class={'tv-bar' + (shown ? ' visible' : '')} aria-hidden={!shown}>
      {shown && <TvBarItems focus={focus} items={items} />}
    </div>
  );
}

// Содержимое ленты — только пока она на экране: подписки на состояния HA и перерисовки только тогда.
function TvBarItems({ focus, items }: { focus: number; items: { current: Item[] } }) {
  const ha = useHA();
  const store = useStore();
  const prefs = useLockPrefs();
  const cards = lockChips(ha, store, prefs).ordered;
  const list: Item[] = [{ kind: 'prev' }, { kind: 'next' }];
  cards.forEach((card) => list.push({ kind: 'card', card }));
  list.push({ kind: 'home' });
  items.current = list;
  const f = Math.min(focus, list.length - 1);
  const rowRef = useRef<HTMLDivElement>(null);

  // Лента едет за фокусом, если плиток больше, чем влезает.
  useEffect(() => {
    const row = rowRef.current;
    const el = row && row.querySelector('[data-i="' + f + '"]') as HTMLElement | null;
    if (!row || !el) return;
    const left = el.offsetLeft - row.clientWidth / 2 + el.offsetWidth / 2;
    row.scrollLeft = Math.max(0, left);
  }, [f, list.length]);

  const tile = (i: number, icon: preact.ComponentChildren, name: string, state?: string, on?: boolean, alert?: boolean) => (
    <div key={i} data-i={i} class={'tv-tile' + (i === f ? ' focus' : '') + (on ? ' on' : '') + (alert ? ' alert' : '')}>
      {icon}
      {i === f && <div class="tv-label">{name}{state && state !== name && <small>{state}</small>}</div>}
    </div>
  );

  return (
    <div class="tv-row" ref={rowRef}>
      {tile(0, <ChevronLeft size={30} strokeWidth={1.8} />, t('tv.prev'))}
      {tile(1, <ChevronRight size={30} strokeWidth={1.8} />, t('tv.next'))}
      <span class="tv-sep" />
      {cards.map((card, k) => {
        const s = summary(ha, card);
        return tile(k + 2, <Icon name={card.icon} size={28} />, cardTitle(ha, card), s.text, s.lit, s.alert);
      })}
      {cards.length > 0 && <span class="tv-sep" />}
      {tile(list.length - 1, <LayoutGrid size={28} strokeWidth={1.8} />, t('tv.home'), t('tv.home_hint'))}
    </div>
  );
}
