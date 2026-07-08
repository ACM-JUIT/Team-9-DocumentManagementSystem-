import { router } from "expo-router";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import ProfileCard from "@/components/profile/ProfileCard";
import ProfileOption from "@/components/profile/ProfileOption";
import { useAuthStore } from "@/store/authStore";

export default function Profile() {
  const logout = useAuthStore((state) => state.logout);

  async function handleLogout() {
    try {
      await logout();

      router.replace("/login");
    } catch (error: any) {
      Alert.alert(
        "Logout Failed",
        error.message || "Something went wrong."
      );
    }
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Profile
        </Text>

        <Text style={styles.subtitle}>
          Manage your account and preferences
        </Text>
      </View>

      <ProfileCard />

      <Text style={styles.section}>
        Account
      </Text>

      <ProfileOption
        emoji="👤"
        title="Edit Profile"
        subtitle="Update your profile"
        color="#DBEAFE"
      />

      <ProfileOption
        emoji="📂"
        title="My Documents"
        subtitle="View all your files"
        color="#DCFCE7"
      />

      <ProfileOption
        emoji="⭐"
        title="Favorites"
        subtitle="Access starred files"
        color="#FEF3C7"
      />

      <Text style={styles.section}>
        Preferences
      </Text>

      <ProfileOption
        emoji="⚙️"
        title="Settings"
        subtitle="Manage app preferences"
        color="#E9D5FF"
      />

      <ProfileOption
        emoji="🚪"
        title="Logout"
        subtitle="Sign out of your account"
        color="#FEE2E2"
        onPress={handleLogout}
      />

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  header: {
    marginHorizontal: 20,
    marginTop: 55,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#6B7280",
  },

  section: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
    color: "#374151",
  },
});