import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  GoogleAuthProvider,
  onIdTokenChanged,
  reauthenticateWithCredential,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
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
  await GoogleSignin.hasPlayServices();

  try {
    await GoogleSignin.signOut();
  } catch {}

  const response = await GoogleSignin.signIn();

  const idToken = response.data?.idToken;

  if (!idToken) {
    throw new Error("Google ID Token not found.");
  }

  const credential =
    GoogleAuthProvider.credential(idToken);

  const result =
    await signInWithCredential(
      auth,
      credential
    );

  return result.user;
}

/**
 * Logout
 */
export async function logout(): Promise<void> {
  await signOut(auth);

  try {
    await GoogleSignin.revokeAccess();
  } catch {}

  try {
    await GoogleSignin.signOut();
  } catch {}
}

/**
 * Change Password
 */
export async function changePassword(
  currentPassword: string,
  newPassword: string
): Promise<void> {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No authenticated user.");
  }

  if (!user.email) {
    throw new Error("User email not found.");
  }

  const isGoogleUser =
    user.providerData.some(
      (provider) =>
        provider.providerId === "google.com"
    );

  if (isGoogleUser) {
    throw new Error(
      "This account uses Google Sign-In. Please change your password from your Google Account."
    );
  }

  const credential =
    EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

  await reauthenticateWithCredential(
    user,
    credential
  );

  await updatePassword(
    user,
    newPassword
  );
}

/**
 * Current user
 */
export function getCurrentUser() {
  return auth.currentUser;
}

/**
 * Listen for auth/profile changes
 */
export function subscribeToAuth(
  callback: (user: User | null) => void
) {
  return onIdTokenChanged(
    auth,
    callback
  );
}