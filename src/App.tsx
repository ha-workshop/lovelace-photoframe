import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { HAClient } from './lib/ha';
import { DetailContext, HAContext, LiveContext } from './lib/hooks';
import { useLanguage } from './i18n';
import { useQuality } from './lib/quality';
import { useStore } from './lib/store';
import { reportFrame, updateApk } from './lib/frame';
import { applyBacklight, dimOpacity, onHardwareWake } from './lib/screen';
import { setNativeVisible } from './lib/nativePhoto';
import { PREVIEW } from './lib/preview';
import { ACCENTS, clampBox, settle, type Card } from './lib/layout';
import type { CameraFeed } from './lib/camera';
import { useTone } from './lib/photoTone';
import { useSwipe } from './lib/swipe';
import { ChevronLeft, ChevronRight } from 'lucide-preact';
import { Backdrop } from './components/Backdrop';
import { Ambient } from './components/Ambient';
import { Controls } from './components/Controls';
import { CameraModal, SettingsModal } from './components/Modals';
import { AddCardModal, CardEditor } from './components/Editor';
import { Sheet } from './components/Sheet';
import { DetailModal } from './components/Detail';

// Цвет акцента. CSS-переменных в WebView 37 нет, поэтому правила собираются строкой и кладутся в <style>.
// Без префикса — цвет из текущего фото; с префиксом .tint-* — свой цвет карточки (он специфичнее и побеждает).
function accentCss(prefix: string, accent: string, soft: string) {
  const p = (sel: string) => sel.split(',').map((x) => prefix + x).join(',');
  return p('.accent-text') + '{color:' + accent + '}'
    + p('.light.on .light-icon') + '{background:' + accent + '}'
    + p('.light.on') + '{border-color:' + accent + ';background:' + soft + '}'
    + p('.seg .active') + '{background:' + soft + ';color:' + accent + '}'
    + p('.room-temp sup') + '{color:' + accent + '}';
}

function hexSoft(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',0.2)';
}

const TINTS = Object.keys(ACCENTS).map((k) => accentCss('.tint-' + k + ' ', ACCENTS[k], hexSoft(ACCENTS[k]))).join('');

