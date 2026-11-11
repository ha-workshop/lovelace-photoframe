import { render } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Folder, Image, Images, LayoutGrid, RefreshCw, Trash2, Upload } from 'lucide-preact';
import css from './styles.css?inline';
import { GridEditor, INSET, SPAN } from './components/Ambient';
import { MediaPicker } from './components/MediaPicker';
import { FolderPicker } from './components/FolderPicker';
import { toMediaNode, type FrameFolder, type MediaRaw } from './lib/cardBackend';
import { GRID, cleanLook, defaultGrid, lockPrefs, validGrid, type GridRect, type HAlign, type LockGrid, type Orientation, type VAlign } from './lib/lockscreen';
import { t } from './i18n';

// Раздел «Фоторамки» в боковом меню HA (только администраторам; регистрирует интеграция Photo Frame).
// Список рамок и редактор сетки экрана с фото каждой из них. Ориентацию не выбираем вручную: показываем
// экран в том размере, в каком рамку видели в последний раз (она сообщает его при повороте и смене навигации).
// «Сохранить на рамку» — рамка берёт сетку сразу, а если она не в сети — при подключении.
// «Дашборд» — само приложение рамки (/photoframe/?preview=1&frame_id=…) в размере её экрана: экраны и карточки
// домов правятся тем же редактором, что на рамке, и видно, как они лягут на этот экран. Раскладка у каждой
// рамки своя (на узких экранах — своя телефонная), предпросмотр рамкой в HA не считается.

