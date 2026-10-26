import NoSleep from 'nosleep.js';

// Не даём экрану уснуть: вместо сна рамка показывает фото.
//  - Screen Wake Lock API: Chrome 84+, iOS Safari 16.4+ (в т.ч. PWA на домашнем экране);
//  - иначе NoSleep — беззвучное зацикленное видео, включается только из жеста пользователя;
//  - в APK-лаунчере экран держит нативный FLAG_KEEP_SCREEN_ON, это лишь подстраховка.

let sentinel: any = null;
const noSleep = new NoSleep();

function requestNative(): Promise<boolean> {
  const wl = (navigator as any).wakeLock;
  if (!wl || document.visibilityState !== 'visible') return Promise.resolve(false);
  return wl.request('screen').then(
    (s: any) => {
      sentinel = s;
      s.addEventListener('release', () => { sentinel = null; });
      return true;
    },
    () => false,
  );
}

let started = false;

// Один раз на страницу: карточку HA пересоздаёт при каждом сохранении, обработчики не должны копиться.
export function keepScreenOn() {
  if (started) return;
  started = true;
  requestNative();

  // Блокировка снимается, когда вкладка скрыта, — берём заново при возврате.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && !sentinel) requestNative();
  });

  // Первый тап: повторная попытка (Safari хочет жест) и, если не вышло, — видео-фолбэк.
  const onGesture = () => {
    document.removeEventListener('touchend', onGesture);
    document.removeEventListener('click', onGesture);
    requestNative().then((ok) => {
      if (!ok && !noSleep.isEnabled) noSleep.enable().catch(() => {});
    });
  };
  document.addEventListener('touchend', onGesture);
  document.addEventListener('click', onGesture);
}
