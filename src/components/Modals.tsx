import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { CloudUpload, Copy, ImagePlus, LogIn, LogOut, RotateCcw, Trash2, X } from 'lucide-preact';
import { haSession, login, logout } from '../lib/haAuth';
import { defaultLayout, screenTitle, type Layout } from '../lib/layout';
import { kioskPref, setKioskPref, type KioskPref } from '../lib/kiosk';
import { autoQuality, qualityPref, setQualityPref, type QualityPref } from '../lib/quality';
import { applyLanguage, languages, preferredLanguage, setPreferredLanguage, t } from '../i18n';
import { MAIN_HOME, mainHome, startScreen, store as frame, useStore, type Home, type Settings } from '../lib/store';

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

type Tab = 'photos' | 'ha' | 'homes' | 'layout';

// Стартовый экран устройства для списка: не выбран или удалён — первый экран главного дома.
function startValue() {
  const home = mainHome();
  const list = frame.state.screens[home] || [];
  const id = startScreen();
  return home + '/' + (list.some((x) => x.id === id) ? id : list[0] ? list[0].id : '');
}

// Где PWA без сервиса хранит экраны и фото: в HA (общие с карточкой photo-frame) или пока в браузере.
function HaStorage() {
  const store = useStore();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const link = store.haLink;
  // Показываем, только когда что-то не так: всё в HA — это норма, говорить о ней незачем.
  if (link !== 'missing' && link !== 'error') return null;
  const create = () => {
    setBusy(true);
    setError('');
    store.createHaDashboard().then(() => setBusy(false), (e: Error) => { setBusy(false); setError(e.message || String(e)); });
  };
  return (
    <div class="ha-storage">
      <p class="hint">{t('storage.' + link)}</p>
      {link === 'missing' && (store.haClient && store.haClient.isAdmin
        ? <button class="btn btn-ghost" disabled={busy} onClick={create}><span>{busy ? t('common.loading') : t('storage.create')}</span></button>
        : <p class="hint small">{t('storage.ask_admin')}</p>)}
      {error && <div class="c-red small">{error}</div>}
    </div>
  );
}

// Первый переход PWA на хранилище HA: в браузере остались свои экраны и/или фото — перенести?
function Migration() {
  const store = useStore();
  const m = store.migration!;
  const [busy, setBusy] = useState('');
  const [error, setError] = useState('');
  const photos = () => {
    setBusy('0 / ' + m.photos);
    setError('');
    store.migratePhotos((done, total) => setBusy(done + ' / ' + total)).then(
      () => setBusy(''),
      (e: Error) => { setBusy(''); setError(e.message || String(e)); },
    );
  };
  return (
    <div class="migration">
      <p>{t('migration.text')}</p>
      <div class="row-btns">
        {m.photos > 0 && (
          <button class="btn btn-ghost" disabled={!!busy} onClick={photos}>
            <span>{busy ? t('photos.uploading') + ' ' + busy : t('migration.photos', { n: m.photos })}</span>
          </button>
        )}
        {m.screens && <button class="btn btn-ghost" disabled={!!busy} onClick={() => store.migrateScreens()}><span>{t('migration.screens')}</span></button>}
        <button class="btn btn-ghost" disabled={!!busy} onClick={() => store.dismissMigration()}><span>{t('migration.skip')}</span></button>
      </div>
      {error && <div class="c-red small">{error}</div>}
    </div>
  );
}

