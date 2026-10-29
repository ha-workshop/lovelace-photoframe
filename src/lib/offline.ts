// Офлайн-альбом: после получения списка фото догружаем кадры в хранилище устройства.
// PWA — Cache Storage через service worker (public/sw.js), APK — файлами на диске (PhotoLayer.java).
// Ссылки на фото подписаны на сутки, а размер в адресе меняется при повороте — ключ кэша и там,
// и там считается по пути без параметров (см. public/sw.js и PhotoLayer.java).
import { prefetchNativePhotos } from './nativePhoto';

// Те же лимиты, что в sw.js и PhotoLayer.java: сколько кадров и сколько места держим офлайн.
export const OFFLINE_MAX = 120;

let last = '';
let lastAt = 0;

// Повторно не дёргаем один и тот же альбом чаще раза в 10 минут: список перечитывается по таймеру,
// а кадры уже лежат в кэше (проверка существующих бесплатная).
export function prefetchPhotos(urls: string[]) {
  const list = urls.filter((u) => /^https?:/.test(u)).slice(0, OFFLINE_MAX);
  if (!list.length) return;
  const sig = list.join('|');
  const now = Date.now();
  if (sig === last && now - lastAt < 10 * 60e3) return;
  last = sig;
  lastAt = now;
  // APK: скачивает и хранит сам Android — страница только отдаёт список.
  if (prefetchNativePhotos(list)) return;
  // PWA: просим service worker сложить кадры в Cache Storage.
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.ready.then((reg) => {
    const sw = navigator.serviceWorker.controller || reg.active;
    if (sw) sw.postMessage({ type: 'cache-photos', urls: list });
  }).catch(() => { /* без service worker офлайн-кэша нет — работаем как раньше */ });
}
