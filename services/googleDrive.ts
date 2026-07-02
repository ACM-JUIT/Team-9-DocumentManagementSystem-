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

export async function getDriveFiles(
  accessToken: string
) {
  const response = await fetch(
    "https://www.googleapis.com/drive/v3/files?pageSize=50&fields=files(id,name,mimeType,size,modifiedTime)",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();

  return data.files;
}