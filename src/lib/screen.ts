// Экран рамки из HA (сущность «Экран» устройства рамки): включён или спит, и яркость.
// В APK — настоящая подсветка и сон через мост SmartFrame (MainActivity): экран гаснет совсем, если рамке
// дали право. В браузере подсветкой управлять нельзя — затемняем страницу, а «сон» — чёрный экран.
// Коснулись спящей рамки (или включили экран кнопкой) — просыпается.
interface Bridge {
  setBrightness?: (level: number) => void;
  setScreenOn?: (on: boolean) => void;
  getAutostart?: () => boolean;
  setAutostart?: (on: boolean) => void;
}

function bridge(): Bridge | null {
  const b = (window as unknown as { SmartFrame?: Bridge }).SmartFrame;
  return b && b.setBrightness ? b : null;
}

export const hasBacklight = () => !!bridge();

// Подсветка APK: 0…1; во сне — минимум (экран чёрный, а с правом администратора и вовсе погашен).
export function applyBacklight(awake: boolean, brightness: number) {
  const b = bridge();
  if (!b) return;
  try {
    b.setBrightness!(awake ? Math.max(0.02, brightness / 100) : 0);
    if (b.setScreenOn) b.setScreenOn(awake);
  } catch (e) { /* старый APK */ }
}

// APK зовёт это, когда экран включили кнопкой, пока рамка спала.
export function onHardwareWake(fn: () => void) {
  (window as unknown as { SmartFrameWake?: () => void }).SmartFrameWake = fn;
}

// Затемнение поверх страницы, когда подсветкой управлять нельзя: 100% — без затемнения, 1% — почти чёрный.
export function dimOpacity(awake: boolean, brightness: number) {
  if (!awake) return 1;
  return hasBacklight() ? 0 : Math.round((100 - brightness) * 0.85) / 100;
}

// Автозапуск APK после включения рамки (настройка устройства). null — не APK или старая версия без настройки.
export function autostart(): boolean | null {
  const b = bridge();
  try { return b && b.getAutostart ? !!b.getAutostart() : null; } catch (e) { return null; }
}

export function setAutostart(on: boolean) {
  const b = bridge();
  try { if (b && b.setAutostart) b.setAutostart(on); } catch (e) { /* ignore */ }
}
