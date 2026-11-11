// Photo Frame for Home Assistant — Electron desktop app
// Opens as a normal desktop window; kiosk (fullscreen, no window chrome) is opt-in from app settings.

const { app, BrowserWindow, Menu, screen: screenElectron, ipcMain, powerSaveBlocker } = require('electron');
const path = require('path');

const HA_URL = process.env.HA_URL || 'https://d7160cbbfe22.sn.mynetname.net/photoframe/';

let win = null;
let kioskOn = false;
let sleepBlocker = null;

// Kiosk is a native mode on macOS/Windows. On Linux the same effect is plain fullscreen.
function applyKiosk(on) {
  if (!win || win.isDestroyed()) return;
  kioskOn = !!on;
  if (process.platform === 'linux') win.setFullScreen(kioskOn);
  else win.setKiosk(kioskOn);

  // In kiosk the app is a photo frame, so the display must stay awake. In a normal window
  // the desktop keeps its usual power settings.
  if (kioskOn) {
    if (sleepBlocker === null) sleepBlocker = powerSaveBlocker.start('prevent-display-sleep');
  } else if (sleepBlocker !== null) {
    if (powerSaveBlocker.isStarted(sleepBlocker)) powerSaveBlocker.stop(sleepBlocker);
    sleepBlocker = null;
  }
}

function createWindow() {
  const displays = screenElectron.getAllDisplays();
  // Use the primary display; --display N to pick another
  const displayIdx = parseInt(process.argv.find((a) => a.startsWith('--display='))?.split('=')[1] || '0', 10);
  const display = displays[Math.min(displayIdx, displays.length - 1)] || displays[0];
  const work = display.workArea;
  const width = Math.min(1440, Math.round(work.width * 0.9));
  const height = Math.min(960, Math.round(work.height * 0.9));

  win = new BrowserWindow({
    x: work.x + Math.round((work.width - width) / 2),
    y: work.y + Math.round((work.height - height) / 2),
    width,
    height,
    minWidth: 640,
    minHeight: 480,
    frame: true,
    resizable: true,
    fullscreen: false,
    show: false,
    autoHideMenuBar: true,
    title: 'Photo Frame',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: false,
    },
    backgroundColor: '#000000',
  });

  // A real application menu only exists on macOS; on Windows/Linux hide the window menu bar.
  if (process.platform === 'darwin') Menu.setApplicationMenu(null);
  else win.setMenu(null);

  win.once('ready-to-show', () => win.show());
  win.loadURL(HA_URL);

  // The renderer asks for kiosk according to the device setting (same pref as the HA card).
  // --kiosk / KIOSK=1 still allow starting straight into kiosk, e.g. from autostart.
  if (process.argv.includes('--kiosk') || process.env.KIOSK === '1') {
    win.webContents.once('did-finish-load', () => applyKiosk(true));
  }

  // Keyboard: F11 toggles kiosk for the current session; Escape is passed to the PWA (back).
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') {
      event.preventDefault();
      applyKiosk(!kioskOn);
      return;
    }
    if (input.key === 'Escape') {
      win.webContents.executeJavaScript('window.SmartFrameBack && window.SmartFrameBack()');
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => app.quit());
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on('before-quit', () => {
  if (sleepBlocker !== null && powerSaveBlocker.isStarted(sleepBlocker)) powerSaveBlocker.stop(sleepBlocker);
  sleepBlocker = null;
});

// IPC: the PWA can switch the OS window between normal and kiosk.
ipcMain.handle('photoframe:set-kiosk', (event, on) => {
  applyKiosk(!!on);
  return kioskOn;
});

ipcMain.handle('photoframe:get-kiosk', () => kioskOn);

// Sync call from preload: the PWA expects getApkVersion() to return a string immediately.
ipcMain.on('photoframe:app-version', (event) => {
  event.returnValue = app.getVersion();
});
