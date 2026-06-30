import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'NEXUSDOCS_FILES';

export interface StoredFile {
  id: string;

  // File Information
  name: string;
  uri: string;
  size: number;

  // MIME Type
  mimeType: string;

  // Extension
  extension: string;

  // Category
  category: string;

  // Storage Provider
  storageProvider: 'local' | 'google' | 'onedrive';

  // Favorite
  isFavorite: boolean;

  // Dates
  uploadedAt: string;
  modifiedAt: string;
}
export async function getFiles(): Promise<StoredFile[]> {
  const files = await AsyncStorage.getItem(STORAGE_KEY);

  return files ? JSON.parse(files) : [];
}

export async function saveFile(file: StoredFile) {
  const files = await getFiles();

  const alreadyExists = files.find(f => f.uri === file.uri);

  if (alreadyExists) {
    return;
  }

  files.unshift(file);

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(files)
  );
}

export async function deleteFile(id: string) {
  const files = await getFiles();

  const updated = files.filter(
    file => file.id !== id
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export async function clearAllFiles() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}