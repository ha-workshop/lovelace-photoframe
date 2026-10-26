import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { CloudUpload, Copy, ImagePlus, RotateCcw, Server, Trash2, X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import { absolute, serviceBase, setServiceBase } from '../lib/api';
import { defaultLayout, type Layout } from '../lib/layout';
import { kioskPref, setKioskPref, type KioskPref } from '../lib/kiosk';
import { applyLanguage, languages, preferredLanguage, setPreferredLanguage, t } from '../i18n';
import { MAIN_HOME, mainHome, useStore, type Home, type Settings, type Sync } from '../lib/store';

export function Modal(props: { title: ComponentChildren; onClose: () => void; wide?: boolean; children: ComponentChildren }) {
  return (
    <div class="modal" onClick={props.onClose}>
      <div class={'modal-box' + (props.wide ? ' modal-wide' : '')} onClick={(e) => e.stopPropagation()}>
        <div class="modal-head">
          <h2>{props.title}</h2>
          <button class="icon-btn" onClick={props.onClose}><X size={24} /></button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export function CameraModal(props: { url: string; onClose: () => void }) {
  return (
    <Modal title={t('camera.live_title')} onClose={props.onClose} wide>
      <div class="cam-full"><img src={props.url} alt="" /></div>
    </Modal>
  );
}

const INTERVALS = [5000, 10000, 30000, 60000];
const IDLE = [20, 45, 120, 0];

const syncText = (s: Sync) => t('sync.' + s);

type Tab = 'photos' | 'ha' | 'homes' | 'sync';

export function SettingsModal(props: { onClose: () => void }) {
  const ha = useHA();
  const store = useStore();
  const { settings, photos, sync } = store.state;
  // Вкладка HA сразу — только если подключение к HA ещё не настроено.
  const haReady = !!store.card || !!settings.hasToken || !!(settings.haUrl && settings.token);
  const [tab, setTab] = useState<Tab>(haReady ? 'photos' : 'ha');
  const [draft, setDraft] = useState(settings);
  const [busy, setBusy] = useState(false);
  const [service, setService] = useState(serviceBase());
  const [json, setJson] = useState('');
  const [jsonError, setJsonError] = useState('');
  const set = (patch: Partial<Settings>) => setDraft({ ...draft, ...patch });

  const [dragOver, setDragOver] = useState(false);
  const [uploadError, setUploadError] = useState('');
  // Файлы из выбора или из перетаскивания; не-картинки отбрасываем.
  const upload = (list: FileList | null, input?: HTMLInputElement) => {
    const files = (Array.prototype.slice.call(list || []) as File[]).filter((f) => /^image\//.test(f.type));
    if (input) input.value = '';
    if (!files.length) return;
    setBusy(true);
    setUploadError('');
    store.addPhotos(files).then(
      () => setBusy(false),
      (e: Error) => { setBusy(false); setUploadError(e.message || String(e)); },
    );
  };

  const [language, setLanguage] = useState(preferredLanguage());
  const [kiosk, setKiosk] = useState<KioskPref>(kioskPref());
  const [homes, setHomes] = useState<Home[]>(store.state.homes);
  const homesChanged = JSON.stringify(homes) !== JSON.stringify(store.state.homes);
  const setHome = (id: string, patch: Partial<Home>) => setHomes(homes.map((h) => (h.id === id ? { ...h, ...patch } : h)));

  const save = () => {
    store.saveSettings(draft);
    if (homesChanged) store.saveHomes(homes);
    if (service !== serviceBase()) {
      // Новый адрес сервиса — проще всего начать с чистого листа.
      setServiceBase(service);
      location.reload();
      return;
    }
    props.onClose();
  };

  const importLayout = () => {
    try {
      const parsed = JSON.parse(json) as Layout;
      if (!parsed || !Array.isArray(parsed.cards)) throw new Error(t('settings.no_cards_field'));
      store.saveLayout(parsed);
      setJsonError('');
      setJson('');
    } catch (e) {
      setJsonError(t('settings.import_failed', { error: (e as Error).message }));
    }
  };

  const ids = Object.keys(ha.states).sort();

  return (
    <Modal title={<span class="modal-title"><ImagePlus size={20} class="accent-text" /><span>{t('settings.title')}</span></span>} onClose={props.onClose}>
      <div class="tabs">
        <button class={tab === 'photos' ? 'active' : ''} onClick={() => setTab('photos')}>{t('settings.tab.photos')}</button>
        <button class={tab === 'ha' ? 'active' : ''} onClick={() => setTab('ha')}>Home Assistant</button>
        <button class={tab === 'homes' ? 'active' : ''} onClick={() => setTab('homes')}>{t('settings.tab.homes')}</button>
        <button class={tab === 'sync' ? 'active' : ''} onClick={() => setTab('sync')}>{t('settings.tab.sync')}</button>
      </div>

      {tab === 'photos' && (
        <div>
          <p class="hint">{sync === 'local'
            ? t('photos.local_hint')
            : store.card
              ? t('photos.card_hint', { folder: store.card.folder })
              : t('photos.service_hint')}</p>
          <label
            class={'drop-zone' + (busy ? ' busy' : '') + (dragOver ? ' over' : '')}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); if (!busy) upload(e.dataTransfer && e.dataTransfer.files); }}
          >
            <input type="file" multiple accept="image/*" onChange={(e) => upload(e.currentTarget.files, e.currentTarget)} disabled={busy} />
            <CloudUpload size={40} class="muted" />
            <p class="drop-title">{busy ? t('photos.uploading') : t('photos.pick')}</p>
            <p class="hint small">{t('photos.formats')}</p>
          </label>
          {(uploadError || store.photoError) && <div class="c-red small upload-error">{uploadError || store.photoError}</div>}

          {photos.length > 0 && (
            <div class="thumbs thumbs-small">
              {photos.map((p) => (
                <div key={p.id} class="thumb" style={{ backgroundImage: 'url(' + absolute(p.url) + ')' }}>
                  <button class="thumb-del" onClick={() => store.deletePhoto(p.id)}><X size={14} /></button>
                </div>
              ))}
            </div>
          )}

          <div class="option">
            <label>{t('settings.slide_interval')}</label>
            <select value={draft.slideIntervalMs} onChange={(e) => set({ slideIntervalMs: +e.currentTarget.value })}>
              {INTERVALS.map((v) => <option key={v} value={v}>{t('settings.interval.' + v)}</option>)}
            </select>
          </div>
          <div class="option">
            <label>{t('settings.idle_return')}</label>
            <select value={draft.idleSec} onChange={(e) => set({ idleSec: +e.currentTarget.value })}>
              {IDLE.map((v) => <option key={v} value={v}>{t('settings.idle.' + v)}</option>)}
            </select>
          </div>
          <div class="option">
            <label>{t('settings.language')}</label>
            <select value={language} onChange={(e) => { setLanguage(e.currentTarget.value); setPreferredLanguage(e.currentTarget.value); applyLanguage(); }}>
              <option value="">{t('settings.language_auto')}</option>
              {languages().map((l) => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
          </div>
          {store.card && (
            <div class="option">
              <label>{t('settings.kiosk')}</label>
              <select value={kiosk} onChange={(e) => { const v = e.currentTarget.value as KioskPref; setKiosk(v); setKioskPref(v); }}>
                <option value="">{t('settings.kiosk_auto')}</option>
                <option value="on">{t('settings.kiosk_on')}</option>
                <option value="off">{t('settings.kiosk_off')}</option>
              </select>
            </div>
          )}
        </div>
      )}

      {tab === 'ha' && store.card && (
        <div>
          <p class="hint">{t('ha.card_hint')}</p>
        </div>
      )}

      {tab === 'ha' && !store.card && (
        <div>
          <label class="field">
            <span>{t('ha.url')}</span>
            <input value={draft.haUrl} placeholder="http://192.168.1.10:8123" onInput={(e) => set({ haUrl: e.currentTarget.value.trim() })} />
          </label>
          <label class="field">
            <span>{t('ha.token')}</span>
            <input
              type="password"
              value={draft.token}
              placeholder={sync !== 'local' && settings.hasToken ? t('ha.token_saved') : ''}
              onInput={(e) => set({ token: e.currentTarget.value.trim() })}
            />
          </label>
          <p class="hint">{sync === 'local'
            ? t('ha.local_hint')
            : t('ha.service_hint')}</p>
          <div class="diag-head"><Server size={14} /><span>{t('ha.entities', { n: ids.length })}</span></div>
          <div class="table-wrap">
            <table class="diag">
              <tbody>
                {ids.length === 0 && <tr><td class="muted">{t('ha.no_data')}</td></tr>}
                {ids.map((id) => <tr key={id}><td class="mono">{id}</td><td class="strong">{ha.states[id].state}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'homes' && (
        <div>
          <p class="hint">
            {sync === 'local'
              ? t('homes.local_hint')
              : t('homes.hint') + (store.card ? t('homes.card_hint') : '')}
          </p>
          {homes.map((h) => (
            <div class="home-row" key={h.id}>
              <div class="home-row-head">
                <input class="home-input" value={h.name} onInput={(e) => setHome(h.id, { name: e.currentTarget.value })} />
                <label class="check main-check">
                  <input type="radio" name="main-home" checked={mainHome() === h.id} onChange={() => store.setMainHome(h.id)} />
                  {t('homes.main_here')}
                </label>
                {h.id !== MAIN_HOME && (
                  <button class="icon-btn danger" title={t('homes.delete')} onClick={() => setHomes(homes.filter((x) => x.id !== h.id))}><Trash2 size={16} /></button>
                )}
              </div>
              {store.card ? null : h.id === MAIN_HOME ? (
                <div class="muted small">{t('homes.ha_on_tab')}</div>
              ) : (
                <div>
                  <div class="seg seg-wide">
                    <button class={!h.haUrl ? 'active' : ''} onClick={() => setHome(h.id, { haUrl: '', token: '' })}>{t('homes.same_ha')}</button>
                    <button class={h.haUrl ? 'active' : ''} onClick={() => setHome(h.id, { haUrl: h.haUrl || 'http://' })}>{t('homes.own_ha')}</button>
                  </div>
                  {h.haUrl && (
                    <div class="home-ha">
                      <input value={h.haUrl} placeholder="http://192.168.1.20:8123" onInput={(e) => setHome(h.id, { haUrl: e.currentTarget.value.trim() })} />
                      <input type="password" value={h.token || ''}
                        placeholder={h.hasToken ? t('homes.token_saved') : t('ha.token')}
                        onInput={(e) => setHome(h.id, { token: e.currentTarget.value.trim() })} />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          {sync !== 'local' && (
            <button class="btn btn-ghost" onClick={() => setHomes(homes.concat({ id: 'h' + Date.now().toString(36), name: t('homes.new_name'), haUrl: '' }))}>
              <span>{t('homes.add')}</span>
            </button>
          )}
        </div>
      )}

      {tab === 'sync' && (
        <div>
          <div class={'sync-state sync-' + sync}><i />{syncText(sync)}</div>
          {store.card && store.cardError && <div class="c-red small">{t('sync.save_failed', { error: store.cardError })}</div>}
          {!store.card && (
            <label class="field">
              <span>{t('sync.service_url')}</span>
              <input value={service} placeholder="http://192.168.1.10:8787" onInput={(e) => setService(e.currentTarget.value.trim())} />
            </label>
          )}

          <div class="field">
            <span>{t('layout.title')}</span>
            <div class="row-btns">
              <button class="btn btn-ghost" onClick={() => { setJson(JSON.stringify(store.state.layout, null, 2)); setJsonError(''); }}>
                <Copy size={14} /><span>{t('layout.export')}</span>
              </button>
              <button class="btn btn-ghost" onClick={() => store.saveLayout(defaultLayout())}>
                <RotateCcw size={14} /><span>{t('layout.reset')}</span>
              </button>
            </div>
            <textarea class="json" value={json} placeholder={t('layout.import_placeholder')} onInput={(e) => setJson(e.currentTarget.value)} />
            {jsonError && <div class="c-red small">{jsonError}</div>}
            <button class="btn btn-ghost" disabled={!json} onClick={importLayout}><span>{t('layout.import')}</span></button>
          </div>
        </div>
      )}

      <div class="modal-foot">
        {tab === 'photos' && photos.length > 0
          ? <button class="btn btn-danger" onClick={() => store.clearPhotos()}><Trash2 size={14} /><span>{t('photos.delete_all')}</span></button>
          : <span />}
        <button class="btn btn-accent" onClick={save}>{t('common.done')}</button>
      </div>
    </Modal>
  );
}
