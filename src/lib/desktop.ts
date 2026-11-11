// Electron desktop shell: the PWA runs in a normal OS window and can ask the shell to go kiosk.
// In a regular browser the bridge is absent, so every call is a no-op.

interface DesktopBridge {
  desktop?: boolean;
  platform?: string;
  setKiosk?: (on: boolean) => Promise<boolean> | void;
  getKiosk?: () => Promise<boolean> | boolean;
}

function bridge(): DesktopBridge | null {
  const b = (window as unknown as { SmartFrame?: DesktopBridge }).SmartFrame;
  return b && b.desktop ? b : null;
}

export function isDesktop(): boolean {
  return !!bridge();
}

// Switch the OS window between normal and kiosk/fullscreen. The shell applies it asynchronously.
export function applyDesktopKiosk(on: boolean) {
  const b = bridge();
  if (!b || !b.setKiosk) return;
  try {
    const result = b.setKiosk(!!on);
    if (result && typeof (result as Promise<boolean>).catch === 'function') {
      (result as Promise<boolean>).catch(() => { /* window is gone */ });
    }
  } catch (e) { /* old shell without kiosk IPC */ }
}
