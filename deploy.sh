#!/usr/bin/env bash
# Деплой на свой сервер. Настройки — в .deploy.env (пример: deploy.env.example, файл не коммитится).
#
#   ./deploy.sh card      собрать карточку и положить её в Home Assistant по SSH
#                         (туда же, куда ставит HACS — удобно проверять сборку до релиза)
#   ./deploy.sh service   отдельный режим: PWA + Node-сервис на сервере (rsync, npm ci, сборка, перезапуск)
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

deploy_service() {
  : "${DEPLOY_HOST:?DEPLOY_HOST не задан}"; : "${SERVICE_DIR:?SERVICE_DIR не задан}"
  echo "→ Копирование кода в $DEPLOY_HOST:$SERVICE_DIR"
  remote "mkdir -p '$SERVICE_DIR'"
  # Данные (data/), локальные секреты и всё сгенерированное на сервере не трогаем.
  run rsync -az --delete ${SSH_OPTS:+-e "ssh $SSH_OPTS"} \
    --exclude .git --exclude node_modules --exclude dist --exclude data --exclude legacy-php \
    --exclude .env.local --exclude .deploy.env --exclude .idea --exclude .claude --exclude 'src/photos/demo-*' \
    ./ "$DEPLOY_HOST:$SERVICE_DIR/"
  echo "→ Установка зависимостей и сборка на сервере"
  remote "cd '$SERVICE_DIR' && npm ci --no-audit --no-fund && npx vite build"
  echo "→ Перезапуск: ${SERVICE_RESTART:-sudo systemctl restart photoframe}"
  remote "${SERVICE_RESTART:-sudo systemctl restart photoframe}"
  echo "✓ Сервис обновлён: http://${DEPLOY_HOST#*@}:${SERVICE_PORT:-8787}"
}

case "${1:-}" in
  card) deploy_card ;;
  service) deploy_service ;;
  all) deploy_card; deploy_service ;;
  *) echo "Использование: ./deploy.sh card|service|all" >&2; exit 1 ;;
esac
