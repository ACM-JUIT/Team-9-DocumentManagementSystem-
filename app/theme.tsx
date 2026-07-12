import { loadTheme, saveTheme } from "@/services/theme/themeService";
import {
    ThemeMode,
    useThemeStore,
} from "@/store/themeStore";
import { router } from "expo-router";
import { useEffect } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ThemeScreen() {
  const theme = useThemeStore(
    (state) => state.theme
  );

  const setTheme = useThemeStore(
    (state) => state.setTheme
  );

  useEffect(() => {
    async function restoreTheme() {
      const savedTheme =
        await loadTheme();

      setTheme(savedTheme);
    }

    restoreTheme();
  }, []);

  async function selectTheme(
    mode: ThemeMode
  ) {
    try {
      await saveTheme(mode);

      setTheme(mode);

      Alert.alert(
        "Theme Updated",
        `${mode.toUpperCase()} theme selected.`
      );
    } catch {
      Alert.alert(
        "Error",
        "Unable to save theme."
      );
    }
  }

  function ThemeOption({
    emoji,
    title,
    mode,
  }: {
    emoji: string;
    title: string;
    mode: ThemeMode;
  }) {
    const selected =
      theme === mode;

    return (
      <TouchableOpacity
        style={[
          styles.card,
          selected &&
            styles.selectedCard,
        ]}
        onPress={() =>
          selectTheme(mode)
        }
      >
        <Text style={styles.emoji}>
          {emoji}
        </Text>

        <View style={{ flex: 1 }}>
          <Text
            style={styles.cardTitle}
          >
            {title}
          </Text>
        </View>

        {selected && (
          <Text
            style={styles.check}
          >
            ✓
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Theme
        </Text>

        <Text
          style={styles.subtitle}
        >
          Choose your preferred
          appearance
        </Text>
      </View>

      <ThemeOption
        emoji="🌙"
        title="Dark"
        mode="dark"
      />

      <ThemeOption
        emoji="☀️"
        title="Light"
        mode="light"
      />

      <ThemeOption
        emoji="📱"
        title="System Default"
        mode="system"
      />

      <TouchableOpacity
        style={styles.back}
        onPress={() =>
          router.back()
        }
      >
        <Text
          style={styles.backText}
        >
          Back
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "#0F172A",
    padding: 20,
  },

  header: {
    marginTop: 45,
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontFamily:
      "Inter_700Bold",
    color: "#F8FAFC",
  },

  subtitle: {
    marginTop: 8,
    color: "#94A3B8",
    fontSize: 16,
    fontFamily:
      "Inter_400Regular",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:
      "#1F2937",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor:
      "#374151",
  },

  selectedCard: {
    borderColor:
      "#2563EB",
    borderWidth: 2,
  },

  emoji: {
    fontSize: 30,
    marginRight: 16,
  },

  cardTitle: {
    fontSize: 18,
    color: "#F8FAFC",
    fontFamily:
      "Inter_600SemiBold",
  },

  check: {
    color: "#22C55E",
    fontSize: 26,
    fontWeight: "700",
  },

  back: {
    marginTop: 20,
    alignItems: "center",
  },

  backText: {
    color: "#EF4444",
    fontSize: 16,
    fontFamily:
      "Inter_600SemiBold",
  },
});