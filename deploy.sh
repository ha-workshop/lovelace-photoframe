#!/usr/bin/env bash
# Деплой на свой сервер. Настройки — в .deploy.env (пример: deploy.env.example, файл не коммитится).
#
#   ./deploy.sh card      собрать карточку и положить её в Home Assistant по SSH
#                         (туда же, куда ставит HACS — удобно проверять сборку до релиза)
#   ./deploy.sh pwa       собрать PWA и положить её в www Home Assistant:
#                         http://<HA>:8123/local/photoframe/index.html — вход через страницу входа HA,
#                         экраны и фото — в HA (общие с карточкой). Её же открывает APK-оболочка.
#   ./deploy.sh integration  собрать интеграцию ha-photoframe с этим интерфейсом и APK (как релиз) и положить
#                         в custom_components/photoframe Home Assistant — проверить до релиза, без HACS.
#                         Версия — последний релиз с пометкой -dev. Затем перезапуск HA: HA_RESTART_CMD
#                         в .deploy.env (выполняется на сервере по SSH), иначе — перезапустите HA сами.
#                         Следующее обновление из HACS вернёт релизную версию.
#   ./deploy.sh all       карточка и PWA
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

deploy_integration() {
  : "${DEPLOY_HOST:?DEPLOY_HOST не задан}"; : "${HA_CONFIG_DIR:?HA_CONFIG_DIR не задан}"
  local repo="${INTEGRATION_DIR:-../ha-photoframe}"
  [[ -f "$repo/scripts/build-frontend.sh" ]] || { echo "Нет интеграции в $repo (INTEGRATION_DIR)" >&2; exit 1; }
  local dir="$HA_CONFIG_DIR/custom_components/photoframe"
  local tag; tag="$(git -C "$repo" describe --tags --abbrev=0 2>/dev/null || echo v0.0.0)"
  local version="${tag#v}-dev"
  # Сборка всегда из этой рабочей копии, откуда бы ни запустили скрипт (а не из OLDPWD).
  local src="$PWD"
  local out; out="$(mktemp -d)"
  echo "→ Сборка интеграции $version (интерфейс отсюда)"
  # Версия -dev — в сборке и в APK: видно, что это не релиз.
  run cp -R "$repo/custom_components/photoframe/." "$out/"
  run node -e "const f='$out/manifest.json',m=require(f);m.version='$version';require('fs').writeFileSync(f,JSON.stringify(m,null,2)+'\\n')"
  (cd "$repo" && run env FRONTEND="$src" VERSION="$version" scripts/build-frontend.sh >/dev/null)
  run rm -rf "$out/frontend" "$out/__pycache__"
  run cp -R "$repo/custom_components/photoframe/frontend" "$out/frontend"
  echo "→ Копирование в $DEPLOY_HOST:$dir"
  remote "mkdir -p '$dir'"
  run rsync -az --delete --exclude __pycache__ ${SSH_OPTS:+-e "ssh $SSH_OPTS"} "$out/" "$DEPLOY_HOST:$dir/"
  run rm -rf "$out"
  if [[ -n "${HA_RESTART_CMD:-}" ]]; then
    echo "→ Перезапуск HA"
    remote "$HA_RESTART_CMD"
    echo "✓ Интеграция $version на месте, HA перезапускается"
  else
    echo "✓ Интеграция $version на месте. Перезапустите HA (Настройки → Система → Перезапуск)."
  fi
}

case "${1:-}" in
  card) deploy_card ;;
  pwa) deploy_pwa ;;
  integration) deploy_integration ;;
  all) deploy_card; deploy_pwa ;;
  *) echo "Использование: ./deploy.sh card|pwa|integration|all" >&2; exit 1 ;;
esac
