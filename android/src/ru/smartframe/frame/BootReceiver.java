package ru.smartframe.frame;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

// Пропал свет — рамка включилась и сама открыла фото, без касаний. Выключается в настройках устройства.
public class BootReceiver extends BroadcastReceiver {
    static final String KEY = "autostart";

    static boolean enabled(Context context) {
        return context.getSharedPreferences(MainActivity.PREFS, Context.MODE_PRIVATE).getBoolean(KEY, true);
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if (!enabled(context)) return;
        Intent start = new Intent(context, MainActivity.class);
        start.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(start);
    }
}
