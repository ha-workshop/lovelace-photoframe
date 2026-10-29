// Что делают камеры на рамке: живое видео сразу, видео с паузы (сначала кадр) или только снимок.
// Настройка своя у каждого устройства; auto — на «Лёгком» с паузы, на «Красивом» видео сразу.
import { useEffect, useState } from 'preact/hooks';
import { useQuality, type Quality } from './quality';

export type CameraDisplayPref = 'auto' | 'live' | 'paused' | 'snapshot';
export type CameraDisplay = 'live' | 'paused' | 'snapshot';

const KEY = 'photoframe.cameraMode';
const listeners: Array<() => void> = [];

export function cameraDisplayPref(): CameraDisplayPref {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'live' || v === 'paused' || v === 'snapshot' ? v : 'auto';
  } catch (e) { return 'auto'; }
}

export function setCameraDisplayPref(v: CameraDisplayPref) {
  try { localStorage.setItem(KEY, v); } catch (e) { /* ignore */ }
  listeners.forEach((l) => l());
}

export function cameraDisplay(q: Quality = 'full'): CameraDisplay {
  const p = cameraDisplayPref();
  if (p === 'auto') return q === 'lite' ? 'paused' : 'live';
  return p;
}

export function useCameraDisplay(): CameraDisplay {
  const q = useQuality();
  const [, force] = useState(0);
  useEffect(() => {
    const fn = () => force((n) => n + 1);
    listeners.push(fn);
    return () => { listeners.splice(listeners.indexOf(fn), 1); };
  }, []);
  return cameraDisplay(q);
}
