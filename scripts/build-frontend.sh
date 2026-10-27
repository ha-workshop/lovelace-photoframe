#!/usr/bin/env bash
# Сборка интерфейса для интеграции Photo Frame (mZer0ne/ha-photoframe):
#   <папка>/photoframe-card.js  — карточка для дашбордов
#   <папка>/pwa/                — отдельное приложение (интеграция раздаёт его по /photoframe/)
#
#   scripts/build-frontend.sh                    → build/frontend (и build/photoframe-frontend.zip для релиза)
#   scripts/build-frontend.sh ../ha-photoframe/custom_components/photoframe/frontend
set -euo pipefail
cd "$(dirname "$0")/.."

DEST="${1:-build/frontend}"
rm -rf "$DEST" && mkdir -p "$DEST"
npx vite build --outDir "$DEST/pwa" --emptyOutDir >/dev/null
npm run -s build:card >/dev/null
cp dist/photoframe-card.js "$DEST/photoframe-card.js"

if [[ -z "${1:-}" ]]; then
  (cd build/frontend && rm -f ../photoframe-frontend.zip && zip -qr ../photoframe-frontend.zip .)
  echo "✓ build/frontend, build/photoframe-frontend.zip"
else
  echo "✓ $DEST"
fi
