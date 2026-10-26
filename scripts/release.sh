#!/usr/bin/env bash
# Выпуск версии: scripts/release.sh 0.2.0
#   1) проверяет, что рабочая копия чистая и мы на main;
#   2) ставит версию в package.json и пересобирает dist/photoframe-card.js;
#   3) коммитит, ставит тег vX.Y.Z, пушит;
#   4) создаёт GitHub Release — workflow release.yml приложит к нему собранную карточку.
set -euo pipefail

VERSION="${1:-}"
if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.]+)?$ ]]; then
  echo "Использование: scripts/release.sh X.Y.Z" >&2
  exit 1
fi
TAG="v$VERSION"

cd "$(dirname "$0")/.."

[[ "$(git rev-parse --abbrev-ref HEAD)" == "main" ]] || { echo "Нужна ветка main" >&2; exit 1; }
[[ -z "$(git status --porcelain)" ]] || { echo "Есть незакоммиченные изменения" >&2; exit 1; }
git fetch -q origin
# Локальные неотправленные коммиты — можно (уйдут вместе с релизом); отставать от origin/main — нельзя.
git merge-base --is-ancestor origin/main HEAD || { echo "Ветка отстаёт от origin/main — сначала git pull" >&2; exit 1; }
git rev-parse -q --verify "refs/tags/$TAG" >/dev/null && { echo "Тег $TAG уже есть" >&2; exit 1; }

npm version "$VERSION" --no-git-tag-version --allow-same-version >/dev/null
npx tsc --noEmit
npm run build:card
git add package.json package-lock.json
git add -f dist/photoframe-card.js
git commit -m "Release $TAG"
git tag -a "$TAG" -m "$TAG"
git push origin main "$TAG"

NOTES="${NOTES_FILE:-}"
if [[ -n "$NOTES" ]]; then
  gh release create "$TAG" --title "$TAG" --notes-file "$NOTES"
else
  gh release create "$TAG" --title "$TAG" --generate-notes
fi
echo "Готово: $TAG. Workflow приложит photoframe-card.js к релизу через минуту-другую."
