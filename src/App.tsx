import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { HAClient } from './lib/ha';
import { DetailContext, HAContext } from './lib/hooks';
import { useLanguage } from './i18n';
import { useQuality } from './lib/quality';
import { useStore } from './lib/store';
import { reportFrame } from './lib/frame';
import { ACCENTS, clampBox, settle, type Card } from './lib/layout';
import { useTone } from './lib/photoTone';
import { useSwipe } from './lib/swipe';
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
    if (store.frameClient) reportFrame(store.frameClient, { screen: active + '/' + store.state.screen });
  }, [active, store.state.screen, store.frameClient]);
  // Открыта ли панель и идёт ли редактирование — из общего хранилища, чтобы пережить пересоздание карточки.
  const [controls, setControls] = useState(store.ui.controls);
  const [editing, setEditing] = useState(store.ui.editing);
  useEffect(() => { store.ui.controls = controls; store.ui.editing = editing; }, [controls, editing]);
  const [showSettings, setShowSettings] = useState(false);
  const [cameraUrl, setCameraUrl] = useState('');
  const cameraTimer = useRef(0);

  // Команды из HA — кнопки устройства рамки и службы photoframe.* (рамка с интеграцией Photo Frame).
  useEffect(() => store.onCommand((c) => {
    if (c.command === 'next_photo') setIndex((i) => i + 1);
    else if (c.command === 'show_panel') setControls(true);
    else if (c.command === 'show_photos') { setControls(false); setSheetId(null); setCameraUrl(''); }
    else if (c.command === 'reload') location.reload();
    else if (c.command === 'show_screen' && c.screen) {
      const parts = c.screen.split('/');
      store.setActive(parts[0], parts[1]);
      setControls(true);
    } else if (c.command === 'show_camera' && c.entity) {
      // Позвонили в дверь: камера поверх всего на N секунд, потом обратно.
      const url = client.cameraStreamUrl(c.entity);
      if (!url) return;
      setCameraUrl(url);
      clearTimeout(cameraTimer.current);
      cameraTimer.current = window.setTimeout(() => setCameraUrl(''), (c.duration || 30) * 1000);
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

  // Слайдшоу идёт всегда — и под панелью управления, просто «размытое».
  useEffect(() => {
    if (n < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), settings.slideIntervalMs);
    return () => clearInterval(t);
  }, [n, settings.slideIntervalMs]);

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 8000);
    return () => clearTimeout(t);
  }, []);

  const modal = showSettings || !!cameraUrl || !!editCard || adding || !!detail;
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
  useSwipe({ root: rootRef, controls: controlsRef, ambient: ambientRef, soft: softRef }, controls, setControls, !busy && !customizing, () => setCustomizing(true));

  // Без касаний — прячем управление/карточку и возвращаемся к фото (вместо сна экрана).
  // Во время редактирования раскладки не прячем.
  const away = (controls || !!sheet) && !modal && !editing;
  useEffect(() => {
    if (!away || !settings.idleSec) return;
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
        <Ambient
          visible={!controls}
          showHint={hint && !sheet}
          innerRef={ambientRef}
          onSheet={(card) => setSheetId(card.id)}
          onConnection={() => setShowSettings(true)}
          photoThumb={tone ? tone.thumb : undefined}
          customizing={customizing}
          onDone={() => setCustomizing(false)}
        />
        <Controls
          innerRef={controlsRef}
          visible={controls}
          editing={editing}
          onEditing={setEditing}
          onPhotos={() => setControls(false)}
          onSettings={() => setShowSettings(true)}
          onCamera={setCameraUrl}
          onEditCard={(card) => setEditCard({ card, isNew: false })}
          homes={homes}
          active={active}
          slide={slide}
          onSwitchHome={switchHome}
          onStep={step}
          onAddCard={() => setAdding(true)}
        />
      </div>
      {sheet && <Sheet card={sheet} tone={tone} onCamera={setCameraUrl} onClose={() => setSheetId(null)} />}
      {cameraUrl && <CameraModal url={cameraUrl} onClose={() => setCameraUrl('')} />}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          onCustomize={() => { setShowSettings(false); setControls(false); setCustomizing(true); }}
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
