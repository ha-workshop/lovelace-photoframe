package ru.smartframe.frame;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.admin.DevicePolicyManager;
import android.content.BroadcastReceiver;
import android.content.ClipData;
import android.content.ComponentName;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.graphics.Color;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.net.nsd.NsdManager;
import android.net.nsd.NsdServiceInfo;
import android.Manifest;
import android.content.pm.PackageManager;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.PowerManager;
import android.text.InputType;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.PermissionRequest;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ListView;
import android.widget.TextView;

import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

// Рамка — полноэкранный WebView с PWA, которую раздаёт Home Assistant.
// Интерфейс живёт на сервере (./deploy.sh pwa обновляет его без переустановки APK),
// а страница на том же домене, что и HA, — поэтому вход в HA работает как в браузере.
//
// Указывается только адрес сервера Home Assistant — при первом запуске или через adb:
//   adb shell am start -n ru.smartframe.frame/.MainActivity -e ha http://192.168.1.10:8123
// Страница рамки на нём — /photoframe/index.html (её раздаёт интеграция Photo Frame);
// интеграции нет — /local/photoframe/index.html (туда PWA кладёт ./deploy.sh pwa).
public class MainActivity extends Activity {
    static final String PREFS = "frame";
    private static final String KEY_HA = "ha";
    private static final String PAGE = "/photoframe/index.html";
    private static final String PAGE_LOCAL = "/local/photoframe/index.html";
    // Интеграции нет (404) — переходим на копию в www и запоминаем это до следующего запуска.
    private boolean local;
    private static final int PICK_PHOTOS = 1;
    private static final int REQ_AUDIO = 1001;

    private static final String KEY_ADMIN_ASKED = "admin_asked";
    private static final int ADD_ADMIN = 2;

    private WebView web;
    private PhotoLayer photos;
    private ValueCallback<Uri[]> pending;
    private final Handler handler = new Handler();
    private boolean failed;

    // Wi-Fi не засыпает, пока рамка открыта: старые планшеты гасят его в простое, и HA теряет рамку.
    private WifiManager.WifiLock wifiLock;
    // Экран погашен из HA (сон): процессор не спит, чтобы рамка слышала HA и проснулась по команде.
    private PowerManager.WakeLock sleepLock;
    private boolean asleep;

