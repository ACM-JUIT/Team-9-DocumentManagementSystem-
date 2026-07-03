import * as FileSystem from "expo-file-system/legacy";
import * as MediaLibrary from "expo-media-library";

import { AppFile } from "@/types/file";

export async function downloadGoogleFile(
  file: AppFile,
  accessToken: string
) {
  try {
    if (!file.driveId) return;

    const permission =
      await MediaLibrary.requestPermissionsAsync();

    if (!permission.granted) {
      throw new Error("Permission denied");
    }

    const url =
      `https://www.googleapis.com/drive/v3/files/${file.driveId}?alt=media`;

    const localUri =
      FileSystem.documentDirectory +
      file.name;

    const result =
      await FileSystem.downloadAsync(
        url,
        localUri,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

    const asset =
      await MediaLibrary.createAssetAsync(
        result.uri
      );

    await MediaLibrary.createAlbumAsync(
      "NexusDocs",
      asset,
      false
    );

    return result.uri;
  } catch (error) {
    console.log(error);
    throw error;
  }
}