import { render } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Image, LayoutGrid, RefreshCw } from 'lucide-preact';
import css from './styles.css?inline';
import { GridEditor, INSET, SPAN } from './components/Ambient';
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

interface Hass { callWS<T>(msg: Record<string, unknown>): Promise<T> }
interface Display { w: number; h: number }
interface FrameInfo {
  frame_id: string; name?: string; model?: string; online: boolean;
  grid?: LockGrid | null; grid_portrait?: LockGrid | null;
  // Последний известный размер экрана; displays — по ориентациям (у рамок, ещё не присылавших display).
  display?: Display | null; displays?: Partial<Record<Orientation, Display>>; lockscreen?: unknown;
}

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
  const [mode, setMode] = useState<'photo' | 'dashboard'>('photo');

  const load = () => {
    setError('');
    props.hass.callWS<{ frames: FrameInfo[] }>({ type: 'photoframe/frames' }).then((r) => {
      setFrames(r.frames);
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
        <button class="btn btn-ghost" onClick={load}><RefreshCw size={14} /><span>{t('admin.refresh')}</span></button>
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
    </div>
  );
}

const ADMIN_CSS = ':host{display:block;min-height:100vh;background:#0b0d14;color:#f5f7fb;'
  + 'font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif}'
  + '.admin{max-width:1200px;margin:0 auto;padding:16px 20px}'
  + '.admin-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}'
  + '.admin-head h1{font-size:22px;font-weight:600;margin:0}'
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
  + '@media (max-width:700px){.admin-body{flex-direction:column}.admin-list{width:100%;margin:0 0 14px}}';

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
