export type StorageProvider =
  | "Local"
  | "Google Drive"
  | "OneDrive";

export interface AppFile {
  id: string;

  name: string;

  mimeType: string;

  size: number;

  storage: StorageProvider;

  uri?: string;

  driveId?: string;

  modifiedAt?: string;

  favorite?: boolean;

  webViewLink?: string;
}