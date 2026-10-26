import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// Сборка карточки для HACS (категория Dashboard): один ES-модуль dist/photoframe-card.js.
// Фронтенд HA сам требует современный браузер, поэтому без legacy-сборки и полифиллов.
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    target: 'es2020',
    lib: { entry: 'src/card.tsx', formats: ['es'], fileName: () => 'photoframe-card.js' },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
