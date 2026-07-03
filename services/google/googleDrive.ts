import { AppFile } from "@/types/file";
import GoogleSignin from "../auth/googleAuth";

export async function connectGoogleDrive(): Promise<string> {
  try {
    await GoogleSignin.hasPlayServices();

    await GoogleSignin.signIn();

    const tokens = await GoogleSignin.getTokens();

    return tokens.accessToken;
  } catch (error) {
    console.log("Google Drive Connection Error:", error);
    throw error;
  }
}

export async function restoreGoogleSession(): Promise<string | null> {
  try {
    await GoogleSignin.signInSilently();

    const tokens = await GoogleSignin.getTokens();

    return tokens.accessToken;
  } catch (error) {
    console.log("Restore Session Error:", error);
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

  if (!response.ok) {
    throw new Error("Failed to fetch Google Drive files.");
  }

  const data = await response.json();

  return (data.files || []).map((file: any) => ({
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