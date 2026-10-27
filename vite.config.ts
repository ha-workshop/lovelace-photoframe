import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import legacy from '@vitejs/plugin-legacy';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// Целевые WebView фоторамок на Android 5 — Chrome 37+.
// Legacy-плагин собирает ES5-бандл с полифиллами (nomodule) рядом с современным.
export default defineConfig({
  base: './',
  // Та же версия, что в сборке карточки (стенд и dev-сервер грузят card.tsx напрямую).
  define: { __VERSION__: JSON.stringify(version) },
  plugins: [
    preact(),
    legacy({
      targets: ['chrome >= 37', 'android >= 5'],
      modernPolyfills: true,
    }),
  ],
  build: {
    // Встроенный минификатор Vite 8 превращает строки в `шаблоны` — Chrome 37 их не парсит.
    minify: 'terser',
    terserOptions: { ecma: 5, safari10: true },
    cssTarget: 'chrome37',
  },
  server: { port: 5173 },
});
