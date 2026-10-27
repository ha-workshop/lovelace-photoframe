import { useState } from 'preact/hooks';
import { ArrowDown, ArrowUp, Droplets, Plus, Search, Trash2, X, Thermometer } from 'lucide-preact';
import type { HassState } from '../lib/ha';
import { isAvailable, unitOf, useHA } from '../lib/hooks';
import { ICONS, guessIcon, iconFor, type IconKey } from '../lib/icons';
import { ACCENTS, CARD_TYPES, cardTypeHint, cardTypeTitle, newId, type CameraFit, type Card, type CardType, type Item } from '../lib/layout';
import { expandItem, fits } from '../lib/devices';
import { Modal } from './Modals';
import { itemName } from './CardView';
import { t } from '../i18n';

export function AddCardModal(props: { onPick: (card: Card) => void; onClose: () => void }) {
  const types = Object.keys(CARD_TYPES) as CardType[];
  return (
    <Modal title={t('editor.new_card')} onClose={props.onClose}>
      <div class="type-list">
        {types.map((type) => {
          const info = CARD_TYPES[type];
          const Icon = iconFor(info.icon);
          return (
            <button key={type} class="type-row" onClick={() => props.onPick({
              // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
              id: newId(), type, title: '', icon: info.icon, x: 0, y: 999, w: type === 'switches' ? 6 : 3, h: 3, items: [],
            })}>
              <span class="status-icon"><Icon size={20} /></span>
              <span class="status-text"><b>{cardTypeTitle(type)}</b><small>{cardTypeHint(type)}</small></span>
              <Plus size={18} />
            </button>
          );
        })}
      </div>
    </Modal>
  );
}

// Выбор сущности HA: поиск по имени и id, сначала подходящие для типа карточки домены.
interface PickerProps {
  domains: string[];
  exclude: string[];
  match?: (s: HassState) => boolean;
  // Тип карточки — включает вкладку «Устройства»: устройство целиком раскроется в подходящие сущности.
  cardType?: CardType;
  excludeDevices?: string[];
  onPick: (entity: string) => void;
  onPickDevice?: (deviceId: string, entity: string) => void;
  onClose: () => void;
}

