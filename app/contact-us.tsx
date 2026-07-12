import { router } from "expo-router";
import {
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ContactUsScreen() {
  function openEmail() {
    Linking.openURL(
      "mailto:nexusdocs.team@gmail.com"
    );
  }

  function openGithub() {
    Linking.openURL(
      "https://github.com/ACM-JUIT/Team-9-DocumentManagementSystem-"
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Contact Us
      </Text>

      <Text style={styles.subtitle}>
        We'd love to hear your feedback and suggestions.
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={openEmail}
      >
        <Text style={styles.icon}>📧</Text>

        <Text style={styles.heading}>
          Email
        </Text>

        <Text style={styles.text}>
          nexusdocs.team@gmail.com
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={openGithub}
      >
        <Text style={styles.icon}>💻</Text>

        <Text style={styles.heading}>
          GitHub Repository
        </Text>

        <Text style={styles.text}>
          github.com/ACM-JUIT/
        </Text>

        <Text style={styles.text}>
          Team-9-DocumentManagementSystem-
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          Linking.openURL(
            "mailto:nexusdocs.team@gmail.com?subject=Bug Report - NexusDocs"
          )
        }
      >
        <Text style={styles.icon}>🐞</Text>

        <Text style={styles.heading}>
          Report a Bug
        </Text>

        <Text style={styles.text}>
          Send us your issue or feature request.
        </Text>
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Thank You ❤️
        </Text>

        <Text style={styles.infoText}>
          Your feedback helps us improve NexusDocs.
          Thank you for supporting our project.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Back
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        © 2026 NexusDocs • Team 9 • ACM JUIT
      </Text>

      <Text>{"\n"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  title: {
    marginTop: 50,
    fontSize: 32,
    color: "#F8FAFC",
    fontFamily: "Inter_700Bold",
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 30,
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 22,
  },

  card: {
    backgroundColor: "#1F2937",
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#374151",
  },

  icon: {
    fontSize: 34,
  },

  heading: {
    marginTop: 12,
    fontSize: 20,
    color: "#F8FAFC",
    fontFamily: "Inter_700Bold",
  },

  text: {
    marginTop: 6,
    color: "#CBD5E1",
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },

  infoCard: {
    backgroundColor: "#1E3A8A",
    borderRadius: 18,
    padding: 20,
    marginTop: 10,
  },

  infoTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },

  infoText: {
    color: "#DBEAFE",
    marginTop: 10,
    lineHeight: 24,
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

  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});