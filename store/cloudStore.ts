import { create } from "zustand";

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime?: string;
}

interface CloudStore {
  connected: boolean;
  accessToken: string | null;
  driveFiles: DriveFile[];

  setConnected: (value: boolean) => void;

  setAccessToken: (token: string) => void;

  setDriveFiles: (files: DriveFile[]) => void;

  logout: () => void;
}

export const useCloudStore =
  create<CloudStore>((set) => ({

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