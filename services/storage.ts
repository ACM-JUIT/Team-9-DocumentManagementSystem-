import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "NEXUSDOCS_FILES";

export interface StoredFile {
  id: string;

  name: string;

  uri: string;

  size: number;

  mimeType: string;

  uploadedAt: string;

  storage: "Local" | "Google Drive" | "OneDrive";

  favorite: boolean;
}

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
    file => file.id !== id
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

  const updated = files.map(file =>
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

  const updated = files.map(file =>
    file.id === id
      ? {
          ...file,
          favorite: !file.favorite,
        }
      : file
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}