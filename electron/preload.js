// Bridge between Electron main process and the PWA
// Mimics the Android SmartFrame bridge.

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('SmartFrame', {
  // Version of this desktop app
  getApkVersion: () => '1.8.0',

  // Update from HA (download and install — Electron auto-updater would go here)
  updateApk: (url) => {
    console.log('[SmartFrame] update requested:', url);
    // TODO: implement auto-updater
  },

  // Brightness — Electron cannot control hardware backlight, but we store it
  setBrightness: (level) => {
    ipcRenderer.send('set-brightness', level);
    try { localStorage.setItem('photoframe.brightness', String(level)); } catch (e) {}
  },
});
