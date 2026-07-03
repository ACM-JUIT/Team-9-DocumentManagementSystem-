import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";

import { auth } from "./firebase";

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
 * Logout current user
 */
export async function logout() {
  await signOut(auth);
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