import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>
          📄
        </Text>

        <Text style={styles.title}>
          NexusDocs
        </Text>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>

        <Text style={styles.description}>
          NexusDocs is a modern document
          management application designed
          to organize, search and manage
          documents across local storage
          and Google Drive.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          👨‍💻 Developed By
        </Text>

        <Text style={styles.text}>
          Team 9
        </Text>

        <Text style={styles.text}>
          ACM JUIT
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          ⚙️ Tech Stack
        </Text>

        <Text style={styles.text}>
          • React Native
        </Text>

        <Text style={styles.text}>
          • Expo
        </Text>

        <Text style={styles.text}>
          • Firebase Authentication
        </Text>

        <Text style={styles.text}>
          • Google Drive API
        </Text>

        <Text style={styles.text}>
          • TypeScript
        </Text>

        <Text style={styles.text}>
          • Zustand
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          ❤️ Mission
        </Text>

        <Text style={styles.text}>
          Making document management
          smarter, faster and easier for
          everyone.
        </Text>
      </View>

      <Text style={styles.copyright}>
        © 2026 NexusDocs
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Back
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 55,
  },

  logo: {
    fontSize: 70,
  },

  title: {
    marginTop: 12,
    fontSize: 34,
    color: "#F8FAFC",
    fontFamily: "Inter_700Bold",
  },

  version: {
    marginTop: 8,
    color: "#60A5FA",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },

  description: {
    marginTop: 20,
    color: "#CBD5E1",
    textAlign: "center",
    lineHeight: 24,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },

  card: {
    backgroundColor: "#1F2937",
    borderRadius: 18,
    padding: 20,
    marginTop: 24,
  },

  heading: {
    color: "#F8FAFC",
    fontSize: 20,
    marginBottom: 14,
    fontFamily: "Inter_700Bold",
  },

  text: {
    color: "#CBD5E1",
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "Inter_400Regular",
  },

  copyright: {
    textAlign: "center",
    color: "#94A3B8",
    marginTop: 35,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
});