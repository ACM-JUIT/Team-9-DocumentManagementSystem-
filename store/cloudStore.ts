import { create } from "zustand";

import { AppFile } from "@/types/file";

interface CloudStore {
  connected: boolean;

  accessToken: string | null;

  driveFiles: AppFile[];

  setConnected: (value: boolean) => void;

  setAccessToken: (token: string | null) => void;

  setDriveFiles: (files: AppFile[]) => void;

  logout: () => void;
}

export const useCloudStore = create<CloudStore>((set) => ({
  connected: false,

  accessToken: null,

  driveFiles: [],

  setConnected: (value) =>
    set({
      connected: value,
    }),

  setAccessToken: (token) =>
    set({
      accessToken: token,
    }),

  setDriveFiles: (files) =>
    set({
      driveFiles: files,
    }),

  logout: () =>
    set({
      connected: false,
      accessToken: null,
      driveFiles: [],
    }),
}));