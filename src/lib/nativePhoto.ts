// Фото рисует APK (PhotoLayer в MainActivity), а страница поверх прозрачная: смена кадров и медленный наезд
// идут на видеокарте, без нагрузки на WebView слабой рамки. Слайдшоу по-прежнему ведёт страница —
// APK только показывает кадр и сообщает, что он на экране (с миниатюрой для цвета интерфейса).
interface Bridge {
  showPhoto?: (url: string, fit: string, lite: boolean) => void;
  preloadPhoto?: (url: string) => void;
  setPhotosVisible?: (visible: boolean) => void;
  // Список кадров альбома через \n: APK скачивает их в свой кэш, чтобы работать без сервера.
  prefetchPhotos?: (urls: string) => void;
}

function bridge(): Bridge | null {
  const b = (window as unknown as { SmartFrame?: Bridge }).SmartFrame;
  return b && b.showPhoto ? b : null;
}

// Нативно — только кадры с сервера: локальные (blob:, data:) APK не скачать.
export function canShowNative(url: string) {
  return !!bridge() && /^(https?:)?\//.test(url);
}

function absolute(url: string) {
  return /^https?:/.test(url) ? url : location.protocol + '//' + location.host + url;
}

export function showNative(url: string, fit: string, lite: boolean) {
  const b = bridge();
  try { if (b) b.showPhoto!(url ? absolute(url) : '', fit, lite); } catch (e) { /* старый APK */ }
}

export function preloadNative(url: string) {
  const b = bridge();
  try { if (b && b.preloadPhoto) b.preloadPhoto(absolute(url)); } catch (e) { /* ignore */ }
}

// Кадр на экране: thumb — миниатюра 48 px (data:), по ней цвет интерфейса и «размытие» под панелью.
export function onNativeShown(fn: (thumb: string) => void) {
  (window as unknown as { SmartFramePhoto?: (url: string, thumb: string) => void }).SmartFramePhoto = (_url, thumb) => fn(thumb);
}

// Скачать альбом в кэш APK. Старая оболочка такого метода не знает — вернём false, и страница
// сложит кадры в Cache Storage (если в WebView есть service worker).
export function prefetchNativePhotos(urls: string[]): boolean {
  const b = (window as unknown as { SmartFrame?: Bridge }).SmartFrame;
  if (!b || !b.prefetchPhotos) return false;
  try {
    b.prefetchPhotos(urls.join('\n'));
    return true;
  } catch (e) {
    return false;
  }
}

// Панель управления открыта — фото под ней закрыто размытием целиком, и APK его не рисует.
export function setNativeVisible(visible: boolean) {
  const b = bridge();
  try { if (b && b.setPhotosVisible) b.setPhotosVisible(visible); } catch (e) { /* старый APK */ }
}