    // Сеть вернулась — если страница не открылась, открываем сразу, не дожидаясь повтора через 30 секунд.
    private final BroadcastReceiver network = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            ConnectivityManager cm = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
            NetworkInfo info = cm.getActiveNetworkInfo();
            if (failed && info != null && info.isConnected()) retry();
        }
    };

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        // Рамка не спит: вместо сна показывает фото. Включили экран после сна — сразу рамка, без экрана блокировки.
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
            | WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED
            | WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD
            | WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);

        WifiManager wifi = (WifiManager) getApplicationContext().getSystemService(WIFI_SERVICE);
        wifiLock = wifi.createWifiLock(WifiManager.WIFI_MODE_FULL_HIGH_PERF, "photoframe:wifi");
        wifiLock.setReferenceCounted(false);
        wifiLock.acquire();
        PowerManager power = (PowerManager) getSystemService(POWER_SERVICE);
        sleepLock = power.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "photoframe:sleep");
        sleepLock.setReferenceCounted(false);
        registerReceiver(network, new IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION));
        requestAudioPermissionIfNeeded();

        // Фото рисует Android (PhotoLayer), страница поверх — прозрачная: часы, виджеты, панель.
        photos = new PhotoLayer(this, new PhotoLayer.Listener() {
            public void onShown(String url, String thumb) {
                web.evaluateJavascript("window.SmartFramePhoto && window.SmartFramePhoto("
                    + JSONObject.quote(url) + "," + JSONObject.quote(thumb) + ")", null);
            }
        });
        web = new WebView(this);
        web.setBackgroundColor(Color.TRANSPARENT);
        FrameLayout root = new FrameLayout(this);
        root.addView(photos, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        root.addView(web, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        if (Build.VERSION.SDK_INT >= 19) WebView.setWebContentsDebuggingEnabled(true);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        // Страница узнаёт оболочку по UA: экран держит она, видео-NoSleep не нужен.
        s.setUserAgentString(s.getUserAgentString() + " SmartFrame/1.0");

        // Мост для страницы: яркость подсветки из HA (сущность «Экран» рамки, см. lib/screen.ts).
        web.addJavascriptInterface(new Bridge(), "SmartFrame");

        web.setWebViewClient(new WebViewClient() {
            // Вход в HA и всё прочее открываем здесь же, а не во внешнем браузере (его на рамке может не быть).
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (handleSmartFrameUrl(url)) return true;
                return false;
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                String url = req.getUrl().toString();
                if (handleSmartFrameUrl(url)) return true;
                return false;
            }

            @Override
            public void onReceivedHttpError(WebView view, WebResourceRequest req, WebResourceResponse res) {
                if (req.isForMainFrame() && res.getStatusCode() == 404 && !local) {
                    local = true;
                    view.loadUrl(url());
                }
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError err) {
                if (req.isForMainFrame()) showError();
            }

            @Override
            @SuppressWarnings("deprecation")
            public void onReceivedError(WebView view, int code, String desc, String url) {
                if (Build.VERSION.SDK_INT < 23) showError();
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            // Микрофон для wake word / Assist: выдаём разрешение странице, если есть системное RECORD_AUDIO.
            @Override
            public void onPermissionRequest(PermissionRequest request) {
                String[] resources = request.getResources();
                boolean audio = false;
                for (String res : resources) {
                    if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(res)) audio = true;
                }
                if (audio && (Build.VERSION.SDK_INT < 23 || checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED)) {
                    request.grant(resources);
                    return;
                }
                super.onPermissionRequest(request);
            }

            // <input type="file" multiple> — загрузка пачки фото с рамки.
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (pending != null) pending.onReceiveValue(null);
                pending = callback;
                Intent pick = new Intent(Intent.ACTION_GET_CONTENT);
                pick.addCategory(Intent.CATEGORY_OPENABLE);
                pick.setType("image/*");
                pick.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
                try {
                    startActivityForResult(Intent.createChooser(pick, null), PICK_PHOTOS);
                } catch (Exception e) {
                    pending = null;
                    return false;
                }
                return true;
            }
        });

        if (!applyIntentUrl(getIntent())) {
            if (ha().isEmpty()) askUrl();
            else {
                web.loadUrl(url());
                askAdminOnce();
            }
        }
    }

    @Override
    protected void onDestroy() {
        unregisterReceiver(network);
        if (wifiLock.isHeld()) wifiLock.release();
        if (sleepLock.isHeld()) sleepLock.release();
        photos.release();
        super.onDestroy();
    }

    // Разрешение на микрофон: без него wake word и Assist не слышат. Запрашиваем при старте.
    private void requestAudioPermissionIfNeeded() {
        if (Build.VERSION.SDK_INT < 23) return;
        if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED) return;
        requestPermissions(new String[]{ Manifest.permission.RECORD_AUDIO }, REQ_AUDIO);
    }

    @Override
    public void onRequestPermissionsResult(int request, String[] permissions, int[] grantResults) {
        if (request == REQ_AUDIO && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            // Перезагружаем страницу — теперь микрофон доступен (wake word / Assist)
            web.reload();
        }
        super.onRequestPermissionsResult(request, permissions, grantResults);
    }

    // ── Сон экрана из HA ──────────────────────────────────
    private ComponentName admin() {
        return new ComponentName(this, AdminReceiver.class);
    }

    private boolean isAdmin() {
        return ((DevicePolicyManager) getSystemService(DEVICE_POLICY_SERVICE)).isAdminActive(admin());
    }

    // Один раз предлагаем дать право гасить экран. Отказались — сон остаётся «чёрным экраном» на минимуме подсветки.
    private void askAdminOnce() {
        SharedPreferences prefs = getSharedPreferences(PREFS, MODE_PRIVATE);
        if (isAdmin() || prefs.getBoolean(KEY_ADMIN_ASKED, false)) return;
        prefs.edit().putBoolean(KEY_ADMIN_ASKED, true).apply();
        Intent ask = new Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN);
        ask.putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, admin());
        ask.putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, getString(R.string.admin_explain));
        try { startActivityForResult(ask, ADD_ADMIN); } catch (Exception e) { /* нет такого экрана — без сна */ }
    }

    private void setScreen(boolean on) {
        if (on == !asleep) return;
        asleep = !on;
        if (!on) {
            sleepLock.acquire();
            if (isAdmin()) ((DevicePolicyManager) getSystemService(DEVICE_POLICY_SERVICE)).lockNow();
            return;
        }
        if (sleepLock.isHeld()) sleepLock.release();
        // Будим экран; дальше его держит FLAG_KEEP_SCREEN_ON, а экран блокировки снимают флаги окна.
        @SuppressWarnings("deprecation")
        PowerManager.WakeLock wake = ((PowerManager) getSystemService(POWER_SERVICE)).newWakeLock(
            PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP | PowerManager.ON_AFTER_RELEASE,
            "photoframe:wake");
        wake.acquire(3000);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        applyIntentUrl(intent);
    }

    // Адрес HA из adb (-e ha ...): запоминаем и открываем.
    private boolean applyIntentUrl(Intent intent) {
        String ha = intent != null ? intent.getStringExtra("ha") : null;
        if (ha == null || ha.isEmpty()) return false;
        saveHa(ha);
        web.loadUrl(url());
        return true;
    }

    private String ha() {
        return getSharedPreferences(PREFS, MODE_PRIVATE).getString(KEY_HA, "");
    }

    // Адрес сервера HA → страница рамки на нём. Без схемы — http://.
    private String url() {
        String ha = ha();
        if (!ha.matches("(?i)^https?://.*")) ha = "http://" + ha;
        return ha.replaceAll("/+$", "") + (local ? PAGE_LOCAL : PAGE);
    }

    private void saveHa(String ha) {
        getSharedPreferences(PREFS, MODE_PRIVATE).edit().putString(KEY_HA, ha.trim()).apply();
    }

    // Поиск Home Assistant в локальной сети через mDNS (_home-assistant._tcp).
    private NsdManager nsdManager;
    private NsdManager.DiscoveryListener discoveryListener;
    private final List<String> discovered = new java.util.ArrayList<>();
    private final List<String> discoveredUrls = new java.util.ArrayList<>();

    private void startDiscovery() {
        discovered.clear();
        discoveredUrls.clear();
        try {
            nsdManager = (NsdManager) getSystemService(NSD_SERVICE);
            discoveryListener = new NsdManager.DiscoveryListener() {
                @Override
                public void onDiscoveryStarted(String serviceType) {}

                @Override
                public void onServiceFound(NsdServiceInfo info) {
                    final String name = info.getServiceName();
                    if (!name.toLowerCase().contains("home-assistant") && !name.toLowerCase().contains("homeassistant") && !name.toLowerCase().contains("hass")) {
                        // Пробуем resolve — может порт 8123
                    }
                    nsdManager.resolveService(info, new NsdManager.ResolveListener() {
                        @Override
                        public void onResolveFailed(NsdServiceInfo si, int code) {}

                        @Override
                        public void onServiceResolved(NsdServiceInfo si) {
                            // Home Assistant по умолчанию на порту 8123
                            int port = si.getPort();
                            if (port <= 0) port = 8123;
                            String ip = si.getHost().getHostAddress();
                            String url = "http://" + ip + ":" + port;
                            if (!discoveredUrls.contains(url)) {
                                discoveredUrls.add(url);
                                discovered.add(si.getServiceName() + " (" + url + ")");
                            }
                        }
                    });
                }

                @Override
                public void onServiceLost(NsdServiceInfo info) {}

                @Override
                public void onDiscoveryStopped(String serviceType) {}

                @Override
                public void onStartDiscoveryFailed(String serviceType, int code) {}

                @Override
                public void onStopDiscoveryFailed(String serviceType, int code) {}
            };
            nsdManager.discoverServices("_home-assistant._tcp.local.", NsdManager.PROTOCOL_DNS_SD, discoveryListener);
        } catch (Exception e) { /* nsd не поддерживается */ }
    }

    private void stopDiscovery() {
        try {
            if (discoveryListener != null) nsdManager.stopServiceDiscovery(discoveryListener);
        } catch (Exception e) { /* ignore */ }
        discoveryListener = null;
    }

    private void askUrl() {
        // Запускаем mDNS поиск
        startDiscovery();

        final View dialogView = getLayoutInflater().inflate(R.layout.url_picker, null);
        final EditText input = dialogView.findViewById(R.id.url_input);
        final ListView list = dialogView.findViewById(R.id.url_list);
        final TextView status = dialogView.findViewById(R.id.url_status);

        String current = ha();
        input.setText(current.isEmpty() ? getString(R.string.url_default) : current);
        input.setSelection(input.getText().length());

        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
            android.R.layout.simple_list_item_1, discovered) {
            @Override
            public View getView(int pos, View convertView, ViewGroup parent) {
                TextView v = (TextView) super.getView(pos, convertView, parent);
                v.setTextSize(16);
                v.setPadding(16, 14, 16, 14);
                return v;
            }
        };
        list.setAdapter(adapter);
        list.setOnItemClickListener((parent, view, pos, id) -> {
            String url = discoveredUrls.get(pos);
            saveHa(url);
            stopDiscovery();
            web.loadUrl(url());
        });

        // Обновление списка найденных через 2 секунды поиска
        handler.postDelayed(new Runnable() {
            public void run() {
                adapter.notifyDataSetChanged();
                status.setText(discovered.isEmpty()
                    ? getString(R.string.discovery_none)
                    : getString(R.string.discovery_found, discovered.size()));
            }
        }, 2500);

        new AlertDialog.Builder(this)
            .setTitle(R.string.url_title)
            .setView(dialogView)
            .setCancelable(false)
            .setPositiveButton(R.string.open, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    stopDiscovery();
                    String url = input.getText().toString().trim();
                    if (!url.isEmpty()) {
                        saveHa(url);
                        web.loadUrl(url());
                    }
                }
            })
            .setNegativeButton(R.string.cancel, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    stopDiscovery();
                    finish();
                }
            })
            .setOnDismissListener(new DialogInterface.OnDismissListener() {
                public void onDismiss(DialogInterface d) { stopDiscovery(); }
            })
            .show();
    }

    // Нет сети или HA перезагружается — показываем экран-заглушку с логотипом и кнопками.
    private void showError() {
        if (failed) return;
        failed = true;
        // Заглушка прямо в WebView: логотип, сообщение, кнопки «Повторить» и «Сменить адрес».
        // Кнопки по ссылкам smartframe://retry и smartframe://change — WebViewClient перехватывает.
        web.loadDataWithBaseURL(null,
            "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'>"
            + "<style>*{margin:0;padding:0;box-sizing:border-box}body{background:#0b0d14;color:#f5f7fb;"
            + "font-family:-apple-system,Roboto,sans-serif;display:flex;flex-direction:column;align-items:center;"
            + "justify-content:center;min-height:100vh;padding:24px;text-align:center}"
            + ".logo{margin-bottom:24px}.logo svg{width:64px;height:64px}.msg{font-size:16px;color:#94a3b8;"
            + "margin-bottom:24px;word-break:break-all}.btn{display:inline-block;padding:14px 28px;margin:6px;"
            + "border-radius:14px;font-size:15px;font-weight:600;text-decoration:none;min-width:200px}"
            + ".btn-primary{background:#7dd3fc;color:#0b0d14}.btn-secondary{background:rgba(255,255,255,.08);"
            + "color:#f5f7fb}.btn-secondary:active,.btn-primary:active{opacity:.7}"
            + "</style></head><body>"
            + "<div class=logo><svg viewBox='0 0 24 24' fill='none' stroke='#7dd3fc' stroke-width='1.5' "
            + "stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='2'/>"
            + "<circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg></div>"
            + "<div class=msg>" + url() + "</div>"
            + "<a class='btn btn-primary' href='smartframe://retry'>" + getString(R.string.retry) + "</a>"
            + "<a class='btn btn-secondary' href='smartframe://change'>" + getString(R.string.change_url) + "</a>"
            + "</body></html>",
            "text/html", "utf-8", null);
        handler.postDelayed(new Runnable() {
            public void run() {
                if (!failed) return;
                retry();
            }
        }, 30000);
    }

    private boolean handleSmartFrameUrl(String url) {
        if ("smartframe://retry".equals(url)) { retry(); return true; }
        if ("smartframe://change".equals(url)) { failed = false; askUrl(); return true; }
        return false;
    }

    private void retry() {
        failed = false;
        web.loadUrl(url());
    }

    @Override
    protected void onActivityResult(int request, int result, Intent data) {
        if (request != PICK_PHOTOS || pending == null) return;  // ADD_ADMIN — ответ не нужен, проверяем при сне
        Uri[] uris = null;
        if (result == RESULT_OK && data != null) {
            ClipData clip = data.getClipData();
            if (clip != null) {
                uris = new Uri[clip.getItemCount()];
                for (int i = 0; i < uris.length; i++) uris[i] = clip.getItemAt(i).getUri();
            } else if (data.getData() != null) {
                uris = new Uri[] { data.getData() };
            }
        }
        pending.onReceiveValue(uris);
        pending = null;
    }

    // Вызывается из JS (не в UI-потоке) — окно меняем в UI-потоке.
    private class Bridge {
        @JavascriptInterface
        public void setBrightness(final float level) {
            runOnUiThread(new Runnable() {
                public void run() { setBacklight(level); }
            });
        }

        // Автозапуск после включения рамки — настройка устройства в PWA (по умолчанию включён, см. BootReceiver).
        @JavascriptInterface
        public boolean getAutostart() {
            return BootReceiver.enabled(MainActivity.this);
        }

        @JavascriptInterface
        public void setAutostart(boolean on) {
            getSharedPreferences(PREFS, MODE_PRIVATE).edit().putBoolean(BootReceiver.KEY, on).apply();
        }

        // Фото рисует Android: какое показать (адрес уже под размер экрана), как вписать, «Лёгкое» ли качество.
        @JavascriptInterface
        public void showPhoto(final String url, final String fit, final boolean lite) {
            runOnUiThread(new Runnable() {
                public void run() { photos.show(url, fit, lite); }
            });
        }

        @JavascriptInterface
        public void preloadPhoto(String url) {
            photos.preload(url);
        }

        // Страница отдала список фото альбома (по одному в строке) — скачиваем их в кэш,
        // чтобы рамка продолжала показывать фото без сервера.
        @JavascriptInterface
        public void prefetchPhotos(String urls) {
            photos.prefetch(urls);
        }

        // Панель управления открыта и закрыла фото целиком — слой фото не рисуем вовсе (и наезд не считаем).
        @JavascriptInterface
        public void setPhotosVisible(final boolean visible) {
            runOnUiThread(new Runnable() {
                public void run() { photos.setVisibility(visible ? View.VISIBLE : View.INVISIBLE); }
            });
        }

        // Версия APK — HA показывает обновление, когда интеграция раздаёт новее.
        @JavascriptInterface
        public String getApkVersion() {
            try {
                PackageInfo p = getPackageManager().getPackageInfo(getPackageName(), 0);
                return p.versionName;
            } catch (Exception e) {
                return "";
            }
        }

        // Обновление из HA (кнопка «Установить» у обновления рамки): скачать APK, который раздаёт интеграция, и поставить.
        @JavascriptInterface
        public void updateApk(final String url) {
            new Thread(new Runnable() {
                public void run() { installUpdate(url); }
            }).start();
        }

        // Сон из HA: погасить экран совсем (если дали право) или включить обратно.
        @JavascriptInterface
        public void setScreenOn(final boolean on) {
            runOnUiThread(new Runnable() {
                public void run() { setScreen(on); }
            });
        }
    }

    // С root (как на рамках с SuperSU) — тихо через pm install; без него — системный экран установки, нажать «Установить».
    // После обновления Android перезапускает рамку сам (BootReceiver, MY_PACKAGE_REPLACED).
    private void installUpdate(String url) {
        File apk = new File(getExternalCacheDir() != null ? getExternalCacheDir() : getCacheDir(), "update.apk");
        HttpURLConnection c = null;
        try {
            c = (HttpURLConnection) new URL(url).openConnection();
            c.setConnectTimeout(15000);
            c.setReadTimeout(60000);
            if (c.getResponseCode() != 200) return;
            InputStream in = c.getInputStream();
            FileOutputStream out = new FileOutputStream(apk);
            byte[] buf = new byte[16384];
            for (int n; (n = in.read(buf)) > 0;) out.write(buf, 0, n);
            out.close();
            // Системному установщику файл должен быть доступен на чтение.
            apk.setReadable(true, false);
        } catch (Exception e) {
            return;
        } finally {
            if (c != null) c.disconnect();
        }
        try {
            Process p = Runtime.getRuntime().exec(new String[] { "su", "-c", "pm install -r " + apk.getAbsolutePath() });
            if (p.waitFor() == 0) return;
        } catch (Exception e) {
            // root нет — ставим через системный установщик
        }
        Intent install = new Intent(Intent.ACTION_VIEW);
        install.setDataAndType(Uri.fromFile(apk), "application/vnd.android.package-archive");
        install.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(install);
    }

    // 0…1 — яркость подсветки поверх системной; 0 — минимум (рамка «спит»: страница чёрная).
    private void setBacklight(float level) {
        WindowManager.LayoutParams lp = getWindow().getAttributes();
        lp.screenBrightness = Math.max(0f, Math.min(1f, level));
        getWindow().setAttributes(lp);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUi();
    }

    private void hideSystemUi() {
        web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
    }

    @Override
    public void onBackPressed() {
        // Чёрный экран (ошибка загрузки) — показываем диалог смены адреса.
        if (failed) {
            failed = false;
            askUrl();
            return;
        }
        // «Назад» пульта — странице рамки (закрыть окно, вернуться к фото, спрятать ленту). Нет её обработчика
        // (вход в HA, другая страница) — назад по истории.
        web.evaluateJavascript("window.SmartFrameBack ? String(window.SmartFrameBack()) : 'false'", new android.webkit.ValueCallback<String>() {
            public void onReceiveValue(String handled) {
                if (!"\"true\"".equals(handled) && web.canGoBack()) web.goBack();
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
        // Экран включили кнопкой, пока рамка «спала», — просыпается и сообщает HA (lib/screen.ts).
        if (asleep) {
            asleep = false;
            if (sleepLock.isHeld()) sleepLock.release();
            web.evaluateJavascript("window.SmartFrameWake && window.SmartFrameWake()", null);
        }
    }

    @Override
    public void onTrimMemory(int level) {
        super.onTrimMemory(level);
        if (photos != null) photos.trim(level);
    }

    @Override
    protected void onPause() {
        // Во сне страница должна дальше слушать HA — не ставим её на паузу.
        if (!asleep) web.onPause();
        super.onPause();
    }
}
