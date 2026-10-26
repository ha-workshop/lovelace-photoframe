// Тестовый стенд карточки: имитирует дашборд HA. Живые состояния — с HA через сервис рамок (только чтение),
// сохранение конфига дашборда и медиатека подменены локальными заглушками, чтобы не менять настоящий HA.
import { HAClient } from '../src/lib/ha';
import '../src/card';

const KEY = 'photoframe.harness.config';
const ha = new HAClient('', '', true);
ha.connect();

async function initialConfig() {
  const saved = localStorage.getItem(KEY);
  if (saved) return JSON.parse(saved);
  const st = await fetch('/api/state').then((r) => r.json());
  const layouts: Record<string, unknown> = {};
  Object.keys(st.layouts || {}).forEach((k) => { if (st.layouts[k]) layouts[k] = st.layouts[k].value; });
  return { type: 'custom:photoframe-card', media_folder: 'photoframe', layouts };
}

const card = document.createElement('photoframe-card') as HTMLElement & { setConfig(c: unknown): void; hass: unknown };
let config: any;

function hass() {
  return {
    states: ha.states,
    user: { is_admin: true, name: 'Тест' },
    // ?lang=en — как язык в профиле пользователя HA.
    language: new URLSearchParams(location.search).get('lang') || undefined,
    auth: { data: { access_token: '' } },
    callWS(msg: any) {
      if (msg.type === 'lovelace/config') return Promise.resolve({ views: [{ type: 'panel', cards: [JSON.parse(JSON.stringify(config))] }] });
      if (msg.type === 'lovelace/config/save') {
        config = msg.config.views[0].cards[0];
        localStorage.setItem(KEY, JSON.stringify(config));
        setTimeout(() => card.setConfig(config), 50);
        return Promise.resolve(null);
      }
      if (msg.type === 'media_source/browse_media') return Promise.resolve({ children: [] });
      return ha.call(msg);
    },
    callService(_d: string, service: string, data: any, target: any) {
      console.info('[стенд] вызов службы не отправлен:', service, target, data);
      return Promise.resolve();
    },
    connection: {
      subscribeMessage(cb: (e: unknown) => void, msg: Record<string, unknown>) {
        const off = ha.subscribeMessage(msg, cb);
        return Promise.resolve(() => Promise.resolve(off()));
      },
    },
  };
}

initialConfig().then((c) => {
  config = c;
  card.setConfig(config);
  document.getElementById('view')!.appendChild(card);
  const push = () => { card.hass = hass(); };
  ha.subscribe(push);
  push();
});
