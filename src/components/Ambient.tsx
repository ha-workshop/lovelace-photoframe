import type { RefObject } from 'preact';
import { WifiOff } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { useStore } from '../lib/store';
import { iconFor } from '../lib/icons';
import { formatDate, formatTime, useNow } from '../lib/time';
import type { Card } from '../lib/layout';
import { summary } from './CardView';
import { AmbientWeather } from './Weather';
import { t } from '../i18n';

// Режим покоя: фото на весь экран, большие часы и информеры карточек, у которых включён «chip».
interface Props {
  visible: boolean;
  showHint: boolean;
  innerRef: RefObject<HTMLDivElement>;
  onSheet: (card: Card) => void;
  onConnection: () => void;
}

export function Ambient(props: Props) {
  const ha = useHA();
  const store = useStore();
  const now = useNow(5000);
  // Погода с галочкой «на фото» встаёт под часами, остальные — информерами справа.
  const weather = store.state.layout.cards.filter((c) => c.type === 'weather' && c.chip && c.items.length)[0];
  const chips = store.state.layout.cards.filter((c) => c.chip && c.type !== 'weather');
  const alerts = chips.filter((c) => summary(ha, c).alert);

  return (
    <div ref={props.innerRef} class={'ambient' + (props.visible ? ' visible' : '')}>
      <div class="ambient-clock">
        <div class="ambient-time">{formatTime(now)}</div>
        <div class="ambient-date">{formatDate(now)}</div>
        {weather && <AmbientWeather entity={weather.items[0].entity} />}
      </div>

      <div class="glances">
        {ha.status !== 'connected' && ha.status !== 'connecting' && (
          <button class="glance warn" onClick={props.onConnection}><WifiOff size={18} /><span>{t('ambient.offline')}</span></button>
        )}
        {/* Тревоги — первыми */}
        {alerts.concat(chips.filter((c) => alerts.indexOf(c) === -1)).map((card) => {
          const s = summary(ha, card);
          const Icon = iconFor(card.icon);
          return (
            <button key={card.id} class={'glance' + (s.lit ? ' lit' : '') + (s.alert ? ' alert' : '')} onClick={() => props.onSheet(card)}>
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
  );
}
