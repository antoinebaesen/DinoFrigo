import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Preferences } from '@capacitor/preferences';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { StatusBar, Style } from '@capacitor/status-bar';

export const isNative = Capacitor.isNativePlatform();
let writeQueue = Promise.resolve();
export const ready = isNative ? (async () => {
  await Preferences.configure({ group: 'DinoFrigo' });
  const [data, theme] = await Promise.all([
    Preferences.get({ key: 'catalogue-stock-selection' }),
    Preferences.get({ key: 'theme' })
  ]);
  let state = null;
  try { state = data.value ? JSON.parse(data.value) : null; } catch { /* Le stockage WebView reste une seconde copie. */ }
  return { state, theme: theme.value };
})() : Promise.resolve({ state: null, theme: null });

export function saveState(state) {
  if (!isNative) return Promise.resolve();
  const value = JSON.stringify(state);
  writeQueue = writeQueue.catch(() => {}).then(() => Preferences.set({ key: 'catalogue-stock-selection', value }));
  return writeQueue;
}

export async function setTheme(dark) {
  if (!isNative) return;
  await Preferences.set({ key: 'theme', value: dark ? 'dark' : 'light' });
  try { await StatusBar.setStyle({ style: dark ? Style.Dark : Style.Light }); await StatusBar.setBackgroundColor({ color: dark ? '#19221c' : '#f8f9f5' }); } catch { /* Selon la version d’Android. */ }
}

export async function exportFile(data, fileName) {
  await Filesystem.writeFile({ path: `exports/${fileName}`, data, directory: Directory.Cache, encoding: Encoding.UTF8, recursive: true });
  const { uri } = await Filesystem.getUri({ directory: Directory.Cache, path: `exports/${fileName}` });
  await Share.share({ title: 'Dino Frigo', files: [uri], dialogTitle: 'Enregistrer ou partager votre fichier Dino Frigo' });
}

export async function attachBackButton(onBack) {
  if (!isNative) return;
  await App.addListener('backButton', onBack);
}

export async function minimize() {
  if (isNative) await App.minimizeApp();
}
