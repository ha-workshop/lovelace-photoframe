# Contributing

## Translations

The UI is translated with one JSON file per language in [`src/i18n/locales/`](src/i18n/locales/).
Adding a language needs no code changes — the file is picked up automatically.

1. Copy `src/i18n/locales/en.json` to `src/i18n/locales/<code>.json`, where `<code>` is the
   language code Home Assistant uses (`de`, `fr`, `pt-BR`, `zh-Hans`…). The frame matches the
   HA user's language exactly first, then by the part before the dash (`pt-BR` → `pt`).
2. Set `"_language"` to the language's own name (`"Deutsch"`, `"Français"`) — it is shown in
   *Settings → Language*.
3. Translate the values, keep the keys. Keep placeholders like `{n}`, `{title}`, `{when}` as they are.
4. Lists such as `date.weekdays` and `date.months` are comma-separated and start with Sunday /
   January. `date.full` and `date.day_month` set the word order of dates in your language.
5. Missing keys fall back to English, so a partial translation is fine to start with.
6. Check it: `npm install && npm run dev`, then pick your language in *Settings → Language*.
7. Open a pull request.

## Code

- `npm run dev` starts the PWA (sign in to your HA from its settings); `card-harness.html?ha=<HA url>`
  emulates an HA dashboard for the card.
- The standalone PWA must keep working on Android 5 WebViews (Chrome 37): no CSS Grid, no `gap`
  in flexbox, ES5 output — see [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).
- Run `npx tsc --noEmit` and `npm run build` before opening a pull request.
