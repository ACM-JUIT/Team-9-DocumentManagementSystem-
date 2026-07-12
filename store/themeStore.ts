import { create } from "zustand";

export type ThemeMode =
  | "light"
  | "dark"
  | "system";

interface ThemeStore {
  theme: ThemeMode;

  setTheme: (
    theme: ThemeMode
  ) => void;
}

export const useThemeStore =
  create<ThemeStore>((set) => ({
    theme: "dark",

    setTheme: (theme) =>
      set({
        theme,
      }),
  }));