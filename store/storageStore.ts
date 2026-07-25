import { create } from "zustand";

export type OfflineFile = {
  id: string;
  name: string;
  size: number;
  path: string;
  modified: number;
};

type StorageState = {
  totalStorage: number;
  cacheSize: number;
  downloadCount: number;

  offlineFiles: OfflineFile[];

  loading: boolean;

  setLoading: (value: boolean) => void;

  setStorageInfo: (
    storage: number,
    cache: number,
    count: number
  ) => void;

  setOfflineFiles: (
    files: OfflineFile[]
  ) => void;

  clearOfflineFiles: () => void;
};

export const useStorageStore =
  create<StorageState>((set) => ({
    totalStorage: 0,

    cacheSize: 0,

    downloadCount: 0,

    offlineFiles: [],

    loading: false,

    setLoading: (value) =>
      set({
        loading: value,
      }),

    setStorageInfo: (
      storage,
      cache,
      count
    ) =>
      set({
        totalStorage: storage,
        cacheSize: cache,
        downloadCount: count,
      }),

    setOfflineFiles: (files) =>
      set({
        offlineFiles: files,
      }),

    clearOfflineFiles: () =>
      set({
        offlineFiles: [],
        totalStorage: 0,
        downloadCount: 0,
      }),
  }));