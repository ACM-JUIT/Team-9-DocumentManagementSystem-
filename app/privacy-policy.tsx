import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Privacy Policy
      </Text>

      <Text style={styles.updated}>
        Last Updated: July 2026
      </Text>

      <Text style={styles.heading}>
        1. Information We Collect
      </Text>

      <Text style={styles.body}>
        NexusDocs only accesses information
        necessary to provide document
        management features. This may
        include your email address,
        profile information and Google
        Drive documents that you choose
        to connect.
      </Text>

      <Text style={styles.heading}>
        2. Google Drive Access
      </Text>

      <Text style={styles.body}>
        We only access the files that you
        explicitly authorize through your
        Google account. We never modify,
        delete or share your Google Drive
        files without your permission.
      </Text>

      <Text style={styles.heading}>
        3. Local Storage
      </Text>

      <Text style={styles.body}>
        Some information such as profile
        picture, preferences and imported
        document metadata is stored
        securely on your device to improve
        your experience.
      </Text>

      <Text style={styles.heading}>
        4. Data Security
      </Text>

      <Text style={styles.body}>
        NexusDocs uses Firebase
        Authentication and Google's secure
        OAuth services. We do not store
        your passwords on our servers.
      </Text>

      <Text style={styles.heading}>
        5. Third-Party Services
      </Text>

      <Text style={styles.body}>
        NexusDocs integrates with Firebase
        Authentication and Google Drive API
        to provide authentication and cloud
        storage features.
      </Text>

      <Text style={styles.heading}>
        6. Contact
      </Text>

      <Text style={styles.body}>
        If you have questions regarding
        this Privacy Policy, please contact
        the NexusDocs development team.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Back
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        © 2026 NexusDocs
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

  updated: {
    marginTop: 10,
    marginBottom: 30,
    color: "#60A5FA",
    fontFamily: "Inter_500Medium",
  },

  heading: {
    marginTop: 20,
    marginBottom: 8,
    color: "#F8FAFC",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },

  body: {
    color: "#CBD5E1",
    lineHeight: 24,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },

  button: {
    marginTop: 40,
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },

  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
  },
});