#!/usr/bin/env bash
# Сборка APK-оболочки рамки без Gradle: aapt2 → javac → d8 → zipalign → apksigner (debug-ключ).
#
#   android/build.sh                 собрать android/build/photoframe.apk
#   android/build.sh install         собрать и поставить на рамку по adb (adb install -r)
#   android/build.sh install <ha>    …и сразу задать адрес HA (например http://192.168.1.10:8123)
#
# Нужен Android SDK (ANDROID_HOME или ~/Library/Android/sdk) и JDK 17+.
set -euo pipefail
cd "$(dirname "$0")"

SDK="${ANDROID_HOME:-$HOME/Library/Android/sdk}"
BT="$SDK/build-tools/$(ls "$SDK/build-tools" | sort -V | tail -1)"
JAR="$SDK/platforms/$(ls "$SDK/platforms" | sort -V | tail -1)/android.jar"
VERSION=$(node -p "require('../package.json').version")
# versionCode из версии: 0.2.1 → 201
CODE=$(echo "$VERSION" | awk -F. '{ print $1 * 10000 + $2 * 100 + $3 }')
OUT=build

rm -rf "$OUT" && mkdir -p "$OUT/gen" "$OUT/classes" "$OUT/dex" "$OUT/res"
"$BT/aapt2" compile --dir res -o "$OUT/res"
"$BT/aapt2" link -o "$OUT/unsigned.apk" -I "$JAR" --manifest AndroidManifest.xml "$OUT"/res/*.flat \
  --java "$OUT/gen" --min-sdk-version 21 --target-sdk-version 23 \
  --version-code "$CODE" --version-name "$VERSION"
javac --release 8 -nowarn -Xlint:-options -classpath "$JAR" -d "$OUT/classes" \
  $(find src "$OUT/gen" -name '*.java')
"$BT/d8" --min-api 21 --lib "$JAR" --output "$OUT/dex" $(find "$OUT/classes" -name '*.class')
(cd "$OUT/dex" && zip -q -j ../unsigned.apk classes.dex)
"$BT/zipalign" -f 4 "$OUT/unsigned.apk" "$OUT/aligned.apk"
"$BT/apksigner" sign --ks "$HOME/.android/debug.keystore" --ks-pass pass:android --key-pass pass:android \
  --out "$OUT/photoframe.apk" "$OUT/aligned.apk"
echo "✓ $(pwd)/$OUT/photoframe.apk ($VERSION)"

if [[ "${1:-}" == install ]]; then
  adb install -r "$OUT/photoframe.apk"
  if [[ -n "${2:-}" ]]; then
    adb shell am start -n ru.smartframe.frame/.MainActivity -e ha "$2"
  else
    adb shell am start -n ru.smartframe.frame/.MainActivity
  fi
fi
