import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const [request, response, promptAsync] =
    Google.useAuthRequest({
      androidClientId:
        process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,

      webClientId:
        process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,

      scopes: [
        "openid",
        "profile",
        "email",
        "https://www.googleapis.com/auth/drive.readonly",
      ],
    });

  return {
    request,
    response,
    promptAsync,
  };
}