import * as FileSystem from "expo-file-system/legacy";

import { saveFile } from "@/services/storage/storage";
import { AppFile } from "@/types/file";

export async function downloadGoogleDriveFile(
  accessToken: string,
  file: AppFile
) {
  try {
    if (!file.driveId) {
      throw new Error("Drive ID missing");
    }

    const downloadUrl =
      `https://www.googleapis.com/drive/v3/files/${file.driveId}?alt=media`;

    const destination =
      FileSystem.documentDirectory + file.name;

    const result = await FileSystem.downloadAsync(
      downloadUrl,
      destination,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Save metadata so the Storage screen can track it
    await saveFile({
      ...file,
      uri: result.uri,
      modifiedAt: new Date().toISOString(),
    });

    return result.uri;
  } catch (error) {
    console.log("Download Error:", error);
    throw error;
  }
}