export function App() {
  const store = useStore();
  // Смена языка перерисовывает всё приложение.
  const language = useLanguage();
  // «Красиво» или «Лёгкое» — на этом устройстве (см. lib/quality).
  const qualityMode = useQuality();
  const { settings, layout, sync, homes, active } = store.state;
  useEffect(() => store.start(), []);
  // Подключение к HA: в карточке — hass фронтенда HA; в PWA его держит store (через него же хранилище в HA).
  // Пока PWA не вошла в HA — пустой клиент.
  const idle = useMemo(() => new HAClient('', () => Promise.resolve('')), []);
  const client = store.card ? store.card.client : store.haClient || idle;

  const [slide, setSlide] = useState<'' | 'next' | 'prev'>('');
  const switchHome = (dir: number) => {
    const i = homes.findIndex((h) => h.id === active);
    const next = homes[(i + dir + homes.length) % homes.length];
    if (!next || next.id === active) return;
    setSlide(dir > 0 ? 'next' : 'prev');
    setSheetId(null);
    store.setActive(next.id);
  };
  const step = (dir: number) => {
    setSlide(dir > 0 ? 'next' : 'prev');
    setSheetId(null);
    store.step(dir);
  };
  const urls = store.photoUrls;
  const n = urls.length;

  const [index, setIndex] = useState(0);
  // HA видит, что на рамке сейчас: текущее фото (имя и картинка у сущности устройства) и экран.
  const current = n ? urls[index % n] : '';
  useEffect(() => {
    const ha = store.frameClient;
    if (!ha || !current || /^(data|blob):/.test(current)) return;
    const path = current.replace(/^https?:\/\/[^/]+/, '');
    reportFrame(ha, { photo: decodeURIComponent(path.split('?')[0].split('/').pop() || ''), photo_url: path });
  }, [current, store.frameClient]);
  useEffect(() => {
    // Смена экрана — тоже повод синхронизировать настройки: сообщаем текущий экран и размер панели,
    // чтобы HA и редактор «Фоторамок» видели последнее состояние устройства.
    if (store.frameClient) reportFrame(store.frameClient, { screen: active + '/' + store.state.screen, display: { w: window.innerWidth, h: window.innerHeight } });
  }, [active, store.state.screen, store.frameClient]);
  // Открыта ли панель и идёт ли редактирование — из общего хранилища, чтобы пережить пересоздание карточки.
  const [controls, setControls] = useState(store.ui.controls);
  const [editing, setEditing] = useState(store.ui.editing);
  useEffect(() => { store.ui.controls = controls; store.ui.editing = editing; }, [controls, editing]);
  const [showSettings, setShowSettings] = useState(false);
  // Полноэкранная камера: список потоков карточки и текущий — свайп листает по этому списку.
  const [cameraView, setCameraView] = useState<null | { feeds: CameraFeed[]; index: number }>(null);
  const openCamera = (feeds: CameraFeed[], index: number) => setCameraView({ feeds, index });
  const cameraTimer = useRef(0);

  // Команды из HA — кнопки устройства рамки и службы photoframe.* (рамка с интеграцией Photo Frame).
  useEffect(() => store.onCommand((c) => {
    if (c.command === 'next_photo') setIndex((i) => i + 1);
    else if (c.command === 'show_panel') setControls(true);
    else if (c.command === 'show_photos') { setControls(false); setSheetId(null); setCameraView(null); }
    else if (c.command === 'reload') location.reload();
    else if (c.command === 'update_apk') updateApk();
    else if (c.command === 'show_screen' && c.screen) {
      const parts = c.screen.split('/');
      store.setActive(parts[0], parts[1]);
      setControls(true);
    } else if (c.command === 'show_camera' && c.entity) {
      // Позвонили в дверь: камера поверх всего на N секунд, потом обратно.
      const url = client.cameraStreamUrl(c.entity);
      if (!url) return;
      const state = client.states[c.entity];
      const name = (state && state.attributes.friendly_name) || c.entity;
      setCameraView({ feeds: [{ entity: c.entity, name }], index: 0 });
      clearTimeout(cameraTimer.current);
      cameraTimer.current = window.setTimeout(() => setCameraView(null), (c.duration || 30) * 1000);
    }
  }), [client]);
  const [sheetId, setSheetId] = useState<string | null>(null);
  const [editCard, setEditCard] = useState<{ card: Card; isNew: boolean } | null>(null);
  const [adding, setAdding] = useState(false);
  const [detail, setDetail] = useState<string[] | null>(null);
  const [hint, setHint] = useState(true);
  // Цвет интерфейса — по кадру, который уже на экране (уменьшенному), а не по оригиналу.
  const [shown, setShown] = useState('');
  const tone = useTone(shown || undefined);
  // Карточку поверх фото берём из актуальной раскладки — правки с других рамок видны сразу.
  const sheet = sheetId ? layout.cards.filter((c) => c.id === sheetId)[0] || null : null;

  // HA не настроен — сразу открываем настройки (ждём ответа сервиса, чтобы не мигать).
  // PWA ещё не вошла в HA — сразу открываем настройки на входе.
  const needsSetup = sync === 'local' && !store.haClient;
  useEffect(() => { if (needsSetup) setShowSettings(true); }, [needsSetup]);

  // Экран из HA: спит — чёрный, слайдшоу стоит. Камеру (позвонили в дверь) показываем и спящей рамкой.
  const awake = store.screenOn || !!cameraView;
  useEffect(() => applyBacklight(awake, store.brightness), [awake, store.brightness]);
  useEffect(() => onHardwareWake(() => store.wakeScreen()), []);

  // Слайдшоу — только на экране с фото: пока открыта панель управления, фон стоит (не тратим силы рамки
  // на смену кадров под панелью). Вернулись к фото или листнули вручную — отсчёт начинается заново.
  useEffect(() => {
    if (n < 2 || !awake || controls) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), settings.slideIntervalMs);
    return () => clearInterval(t);
  }, [n, settings.slideIntervalMs, awake, index, controls]);
  // Панель открылась — когда размытие закрыло фото целиком (после перехода), APK перестаёт его рисовать;
  // начали возвращаться к фото — показываем сразу.
  // Палец на панели (может тянуть её вниз к фото) — фото под размытием снова рисуется.
  useEffect(() => {
    if (!controls) { setNativeVisible(true); return; }
    const el = rootRef.current;
    let t = 0;
    const hide = () => { clearTimeout(t); t = window.setTimeout(() => setNativeVisible(false), 800); };
    const show = () => { clearTimeout(t); setNativeVisible(true); };
    hide();
    if (el) { el.addEventListener('touchstart', show); el.addEventListener('mousedown', show); el.addEventListener('touchend', hide); el.addEventListener('mouseup', hide); }
    return () => {
      clearTimeout(t);
      if (el) { el.removeEventListener('touchstart', show); el.removeEventListener('mousedown', show); el.removeEventListener('touchend', hide); el.removeEventListener('mouseup', hide); }
    };
  }, [controls]);
  // Смахнули по фото влево — следующее, вправо — предыдущее.
  // Вспышка стрелки у края — фото листнулось (key — чтобы анимация шла заново на каждый взмах).
  const [flash, setFlash] = useState<{ dir: number; key: number } | null>(null);
  const stepPhoto = useCallback((dir: number) => {
    if (n < 2) return;
    setIndex((i) => ((i % n) + dir + n) % n);
    setFlash((f) => ({ dir, key: f ? f.key + 1 : 1 }));
  }, [n]);
  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(null), 700);
    return () => clearTimeout(t);
  }, [flash]);

  // Стрелка к управлению домом: при запуске и после каждого касания фото — на несколько секунд.
  useEffect(() => {
    let timer = window.setTimeout(() => setHint(false), 8000);
    // Фото — фон под экраном с часами, касание ловим на всём приложении (пока панель закрыта).
    const el = rootRef.current;
    const show = () => {
      if (store.ui.controls) return;
      setHint(true);
      clearTimeout(timer);
      timer = window.setTimeout(() => setHint(false), 5000);
    };
    if (el) { el.addEventListener('touchstart', show); el.addEventListener('mousedown', show); }
    return () => {
      clearTimeout(timer);
      if (el) { el.removeEventListener('touchstart', show); el.removeEventListener('mousedown', show); }
    };
  }, []);

  const modal = showSettings || !!cameraView || !!editCard || adding || !!detail;
  const busy = modal || !!sheet;
  const rootRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);

  // Скрытые слои (сдвинутая панель, Ken Burns) выходят за край, и фокус на кнопке
  // может прокрутить .app — держим его на месте.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const pin = () => { el.scrollTop = 0; el.scrollLeft = 0; };
    el.addEventListener('scroll', pin);
    return () => el.removeEventListener('scroll', pin);
  }, []);
  // Настройка экрана с фото (как на iPhone): долгое нажатие на фото или «Настроить» в настройках.
  const [customizing, setCustomizing] = useState(false);
  useSwipe({ root: rootRef, controls: controlsRef, ambient: ambientRef, soft: softRef }, controls, setControls, !busy && !customizing, () => setCustomizing(true), stepPhoto);

  // С клавиатуры — то же, что свайпы: ← → листают фото, ↑ открывает панель, ↓ и Esc — обратно к фото.
  // Пока открыто окно, редактор или идёт ввод текста — клавиши не перехватываем.
  useEffect(() => {
    if (busy || customizing) return;
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      const k = e.key || '';
      if (!controls && (k === 'ArrowLeft' || k === 'Left')) stepPhoto(-1);
      else if (!controls && (k === 'ArrowRight' || k === 'Right')) stepPhoto(1);
      else if (!controls && (k === 'ArrowUp' || k === 'Up')) setControls(true);
      else if (controls && !editing && (k === 'ArrowDown' || k === 'Down' || k === 'Escape' || k === 'Esc')) setControls(false);
      else return;
      e.preventDefault();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [busy, customizing, controls, editing, stepPhoto]);

  // Без касаний — прячем управление/карточку и возвращаемся к фото (вместо сна экрана).
  // Во время редактирования раскладки не прячем.
  const away = (controls || !!sheet) && !modal && !editing;
  useEffect(() => {
    // В предпросмотре (раздел «Фоторамки» HA) к фото сам не уходит — там редактируют.
    if (!away || !settings.idleSec || PREVIEW) return;
    let timer = 0;
    const arm = () => {
      clearTimeout(timer);
      // …и к стартовому экрану этого устройства.
      timer = window.setTimeout(() => { setControls(false); setSheetId(null); store.goStart(); }, settings.idleSec * 1000);
    };
    const events = ['touchstart', 'mousedown', 'keydown'];
    events.forEach((e) => document.addEventListener(e, arm));
    arm();
    return () => {
      clearTimeout(timer);
      events.forEach((e) => document.removeEventListener(e, arm));
    };
  }, [away, settings.idleSec]);

  const saveCard = (card: Card) => {
    const exists = layout.cards.some((c) => c.id === card.id);
    const placed = clampBox(card);
    const cards = exists ? layout.cards.map((c) => (c.id === card.id ? placed : c)) : layout.cards.concat(placed);
    store.saveLayout({ ...layout, cards: settle(cards, placed) });
    setEditCard(null);
  };

  return (
    <HAContext.Provider value={client}>
    <DetailContext.Provider value={setDetail}>
    {/* Класс качества — на общем корне: модалки и карточки поверх фото живут вне .app. */}
    <div class={'root q-' + qualityMode}>
      <style>{TINTS + (tone ? accentCss('', tone.accent, tone.accentSoft) : '')}</style>
      <div class="app" ref={rootRef} lang={language}>
        <Backdrop urls={urls} index={index % Math.max(n, 1)} tone={tone} soft={controls} softRef={softRef} onShow={setShown} />
        <LiveContext.Provider value={!controls}>
        <Ambient
          visible={!controls}
          innerRef={ambientRef}
          onSheet={(card) => setSheetId(card.id)}
          onConnection={() => setShowSettings(true)}
          showHint={hint && !sheet}
          onHome={() => { setHint(false); setControls(true); }}
          photoThumb={tone ? tone.thumb : undefined}
          customizing={customizing}
          onDone={() => setCustomizing(false)}
        />
        </LiveContext.Provider>
        {flash && (
          <div key={flash.key} class={'photo-step ' + (flash.dir > 0 ? 'next' : 'prev')}>
            {flash.dir > 0 ? <ChevronRight size={40} strokeWidth={1.6} /> : <ChevronLeft size={40} strokeWidth={1.6} />}
          </div>
        )}
        <LiveContext.Provider value={controls}>
        <Controls
          innerRef={controlsRef}
          visible={controls}
          editing={editing}
          paused={modal || !!sheet}
          onEditing={setEditing}
          onPhotos={() => setControls(false)}
          onSettings={() => setShowSettings(true)}
          onCamera={openCamera}
          onEditCard={(card) => setEditCard({ card, isNew: false })}
          homes={homes}
          active={active}
          slide={slide}
          onSwitchHome={switchHome}
          onStep={step}
          onAddCard={() => setAdding(true)}
        />
        </LiveContext.Provider>
      </div>
      {sheet && <Sheet card={sheet} tone={tone} onCamera={openCamera} onClose={() => setSheetId(null)} />}
      <div class={'screen-dim' + (awake ? '' : ' asleep')} style={{ opacity: dimOpacity(awake, store.brightness) }}
        onClick={awake ? undefined : () => store.wakeScreen()} />
      {cameraView && (
        <CameraModal
          feeds={cameraView.feeds}
          index={cameraView.index}
          onIndex={(index) => setCameraView((v) => v ? { ...v, index } : v)}
          onClose={() => setCameraView(null)}
        />
      )}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
        />
      )}
      {adding && <AddCardModal onClose={() => setAdding(false)} onPick={(card) => { setAdding(false); setEditCard({ card, isNew: true }); }} />}
      {editCard && (
        <CardEditor
          card={editCard.card}
          onSave={saveCard}
          onDelete={editCard.isNew ? undefined : () => {
            store.saveLayout({ ...layout, cards: settle(layout.cards.filter((c) => c.id !== editCard.card.id)) });
            setEditCard(null);
          }}
          onClose={() => setEditCard(null)}
        />
      )}
      {detail && <DetailModal key={detail.join(',')} entities={detail} onClose={() => setDetail(null)} />}
    </div>
    </DetailContext.Provider>
    </HAContext.Provider>
  );
}
