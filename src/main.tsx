import { render } from 'preact';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './styles.css';
import { App } from './App';
import { keepScreenOn } from './lib/wakeLock';
import { store } from './lib/store';
import { finishLogin } from './lib/haAuth';
import { PREVIEW } from './lib/preview';

// Фото из src/photos попадают в сборку PWA и показываются всегда.
store.bundled = Object.values(
  import.meta.glob('./photos/*.{jpg,jpeg,png,webp,JPG,JPEG}', { eager: true, query: '?url', import: 'default' }),
) as string[];

// Вернулись со страницы входа HA — сначала забираем токены, потом рисуем (иначе мелькнут настройки).
// Заставка из index.html: держим её, пока грузится оболочка, и мягко убираем — без «прыжка» чёрного экрана.
function hideSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  const min = 600;
  window.setTimeout(() => {
    splash.className = 'gone';
    window.setTimeout(() => { if (splash.parentNode) splash.parentNode.removeChild(splash); }, 600);
  }, min);
}

finishLogin().then(() => {
  render(<App />, document.getElementById('app')!);
  if (!PREVIEW) keepScreenOn();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(hideSplash, hideSplash);
  else hideSplash();
});

// Service worker: в браузере и в WebView, где он поддерживается (Chrome 40+ / WebView 51+, iOS 11.3+).
// В dev не регистрируем, чтобы не ловить устаревший кэш; в APK файлы и так локальные.
const inApk = location.hostname === 'appassets.androidplatform.net';
if (import.meta.env.PROD && !inApk && !PREVIEW && 'serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
