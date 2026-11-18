// Photo Frame for Home Assistant — Electron desktop app
// Opens as a normal desktop window; kiosk (fullscreen, no window chrome) is opt-in from app settings.
//
// The server is found on the local network over mDNS (_home-assistant._tcp): no hardcoded address.
// The chosen server is remembered per user and can be changed from the setup screen (Ctrl/Cmd+Alt+S
// or --setup). Works without internet as long as the frame and Home Assistant are on the same LAN.

const { app, BrowserWindow, Menu, screen: screenElectron, ipcMain, powerSaveBlocker, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const net = require('net');
const { Bonjour } = require('bonjour-service');

const FRAME_PATH = '/photoframe/';
const MDNS_TYPE = 'home-assistant';
const DISCOVERY_MS = 4000;

let win = null;
let kioskOn = false;
let sleepBlocker = null;
let currentBase = '';

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

// --- Server address -------------------------------------------------------
// Stored per user, never in the app bundle: the same build works on any network.

function configFile() {
  return path.join(app.getPath('userData'), 'server.json');
}

function loadServer() {
  try {
    const data = JSON.parse(fs.readFileSync(configFile(), 'utf8'));
    return typeof data.url === 'string' ? normalizeBase(data.url) : '';
  } catch (e) {
    return '';
  }
}

function saveServer(base) {
  try {
    fs.mkdirSync(path.dirname(configFile()), { recursive: true });
    fs.writeFileSync(configFile(), JSON.stringify({ url: base }, null, 2));
  } catch (e) {
    console.error('[photoframe] cannot save server address:', e);
  }
}

// http(s)://host[:port][/prefix] without a trailing slash. A pasted /photoframe/ is stripped:
// the frame path is added separately.
function normalizeBase(input) {
  if (!input) return '';
  let value = String(input).trim();
  if (!/^https?:\/\//i.test(value)) value = 'http://' + value;
  try {
    const url = new URL(value);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
    url.hash = '';
    url.search = '';
    let prefix = url.pathname.replace(/\/+$/, '').replace(/\/photoframe$/i, '');
    url.pathname = prefix || '/';
    return url.toString().replace(/\/+$/, '');
  } catch (e) {
    return '';
  }
}

function frameUrl(base) {
  return base.replace(/\/+$/, '') + FRAME_PATH;
}

// Reachability probe. /manifest.json is public in Home Assistant, so no token is needed.
function probe(base) {
  return new Promise((resolve) => {
    let url;
    try { url = new URL(base + '/manifest.json'); } catch (e) { resolve(false); return; }
    const mod = url.protocol === 'https:' ? https : http;
    const req = mod.get(url, { timeout: 3000, rejectUnauthorized: false }, (res) => {
      res.resume();
      resolve(res.statusCode >= 200 && res.statusCode < 500);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

// Browse mDNS for Home Assistant instances. Prefer the address from the LAN (IPv4 + port):
// HA also advertises internal_url, which is already a LAN address when configured.
function discover(timeoutMs = DISCOVERY_MS) {
  return new Promise((resolve) => {
    const found = new Map();
    let bonjour;
    try {
      bonjour = new Bonjour({}, () => { /* сеть без multicast — просто нет результатов */ });
    } catch (e) {
      resolve([]);
      return;
    }
    const browser = bonjour.find({ type: MDNS_TYPE, protocol: 'tcp' });
    browser.on('up', (service) => {
      const txt = service.txt || {};
      const ipv4 = (service.addresses || []).find((a) => net.isIPv4(a));
      const port = service.port || 8123;
      const base = normalizeBase(
        ipv4 ? 'http://' + ipv4 + ':' + port : (txt.internal_url || txt.base_url || ''),
      );
      if (!base) return;
      if (!found.has(base)) {
        found.set(base, {
          name: txt.location_name || service.name || 'Home Assistant',
          url: base,
          version: txt.version || '',
        });
      }
    });
    const finish = () => {
      try { browser.stop(); } catch (e) { /* ignore */ }
      try { bonjour.destroy(); } catch (e) { /* ignore */ }
      resolve(Array.from(found.values()));
    };
    setTimeout(finish, Math.max(1000, timeoutMs));
  });
}

// --- Window ---------------------------------------------------------------

function loadSetup(error, failedUrl) {
  if (!win || win.isDestroyed()) return;
  win.loadFile(path.join(__dirname, 'setup.html'), {
    query: { ...(error ? { error } : {}), ...(failedUrl ? { url: failedUrl } : {}) },
  });
}

function createWindow(url) {
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
  if (url) win.loadURL(url);
  else loadSetup();

  // The saved address is unreachable (another network, HA moved): ask instead of showing an error page.
  win.webContents.on('did-fail-load', (event, code, description, failedUrl, isMainFrame) => {
    if (!isMainFrame || !failedUrl) return;
    if (failedUrl.startsWith('file://')) return;
    loadSetup('unreachable', failedUrl);
  });

  // The renderer asks for kiosk according to the device setting (same pref as the HA card).
  // --kiosk / KIOSK=1 still allow starting straight into kiosk, e.g. from autostart.
  if (process.argv.includes('--kiosk') || process.env.KIOSK === '1') {
    win.webContents.once('did-finish-load', () => applyKiosk(true));
  }

  // Keyboard: F11 toggles kiosk for the current session; Escape is passed to the PWA (back).
  // Ctrl/Cmd+Alt+S opens the server setup even after the frame has loaded.
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') {
      event.preventDefault();
      applyKiosk(!kioskOn);
      return;
    }
    if ((input.control || input.meta) && input.alt && input.key.toLowerCase() === 's') {
      event.preventDefault();
      loadSetup();
      return;
    }
    if (input.key === 'Escape') {
      win.webContents.executeJavaScript('window.SmartFrameBack && window.SmartFrameBack()');
    }
  });

  // Links to the outside world open in the system browser, never as a second app window.
  win.webContents.setWindowOpenHandler(({ url: target }) => {
    if (/^https?:\/\//i.test(target)) shell.openExternal(target);
    return { action: 'deny' };
  });
}

async function start() {
  const forced = normalizeBase(process.env.HA_URL || '');
  if (process.argv.includes('--setup') || process.env.PHOTOFRAME_SETUP === '1') {
    createWindow(null);
    return;
  }
  currentBase = forced || loadServer();
  createWindow(currentBase ? frameUrl(currentBase) : null);
}

app.whenReady().then(start);

app.on('window-all-closed', () => app.quit());
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow(currentBase ? frameUrl(currentBase) : null);
});
app.on('before-quit', () => {
  if (sleepBlocker !== null && powerSaveBlocker.isStarted(sleepBlocker)) powerSaveBlocker.stop(sleepBlocker);
  sleepBlocker = null;
});

// --- IPC ------------------------------------------------------------------

// The PWA can switch the OS window between normal and kiosk.
ipcMain.handle('photoframe:set-kiosk', (event, on) => {
  applyKiosk(!!on);
  return kioskOn;
});

ipcMain.handle('photoframe:get-kiosk', () => kioskOn);

// Setup screen: mDNS discovery and connecting to a chosen address.
ipcMain.handle('photoframe:discover', () => discover());

ipcMain.handle('photoframe:connect', async (event, input) => {
  const base = normalizeBase(input);
  if (!base) return { ok: false, error: 'invalid' };
  if (!(await probe(base))) return { ok: false, error: 'unreachable' };
  saveServer(base);
  currentBase = base;
  if (win && !win.isDestroyed()) win.loadURL(frameUrl(base));
  return { ok: true, url: frameUrl(base) };
});

// Sync call from preload: the PWA expects getApkVersion() to return a string immediately.
ipcMain.on('photoframe:app-version', (event) => {
  event.returnValue = app.getVersion();
});
