package ru.smartframe.frame;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Handler;
import android.os.Looper;
import android.util.Base64;
import android.view.View;
import android.view.animation.LinearInterpolator;
import android.widget.FrameLayout;
import android.widget.ImageView;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// Фото рамки рисует Android, а не WebView: страница поверх прозрачная (часы, виджеты, панель).
// Слайдшоу ведёт страница (какое фото, когда, как вписать) — сюда приходит только «покажи это».
// Здесь: скачать кадр (сервер уже отдал его под размер экрана), декодировать, плавно сменить
// и медленно приблизить — всё на видеокарте, без нагрузки на WebView слабой рамки.
public class PhotoLayer extends FrameLayout {
    public interface Listener {
        // Кадр на экране; thumb — миниатюра 48 px (data:image/jpeg) для цвета интерфейса и размытия на странице.
        void onShown(String url, String thumb);
    }

    private static final int FADE_MS = 2000;
    private static final int FADE_LITE_MS = 600;
    private static final int ZOOM_MS = 20000;
    private static final float ZOOM = 1.08f;

    private final ExecutorService loader = Executors.newSingleThreadExecutor();
    private final Handler ui = new Handler(Looper.getMainLooper());
    private final Listener listener;
    // Заранее подготовленный следующий кадр (только один — память слабых рамок).
    private String nextUrl;
    private Bitmap nextBitmap;
    private String currentUrl = "";
    private int seq;

    public PhotoLayer(Context context, Listener listener) {
        super(context);
        this.listener = listener;
        setBackgroundColor(Color.BLACK);
    }

    // fit: auto — кадр другой ориентации целиком (с подсветкой по краям), cover — во весь экран, contain — целиком.
    public void show(final String url, final String fit, final boolean lite) {
        if (url == null || url.isEmpty()) {
            currentUrl = "";
            removeAllViews();
            return;
        }
        if (url.equals(currentUrl)) return;
        currentUrl = url;
        final int id = ++seq;
        loader.execute(new Runnable() {
            public void run() {
                final Bitmap bitmap = take(url);
                if (bitmap == null) return;
                final String thumb = thumb(bitmap);
                ui.post(new Runnable() {
                    public void run() {
                        if (id != seq) { bitmap.recycle(); return; }
                        attach(bitmap, fit, lite);
                        listener.onShown(url, thumb);
                    }
                });
            }
        });
    }

    // Следующий кадр — скачать и декодировать заранее, пока показывается этот.
    public void preload(final String url) {
        if (url == null || url.isEmpty()) return;
        loader.execute(new Runnable() {
            public void run() {
                if (url.equals(nextUrl)) return;
                Bitmap b = load(url);
                if (b == null) return;
                if (nextBitmap != null) nextBitmap.recycle();
                nextUrl = url;
                nextBitmap = b;
            }
        });
    }

    public void release() {
        loader.shutdownNow();
    }

    // Работает в потоке загрузки.
    private Bitmap take(String url) {
        if (url.equals(nextUrl) && nextBitmap != null) {
            Bitmap b = nextBitmap;
            nextBitmap = null;
            nextUrl = null;
            return b;
        }
        return load(url);
    }

    private Bitmap load(String url) {
        HttpURLConnection c = null;
        try {
            c = (HttpURLConnection) new URL(url).openConnection();
            c.setConnectTimeout(15000);
            c.setReadTimeout(30000);
            if (c.getResponseCode() != 200) return null;
            InputStream in = c.getInputStream();
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[16384];
            for (int n; (n = in.read(buf)) > 0;) out.write(buf, 0, n);
            byte[] data = out.toByteArray();
            // Сервер присылает кадр под экран; если больше (без интеграции) — уменьшаем при декодировании.
            BitmapFactory.Options o = new BitmapFactory.Options();
            o.inJustDecodeBounds = true;
            BitmapFactory.decodeByteArray(data, 0, data.length, o);
            int side = Math.max(getResources().getDisplayMetrics().widthPixels, getResources().getDisplayMetrics().heightPixels);
            int sample = 1;
            while (Math.max(o.outWidth, o.outHeight) / (sample * 2) >= side) sample *= 2;
            o = new BitmapFactory.Options();
            o.inSampleSize = sample;
            return BitmapFactory.decodeByteArray(data, 0, data.length, o);
        } catch (Exception e) {
            return null;
        } catch (OutOfMemoryError e) {
            return null;
        } finally {
            if (c != null) c.disconnect();
        }
    }

    private static Bitmap tiny(Bitmap b, int side) {
        float k = (float) side / Math.max(b.getWidth(), b.getHeight());
        return Bitmap.createScaledBitmap(b, Math.max(1, Math.round(b.getWidth() * k)), Math.max(1, Math.round(b.getHeight() * k)), true);
    }

    private static String thumb(Bitmap b) {
        Bitmap t = tiny(b, 48);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        t.compress(Bitmap.CompressFormat.JPEG, 70, out);
        t.recycle();
        return "data:image/jpeg;base64," + Base64.encodeToString(out.toByteArray(), Base64.NO_WRAP);
    }

    private boolean contain(Bitmap b, String fit) {
        if ("contain".equals(fit)) return true;
        if ("cover".equals(fit)) return false;
        boolean screenWide = getWidth() >= getHeight();
        return (b.getWidth() >= b.getHeight()) != screenWide;
    }

    // Новый кадр проявляется поверх старого; старый после этого убирается вместе с картинкой.
    private void attach(Bitmap bitmap, String fit, boolean lite) {
        Context ctx = getContext();
        FrameLayout slide = new FrameLayout(ctx);
        slide.setBackgroundColor(Color.BLACK);
        ImageView photo = new ImageView(ctx);
        photo.setImageBitmap(bitmap);
        final boolean whole = contain(bitmap, fit);
        if (whole) {
            // По краям — подсветка: крошечная копия кадра, растянутая на экран, сама выглядит размытой.
            ImageView glow = new ImageView(ctx);
            glow.setImageBitmap(tiny(bitmap, 16));
            glow.setScaleType(ImageView.ScaleType.CENTER_CROP);
            glow.setAlpha(0.75f);
            glow.setScaleX(1.12f);
            glow.setScaleY(1.12f);
            slide.addView(glow, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
            photo.setScaleType(ImageView.ScaleType.FIT_CENTER);
        } else {
            photo.setScaleType(ImageView.ScaleType.CENTER_CROP);
        }
        slide.addView(photo, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));

        final int old = getChildCount();
        slide.setAlpha(0f);
        addView(slide, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
        slide.animate().alpha(1f).setDuration(lite ? FADE_LITE_MS : FADE_MS).withLayer().withEndAction(new Runnable() {
            public void run() {
                // Ушедшие кадры больше не нужны — освобождаем память сразу.
                for (int i = 0; i < old && getChildCount() > 1; i++) {
                    View v = getChildAt(0);
                    v.animate().cancel();
                    removeViewAt(0);
                }
            }
        });
        // Медленное приближение (как на странице), кадр целиком — без него.
        if (!whole && !lite) {
            photo.animate().scaleX(ZOOM).scaleY(ZOOM).setDuration(ZOOM_MS).setInterpolator(new LinearInterpolator());
        }
    }
}
