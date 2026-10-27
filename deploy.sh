#!/usr/bin/env bash
# Деплой на свой сервер. Настройки — в .deploy.env (пример: deploy.env.example, файл не коммитится).
#
#   ./deploy.sh card      собрать карточку и положить её в Home Assistant по SSH
#                         (туда же, куда ставит HACS — удобно проверять сборку до релиза)
#   ./deploy.sh pwa       собрать PWA и положить её в www Home Assistant:
#                         http://<HA>:8123/local/photoframe/index.html — вход через страницу входа HA,
#                         экраны и фото — в HA (общие с карточкой). Её же открывает APK-оболочка.
#   ./deploy.sh all       и то, и другое
#
#   DRY_RUN=1 ./deploy.sh card   — только показать, что будет сделано
set -euo pipefail
cd "$(dirname "$0")"

[[ -f .deploy.env ]] || { echo "Нет .deploy.env — скопируйте deploy.env.example и заполните" >&2; exit 1; }
# shellcheck disable=SC1091
source .deploy.env

run() { if [[ "${DRY_RUN:-}" == 1 ]]; then echo "+ $*"; else "$@"; fi; }
remote() { run ssh ${SSH_OPTS:-} "$DEPLOY_HOST" "$@"; }

deploy_card() {
  : "${DEPLOY_HOST:?DEPLOY_HOST не задан}"; : "${HA_CONFIG_DIR:?HA_CONFIG_DIR не задан}"
  local dir="$HA_CONFIG_DIR/www/community/lovelace-photoframe"
  echo "→ Сборка карточки"
  run npm run build:card
  # HA отдаёт .gz, если он лежит рядом (так делает HACS) — обновляем обе версии, иначе браузер получит старую.
  run gzip -9 -k -f dist/photoframe-card.js
  echo "→ Копирование в $DEPLOY_HOST:$dir"
  remote "mkdir -p '$dir'"
  run scp ${SSH_OPTS:-} dist/photoframe-card.js dist/photoframe-card.js.gz "$DEPLOY_HOST:$dir/"
  run rm -f dist/photoframe-card.js.gz
  echo "✓ Карточка обновлена. Ресурс: /hacsfiles/lovelace-photoframe/photoframe-card.js"
  echo "  Обновите страницу дашборда без кэша (в приложении HA — «Перезагрузить ресурсы» / перезапуск приложения)."
}

deploy_pwa() {
  : "${DEPLOY_HOST:?DEPLOY_HOST не задан}"; : "${HA_CONFIG_DIR:?HA_CONFIG_DIR не задан}"
  local dir="$HA_CONFIG_DIR/www/${PWA_SUBDIR:-photoframe}"
  local out; out="$(mktemp -d)"
  echo "→ Сборка PWA"
  run npx vite build --outDir "$out" --emptyOutDir
  echo "→ Копирование в $DEPLOY_HOST:$dir"
  remote "mkdir -p '$dir'"
  # --delete только внутри своей подпапки: соседние файлы в www не трогаем.
  run rsync -az --delete ${SSH_OPTS:+-e "ssh $SSH_OPTS"} "$out/" "$DEPLOY_HOST:$dir/"
  run rm -rf "$out"
  echo "✓ PWA: http://${DEPLOY_HOST#*@}:8123/local/${PWA_SUBDIR:-photoframe}/index.html"
}

case "${1:-}" in
  card) deploy_card ;;
  pwa) deploy_pwa ;;
  all) deploy_card; deploy_pwa ;;
  *) echo "Использование: ./deploy.sh card|pwa|all" >&2; exit 1 ;;
esac
