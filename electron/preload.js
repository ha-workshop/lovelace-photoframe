// Bridge between Electron main process and the PWA.
// The desktop marker tells the PWA to show desktop-only settings (kiosk).

const { contextBridge, ipcRenderer } = require('electron');

// Read once: the PWA calls getApkVersion() synchronously and expects a string.
const version = ipcRenderer.sendSync('photoframe:app-version') || '';

contextBridge.exposeInMainWorld('SmartFrame', {
  // This is the Electron shell, not a browser or the Android APK.
  desktop: true,
  platform: process.platform,

  // Version of this desktop app
  getApkVersion: () => version,

  // OS window kiosk/fullscreen (set from the app settings, like kiosk in the HA card).
  setKiosk: (on) => ipcRenderer.invoke('photoframe:set-kiosk', !!on),
  getKiosk: () => ipcRenderer.invoke('photoframe:get-kiosk'),

  // Update from HA (download and install — Electron auto-updater would go here)
  updateApk: (url) => {
    console.log('[SmartFrame] update requested:', url);
    // TODO: implement auto-updater
  },
});
