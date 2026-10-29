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
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Comparator;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// Фото рамки рисует Android, а не WebView: страница поверх прозрачная (часы, виджеты, панель).
// Слайдшоу ведёт страница (какое фото, когда, как вписать) — сюда приходит только «покажи это».
// Здесь: скачать кадр (сервер уже отдал его под размер экрана), декодировать, плавно сменить
// и медленно приблизить — всё на видеокарте, без нагрузки на WebView слабой рамки.
// Скачанные кадры лежат файлами: без сервера рамка продолжает показывать альбом из кэша.
public class PhotoLayer extends FrameLayout {
    public interface Listener {
        // Кадр на экране; thumb — миниатюра 48 px (data:image/jpeg) для цвета интерфейса и размытия на странице.
        void onShown(String url, String thumb);
    }

    private static final int FADE_MS = 2000;
    private static final int FADE_LITE_MS = 600;
    private static final int ZOOM_MS = 20000;
    private static final float ZOOM = 1.08f;
    // Те же лимиты, что в public/sw.js: сколько кадров и сколько места держим офлайн.
    private static final int PHOTO_MAX = 120;
    private static final long PHOTO_BUDGET = 120L * 1024 * 1024;

    private final ExecutorService loader = Executors.newSingleThreadExecutor();
    // Предзагрузка альбома — отдельный поток, чтобы не задерживать показ текущего кадра.
    private final ExecutorService prefetcher = Executors.newSingleThreadExecutor();
    private final Handler ui = new Handler(Looper.getMainLooper());
    private final Listener listener;
    private final File cacheDir;
    // Заранее подготовленный следующий кадр (только один — память слабых рамок).
    private String nextUrl;
    private Bitmap nextBitmap;
    private String currentUrl = "";
    private int seq;

    public PhotoLayer(Context context, Listener listener) {
        super(context);
        this.listener = listener;
        cacheDir = new File(context.getFilesDir(), "photos");
        cacheDir.mkdirs();
        setBackgroundColor(Color.BLACK);
    }

