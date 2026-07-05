import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProfileCard from "@/components/profile/ProfileCard";
import ProfileOption from "@/components/profile/ProfileOption";

export default function Profile() {
  return(
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
    icon="person"
    title="Edit Profile"
    subtitle="Change your personal details"
    />
    <ProfileOption
    icon="folder"
    title="My Documents"
    subtitle="View uploaded files"
    />
    <ProfileOption
        icon="favorite"
        title="Favorites"
        subtitle="Your starred documents"
      />
    <Text style={styles.section}>
      Preferences
    </Text>
     <ProfileOption
        icon="settings"
        title="Settings"
        subtitle="App preferences"
      />
      <ProfileOption
      icon="logout"
      title="Logout"
      subtitle="Sign out of your account"
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