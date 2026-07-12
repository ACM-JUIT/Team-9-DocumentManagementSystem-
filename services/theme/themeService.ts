import { ThemeMode } from "@/store/themeStore";
import * as SecureStore from "expo-secure-store";

const THEME_KEY = "NEXUSDOCS_THEME";

export async function saveTheme(
  theme: ThemeMode
) {
  await SecureStore.setItemAsync(
    THEME_KEY,
    theme
  );
}

export async function loadTheme(): Promise<ThemeMode> {
  const theme =
    await SecureStore.getItemAsync(
      THEME_KEY
    );

  if (
    theme === "light" ||
    theme === "dark" ||
    theme === "system"
  ) {
    return theme;
  }

  return "dark";
}