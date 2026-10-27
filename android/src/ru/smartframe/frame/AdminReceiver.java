package ru.smartframe.frame;

import android.app.admin.DeviceAdminReceiver;

// Права администратора устройства — только чтобы гасить экран по команде из HA (DevicePolicyManager.lockNow).
// Включаются один раз на рамке или по adb:
//   adb shell dpm set-active-admin ru.smartframe.frame/.AdminReceiver
public class AdminReceiver extends DeviceAdminReceiver {
}
