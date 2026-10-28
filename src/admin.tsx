import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Monitor, RefreshCw, Smartphone } from 'lucide-preact';
import css from './styles.css?inline';
import { GridEditor, INSET, SPAN } from './components/Ambient';
import { GRID, defaultGrid, lockPrefs, validGrid, type GridRect, type HAlign, type LockGrid, type Orientation, type VAlign } from './lib/lockscreen';
import { t } from './i18n';

// Раздел «Фоторамки» в боковом меню HA (только администраторам; регистрирует интеграция Photo Frame).
// Список рамок и редактор сетки экрана с фото каждой из них: экран рамки — в её пропорциях (рамка сообщает
// свой размер для каждой ориентации), сетка — своя для горизонтального и вертикального положения.
// «Сохранить на рамку» — рамка берёт сетку сразу, а если она не в сети — при подключении.

interface Hass { callWS<T>(msg: Record<string, unknown>): Promise<T> }
interface Display { w: number; h: number }
interface FrameInfo {
  frame_id: string; name?: string; model?: string; online: boolean;
  grid?: LockGrid | null; grid_portrait?: LockGrid | null; displays?: Partial<Record<Orientation, Display>>;
}

// Размер экрана рамки в этой ориентации: известный; известен только другой — повёрнутый; ничего — 16:10.
function displayOf(f: FrameInfo, o: Orientation): Display {
  const d = f.displays || {};
  const own = d[o];
  if (own) return own;
  const other = d[o === 'portrait' ? 'landscape' : 'portrait'];
  if (other) return { w: other.h, h: other.w };
  return o === 'portrait' ? { w: 800, h: 1280 } : { w: 1280, h: 800 };
}

function AdminApp(props: { hass: Hass }) {
  const [frames, setFrames] = useState<FrameInfo[] | null>(null);
  const [error, setError] = useState('');
  const [pick, setPick] = useState('');
  const [orient, setOrient] = useState<Orientation>('landscape');
  // Правка до сохранения: сетки обеих ориентаций выбранной рамки.
  const [draft, setDraft] = useState<Record<Orientation, LockGrid | null>>({ landscape: null, portrait: null });
  const [moving, setMoving] = useState<LockGrid | null>(null);
  const [block, setBlock] = useState<'clock' | 'widgets'>('clock');
  const [status, setStatus] = useState('');

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
    const d = f.displays || {};
    setOrient(d.landscape || !d.portrait ? 'landscape' : 'portrait');
    setStatus('');
  };
  const frame = frames && frames.filter((f) => f.frame_id === pick)[0];
  const grid = moving || draft[orient];
  const setGrid = (g: LockGrid | null) => { setDraft({ ...draft, [orient]: g }); setStatus(''); };

  const save = () => {
    if (!frame) return;
    setStatus(t('admin.saving'));
    props.hass.callWS({ type: 'photoframe/frame/set_layout', frame_id: frame.frame_id, grid: draft.landscape, grid_portrait: draft.portrait }).then(
      () => { setStatus(t(frame.online ? 'admin.saved_online' : 'admin.saved_offline')); load(); },
      (e: Error) => setStatus(e.message || String(e)),
    );
  };

  const disp = frame ? displayOf(frame, orient) : { w: 1280, h: 800 };
  const known = !!(frame && frame.displays && frame.displays[orient]);
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
                <button class={orient === 'landscape' ? 'active' : ''} onClick={() => setOrient('landscape')}><Monitor size={14} /> {t('admin.landscape')}</button>
                <button class={orient === 'portrait' ? 'active' : ''} onClick={() => setOrient('portrait')}><Smartphone size={14} /> {t('admin.portrait')}</button>
              </div>
              <label class="check">
                <input type="checkbox" checked={!!draft[orient]}
                  onChange={(e) => setGrid(e.currentTarget.checked ? defaultGrid(lockPrefs(), orient === 'landscape') : null)} />
                {t('admin.use_grid')}
              </label>
              <span class="hint small">{disp.w}×{disp.h}{known ? '' : ' · ' + t('admin.size_guess')}</span>
            </div>

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

            <div class="admin-foot">
              <span class="hint small">{status}</span>
              <button class="pill-btn accent-bg" onClick={save}>{t('admin.save')}</button>
            </div>
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
  + '.admin-screen-wrap{display:flex;justify-content:center}'
  + '.admin-screen{position:relative;max-width:100%;max-height:70vh;border-radius:14px;overflow:hidden;'
  + 'background:linear-gradient(135deg,#1e3a5f,#3b2f5c 50%,#5c3a2f);box-shadow:0 0 0 1px rgba(255,255,255,0.15)}'
  + '.admin-block{position:absolute;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.75);font-size:20px;pointer-events:none}'
  + '.admin-off{position:absolute;top:50%;left:0;right:0;text-align:center;color:rgba(255,255,255,0.6)}'
  + '.admin-align{margin-top:14px;max-width:560px}'
  + '.admin-foot{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}'
  + '.admin-foot .hint{margin-right:12px}'
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
