import { AppFile } from "@/types/file";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "NEXUSDOCS_FILES";

export type StoredFile = AppFile;

// ---------------- Existing Functions ----------------

export async function getFiles(): Promise<StoredFile[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export async function saveFile(file: StoredFile) {
  const files = await getFiles();

  files.unshift(file);

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(files)
  );
}

export async function deleteFile(id: string) {
  const files = await getFiles();

  const updated = files.filter(
    (file) => file.id !== id
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export async function renameFile(
  id: string,
  newName: string
) {
  const files = await getFiles();

  const updated = files.map((file) =>
    file.id === id
      ? {
          ...file,
          name: newName,
        }
      : file
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export async function toggleFavorite(
  id: string
) {
  const files = await getFiles();

  const updated = files.map((file) =>
    file.id === id
      ? {
          ...file,
          isFavorite: !file.isFavorite,
        }
      : file
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

// ---------------- Storage Screen Helpers ----------------

export async function getStorageStats() {
  const files = await getFiles();

  const totalStorage = files.reduce(
    (sum, file) => sum + (file.size || 0),
    0
  );

  return {
    totalStorage,
    downloadCount: files.length,
    cacheSize: 0,
    files,
  };
}

export async function deleteAllOfflineFiles() {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([])
  );
}

export function formatSize(bytes: number) {
  if (bytes < 1024)
    return `${bytes} B`;

  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toFixed(1)} KB`;

  if (bytes < 1024 * 1024 * 1024)
    return `${(
      bytes /
      1024 /
      1024
    ).toFixed(2)} MB`;

  return `${(
    bytes /
    1024 /
    1024 /
    1024
  ).toFixed(2)} GB`;
}

export function formatDate(
  date?: string
) {
  if (!date) return "Unknown";

  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return "Unknown";
  }
}