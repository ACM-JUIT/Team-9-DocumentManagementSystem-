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
 * Register a new user
 */
export async function register(
  email: string,
  password: string
): Promise<User> {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credential.user;
}

/**
 * Login existing user
 */
export async function login(
  email: string,
  password: string
): Promise<User> {
  const credential = await signInWithEmailAndPassword(
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
  // Make sure Google Play Services are available
  await GoogleSignin.hasPlayServices();

  // Open Google account picker
  const response = await GoogleSignin.signIn();

  /**
   * Firebase needs the ID Token.
   */
  const idToken = response.data?.idToken;

  if (!idToken) {
    throw new Error("Google ID Token not found.");
  }

  // Create Firebase credential
  const credential = GoogleAuthProvider.credential(idToken);

  // Sign into Firebase
  const result = await signInWithCredential(auth, credential);

  return result.user;
}

/**
 * Logout current user
 */
export async function logout() {
  await signOut(auth);
  await GoogleSignin.signOut();
}

/**
 * Current logged in user
 */
export function getCurrentUser() {
  return auth.currentUser;
}

/**
 * Listen for authentication state changes
 */
export function subscribeToAuth(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}