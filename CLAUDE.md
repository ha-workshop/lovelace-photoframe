# AI Instructions — Photo Frame Frontend (lovelace-photoframe)

## Language
- All code comments: **English**
- All commit messages: **English**
- Release notes / changelog: **English**
- UI translations: `src/i18n/locales/{ru,en}.json` — Russian and English only

## Stack
- Preact (not React), TypeScript strict mode
- Vite + legacy plugin (targets Chrome 37+ for Android 5 WebView)
- Lucide icons only (no Font Awesome), dynamic import
- i18n: custom lightweight system in `src/i18n/`

## Key modules
- `src/lib/voice.ts`: HA Assist pipeline, TTS (device + HA), wake word model list
- `src/components/Voice.tsx`: voice dialog UI, Markdown reply renderer
- `src/components/WakeWord.tsx`: openWakeWord WASM detector + settings picker
- `src/components/Modals.tsx`: settings modal with voice / TTS / wake word sections
- `src/lib/icons.tsx`: dynamic Lucide loader with category groups and search
- `src/lib/store.ts`: state management, HA WebSocket bridge

## Building
- `npm run build` — full build (PWA + card)
- `npm run build:card` — card only (dist/photoframe-card.js)
- `npm run apk` — build APK (needs Android SDK)

## Deploying
- `DEV_VERSION=1.x.x ./deploy.sh integration` — deploy to HA server (rsync + docker restart)
- `./deploy.sh card` — deploy card to HA www/community (for testing)

## HACS card repo
- Published from this repo: `github.com/ha-workshop/lovelace-photoframe`
- Card file: `dist/photoframe-card.js` (must match source — CI checks this)
- Release: tag + GitHub Release, HACS action validates
