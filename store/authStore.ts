import { User } from "firebase/auth";
import { create } from "zustand";

import {
  login,
  loginWithGoogle,
  logout,
  register,
  subscribeToAuth,
} from "@/services/auth/authService";

interface AuthStore {
  user: User | null;

  loading: boolean;

  initialize: () => () => void;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  loginWithGoogle: () => Promise<void>;

  register: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  loading: true,

  initialize: () => {
    const unsubscribe = subscribeToAuth((user) => {
      set({
        user: user ? ({ ...user } as User) : null,
        loading: false,
      });
    });

    return unsubscribe;
  },

  login: async (email, password) => {
    const user = await login(email, password);

    set({
      user: { ...user } as User,
    });
  },

  loginWithGoogle: async () => {
    const user = await loginWithGoogle();

    set({
      user: { ...user } as User,
    });
  },

  register: async (email, password) => {
    const user = await register(email, password);

    set({
      user: { ...user } as User,
    });
  },

  logout: async () => {
    await logout();

    set({
      user: null,
      loading: false,
    });
  },

  refreshUser: (user: User) => {
    set({
      user: { ...user } as User,
    });
  },
}));