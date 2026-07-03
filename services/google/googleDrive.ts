import { AppFile } from "@/types/file";
import GoogleSignin from "../auth/googleAuth";

export async function connectGoogleDrive(): Promise<string> {
  try {
    console.log("========== GOOGLE DRIVE ==========");
    console.log("STEP 1: Checking Google Play Services...");

    await GoogleSignin.hasPlayServices();

    console.log("✅ STEP 2: Play Services available");
    console.log("STEP 3: Opening Google Sign-In...");

    const user = await GoogleSignin.signIn();

    console.log("✅ STEP 4: Sign-In Success");
    console.log(user);

    console.log("STEP 5: Fetching access token...");

    const tokens = await GoogleSignin.getTokens();

    console.log("✅ STEP 6: Tokens received");
    console.log(tokens);

    return tokens.accessToken;
  } catch (error: any) {
    console.log("❌ GOOGLE DRIVE CONNECTION ERROR");
    console.log(error);

    if (error.code) {
      console.log("Error Code:", error.code);
    }

    if (error.message) {
      console.log("Error Message:", error.message);
    }

    throw error;
  }
}

export async function restoreGoogleSession(): Promise<string | null> {
  try {
    console.log("Restoring Google Session...");

    await GoogleSignin.signInSilently();

    console.log("Session restored.");

    const tokens = await GoogleSignin.getTokens();

    console.log("Tokens restored:", tokens);

    return tokens.accessToken;
  } catch (error: any) {
    console.log("Restore Session Error:", error);

    if (error.code) {
      console.log("Error Code:", error.code);
    }

    if (error.message) {
      console.log("Error Message:", error.message);
    }

    return null;
  }
}

export async function getDriveFiles(
  accessToken: string
): Promise<AppFile[]> {
  console.log("Fetching Google Drive files...");

  const response = await fetch(
    "https://www.googleapis.com/drive/v3/files?pageSize=50&fields=files(id,name,mimeType,size,modifiedTime,webViewLink)",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Drive API Error:", errorText);

    throw new Error("Failed to fetch Google Drive files.");
  }

  const data = await response.json();

  console.log(`Fetched ${data.files?.length ?? 0} files from Drive.`);

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