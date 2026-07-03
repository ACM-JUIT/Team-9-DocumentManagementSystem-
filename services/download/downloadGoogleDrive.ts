import * as FileSystem from "expo-file-system/legacy";

export async function downloadGoogleDriveFile(
  accessToken: string,
  fileId: string,
  fileName: string
) {
  try {
    const downloadUrl =
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;

    const destination =
      FileSystem.documentDirectory + fileName;

    const result = await FileSystem.downloadAsync(
      downloadUrl,
      destination,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return result.uri;
  } catch (error) {
    console.log(error);
    throw error;
  }
}