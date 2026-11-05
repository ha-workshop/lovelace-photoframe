// Photo Frame for Home Assistant — Electron desktop app
// Fullscreen WebView with PWA, wake word, native TTS, screen control.

const { app, BrowserWindow, screen: screenElectron, ipcMain } = require('electron');
const path = require('path');

const HA_URL = process.env.HA_URL || 'https://d7160cbbfe22.sn.mynetname.net/photoframe/';
const FRAME = '/photoframe/index.html';

let win = null;

function createWindow() {
  const displays = screenElectron.getAllDisplays();
  // Use the primary display; --display N to pick another
  const displayIdx = parseInt(process.argv.find(a => a.startsWith('--display='))?.split('=')[1] || '0', 10);
  const display = displays[Math.min(displayIdx, displays.length - 1)] || displays[0];
  const { x, y, width, height } = display.bounds;

  win = new BrowserWindow({
    x, y, width, height,
    fullscreen: true,
    frame: false,
    kiosk: !process.env.DEBUG,
    resizable: !!process.env.DEBUG,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: false,
    },
    backgroundColor: '#000000',
  });

  win.setMenu(null);
  win.loadURL(HA_URL);

  // Prevent sleep
  const { powerSaveBlocker } = require('electron');
  const blockerId = powerSaveBlocker.start('prevent-display-sleep');
  app.on('before-quit', () => {
    if (powerSaveBlocker.isStarted(blockerId)) powerSaveBlocker.stop(blockerId);
  });

  // Back button (Escape) — pass to page
  win.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'Escape' && input.type === 'keyDown') {
      win.webContents.executeJavaScript('window.SmartFrameBack && window.SmartFrameBack()');
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => app.quit());
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

// IPC: set brightness (0-1)
ipcMain.on('set-brightness', (event, level) => {
  // Electron cannot control hardware brightness, but can dim the window
  if (win) win.webContents.setZoomLevel(level > 0 ? 0 : -10); // fallback
});
