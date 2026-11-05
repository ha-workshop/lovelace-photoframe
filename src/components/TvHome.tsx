import { useLayoutEffect, useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { Icon } from '../lib/icons';
import { condition } from '../lib/weather';
import { screenTitle, type Card } from '../lib/layout';
import { Image } from 'lucide-preact';
import { t } from '../i18n';
import { cardTitle, summary } from './CardView';

// Дашборд с пульта — поверх того же экрана с фото (часы остаются, фото чуть размыто): внизу вкладки
// экранов и плитки, как на Apple TV — первая «Фото» (назад к фото), дальше по карточке.
// Плитка в фокусе приподнята, под ней название и состояние; OK открывает карточку окном по центру (как
// с ленты на фото). Погода и камеры видны прямо на плитке. Стрелки и OK — общие (lib/spatialNav в App):
// здесь только разметка, фокус на первой плитке при открытии и возврат фокуса после окна.
interface Props {
  innerRef: RefObject<HTMLDivElement>;
  // Поверх открыто окно или карточка — фокус вернём, когда закроют.
  covered: boolean;
  onOpen: (card: Card) => void;
  // Первая плитка — назад к фото.
  onPhotos: () => void;
}

function byPlace(a: Card, b: Card) {
  return a.y - b.y || a.x - b.x;
}

export function TvHome(props: Props) {
  const ha = useHA();
  const store = useStore();
  const { active, screen, screens } = store.state;
  const list = screens[active] || [];
  const cards = store.state.layout.cards.filter((c) => !(c.m && c.m.hide)).slice().sort(byPlace);
  const last = useRef('');
  // Плитки — с той стороны экрана, где нет часов (часы внизу — плитки сверху, и наоборот).
  const [top, setTop] = useState(false);
  useLayoutEffect(() => {
    const clock = document.querySelector('.ambient-clock');
    if (!clock) return;
    const r = clock.getBoundingClientRect();
    setTop(r.height > 0 && r.top + r.height / 2 > window.innerHeight / 2);
  }, []);

  // Открыли (или сменили экран) — фокус на первой плитке; закрыли окно — на той, с которой его открыли.
  useLayoutEffect(() => {
    if (props.covered) return;
    const root = props.innerRef.current;
    if (!root) return;
    const want = (last.current && root.querySelector('[data-card="' + last.current + '"]'))
      || root.querySelector('.atv-tile') || root.querySelector('.atv-tab');
    const cur = document.activeElement;
    if (want && !(cur && root.contains(cur) && cur.classList.contains('atv-tab'))) (want as HTMLElement).focus();
  }, [props.covered, screen, active]);

  const open = (card: Card) => { last.current = card.id; props.onOpen(card); };

  return (
    <div ref={props.innerRef} class={'atv' + (top ? ' atv-top' : '')}>
      {list.length > 1 && (
        <div class="atv-tabs">
          {list.map((x, i) => (
            // Фокус на вкладке — сразу её экран (как в Apple TV), без OK.
            <button key={x.id} class={'atv-tab' + (x.id === screen ? ' on' : '')}
              onFocus={() => { if (x.id !== screen) { last.current = ''; store.setActive(active, x.id); } }}
              onClick={() => store.setActive(active, x.id)}>
              {screenTitle(x, i)}
            </button>
          ))}
        </div>
      )}
      <div class="atv-grid">
        <button class="atv-tile atv-photos" onClick={props.onPhotos}>
          <span class="atv-face"><Image size={44} /></span>
          <span class="atv-name">{t('tv.photos')}</span>
        </button>
        {cards.map((card) => {
          const s = summary(ha, card);
          return (
            <button key={card.id} data-card={card.id} class={'atv-tile' + (s.lit ? ' lit' : '') + (s.alert ? ' alert' : '')}
              onClick={() => open(card)}>
              <span class="atv-face"><TileFace card={card} /></span>
              <span class="atv-name">{cardTitle(ha, card)}{s.text && s.text !== cardTitle(ha, card) && <small>{s.text}</small>}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Лицо плитки: у погоды — значок и температура, у камер — последний кадр, у остальных — значок карточки.
function TileFace({ card }: { card: Card }) {
  const ha = useHA();
  const first = card.items[0];
  if (card.type === 'weather' && first) {
    const s = ha.states[first.entity];
    if (s && s.state !== 'unavailable') {
      const c = condition(s.state);
      const temp = s.attributes.temperature;
      return (
        <span class="atv-weather">
          <c.Icon size={40} strokeWidth={1.6} />
          {temp != null && <b>{Math.round(Number(temp))}°</b>}
        </span>
      );
    }
  }
  if (card.type === 'cameras' && first) {
    const url = ha.cameraSnapshotUrl(first.entity);
    if (url) return <img class="atv-shot" src={url} alt="" />;
  }
  return <Icon name={card.icon} size={44} />;
}


