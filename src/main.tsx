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

// Фото из src/photos попадают в сборку PWA и показываются всегда.
store.bundled = Object.values(
  import.meta.glob('./photos/*.{jpg,jpeg,png,webp,JPG,JPEG}', { eager: true, query: '?url', import: 'default' }),
) as string[];

render(<App />, document.getElementById('app')!);
keepScreenOn();

// Service worker: в браузере и в WebView, где он поддерживается (Chrome 40+ / WebView 51+, iOS 11.3+).
// В dev не регистрируем, чтобы не ловить устаревший кэш; в APK файлы и так локальные.
const inApk = location.hostname === 'appassets.androidplatform.net';
if (import.meta.env.PROD && !inApk && 'serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
