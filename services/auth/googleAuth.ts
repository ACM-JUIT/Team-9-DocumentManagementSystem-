import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

import {
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

import { auth } from "./firebase";

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,

  scopes: [
    "profile",
    "email",
    "https://www.googleapis.com/auth/drive.readonly",
  ],

  offlineAccess: false,

  forceCodeForRefreshToken: false,
});

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices();

    const response = await GoogleSignin.signIn();

    const idToken = response.data?.idToken;

    if (!idToken) {
      throw new Error("Google Sign-In failed. No ID Token received.");
    }

    const credential = GoogleAuthProvider.credential(idToken);

    const userCredential = await signInWithCredential(
      auth,
      credential
    );

    return userCredential.user;
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      throw new Error("Sign in cancelled.");
    }

    if (error.code === statusCodes.IN_PROGRESS) {
      throw new Error("Google Sign-In already in progress.");
    }

    if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      throw new Error("Google Play Services not available.");
    }

    throw error;
  }
}