import { AppFile } from "@/types/file";
import GoogleSignin from "../auth/googleAuth";

/**
 * Connect Google Drive
 */
export async function connectGoogleDrive(): Promise<string> {
  try {
    console.log("========== GOOGLE DRIVE ==========");

    console.log("STEP 1: Checking Google Play Services...");
    await GoogleSignin.hasPlayServices();

    /**
     * IMPORTANT
     * Clear previous Google session so the account picker
     * appears every time the user connects Drive.
     */
    try {
      await GoogleSignin.signOut();
    } catch {}

    console.log("✅ STEP 2: Opening Google Account Picker...");

    const response = await GoogleSignin.signIn();

    console.log("✅ STEP 3: Google Account Selected");
    console.log(response);

    console.log("STEP 4: Fetching Google Tokens...");

    const tokens = await GoogleSignin.getTokens();

    console.log("✅ STEP 5: Access Token Received");
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

/**
 * Restore existing Drive session
 */
export async function restoreGoogleSession(): Promise<string | null> {
  try {
    console.log("Restoring Google Session...");

    const user = await GoogleSignin.getCurrentUser();

    if (!user) {
      console.log("No existing Google session.");
      return null;
    }

    const tokens = await GoogleSignin.getTokens();

    console.log("Google session restored.");

    return tokens.accessToken;
  } catch (error: any) {
    console.log("Restore Session Error:", error);

    return null;
  }
}

/**
 * Disconnect Google Drive
 */
export async function disconnectGoogleDrive(): Promise<void> {
  try {
    await GoogleSignin.revokeAccess();
  } catch {}

  try {
    await GoogleSignin.signOut();
  } catch {}

  console.log("Google Drive disconnected.");
}

/**
 * Fetch Drive Files
 */
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

  console.log(
    `Fetched ${data.files?.length ?? 0} files from Drive.`
  );

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