export function SettingsModal(props: { onClose: () => void; onCustomize: () => void }) {
  const store = useStore();
  const { settings, photos } = store.state;
  // inCard — карточка внутри фронтенда HA: входить некуда, вкладки HA нет. Иначе это PWA, она входит в HA сама
  // (вошла и в HA есть дашборд — store.card тоже есть, но standalone).
  const inCard = !!store.card && !store.card.standalone;
  // Вкладка HA сразу — только если PWA ещё не вошла в HA.
  // Пока PWA не вошла в HA, настройки — это только вход: без вкладок.
  const signedIn = !!store.card || !!haSession();
  const [chosen, setTab] = useState<Tab>('photos');
  const tab: Tab = signedIn ? chosen : 'ha';
  const [draft, setDraft] = useState(settings);
  const [busy, setBusy] = useState(false);
  const [json, setJson] = useState('');
  const [jsonError, setJsonError] = useState('');
  const set = (patch: Partial<Settings>) => setDraft({ ...draft, ...patch });

  const [dragOver, setDragOver] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [progress, setProgress] = useState('');
  // Файлы из выбора или из перетаскивания; не-картинки отбрасываем.
  const upload = (list: FileList | null, input?: HTMLInputElement) => {
    const files = (Array.prototype.slice.call(list || []) as File[]).filter((f) => /^image\//.test(f.type));
    if (input) input.value = '';
    if (!files.length) return;
    setBusy(true);
    setUploadError('');
    setProgress('');
    store.addPhotos(files, (done, total) => setProgress(total > 1 ? done + ' / ' + total : '')).then(
      () => setBusy(false),
      (e: Error) => { setBusy(false); setUploadError(e.message || String(e)); },
    );
  };

  const [language, setLanguage] = useState(preferredLanguage());
  const [kiosk, setKiosk] = useState<KioskPref>(kioskPref());
  const [qPref, setQPref] = useState<QualityPref>(qualityPref());
  const session = haSession();
  const [homes, setHomes] = useState<Home[]>(store.state.homes);
  const homesChanged = JSON.stringify(homes) !== JSON.stringify(store.state.homes);
  const setHome = (id: string, patch: Partial<Home>) => setHomes(homes.map((h) => (h.id === id ? { ...h, ...patch } : h)));

  const save = () => {
    store.saveSettings(draft);
    if (homesChanged) store.saveHomes(homes);
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

  return (
    <Modal title={<span class="modal-title"><ImagePlus size={20} class="accent-text" /><span>{t('settings.title')}</span></span>} onClose={props.onClose}>
      {signedIn && (
        <div class="tabs">
          <button class={tab === 'photos' ? 'active' : ''} onClick={() => setTab('photos')}>{t('settings.tab.photos')}</button>
          <button class={tab === 'homes' ? 'active' : ''} onClick={() => setTab('homes')}>{t('settings.tab.homes')}</button>
          <button class={tab === 'layout' ? 'active' : ''} onClick={() => setTab('layout')}>{t('settings.tab.layout')}</button>
          {/* В карточке HA входить некуда — вкладки HA нет. */}
          {!inCard && <button class={tab === 'ha' ? 'active' : ''} onClick={() => setTab('ha')}>Home Assistant</button>}
        </div>
      )}

      {tab === 'photos' && (
        <div>
          {store.migration && <Migration />}
          <p class="hint">{store.card ? t('photos.card_hint', { folder: store.card.folder }) : t('photos.local_hint')}</p>
          <label
            class={'drop-zone' + (busy ? ' busy' : '') + (dragOver ? ' over' : '')}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); if (!busy) upload(e.dataTransfer && e.dataTransfer.files); }}
          >
            <input type="file" multiple accept="image/*" onChange={(e) => upload(e.currentTarget.files, e.currentTarget)} disabled={busy} />
            <CloudUpload size={40} class="muted" />
            <p class="drop-title">{busy ? t('photos.uploading') + (progress ? ' ' + progress : '') : t('photos.pick')}</p>
            <p class="hint small">{t('photos.formats')}</p>
          </label>
          {(uploadError || store.photoError) && <div class="c-red small upload-error">{uploadError || store.photoError}</div>}

          {photos.length > 0 && (
            <div class="thumbs thumbs-small">
              {photos.map((p) => (
                <div key={p.id} class="thumb" style={{ backgroundImage: 'url(' + p.url + ')' }}>
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
          <div class="option">
            <label>{t('settings.quality')}</label>
            <select value={qPref} onChange={(e) => { const v = e.currentTarget.value as QualityPref; setQPref(v); setQualityPref(v); }}>
              <option value="auto">{t('settings.quality_auto', { mode: t(autoQuality() === 'lite' ? 'settings.quality_lite' : 'settings.quality_full') })}</option>
              <option value="full">{t('settings.quality_full')}</option>
              <option value="lite">{t('settings.quality_lite')}</option>
            </select>
          </div>
          {/* Экран с фото настраивается прямо на нём — как экран блокировки iPhone. */}
          <div class="option">
            <label>{t('lock.title')}<small class="option-hint">{t('lock.long_press')}</small></label>
            <button class="btn btn-ghost" onClick={props.onCustomize}>{t('lock.customize')}</button>
          </div>
          {inCard && (
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

      {tab === 'ha' && inCard && (
        <div>
          <p class="hint">{t('ha.card_hint')}</p>
        </div>
      )}

      {tab === 'ha' && !inCard && (
        <div>
          {/* Авторизация: адрес HA и вход через его страницу входа — вход хранится на этом устройстве. */}
          <div class="auth">
            <div class="auth-title">{t('ha.auth')}</div>
            <label class="field">
              <span>{t('ha.url')}</span>
              <input value={draft.haUrl} placeholder={session ? session.hassUrl : location.protocol + '//' + location.host} onInput={(e) => set({ haUrl: e.currentTarget.value.trim() })} />
            </label>
            {session ? (
              <div class="auth-session">
                <span>{t('ha.logged_in', { url: session.hassUrl })}</span>
                {!session.embedded && <button class="btn btn-ghost" onClick={() => { logout(); location.reload(); }}><LogOut size={14} /><span>{t('ha.logout')}</span></button>}
              </div>
            ) : (
              <button class="btn btn-ghost btn-login" onClick={() => { store.saveSettings(draft); login(draft.haUrl); }}><LogIn size={16} /><span>{t('ha.login')}</span></button>
            )}
            <p class="hint">{t('ha.local_hint')}</p>
          </div>
          <HaStorage />
        </div>
      )}

      {tab === 'homes' && (
        <div>
          <p class="hint">{t('homes.hint') + (store.card ? t('homes.card_hint') : '')}</p>
          {/* Стартовый экран — свой у каждого устройства: сюда рамка возвращается, когда её оставили в покое. */}
          <div class="option">
            <label>{t('screen.start')}</label>
            <select value={startValue()} onChange={(e) => {
              const v = e.currentTarget.value.split('/');
              store.setStart(v[0], v[1]);
            }}>
              {store.state.homes.map((h) => (store.state.screens[h.id] || []).map((x, i) => (
                <option key={h.id + '/' + x.id} value={h.id + '/' + x.id}>
                  {(store.state.homes.length > 1 ? h.name + ' · ' : '') + screenTitle(x, i)}
                </option>
              )))}
            </select>
          </div>
          {homes.map((h) => (
            <div class="home-row" key={h.id}>
              <div class="home-row-head">
                <input class="home-input" value={h.name} onInput={(e) => setHome(h.id, { name: e.currentTarget.value })} />
                {h.id !== MAIN_HOME && (
                  <button class="icon-btn danger" title={t('homes.delete')} onClick={() => setHomes(homes.filter((x) => x.id !== h.id))}><Trash2 size={16} /></button>
                )}
              </div>
            </div>
          ))}
          <button class="btn btn-ghost" onClick={() => setHomes(homes.concat({ id: 'h' + Date.now().toString(36), name: t('homes.new_name') }))}>
            <span>{t('homes.add')}</span>
          </button>
        </div>
      )}

      {tab === 'layout' && (
        <div>
          {store.card && store.cardError && <div class="c-red small">{t('sync.save_failed', { error: store.cardError })}</div>}

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