// Предпросмотр в настоящем размере экрана рамки, уменьшенный под ширину окна.
function DashboardPreview(props: { disp: Display; frame: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [room, setRoom] = useState(900);
  useEffect(() => {
    const measure = () => { if (box.current) setRoom(box.current.clientWidth); };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  const { w, h } = props.disp;
  const scale = Math.min(1, room / w, (window.innerHeight * 0.72) / h);
  return (
    <div class="admin-screen-wrap" ref={box}>
      <div class="admin-iframe-box" style={{ width: Math.round(w * scale) + 'px', height: Math.round(h * scale) + 'px' }}>
        <iframe key={w + 'x' + h + props.frame} src={'/photoframe/index.html?preview=1&frame_id=' + encodeURIComponent(props.frame)} title="preview"
          style={{ width: w + 'px', height: h + 'px', transform: 'scale(' + scale + ')' }} />
      </div>
    </div>
  );
}

interface Hass {
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  // HA-клиент умеет авторизованные HTTP-запросы: через него загружаем файлы в папку Photo Frame.
  fetchWithAuth?(path: string, init?: RequestInit): Promise<Response>;
}
interface Display { w: number; h: number }
interface FrameInfo {
  frame_id: string; name?: string; model?: string; online: boolean;
  grid?: LockGrid | null; grid_portrait?: LockGrid | null;
  // Источник фото этой рамки: любая папка медиатеки HA (media_content_id).
  media?: string; album?: string;
  // Куда складывать новые фото внутри папки Photo Frame; null/undefined — как альбом рамки.
  upload?: string | null;
  // Последний известный размер экрана; displays — по ориентациям (у рамок, ещё не присылавших display).
  display?: Display | null; displays?: Partial<Record<Orientation, Display>>; lockscreen?: unknown;
}
interface FramePhoto { id: string; url: string }

// Экран в том размере, в каком рамку видели в последний раз. Не сообщала — 16:10.
function lastDisplay(f: FrameInfo | null | undefined): Display | null {
  if (!f) return null;
  if (f.display && f.display.w && f.display.h) return f.display;
  const d = f.displays || {};
  return d.landscape || d.portrait || null;
}

function orientationOf(d: Display): Orientation {
  return d.h > d.w ? 'portrait' : 'landscape';
}

function AdminApp(props: { hass: Hass }) {
  const [frames, setFrames] = useState<FrameInfo[] | null>(null);
  const [error, setError] = useState('');
  const [pick, setPick] = useState('');
  // Правка до сохранения: сетки обеих ориентаций выбранной рамки.
  const [draft, setDraft] = useState<Record<Orientation, LockGrid | null>>({ landscape: null, portrait: null });
  const [moving, setMoving] = useState<LockGrid | null>(null);
  const [block, setBlock] = useState<'clock' | 'widgets'>('clock');
  const [status, setStatus] = useState('');
  const [mode, setMode] = useState<'photo' | 'dashboard' | 'content'>('photo');
  const [sourcePick, setSourcePick] = useState(false);
  const [sourceValue, setSourceValue] = useState('');
  const [folderPick, setFolderPick] = useState(false);
  const [photos, setPhotos] = useState<FramePhoto[] | null>(null);
  const [photosTick, setPhotosTick] = useState(0);
  const [mediaRoot, setMediaRoot] = useState('');
  const [uploading, setUploading] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  const load = () => {
    setError('');
    props.hass.callWS<{ frames: FrameInfo[]; media_root?: string }>({ type: 'photoframe/frames' }).then((r) => {
      setFrames(r.frames);
      setMediaRoot(r.media_root || '');
      if (!pick && r.frames.length) choose(r.frames[0]);
    }, (e: Error) => setError(e.message || String(e)));
  };
  useEffect(load, []);

  const choose = (f: FrameInfo) => {
    setPick(f.frame_id);
    setDraft({ landscape: validGrid(f.grid), portrait: validGrid(f.grid_portrait) });
    setStatus('');
  };
  const frame = frames && frames.filter((f) => f.frame_id === pick)[0];
  // Ориентацию не спрашиваем: показываем и правим ту сетку, в какой рамку видели в последний раз.
  const last = lastDisplay(frame);
  const disp = last || { w: 1280, h: 800 };
  const orient = orientationOf(disp);
  const known = !!last;
  const grid = moving || draft[orient];
  const setGrid = (g: LockGrid | null) => { setDraft({ ...draft, [orient]: g }); setStatus(''); };

  // ── Контент: откуда рамка берёт фото ─────────────────────
  // Источник — любая папка медиатеки HA: «Мои медиа», Google Photos, SMB и другие интеграции.
  // Локальная папка Photo Frame хранится альбомом, поэтому подпись и путь учитывают оба поля.
  const mediaName = (frame && frame.media) || '';
  const albumName = (frame && frame.album && frame.album !== 'all' && frame.album) || '';
  const sourceName = mediaName || albumName;
  const mediaTitle = sourceName ? sourceName.replace(/\/+$/, '').split('/').pop() || sourceName : t('admin.content_default');
  const sourcePath = mediaName || (albumName && mediaRoot ? mediaRoot + '/' + albumName : '');
  // Локальная папка: источник не задан или указывает внутрь папки Photo Frame.
  const isLocal = !mediaName || (!!mediaRoot && (mediaName === mediaRoot || mediaName.startsWith(mediaRoot + '/')));
  // Куда складывать новые фото: явный выбор папки загрузки, иначе альбом рамки (как раньше).
  const uploadFolder = frame ? (frame.upload !== null && frame.upload !== undefined ? frame.upload : albumName) : '';

  const openSource = () => {
    setSourceValue(mediaName || (albumName && mediaRoot ? mediaRoot + '/' + albumName : ''));
    setSourcePick(true);
  };

  useEffect(() => {
    if (!frame || mode !== 'content') return;
    let alive = true;
    setPhotos(null);
    props.hass.callWS<{ photos: FramePhoto[] }>({
      type: 'photoframe/photos',
      frame_id: frame.frame_id,
      width: 480,
      height: 320,
    }).then((r) => { if (alive) setPhotos(r.photos); }, () => { if (alive) setPhotos([]); });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pick, mode, photosTick, mediaName, albumName]);

  const setSource = (id: string, album?: string) => {
    if (!frame) return;
    setStatus(t('admin.saving'));
    const msg: Record<string, unknown> = { type: 'photoframe/frame/media', frame_id: frame.frame_id, media: id };
    if (album !== undefined) msg.album = album;
    props.hass.callWS<{ media?: string; album?: string }>(msg).then(
      () => {
        setSourcePick(false);
        setPhotosTick((n) => n + 1);
        setStatus(t(frame.online ? 'admin.content_saved_online' : 'admin.content_saved_offline'));
        load();
      },
      (e: Error) => setStatus(e.message || String(e)),
    );
  };

  // Новые фото всегда идут в локальную папку Photo Frame, даже если показывается внешний источник.
  const uploadFiles = (files: FileList | null) => {
    if (!frame || !files || !files.length) return;
    const fetchWithAuth = props.hass.fetchWithAuth?.bind(props.hass);
    if (!fetchWithAuth) {
      setStatus(t('admin.content_upload_unavailable'));
      return;
    }
    const list = Array.from(files);
    let done = 0;
    setUploading(true);
    setStatus(t('admin.saving'));
    const next = (i: number): Promise<void> => {
      if (i >= list.length) {
        setUploading(false);
        setStatus(t('admin.content_uploaded', { n: done }));
        setPhotosTick((n) => n + 1);
        load();
        if (uploadRef.current) uploadRef.current.value = '';
        return Promise.resolve();
      }
      const file = list[i];
      const form = new FormData();
      form.append('album', uploadFolder);
      form.append('file', file, file.name);
      return fetchWithAuth('/api/photoframe/upload', { method: 'POST', body: form }).then((r) => {
        if (!r.ok) {
          if (r.status === 401 || r.status === 403) throw new Error(t('errors.upload_admin'));
          if (r.status === 415) throw new Error(t('errors.decode', { name: file.name }));
          throw new Error(t('errors.upload', { status: r.status }));
        }
        done++;
        return next(i + 1);
      });
    };
    next(0).catch((e: Error) => {
      setUploading(false);
      if (uploadRef.current) uploadRef.current.value = '';
      setStatus(e.message || String(e));
    });
  };

  const removePhoto = (id: string) => {
    if (!frame) return;
    if (!window.confirm(t('admin.content_delete_confirm'))) return;
    setStatus(t('admin.saving'));
    props.hass.callWS({ type: 'photoframe/photo/delete', frame_id: frame.frame_id, photo: id }).then(
      () => {
        setStatus(t('admin.content_deleted'));
        setPhotosTick((n) => n + 1);
        load();
      },
      (e: Error) => setStatus(e.message || String(e)),
    );
  };

  const setUploadFolder = (path: string) => {
    if (!frame) return;
    const target = path === 'all' ? '' : path;
    setFolderPick(false);
    setStatus(t('admin.saving'));
    props.hass.callWS<{ upload?: string }>({
      type: 'photoframe/frame/upload',
      frame_id: frame.frame_id,
      upload: target,
    }).then(
      () => {
        setStatus(t(frame.online ? 'admin.content_saved_online' : 'admin.content_saved_offline'));
        load();
      },
      (e: Error) => setStatus(e.message || String(e)),
    );
  };

  // Отправить рамкам экран с фото: в сети — сразу, остальным — при подключении.
  const push = (ids: string[], patch: Record<string, unknown>) =>
    props.hass.callWS<{ online: string[] }>({ type: 'photoframe/frame/set_lockscreen', frame_ids: ids, patch });

  const save = () => {
    if (!frame) return;
    setStatus(t('admin.saving'));
    push([frame.frame_id], { grid: draft.landscape, gridPortrait: draft.portrait }).then(
      () => { setStatus(t(frame.online ? 'admin.saved_online' : 'admin.saved_offline')); load(); },
      (e: Error) => setStatus(e.message || String(e)),
    );
  };

  // «Скопировать на…»: экран с фото этой рамки (всё или только сетки, как сейчас в редакторе) — на выбранные рамки.
  const [copyOpen, setCopyOpen] = useState(false);
  const [targets, setTargets] = useState<string[]>([]);
  const [what, setWhat] = useState<'all' | 'grid'>('all');
  const others = (frames || []).filter((f) => f.frame_id !== pick);
  const copy = () => {
    if (!frame || !targets.length) return;
    const grids = { grid: draft.landscape, gridPortrait: draft.portrait };
    const patch = what === 'all' ? { ...cleanLook(frame.lockscreen), ...grids } : grids;
    setStatus(t('admin.saving'));
    push(targets, patch).then((r) => {
      setStatus(t('admin.copied', { n: targets.length, online: r.online.length }));
      setCopyOpen(false);
      setTargets([]);
      load();
    }, (e: Error) => setStatus(e.message || String(e)));
  };

  const align = (patch: Partial<GridRect>) => {
    if (!grid) return;
    const r: GridRect = { ...grid[block], ...patch };
    if (!r.ha) delete r.ha;
    if (!r.va) delete r.va;
    setGrid({ ...grid, [block]: r });
  };
  const cur = grid ? grid[block] : null;

  return (
    <div class="admin">
      <header class="admin-head">
        <h1>{t('admin.title')}</h1>
        <div class="admin-head-btns">
          <a class="btn btn-ghost" href={'/photoframe/photoframe.apk'} target="_blank" rel="noopener" download>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            <span>{t('admin.download_apk')}</span>
          </a>
          <button class="btn btn-ghost" onClick={load}><RefreshCw size={14} /><span>{t('admin.refresh')}</span></button>
        </div>
      </header>
      {error && <div class="c-red small">{error}</div>}
      {frames && !frames.length && <p class="hint">{t('admin.no_frames')}</p>}
      <div class="admin-body">
        <nav class="admin-list">
          {(frames || []).map((f) => (
            <button key={f.frame_id} class={'admin-frame' + (f.frame_id === pick ? ' on' : '')} onClick={() => choose(f)}>
              <span class={'dot' + (f.online ? ' online' : '')} />
              <span class="admin-frame-name">{f.name || f.frame_id}</span>
              <small>{f.model || ''}</small>
            </button>
          ))}
        </nav>
        {frame && (
          <section class="admin-editor">
            <div class="admin-tools">
              <div class="seg">
                <button class={mode === 'photo' ? 'active' : ''} onClick={() => setMode('photo')}><Image size={14} /> {t('admin.mode_photo')}</button>
                <button class={mode === 'dashboard' ? 'active' : ''} onClick={() => setMode('dashboard')}><LayoutGrid size={14} /> {t('admin.mode_dashboard')}</button>
                <button class={mode === 'content' ? 'active' : ''} onClick={() => setMode('content')}><Images size={14} /> {t('admin.mode_content')}</button>
              </div>
              {mode === 'photo' && <label class="check">
                <input type="checkbox" checked={!!draft[orient]}
                  onChange={(e) => setGrid(e.currentTarget.checked ? defaultGrid(lockPrefs(), orient === 'landscape') : null)} />
                {t('admin.use_grid')}
              </label>}
              <span class="hint small">{disp.w}×{disp.h}{known ? '' : ' · ' + t('admin.size_guess')}</span>
            </div>

            {mode === 'dashboard' && (
              <>
                <p class="hint small">{t('admin.dashboard_hint')}</p>
                <DashboardPreview disp={disp} frame={pick} />
              </>
            )}
            {mode === 'content' && (
              <>
                <p class="hint small">{t('admin.content_hint')}</p>
                <div class="admin-content-head">
                  <button class="folder-choose" onClick={openSource}>
                    <Folder size={16} />
                    <span>{mediaTitle}</span>
                  </button>
                  <button class="btn btn-ghost" onClick={() => setPhotosTick((n) => n + 1)}>
                    <RefreshCw size={14} /><span>{t('admin.refresh')}</span>
                  </button>
                </div>
                {sourcePath && <p class="hint small admin-content-path">{sourcePath}</p>}
                <div class="admin-content-actions">
                  <button class="pill-btn accent-bg" onClick={openSource}>{t('admin.content_pick')}</button>
                  {sourceName && <button class="btn btn-ghost" onClick={() => setSource('', 'all')}>{t('admin.content_default')}</button>}
                  <button class="btn btn-ghost" onClick={() => setFolderPick(true)}>
                    <Folder size={14} /><span>{t('admin.content_upload_folder')}: {uploadFolder || t('photos.folder_all')}</span>
                  </button>
                  <span class="hint small">{status}</span>
                </div>
                <p class="hint small">{t('admin.content_upload_hint')}</p>
                <label class={'folder-choose admin-upload' + (uploading ? ' busy' : '')}>
                  <Upload size={16} />
                  <span>{uploading ? t('photos.uploading') : t('admin.content_upload')}</span>
                  <input ref={uploadRef} type="file" multiple accept="image/*,.heic,.heif"
                    onChange={(e) => uploadFiles(e.currentTarget.files)} disabled={uploading} />
                </label>
                {!isLocal && <p class="hint small admin-content-note">{t('admin.content_external_hint')}</p>}
                {!photos && <div class="folder-loading"><i class="cam-spinner" /><span>{t('photos.folder_loading')}</span></div>}
                {photos && !photos.length && <p class="hint muted">{t('admin.content_empty')}</p>}
                {photos && photos.length > 0 && (
                  <div class="admin-thumbs">
                    {photos.map((p) => (
                      <div key={p.id} class="admin-thumb">
                        <img src={p.url} alt="" loading="lazy" />
                        {isLocal && (
                          <button class="admin-thumb-del" onClick={() => removePhoto(p.id)}
                            title={t('admin.content_delete')} aria-label={t('admin.content_delete')}>
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {photos && <p class="hint small">{t('admin.content_count', { n: photos.length })}</p>}
              </>
            )}
            {mode === 'photo' && <>
            {/* Экран рамки в её пропорциях */}
            <div class="admin-screen-wrap">
              <div class="admin-screen" style={{ aspectRatio: disp.w + ' / ' + disp.h, ...(disp.h > disp.w ? { height: '60vh' } : { width: '100%' }) }}>
                {grid ? (
                  <>
                    {(['clock', 'widgets'] as const).map((k) => {
                      const r = grid[k];
                      return (
                        <div key={k} class={'admin-block admin-' + k} style={{
                          left: INSET + (r.x / GRID) * SPAN + '%', top: INSET + (r.y / GRID) * SPAN + '%',
                          width: (r.w / GRID) * SPAN + '%', height: (r.h / GRID) * SPAN + '%',
                        }}>{k === 'clock' ? '12:00' : '◉ ◉ ◉'}</div>
                      );
                    })}
                    <GridEditor grid={grid} onDraft={setMoving}
                      onDone={(g) => { setMoving(null); setGrid(g); }} onTap={(k) => setBlock(k)} />
                  </>
                ) : <p class="admin-off">{t('admin.no_grid')}</p>}
              </div>
            </div>

            {grid && cur && (
              <div class="admin-align">
                <div class="seg">
                  <button class={block === 'clock' ? 'active' : ''} onClick={() => setBlock('clock')}>{t('lock.clock')}</button>
                  <button class={block === 'widgets' ? 'active' : ''} onClick={() => setBlock('widgets')}>{t('lock.widgets')}</button>
                </div>
                <div class="option">
                  <label>{t('lock.align_h')}</label>
                  <div class="seg">
                    {(['', 'left', 'center', 'right'] as Array<HAlign | ''>).map((a) => (
                      <button key={a} class={(cur.ha || '') === a ? 'active' : ''} onClick={() => align({ ha: (a || undefined) as HAlign })}>{t('lock.align.' + (a || 'auto'))}</button>
                    ))}
                  </div>
                </div>
                <div class="option">
                  <label>{t('lock.align_v')}</label>
                  <div class="seg">
                    {(['', 'top', 'middle', 'bottom'] as Array<VAlign | ''>).map((a) => (
                      <button key={a} class={(cur.va || '') === a ? 'active' : ''} onClick={() => align({ va: (a || undefined) as VAlign })}>{t('lock.align.' + (a || 'auto'))}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {copyOpen && (
              <div class="admin-copy">
                <div class="seg">
                  <button class={what === 'all' ? 'active' : ''} onClick={() => setWhat('all')}>{t('admin.copy_all')}</button>
                  <button class={what === 'grid' ? 'active' : ''} onClick={() => setWhat('grid')}>{t('admin.copy_grid')}</button>
                </div>
                {what === 'all' && !frame.lockscreen && <p class="hint small">{t('admin.copy_no_look')}</p>}
                {others.map((f) => (
                  <label key={f.frame_id} class="check">
                    <input type="checkbox" checked={targets.indexOf(f.frame_id) !== -1}
                      onChange={(e) => setTargets(e.currentTarget.checked ? targets.concat(f.frame_id) : targets.filter((x) => x !== f.frame_id))} />
                    {(f.name || f.frame_id) + (f.online ? '' : ' · ' + t('layout.grid_offline'))}
                  </label>
                ))}
                {!others.length && <p class="hint small">{t('admin.copy_none')}</p>}
                <div class="row-btns">
                  <button class="btn btn-ghost" onClick={() => setCopyOpen(false)}><span>{t('common.cancel')}</span></button>
                  <button class="pill-btn accent-bg" disabled={!targets.length} onClick={copy}>{t('admin.copy_go', { n: targets.length })}</button>
                </div>
              </div>
            )}
            <div class="admin-foot">
              <span class="hint small">{status}</span>
              <button class="btn btn-ghost" onClick={() => setCopyOpen(!copyOpen)}><span>{t('admin.copy_to')}</span></button>
              <button class="pill-btn accent-bg" onClick={save}>{t('admin.save')}</button>
            </div>
            </>}
          </section>
        )}
      </div>
      {sourcePick && (
        <MediaPicker
          value={sourceValue}
          title={t('admin.content_pick')}
          browse={(id) => props.hass.callWS<MediaRaw>({ type: 'media_source/browse_media', media_content_id: id })
            .then((r) => toMediaNode(r, id))}
          onPick={(id) => setSource(id)}
          onReset={() => setSource('', 'all')}
          onClose={() => setSourcePick(false)}
        />
      )}
      {folderPick && (
        <FolderPicker
          value={uploadFolder}
          allowCreate
          title={t('admin.content_upload_folder')}
          hint={t('admin.content_upload_folder_hint')}
          load={() => props.hass.callWS<{ folders?: FrameFolder[] }>({ type: 'photoframe/folders' })
            .then((r) => r.folders || [])}
          onPick={setUploadFolder}
          onClose={() => setFolderPick(false)}
        />
      )}
    </div>
  );
}

const ADMIN_CSS = ':host{display:block;min-height:100vh;background:#0b0d14;color:#f5f7fb;'
  + 'font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif}'
  + '.admin{max-width:1200px;margin:0 auto;padding:16px 20px}'
  + '.admin-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:12px}'
  + '.admin-head h1{font-size:22px;font-weight:600;margin:0}'
  + '.admin-head-btns{display:flex;gap:8px;align-items:center}'
  + '.admin-head-btns a{text-decoration:none}'
  + '.admin-body{display:flex;align-items:flex-start}'
  + '.admin-list{width:230px;flex-shrink:0;margin-right:18px;display:flex;flex-direction:column}'
  + '.admin-frame{display:flex;align-items:center;flex-wrap:wrap;text-align:left;padding:10px 12px;border-radius:12px;margin-bottom:6px;background:rgba(255,255,255,0.05)}'
  + '.admin-frame.on{background:rgba(125,211,252,0.18)}'
  + '.admin-frame .dot{width:8px;height:8px;border-radius:50%;background:#64748b;margin-right:8px}'
  + '.admin-frame .dot.online{background:#4ade80}'
  + '.admin-frame-name{flex:1;font-size:14px}'
  + '.admin-frame small{width:100%;padding-left:16px;color:rgba(255,255,255,0.5);font-size:11px}'
  + '.admin-editor{flex:1;min-width:0}'
  + '.admin-tools{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:12px}'
  + '.admin-tools > *{margin-right:14px}'
  + '.admin-tools .check{margin:0 16px 0 0}'
  + '.admin-screen-wrap{display:flex;justify-content:center}'
  + '.admin-screen{position:relative;max-width:100%;max-height:70vh;border-radius:14px;overflow:hidden;'
  + 'background:linear-gradient(135deg,#1e3a5f,#3b2f5c 50%,#5c3a2f);box-shadow:0 0 0 1px rgba(255,255,255,0.15)}'
  + '.admin-block{position:absolute;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.75);font-size:20px;pointer-events:none}'
  + '.admin-off{position:absolute;top:50%;left:0;right:0;text-align:center;color:rgba(255,255,255,0.6)}'
  + '.admin-align{margin-top:14px;max-width:560px}'
  + '.admin-iframe-box{position:relative;overflow:hidden;border-radius:14px;box-shadow:0 0 0 1px rgba(255,255,255,0.15);background:#000}'
  + '.admin-iframe-box iframe{position:absolute;top:0;left:0;border:0;transform-origin:0 0}'
  + '.admin-foot{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}'
  + '.admin-foot .hint{margin-right:12px}'
  + '.admin-foot .btn{margin-right:10px}'
  + '.admin-copy{margin-top:16px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.05);max-width:560px}'
  + '.admin-copy .check{display:flex;margin:8px 0}'
  + '.admin-copy .row-btns{display:flex;justify-content:flex-end;margin-top:10px}'
  + '.admin-copy .row-btns > *{margin-left:8px}'
  + '.admin-content-head{display:flex;align-items:center;gap:10px;margin-bottom:6px;flex-wrap:wrap}'
  + '.admin-content-head .folder-choose{flex:1;max-width:460px}'
  + '.admin-content-path{margin:0 0 10px;word-break:break-all}'
  + '.admin-content-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px}'
  + '.admin-upload{cursor:pointer;width:fit-content;max-width:100%;margin-bottom:10px}'
  + '.admin-upload input{display:none}'
  + '.admin-upload.busy{opacity:.6;pointer-events:none}'
  + '.admin-content-note{margin:0 0 10px}'
  + '.admin-thumbs{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;max-width:900px}'
  + '.admin-thumb{position:relative;min-width:0}'
  + '.admin-thumbs img{width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:10px;background:rgba(255,255,255,0.05)}'
  + '.admin-thumb-del{position:absolute;top:6px;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:9px;background:rgba(8,10,16,0.72);color:#fecaca;border:1px solid rgba(255,255,255,0.16)}'
  + '.admin-thumb-del:hover{background:rgba(220,38,38,0.82);color:#fff}'
  // На узком экране список рамок и редактор идут друг под другом. align-items:stretch важен:
  // иначе редактор сжимается по содержимому и вылезает за экран вправо.
  + '@media (max-width:700px){.admin-body{flex-direction:column;align-items:stretch}.admin-list{width:100%;margin:0 0 14px}.admin-editor{width:100%}}';

// Элемент панели HA: получает hass (и narrow, panel) от фронтенда HA.
class PhotoFrameAdmin extends HTMLElement {
  private root: HTMLElement | null = null;
  private _hass: Hass | null = null;

  set hass(hass: Hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) this.mount();
  }

  connectedCallback() { this.mount(); }

  private mount() {
    if (this.root || !this._hass || !this.isConnected) return;
    const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    // Переменные цветов в styles.css объявлены на :root — в теневом DOM им место на :host.
    style.textContent = ADMIN_CSS + css.replace(':root {', ':host {');
    const root = document.createElement('div');
    shadow.appendChild(style);
    shadow.appendChild(root);
    this.root = root;
    render(<AdminApp hass={this._hass} />, root);
  }
}

if (!customElements.get('photoframe-admin')) customElements.define('photoframe-admin', PhotoFrameAdmin);
