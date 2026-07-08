import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "./firebase";
import GoogleSignin from "./googleAuth";

/**
 * Register new user
 */
export async function register(
  email: string,
  password: string
): Promise<User> {
  const credential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  return credential.user;
}

/**
 * Login with Email & Password
 */
export async function login(
  email: string,
  password: string
): Promise<User> {
  const credential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return credential.user;
}

/**
 * Login with Google
 */
export async function loginWithGoogle(): Promise<User> {
  // Check Google Play Services
  await GoogleSignin.hasPlayServices();

  // If an old Google session exists, clear it.
  // This makes the account chooser appear every time.
  try {
    await GoogleSignin.signOut();
  } catch {}

  // Open Google account picker
  const response = await GoogleSignin.signIn();

  const idToken = response.data?.idToken;

  if (!idToken) {
    throw new Error("Google ID Token not found.");
  }

  // Firebase credential
  const credential =
    GoogleAuthProvider.credential(idToken);

  // Firebase Login
  const result =
    await signInWithCredential(
      auth,
      credential
    );

  return result.user;
}

/**
 * Logout user completely
 */
export async function logout(): Promise<void> {
  // Firebase Logout
  await signOut(auth);

  // Google Logout
  try {
    await GoogleSignin.revokeAccess();
  } catch {}

  try {
    await GoogleSignin.signOut();
  } catch {}
}

/**
 * Current logged in user
 */
export function getCurrentUser() {
  return auth.currentUser;
}

/**
 * Listen to auth changes
 */
export function subscribeToAuth(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}