import { render } from 'preact';
import css from './styles.css?inline';
import { App } from './App';
import { store } from './lib/store';
import { HassClient, type Hass } from './lib/hassClient';
import { CardBackend, loadIntegration, type CardConfig } from './lib/cardBackend';
import { keepScreenOn } from './lib/wakeLock';
import { enterKiosk, kioskWanted, onKioskPref } from './lib/kiosk';
import { offerSetup } from './lib/setup';

// Рамка как карточка дашборда Home Assistant (HACS → Dashboard).
// Кладётся в панельный вид дашборда — занимает весь экран под шапкой HA (или весь экран в режиме киоска).

// Высота: весь экран минус шапка HA (в киоске шапки нет — переменная становится 0).
const HOST_CSS = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;'
  + 'font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}'
  + '#app{position:absolute;top:0;left:0;right:0;bottom:0}';

class PhotoFrameCard extends HTMLElement {
  private client = new HassClient();
  private backend: CardBackend | null = null;
  private config: CardConfig = { type: 'custom:photoframe-card' };
  private root: HTMLElement | null = null;
  private exitKiosk: (() => void) | null = null;
  private offKiosk: (() => void) | null = null;
  private offIntegration: (() => void) | null = null;

  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  private syncKiosk() {
    const kiosk = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk);
    const want = this.isConnected && kioskWanted(!!kiosk);
    if (want && !this.exitKiosk) this.exitKiosk = enterKiosk();
    if (!want && this.exitKiosk) { this.exitKiosk(); this.exitKiosk = null; }
  }

  setConfig(config: CardConfig) {
    this.config = config;
    // Конфиг пересылается при каждом сохранении дашборда — так изменения с других устройств приходят сюда.
    // С интеграцией данные живут в ней, а не в конфиге карточки.
    if (this.backend && !this.backend.integration) {
      this.backend.config = config;
      store.applyCardConfig(config);
    }
    this.syncKiosk();
  }

  set hass(hass: Hass) {
    this.client.setHass(hass);
    this.syncKiosk();
    if (!this.backend) {
      this.backend = new CardBackend(this.client, this.config);
      store.attachCard(this.backend);
      // Стоит интеграция Photo Frame — переезжаем на её хранилище и подписку.
      // HA вставляет карточку на страницу чуть позже, чем передаёт hass, — подписку включаем, когда она уже там
      // (или в connectedCallback).
      loadIntegration(this.client).then((cfg) => {
        if (!cfg) return;
        const backend = new CardBackend(this.client, cfg, undefined, false, true);
        this.backend = backend;
        store.attachCard(backend);
        if (this.isConnected && !this.offIntegration) this.offIntegration = backend.watch((c) => store.applyCardConfig(c));
        this.syncKiosk();
      });
    }
    this.mount();
  }

  connectedCallback() {
    // Карточку вернули на страницу — снова слушаем изменения из интеграции.
    const backend = this.backend;
    if (backend && backend.integration && !this.offIntegration) this.offIntegration = backend.watch((c) => store.applyCardConfig(c));
    this.mount();
    this.offKiosk = onKioskPref(() => this.syncKiosk());
    this.syncKiosk();
  }

  disconnectedCallback() {
    if (this.root) render(null, this.root);
    this.root = null;
    // Ушли с дашборда — меню и шапку HA возвращаем.
    if (this.exitKiosk) { this.exitKiosk(); this.exitKiosk = null; }
    if (this.offKiosk) { this.offKiosk(); this.offKiosk = null; }
    if (this.offIntegration) { this.offIntegration(); this.offIntegration = null; }
  }

  getCardSize() { return 12; }

  getGridOptions() { return { columns: 'full', rows: 'auto' }; }

  static getStubConfig() { return { media_folder: 'photoframe' }; }

  private mount() {
    if (this.root || !this.backend || !this.isConnected) return;
    const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = HOST_CSS + css;
    const root = document.createElement('div');
    root.id = 'app';
    shadow.appendChild(style);
    shadow.appendChild(root);
    this.root = root;
    render(<App />, root);
    keepScreenOn();
  }
}

declare const __VERSION__: string;

if (!customElements.get('photoframe-card')) customElements.define('photoframe-card', PhotoFrameCard);

// Как у других карточек HACS: версия в консоли — сразу видно, что загрузилось.
console.info('%c PHOTO-FRAME %c v' + __VERSION__ + ' ', 'color:#fff;background:#0891b2;font-weight:700', 'color:#0891b2;background:#fff');

// Первый заход администратора после установки — предложить дашборд «Фоторамка».
offerSetup();

// Чтобы карточка появилась в списке «Добавить карточку» редактора дашборда.
const w = window as unknown as { customCards?: Array<Record<string, unknown>> };
w.customCards = w.customCards || [];
w.customCards.push({
  type: 'photoframe-card',
  name: 'Smart Frame',
  description: 'Photo frame with smart-home controls: photos, clock, weather and customizable cards',
  preview: false,
});
