import { useEffect, useRef, useState } from 'preact/hooks';
import { Music, Pause, Play, Power, SkipBack, SkipForward, Speaker, Tv, Volume2, VolumeX } from 'lucide-preact';
import { isAvailable, useHA } from '../lib/hooks';
import type { Card, Item } from '../lib/layout';
import type { Size } from './CardView';
import { itemName } from './CardView';
import { t } from '../i18n';

// Колонки и телевизоры (media_player). Кнопки показываем только те, что устройство умеет —
// HA сообщает это битами supported_features.
const F = {
  PAUSE: 1, VOLUME_SET: 4, VOLUME_MUTE: 8, PREVIOUS: 16, NEXT: 32,
  TURN_ON: 128, TURN_OFF: 256, VOLUME_STEP: 1024, SELECT_SOURCE: 2048, PLAY: 16384,
};

const KNOWN_STATES = ['playing', 'paused', 'idle', 'on', 'off', 'standby', 'buffering'];
const stateText = (s: string) => (KNOWN_STATES.indexOf(s) !== -1 ? t('media.state.' + s) : s);

// tv — показывать как телевизор (выключен — крупная заглушка); sources — переключатель источника.
// Источники только в карточке «Телевизор»: Яндекс Станция тоже помечена как TV и отдаёт в source_list
// чужие устройства (EShare, media_player.android_tv…) — в «Колонках» это мусор.
function Player({ it, tv, sources, size }: { it: Item; tv: boolean; sources: boolean; size: Size }) {
  const ha = useHA();
  const s = ha.states[it.entity];
  const a = s ? s.attributes : {};
  const feat = Number(a.supported_features) || 0;
  const has = (f: number) => (feat & f) === f;
  const state = s ? s.state : 'off';
  const off = state === 'off' || state === 'standby';
  const playing = state === 'playing';
  const call = (service: string, data?: Record<string, unknown>) => ha.callService(it.entity, service, data);

  // Громкость на экране меняется сразу, в HA уходит после отпускания.
  const [vol, setVol] = useState<number | null>(null);
  const volume = vol != null ? vol : typeof a.volume_level === 'number' ? a.volume_level : null;
  useEffect(() => { setVol(null); }, [a.volume_level]);
  const timer = useRef(0);
  const setVolume = (v: number) => {
    const next = Math.max(0, Math.min(1, Math.round(v * 100) / 100));
    setVol(next);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => call('volume_set', { volume_level: next }), 400);
  };
  const barRef = useRef<HTMLDivElement>(null);
  const onBar = (clientX: number) => {
    const el = barRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setVolume((clientX - r.left) / r.width);
  };

  const art = ha.pictureUrl(a.entity_picture_local || a.entity_picture);
  const title = a.media_title || a.app_name || a.source || stateText(state);
  const sub = a.media_artist || a.media_album_name || (a.media_title ? stateText(state) : '') || '';
  const big = size.h >= 300 && size.w >= 300;
  // Низкая карточка — обложка и кнопки поменьше, чтобы плеер помещался без прокрутки.
  const short = size.h < 250;
  const Placeholder = tv ? Tv : off ? Speaker : Music;

  if (off && tv) {
    return (
      <div class="media media-off">
        <div class="media-art-empty big"><Tv size={40} /></div>
        <div class="media-title">{itemName(ha, it)}</div>
        <div class="media-sub">{stateText(state)}</div>
        {has(F.TURN_ON)
          ? <button class="pill-btn media-power" onClick={() => call('turn_on')}><Power size={18} /><span>{t('common.turn_on')}</span></button>
          : <div class="muted small media-hint">{t('media.tv_remote_only')}</div>}
      </div>
    );
  }

  return (
    <div class={'media' + (big ? ' big' : '') + (short ? ' short' : '')}>
      <div class="media-top">
        {art && !off
          ? <div class="media-art" style={{ backgroundImage: 'url(' + art + ')' }} />
          : <div class="media-art media-art-empty"><Placeholder size={big ? 36 : 26} /></div>}
        <div class="media-info">
          <div class="media-title">{title}</div>
          {sub && <div class="media-sub">{sub}</div>}
          <div class={'media-state' + (playing ? ' on' : '')}>{playing && <i class="eq"><b /><b /><b /></i>}{stateText(state)}</div>
        </div>
        {(has(F.TURN_OFF) || has(F.TURN_ON)) && (
          <button class="icon-round" title={off ? t('common.turn_on') : t('common.turn_off')} onClick={() => call(off ? 'turn_on' : 'turn_off')}><Power size={16} /></button>
        )}
      </div>

      {(has(F.PAUSE) || has(F.PLAY) || has(F.NEXT)) && (
        <div class="media-controls">
          {has(F.PREVIOUS) && <button onClick={() => call('media_previous_track')}><SkipBack size={22} /></button>}
          <button class="media-play" onClick={() => call('media_play_pause')}>{playing ? <Pause size={24} /> : <Play size={24} />}</button>
          {has(F.NEXT) && <button onClick={() => call('media_next_track')}><SkipForward size={22} /></button>}
        </div>
      )}

      {volume != null && has(F.VOLUME_SET) && (
        <div class="media-volume">
          {has(F.VOLUME_MUTE) && (
            <button onClick={() => call('volume_mute', { is_volume_muted: !a.is_volume_muted })}>
              {a.is_volume_muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          )}
          <div class="vol-bar" ref={barRef}
            onClick={(e) => onBar((e as MouseEvent).clientX)}
            onTouchMove={(e) => onBar((e as TouchEvent).touches[0].clientX)}>
            <div class="vol-fill" style={{ width: Math.round(volume * 100) + '%' }} />
          </div>
          <span class="vol-num">{Math.round(volume * 100)}</span>
        </div>
      )}

      {sources && has(F.SELECT_SOURCE) && a.source_list && (
        <div class="chips media-sources">
          {(a.source_list as string[]).map((src) => (
            <button key={src} class={'chip' + (a.source === src ? ' active' : '')} onClick={() => call('select_source', { source: src })}>{src}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Media({ card, size }: { card: Card; size: Size }) {
  const ha = useHA();
  // По умолчанию открываем ту колонку, что сейчас играет.
  const playingIndex = card.items.findIndex((it) => ha.states[it.entity] && ha.states[it.entity].state === 'playing');
  const [active, setActive] = useState(playingIndex >= 0 ? playingIndex : 0);
  const it = card.items[Math.min(active, card.items.length - 1)];
  const tv = card.type === 'tv' || (!!ha.states[it.entity] && ha.states[it.entity].attributes.device_class === 'tv');
  return (
    <div class="media-wrap">
      {card.items.length > 1 && (
        <div class="seg seg-inline seg-full">
          {card.items.map((c, i) => {
            const st = ha.states[c.entity];
            return (
              <button key={c.entity} class={i === active ? 'active' : ''} onClick={() => setActive(i)}>
                {st && st.state === 'playing' && <i class="dot-live" />}{itemName(ha, c)}
              </button>
            );
          })}
        </div>
      )}
      {isAvailable(ha, it.entity) && <Player key={it.entity} it={it} tv={tv} sources={card.type === 'tv'} size={size} />}
    </div>
  );
}
