import { create } from "zustand";

import {
  deleteFile,
  getFiles,
  saveFile,
  StoredFile,
  toggleFavorite,
} from "@/services/storage/storage";

interface FileStore {
  files: StoredFile[];

  loadFiles: () => Promise<void>;

  addFile: (file: StoredFile) => Promise<void>;

  removeFile: (id: string) => Promise<void>;

  favoriteFile: (id: string) => Promise<void>;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],

  loadFiles: async () => {
    const files = await getFiles();

    set({
      files,
    });
  },

  addFile: async (file) => {
    await saveFile(file);

    set((state) => ({
      files: [file, ...state.files],
    }));
  },

  removeFile: async (id) => {
    await deleteFile(id);

    set((state) => ({
      files: state.files.filter(
        (file) => file.id !== id
      ),
    }));
  },

  favoriteFile: async (id) => {
    await toggleFavorite(id);

    set((state) => ({
      files: state.files.map((file) =>
        file.id === id
          ? {
              ...file,
              isFavorite: !file.isFavorite,
            }
          : file
      ),
    }));
  },
}));