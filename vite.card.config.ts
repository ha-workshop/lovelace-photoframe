import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

// Сборка карточки для HACS (категория Dashboard): один ES-модуль dist/photoframe-card.js.
// Фронтенд HA сам требует современный браузер, поэтому без legacy-сборки и полифиллов.
export default defineConfig({
  plugins: [preact()],
  // Версия из package.json попадает в карточку (видна в консоли браузера).
  define: { __VERSION__: JSON.stringify(version) },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    target: 'es2020',
    lib: { entry: 'src/card.tsx', formats: ['es'], fileName: () => 'photoframe-card.js' },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
