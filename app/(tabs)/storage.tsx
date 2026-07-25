import StorageProviderCard from "@/components/storage/StorageProviderCard";
import StorageUsageCard from "@/components/storage/StorageUsageCard";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function Storage() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Storage
        </Text>
        <Text style={styles.subtitle}>
          Manage your files and storage
        </Text>
      </View>
      <StorageUsageCard />
      <Text style={styles.section}>
        Storage Providers
      </Text>
      <StorageProviderCard
        emoji="☁️"
        title="Google Drive"
        subtitle="Ready to Connect"
        color="#DBEAFE"
      />
      <StorageProviderCard
        emoji="📱"
        title="Local Storage"
        subtitle="Available"
        color="#DCFCE7"
      />
      <StorageProviderCard
        emoji="🪟"
        title="OneDrive"
        subtitle="Comming Soon"
        color="#E9D5FF"
      />
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
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "700",
  },
  content: {
    paddingBottom: 30,
  },
});