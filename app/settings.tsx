import ProfileOption from "@/components/profile/ProfileOption";
import { disconnectGoogleDrive } from "@/services/google/googleDrive";
import { useCloudStore } from "@/store/cloudStore";
import { router } from "expo-router";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function SettingsScreen() {
  const logoutCloud = useCloudStore(
    (state) => state.logout
  );

  async function handleDisconnectDrive() {
    Alert.alert(
      "Disconnect Google Drive",
      "Are you sure you want to disconnect your Google Drive account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Disconnect",
          style: "destructive",
          onPress: async () => {
            try {
              await disconnectGoogleDrive();

              logoutCloud();

              Alert.alert(
                "Success",
                "Google Drive has been disconnected successfully."
              );
            } catch (error: any) {
              Alert.alert(
                "Error",
                error.message ||
                  "Failed to disconnect Google Drive."
              );
            }
          },
        },
      ]
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Settings
        </Text>

        <Text style={styles.subtitle}>
          Manage your NexusDocs preferences
        </Text>
      </View>

      <Text style={styles.section}>
        General
      </Text>

      <ProfileOption
  emoji="🌙"
  title="Theme"
  subtitle="Light • Dark • System"
  color="#DBEAFE"
  onPress={() => router.push("/theme")}
/>

      <ProfileOption
        emoji="☁️"
        title="Disconnect Google Drive"
        subtitle="Remove your connected Drive account"
        color="#DCFCE7"
        onPress={handleDisconnectDrive}
      />

      <Text style={styles.section}>
        Security
      </Text>

      <ProfileOption
        emoji="🔒"
        title="Change Password"
        subtitle="Update your account password"
        color="#FEE2E2"
        onPress={() =>
          router.push("/change-password")
        }
      />

      <Text style={styles.section}>
        Storage
      </Text>

      <ProfileOption
        emoji="🗑️"
        title="Clear Cache"
        subtitle="Remove temporary app data"
        color="#FEF3C7"
        onPress={() =>
          Alert.alert(
            "Coming Soon",
            "Cache clearing feature will be added soon."
          )
        }
      />

      <Text style={styles.section}>
        About
      </Text>

      <ProfileOption
        emoji="📱"
        title="About NexusDocs"
        subtitle="Version, developers and licenses"
        color="#E9D5FF"
       onPress={() => router.push("/about")}
      />

      <ProfileOption
        emoji="📄"
        title="Privacy Policy"
        subtitle="Read our privacy policy"
        color="#DBEAFE"
        onPress={() => router.push("/privacy-policy")}
      />

      <ProfileOption
        emoji="📜"
        title="Terms & Conditions"
        subtitle="Read terms of service"
        color="#DCFCE7"
        onPress={() => router.push("/terms")}
      />

      <ProfileOption
        emoji="📧"
        title="Contact Us"
        subtitle="Reach the developers"
        color="#FEE2E2"
        onPress={() => router.push("/contact-us")}
      />

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  header: {
    marginHorizontal: 20,
    marginTop: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
  },

  section: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 14,
  },
});