    // fit: auto — кадр другой ориентации целиком (с подсветкой по краям), cover — во весь экран, contain — целиком.
    public void show(final String url, final String fit, final boolean lite) {
        if (url == null || url.isEmpty()) {
            currentUrl = "";
            while (getChildCount() > 0) {
                View v = getChildAt(0);
                removeViewAt(0);
                recycle(v);
            }
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

    // Страница отдаёт список фото альбома (по одному в строке) — качаем их в кэш заранее.
    // Тогда при пропаже сервера слайдшоу продолжает работать.
    public void prefetch(final String packed) {
        if (packed == null || packed.isEmpty()) return;
        prefetcher.execute(new Runnable() {
            public void run() {
                String[] urls = packed.split("\n");
                long total = 0;
                for (int i = 0, kept = 0; i < urls.length && kept < PHOTO_MAX; i++) {
                    String u = urls[i];
                    if (u.isEmpty()) continue;
                    kept++;
                    File f = cacheFile(u);
                    if (f == null) continue;
                    // Уже скачан — не тратим сеть и место.
                    if (f.isFile()) { total += f.length(); continue; }
                    byte[] data = download(u);
                    if (data == null) continue;
                    write(f, data);
                    total += data.length;
                    if (total >= PHOTO_BUDGET) break;
                }
                prune();
            }
        });
    }

    public void release() {
        loader.shutdownNow();
        prefetcher.shutdownNow();
    }

    // ── Кэш кадров на диске ─────────────────────────────
    // Ключ — путь без параметров: подпись authSig живёт сутки, а ширина и высота меняются при повороте.
    private static String photoKey(String url) {
        int q = url.indexOf('?');
        return q < 0 ? url : url.substring(0, q);
    }

    private File cacheFile(String url) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] d = md.digest(photoKey(url).getBytes("UTF-8"));
            char[] hex = "0123456789abcdef".toCharArray();
            StringBuilder sb = new StringBuilder(d.length * 2);
            for (int i = 0; i < d.length; i++) {
                sb.append(hex[(d[i] >> 4) & 15]).append(hex[d[i] & 15]);
            }
            return new File(cacheDir, sb.toString());
        } catch (Exception e) {
            return null;
        }
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
        File file = cacheFile(url);
        byte[] data = download(url);
        if (data != null) {
            if (file != null) write(file, data);
            return decode(data);
        }
        // Сервера нет — показываем последний скачанный кадр с диска.
        byte[] saved = file != null && file.isFile() ? read(file) : null;
        return saved != null ? decode(saved) : null;
    }

    private static byte[] download(String url) {
        HttpURLConnection c = null;
        try {
            c = (HttpURLConnection) new URL(url).openConnection();
            c.setConnectTimeout(15000);
            c.setReadTimeout(30000);
            if (c.getResponseCode() != 200) return null;
            // Размер известен — читаем сразу в массив нужной длины, без лишних копий (память рамки — 1 ГБ на всё).
            InputStream in = c.getInputStream();
            int length = c.getContentLength();
            byte[] data;
            if (length > 0) {
                data = new byte[length];
                for (int off = 0, n; off < length && (n = in.read(data, off, length - off)) > 0;) off += n;
            } else {
                ByteArrayOutputStream out = new ByteArrayOutputStream();
                byte[] buf = new byte[16384];
                for (int n; (n = in.read(buf)) > 0;) out.write(buf, 0, n);
                data = out.toByteArray();
            }
            return data;
        } catch (Exception e) {
            return null;
        } catch (OutOfMemoryError e) {
            return null;
        } finally {
            if (c != null) c.disconnect();
        }
    }

    private static byte[] read(File file) {
        FileInputStream in = null;
        try {
            in = new FileInputStream(file);
            byte[] data = new byte[(int) file.length()];
            int off = 0, n;
            while (off < data.length && (n = in.read(data, off, data.length - off)) > 0) off += n;
            return data;
        } catch (Exception e) {
            return null;
        } finally {
            if (in != null) { try { in.close(); } catch (Exception e) { /* ignore */ } }
        }
    }

    private static void write(File file, byte[] data) {
        // Уникальное имя: кадр могут писать и показ, и предзагрузка одновременно.
        File tmp = new File(file.getParentFile(), file.getName() + "." + System.nanoTime() + ".tmp");
        FileOutputStream out = null;
        try {
            out = new FileOutputStream(tmp);
            out.write(data);
            out.close();
            out = null;
            if (!tmp.renameTo(file)) {
                file.delete();
                tmp.renameTo(file);
            }
        } catch (Exception e) {
            tmp.delete();
        } finally {
            if (out != null) { try { out.close(); } catch (Exception e) { /* ignore */ } }
        }
    }

    // Держим не больше PHOTO_MAX кадров и PHOTO_BUDGET байт; лишние — самые старые по времени записи.
    private void prune() {
        File[] files = cacheDir.listFiles();
        if (files == null || files.length == 0) return;
        int count = files.length;
        long total = 0;
        for (int i = 0; i < files.length; i++) total += files[i].length();
        if (count <= PHOTO_MAX && total <= PHOTO_BUDGET) return;
        Arrays.sort(files, new Comparator<File>() {
            public int compare(File a, File b) { return a.lastModified() < b.lastModified() ? -1 : (a.lastModified() == b.lastModified() ? 0 : 1); }
        });
        for (int i = 0; i < files.length; i++) {
            File f = files[i];
            if (count <= PHOTO_MAX && total <= PHOTO_BUDGET) break;
            if (f.getName().endsWith(".tmp")) { f.delete(); count--; continue; }
            total -= f.length();
            if (f.delete()) count--;
        }
    }

    // Сервер присылает кадр под экран; если больше (без интеграции) — уменьшаем при декодировании.
    private Bitmap decode(byte[] data) {
        if (data == null || data.length == 0) return null;
        try {
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
        }
    }

    // Картинки ушедшего кадра (фото и подсветка) — сразу в утиль, не дожидаясь сборщика мусора.
    private static void recycle(View slide) {
        if (!(slide instanceof FrameLayout)) return;
        FrameLayout f = (FrameLayout) slide;
        for (int i = 0; i < f.getChildCount(); i++) {
            View v = f.getChildAt(i);
            if (!(v instanceof ImageView)) continue;
            android.graphics.drawable.Drawable d = ((ImageView) v).getDrawable();
            ((ImageView) v).setImageDrawable(null);
            if (d instanceof android.graphics.drawable.BitmapDrawable) {
                Bitmap b = ((android.graphics.drawable.BitmapDrawable) d).getBitmap();
                if (b != null && !b.isRecycled()) b.recycle();
            }
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
                    recycle(v);
                }
            }
        });
        // Медленное приближение (как на странице), кадр целиком — без него.
        if (!whole && !lite) {
            photo.animate().scaleX(ZOOM).scaleY(ZOOM).setDuration(ZOOM_MS).setInterpolator(new LinearInterpolator());
        }
    }
}