function EntityPicker(props: PickerProps) {
  const ha = useHA();
  const [q, setQ] = useState('');
  const [all, setAll] = useState(false);
  const [mode, setMode] = useState<'devices' | 'entities'>(props.cardType ? 'devices' : 'entities');
  const query = q.toLowerCase();
  const ids = Object.keys(ha.states).filter((id) => {
    if (props.exclude.indexOf(id) !== -1) return false;
    if (!all && !isAvailable(ha, id)) return false;
    if (!all && props.domains.indexOf(id.split('.')[0]) === -1) return false;
    if (!all && props.match && !props.match(ha.states[id])) return false;
    if (!query) return true;
    const name = String(ha.states[id].attributes.friendly_name || '').toLowerCase();
    return id.indexOf(query) !== -1 || name.indexOf(query) !== -1;
  }).sort().slice(0, 150);

  // Устройства, у которых есть хоть одна подходящая (и доступная) сущность.
  const type = props.cardType;
  const devices = type ? Object.keys(ha.devices).map((k) => ha.devices[k]).map((d) => ({
    dev: d,
    fit: d.entities.filter((id) => ha.registry[id] && ha.registry[id].ec == null && isAvailable(ha, id) && fits(type, ha.states[id])),
  })).filter((x) => x.fit.length && (props.excludeDevices || []).indexOf(x.dev.id) === -1
    && (!query || x.dev.name.toLowerCase().indexOf(query) !== -1))
    .sort((a, b) => a.dev.name.localeCompare(b.dev.name)) : [];

  return (
    <div class="picker">
      {type && (
        <div class="seg seg-wide picker-mode">
          <button class={mode === 'devices' ? 'active' : ''} onClick={() => setMode('devices')}>{t('editor.devices')}</button>
          <button class={mode === 'entities' ? 'active' : ''} onClick={() => setMode('entities')}>{t('editor.entities')}</button>
        </div>
      )}
      <div class="picker-search">
        <Search size={16} />
        <input placeholder={mode === 'devices' ? t('editor.search_device') : t('editor.search_entity')} value={q} onInput={(e) => setQ(e.currentTarget.value)} />
        <button class="icon-btn" onClick={props.onClose}><X size={18} /></button>
      </div>
      {mode === 'entities' && <label class="check"><input type="checkbox" checked={all} onChange={(e) => setAll(e.currentTarget.checked)} /> {t('editor.show_all')}</label>}
      <div class="picker-list">
        {mode === 'devices' ? (
          <>
            {devices.length === 0 && <div class="muted picker-empty">{Object.keys(ha.devices).length ? t('editor.no_devices') : t('editor.loading_devices')}</div>}
            {devices.map(({ dev, fit }) => (
              <button key={dev.id} class="picker-row" onClick={() => props.onPickDevice && props.onPickDevice(dev.id, fit[0])}>
                <span class="picker-name">{dev.name || fit[0]}</span>
                <span class="picker-state">{t('editor.count', { n: fit.length })}</span>
                <span class="picker-id">{fit.slice(0, 4).map((id) => ha.registry[id].en || ha.states[id].attributes.friendly_name).join(' · ')}</span>
              </button>
            ))}
          </>
        ) : (
          <>
            {ids.length === 0 && <div class="muted picker-empty">{t('editor.nothing_found')}</div>}
            {ids.map((id) => (
              <button key={id} class="picker-row" onClick={() => props.onPick(id)}>
                <span class="picker-name">{ha.states[id].attributes.friendly_name || id}</span>
                <span class="picker-state">{ha.states[id].state + (isNaN(parseFloat(ha.states[id].state)) ? '' : unitOf(ha, id))}</span>
                <span class="picker-id mono">{id}</span>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const FITS: CameraFit[] = ['cover', 'width', 'height'];

// Быстрые размеры в клетках; точнее — перетаскиванием уголка в сетке.
const SIZES: Array<[number, number]> = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];

interface EditorProps { card: Card; onSave: (card: Card) => void; onDelete?: () => void; onClose: () => void }

export function CardEditor(props: EditorProps) {
  const ha = useHA();
  const [card, setCard] = useState<Card>(props.card);
  // null — список; 'add' — новое устройство; иначе — вторая сущность для строки (влажность к климату, датчик к кондиционеру)
  const [picking, setPicking] = useState<null | 'add' | { index: number; field: 'hum' | 'temp' }>(null);
  const info = CARD_TYPES[card.type];
  const set = (patch: Partial<Card>) => setCard({ ...card, ...patch });
  const setItem = (i: number, patch: Partial<Item>) => set({ items: card.items.map((it, k) => (k === i ? { ...it, ...patch } : it)) });
  const moveItem = (i: number, d: number) => {
    const j = i + d;
    if (j < 0 || j >= card.items.length) return;
    const items = card.items.slice();
    items[i] = card.items[j];
    items[j] = card.items[i];
    set({ items });
  };

  const iconKeys = Object.keys(ICONS) as IconKey[];

  return (
    <Modal title={t('editor.card_title', { type: cardTypeTitle(card.type) })} onClose={props.onClose}>
      <label class="field">
        <span>{t('editor.name')}</span>
        <input value={card.title} placeholder={cardTypeTitle(card.type)} onInput={(e) => set({ title: e.currentTarget.value })} />
      </label>

      <div class="field">
        <span>{t('editor.size')}</span>
        <div class="seg seg-wide">
          {SIZES.map(([w, h]) => (
            <button key={w + 'x' + h} class={card.w === w && card.h === h ? 'active' : ''} onClick={() => set({ w, h })}>{w}×{h}</button>
          ))}
        </div>
      </div>

      <div class="field">
        <span>{t('editor.color')}</span>
        <div class="swatches">
          <button class={'swatch swatch-auto' + (!card.color ? ' active' : '')} onClick={() => set({ color: undefined })} title={t('editor.color_auto')}>A</button>
          {Object.keys(ACCENTS).map((k) => (
            <button key={k} class={'swatch' + (card.color === k ? ' active' : '')} style={{ background: ACCENTS[k] }} onClick={() => set({ color: k })} />
          ))}
        </div>
      </div>

      <div class="field">
        <span>{t('editor.icon')}</span>
        <div class="icon-grid">
          {iconKeys.map((k) => {
            const Icon = ICONS[k];
            return <button key={k} class={card.icon === k ? 'active' : ''} onClick={() => set({ icon: k })}><Icon size={18} /></button>;
          })}
        </div>
      </div>

      {card.type === 'cameras' && (
        <div class="field">
          <span>{t('editor.camera_picture')}</span>
          <div class="seg seg-wide">
            {FITS.map((v) => (
              <button key={v} class={(card.fit || 'cover') === v ? 'active' : ''} onClick={() => set({ fit: v })}>{t('editor.fit.' + v)}</button>
            ))}
          </div>
        </div>
      )}

      {card.type !== 'cameras' && card.type !== 'scenes' && (
        <label class="check check-row">
          <input type="checkbox" checked={!!card.chip} onChange={(e) => set({ chip: e.currentTarget.checked })} />
          {card.type === 'weather' ? t('editor.weather_on_photo') : t('editor.chip_on_photo')}
        </label>
      )}

      <div class="field">
        <span>{t('editor.items', { n: card.items.length, hint: cardTypeHint(card.type).toLowerCase() })}</span>
        {picking === null ? (
          <div class="items">
            {card.items.map((it, i) => {
              const Icon = iconFor(it.icon || guessIcon(it.entity, ha.states[it.entity] && ha.states[it.entity].attributes.device_class));
              return (
                <div class="item-block" key={it.entity + i}>
                <div class="item-row">
                  <button class="item-icon" title={t('editor.change_icon')} onClick={() => {
                    const k = iconKeys.indexOf((it.icon || '') as IconKey);
                    setItem(i, { icon: iconKeys[(k + 1) % iconKeys.length] });
                  }}><Icon size={18} /></button>
                  <div class="item-main">
                    <input value={it.name || ''} placeholder={it.device ? (ha.devices[it.device] ? ha.devices[it.device].name : t('editor.device')) : itemName(ha, { entity: it.entity })} onInput={(e) => setItem(i, { name: e.currentTarget.value || undefined })} />
                    {it.device
                      ? <span class="mono">{t('editor.device')}</span>
                      : <span class="mono">{it.entity}{!isAvailable(ha, it.entity) && <em class="na-tag"> · {t('editor.unavailable')}</em>}</span>}
                    {card.type === 'climate' && (
                      <button class="link" onClick={() => setPicking({ index: i, field: 'hum' })}><Droplets size={12} />{it.hum ? it.hum : t('editor.add_humidity')}</button>
                    )}
                    {card.type === 'ac' && (
                      <button class="link" onClick={() => setPicking({ index: i, field: 'temp' })}><Thermometer size={12} />{it.temp ? it.temp : t('editor.room_sensor')}</button>
                    )}
                  </div>
                  <button class="icon-btn" onClick={() => moveItem(i, -1)}><ArrowUp size={16} /></button>
                  <button class="icon-btn" onClick={() => moveItem(i, 1)}><ArrowDown size={16} /></button>
                  <button class="icon-btn danger" onClick={() => set({ items: card.items.filter((_, k) => k !== i) })}><Trash2 size={16} /></button>
                </div>
                {/* Устройство: его сущности — что показывать, в каком порядке и под какими именами. */}
                {it.device && <DeviceParts it={it} type={card.type} onChange={(patch) => setItem(i, patch)} />}
                </div>
              );
            })}
            <button class="btn btn-ghost" onClick={() => setPicking('add')}><Plus size={16} />
              <span>{card.type === 'weather' && !card.items.length ? t('editor.pick_forecast') : t('editor.add_device')}</span>
            </button>
          </div>
        ) : (
          <EntityPicker
            domains={picking === 'add' ? info.domains : ['sensor']}
            match={picking !== 'add'
              ? (s) => s.attributes.device_class === (picking.field === 'hum' ? 'humidity' : 'temperature')
              : (s) => fits(card.type, s)}
            exclude={card.items.map((it) => it.entity)}
            cardType={picking === 'add' ? card.type : undefined}
            excludeDevices={card.items.map((it) => it.device || '').filter(Boolean)}
            onPickDevice={(device, entity) => { set({ items: card.items.concat({ entity, device }) }); setPicking(null); }}
            onClose={() => setPicking(null)}
            onPick={(entity) => {
              if (picking === 'add') set({ items: card.items.concat({ entity }) });
              else setItem(picking.index, { [picking.field]: entity });
              setPicking(null);
            }}
          />
        )}
      </div>

      <div class="modal-foot">
        {props.onDelete ? <button class="btn btn-danger" onClick={props.onDelete}><Trash2 size={14} /><span>{t('common.delete')}</span></button> : <span />}
        <button class="btn btn-accent" onClick={() => props.onSave(card)}>{t('common.save')}</button>
      </div>
    </Modal>
  );
}

// Сущности устройства: галочка — показывать в карточке, своё имя (пусто — из HA), стрелки — порядок.
function DeviceParts(props: { it: Item; type: CardType; onChange: (patch: Partial<Item>) => void }) {
  const ha = useHA();
  const it = props.it;
  const skip = it.skip || [];
  const names = it.names || {};
  // Все подходящие сущности в порядке пользователя, с именами из HA — скрытые тоже (их можно вернуть).
  const parts = expandItem(ha, props.type, { ...it, skip: [], names: {} });
  if (!parts.length) return <span class="mono">{t('editor.no_matching')}</span>;
  const ids = parts.map((x) => x.entity);
  const move = (i: number, dir: number) => {
    const next = ids.slice();
    const tmp = next[i]; next[i] = next[i + dir]; next[i + dir] = tmp;
    props.onChange({ order: next });
  };
  const rename = (id: string, name: string) => {
    const next = { ...names };
    if (name) next[id] = name; else delete next[id];
    props.onChange({ names: Object.keys(next).length ? next : undefined });
  };
  const toggle = (id: string, shown: boolean) => {
    const next = shown ? skip.filter((x) => x !== id) : skip.concat(id);
    props.onChange({ skip: next.length ? next : undefined });
  };
  return (
    <div class="device-parts">
      {parts.map((x, i) => {
        const shown = skip.indexOf(x.entity) === -1;
        return (
          <div key={x.entity} class={'device-part' + (shown ? '' : ' off')}>
            <input type="checkbox" checked={shown} title={shown ? t('editor.part_hide') : t('editor.part_show')} onChange={(e) => toggle(x.entity, e.currentTarget.checked)} />
            <input class="part-name" value={names[x.entity] || ''} placeholder={x.name || x.entity} onInput={(e) => rename(x.entity, e.currentTarget.value)} />
            <button class="icon-btn" disabled={i === 0} onClick={() => move(i, -1)}><ArrowUp size={14} /></button>
            <button class="icon-btn" disabled={i === parts.length - 1} onClick={() => move(i, 1)}><ArrowDown size={14} /></button>
          </div>
        );
      })}
    </div>
  );
}
