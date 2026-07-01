import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import FileCard from "@/components/home/FileCard";
import GreetingCard from "@/components/home/GreetingCard";
import ProviderCard from "@/components/home/ProviderCard";
import QuickActions from "@/components/home/QuickActions";
import StatsCard from "@/components/home/StatsCard";

import { useFileStore } from "@/store/fileStore";

export default function Dashboard() {
  const files = useFileStore((state) => state.files);

  const loadFiles = useFileStore(
    (state) => state.loadFiles
  );

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <GreetingCard />

      <StatsCard />

      <QuickActions />

      <View style={styles.section}>
        <Text style={styles.heading}>
          Connected Storage
        </Text>

        <ProviderCard
          icon="📱"
          title="Local Storage"
          color="#DBEAFE"
        />

        <ProviderCard
          icon="☁️"
          title="Google Drive"
          color="#FEE2E2"
        />

        <ProviderCard
          icon="🪟"
          title="Microsoft OneDrive"
          color="#DCFCE7"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Recent Documents
        </Text>

        {files.length === 0 ? (
          <Text style={styles.empty}>
            No documents uploaded yet.
          </Text>
        ) : (
          files.map((file) => (
            <FileCard
              key={file.id}
              file={file}
            />
          ))
        )}
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  section: {
    marginHorizontal: 20,
    marginTop: 25,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },

  empty: {
    color: "gray",
    fontSize: 16,
  },
});