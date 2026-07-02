import { AppFile } from "@/types/file";
import GoogleSignin from "./googleSignIn";

export async function connectGoogleDrive() {
  try {
    await GoogleSignin.hasPlayServices();

    await GoogleSignin.signIn();

    const tokens = await GoogleSignin.getTokens();

    return tokens.accessToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function restoreGoogleSession() {
  try {
    await GoogleSignin.signInSilently();

    const tokens = await GoogleSignin.getTokens();

    return tokens.accessToken;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDriveFiles(
  accessToken: string
): Promise<AppFile[]> {
  const response = await fetch(
    "https://www.googleapis.com/drive/v3/files?pageSize=50&fields=files(id,name,mimeType,size,modifiedTime,webViewLink)",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();

  return data.files.map((file: any) => ({
    id: file.id,

    driveId: file.id,

    name: file.name,

    mimeType: file.mimeType ?? "",

    size: Number(file.size ?? 0),

    storage: "Google Drive",

    modifiedAt: file.modifiedTime,

    webViewLink: file.webViewLink,
  }));
}