import type { Server } from 'node:http';
import { WebSocket, WebSocketServer } from 'ws';
import { getKey } from './db.ts';

// Прокси к Home Assistant: токен живёт только в сервисе, рамки его не видят.
// Каждая рамка получает своё соединение с HA (1:1), так что id сообщений проходят без перевода.

interface HaSettings { haUrl: string; token: string }

// Дома: у главного ('main') HA берётся из общих настроек, у остальных — свой адрес и токен,
// а если адрес пуст — тот же HA, что у главного.
export const MAIN_HOME = 'main';
export interface Home { id: string; name: string; haUrl?: string; token?: string }

export function homes(): Home[] {
  const h = getKey<Home[]>('homes');
  return h && h.value.length ? h.value : [{ id: MAIN_HOME, name: 'Дом' }];
}

export function haConfig(homeId = MAIN_HOME): HaSettings | null {
  const home = homes().filter((h) => h.id === homeId)[0];
  if (!home) return null;
  const s = getKey<Partial<HaSettings>>('settings');
  const own = home.id !== MAIN_HOME && home.haUrl;
  const haUrl = (own ? home.haUrl : s && s.value.haUrl) || '';
  const token = (own ? home.token : s && s.value.token) || '';
  return haUrl && token ? { haUrl: haUrl.replace(/\/+$/, ''), token } : null;
}

const bridges = new Set<WebSocket>();

function bridge(client: WebSocket, homeId: string) {
  const cfg = haConfig(homeId);
  if (!cfg) {
    client.send(JSON.stringify({ type: 'auth_invalid', message: 'Home Assistant не настроен в сервисе' }));
    client.close();
    return;
  }
  bridges.add(client);
  const upstream = new WebSocket(cfg.haUrl.replace(/^http/, 'ws') + '/api/websocket');
  // До auth_ok сообщения рамки копим: HA ещё не готов их принять.
  const queue: string[] = [];
  let ready = false;

  upstream.on('message', (data) => {
    const text = data.toString();
    if (!ready) {
      const msg = JSON.parse(text);
      if (msg.type === 'auth_required') {
        upstream.send(JSON.stringify({ type: 'auth', access_token: cfg.token }));
        return;
      }
      if (msg.type === 'auth_ok') {
        ready = true;
        queue.splice(0).forEach((q) => upstream.send(q));
      }
    }
    if (client.readyState === WebSocket.OPEN) client.send(text);
  });

  client.on('message', (data) => {
    const text = data.toString();
    // Рамке незачем авторизоваться — это делает сервис.
    if (text.indexOf('"auth"') !== -1 && JSON.parse(text).type === 'auth') return;
    if (ready) upstream.send(text);
    else queue.push(text);
  });

  const close = () => {
    bridges.delete(client);
    client.terminate();
    upstream.terminate();
  };
  upstream.on('close', close);
  upstream.on('error', close);
  client.on('close', close);
  client.on('error', close);
}

export function attachHaProxy(server: Server) {
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    const url = new URL(req.url || '/', 'http://x');
    if (url.pathname !== '/api/ha/websocket') {
      socket.destroy();
      return;
    }
    wss.handleUpgrade(req, socket, head, (ws) => bridge(ws, url.searchParams.get('home') || MAIN_HOME));
  });
}

// Адрес или токен поменялись — рвём соединения, рамки переподключатся уже с новыми.
export function dropHaConnections() {
  bridges.forEach((c) => c.close());
}

// Картинки сущностей (обложки плееров, image-сущности). Только эти пути HA — не открытый прокси.
const PICTURE_PATHS = ['/api/media_player_proxy/', '/api/image_proxy/', '/api/camera_proxy/'];

export async function picture(path: string, homeId: string, signal: AbortSignal): Promise<Response> {
  const cfg = haConfig(homeId);
  if (!cfg) return new Response('Home Assistant не настроен', { status: 503 });
  if (!PICTURE_PATHS.some((p) => path.indexOf(p) === 0)) return new Response('bad path', { status: 400 });
  try {
    const upstream = await fetch(cfg.haUrl + path, { headers: { Authorization: 'Bearer ' + cfg.token }, signal });
    if (!upstream.ok || !upstream.body) return new Response('picture: HTTP ' + upstream.status, { status: 502 });
    return new Response(upstream.body, {
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (e) {
    return new Response('picture: ' + (e as Error).message, { status: 502 });
  }
}

// Камера: MJPEG-поток из HA с авторизацией сервиса, отдаём рамке как есть.
export async function cameraStream(entity: string, homeId: string, signal: AbortSignal): Promise<Response> {
  const cfg = haConfig(homeId);
  if (!cfg) return new Response('Home Assistant не настроен', { status: 503 });
  if (!/^camera\.[a-z0-9_]+$/.test(entity)) return new Response('bad entity', { status: 400 });
  try {
    const upstream = await fetch(cfg.haUrl + '/api/camera_proxy_stream/' + entity, {
      headers: { Authorization: 'Bearer ' + cfg.token },
      signal,
    });
    if (!upstream.ok || !upstream.body) return new Response('camera: HTTP ' + upstream.status, { status: 502 });
    return new Response(upstream.body, {
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'multipart/x-mixed-replace',
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    return new Response('camera: ' + (e as Error).message, { status: 502 });
  }
}
