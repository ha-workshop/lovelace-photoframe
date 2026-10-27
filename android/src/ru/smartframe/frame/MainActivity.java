package ru.smartframe.frame;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ClipData;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.text.InputType;
import android.view.View;
import android.view.WindowManager;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;

// Рамка — полноэкранный WebView с PWA, которую раздаёт Home Assistant.
// Интерфейс живёт на сервере (./deploy.sh pwa обновляет его без переустановки APK),
// а страница на том же домене, что и HA, — поэтому вход в HA работает как в браузере.
//
// Указывается только адрес сервера Home Assistant — при первом запуске или через adb:
//   adb shell am start -n ru.smartframe.frame/.MainActivity -e ha http://192.168.1.10:8123
// Страница рамки на нём — /photoframe/index.html (её раздаёт интеграция Photo Frame);
// интеграции нет — /local/photoframe/index.html (туда PWA кладёт ./deploy.sh pwa).
public class MainActivity extends Activity {
    private static final String PREFS = "frame";
    private static final String KEY_HA = "ha";
    private static final String PAGE = "/photoframe/index.html";
    private static final String PAGE_LOCAL = "/local/photoframe/index.html";
    // Интеграции нет (404) — переходим на копию в www и запоминаем это до следующего запуска.
    private boolean local;
    private static final int PICK_PHOTOS = 1;

    private WebView web;
    private ValueCallback<Uri[]> pending;
    private final Handler handler = new Handler();
    private boolean failed;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        // Рамка не спит: вместо сна показывает фото.
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        web = new WebView(this);
        web.setBackgroundColor(Color.BLACK);
        setContentView(web);
        if (Build.VERSION.SDK_INT >= 19) WebView.setWebContentsDebuggingEnabled(true);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        // Страница узнаёт оболочку по UA: экран держит она, видео-NoSleep не нужен.
        s.setUserAgentString(s.getUserAgentString() + " SmartFrame/1.0");

        web.setWebViewClient(new WebViewClient() {
            // Вход в HA и всё прочее открываем здесь же, а не во внешнем браузере (его на рамке может не быть).
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
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
            else web.loadUrl(url());
        }
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

    private void askUrl() {
        final EditText input = new EditText(this);
        input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_URI);
        String current = ha();
        input.setText(current.isEmpty() ? getString(R.string.url_default) : current);
        input.setSelection(input.getText().length());
        new AlertDialog.Builder(this)
            .setTitle(R.string.url_title)
            .setMessage(R.string.url_hint)
            .setView(input)
            .setCancelable(false)
            .setPositiveButton(R.string.open, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    saveHa(input.getText().toString());
                    web.loadUrl(url());
                }
            })
            .show();
    }

    // Нет сети или HA перезагружается — предлагаем повторить; сами тоже пробуем раз в 30 секунд.
    private void showError() {
        if (failed) return;
        failed = true;
        web.loadData("<body style='background:#000'></body>", "text/html", "utf-8");
        final AlertDialog dialog = new AlertDialog.Builder(this)
            .setTitle(R.string.load_error)
            .setMessage(url())
            .setPositiveButton(R.string.retry, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) { retry(); }
            })
            .setNegativeButton(R.string.change_url, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) { failed = false; askUrl(); }
            })
            .show();
        handler.postDelayed(new Runnable() {
            public void run() {
                if (!failed) return;
                if (dialog.isShowing()) dialog.dismiss();
                retry();
            }
        }, 30000);
    }

    private void retry() {
        failed = false;
        web.loadUrl(url());
    }

    @Override
    protected void onActivityResult(int request, int result, Intent data) {
        if (request != PICK_PHOTOS || pending == null) return;
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
        if (web.canGoBack()) web.goBack();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    protected void onPause() {
        web.onPause();
        super.onPause();
    }
}
