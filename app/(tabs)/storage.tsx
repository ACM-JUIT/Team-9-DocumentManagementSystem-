import { router } from "expo-router";
import { useMemo } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import OfflineFileCard from "@/components/storage/OfflineFileCard";
import StorageActionCard from "@/components/storage/StorageActionCard";
import StorageStatCard from "@/components/storage/StorageStatCard";

import { useCloudStore } from "@/store/cloudStore";
import { useFileStore } from "@/store/fileStore";

export default function StorageScreen() {
  const files = useFileStore(
    (state) => state.files
  );

  const loadFiles = useFileStore(
    (state) => state.loadFiles
  );

  const connected = useCloudStore(
    (state) => state.connected
  );

  const totalFiles = files.length;

  const favoriteFiles = files.filter(
    (file) => file.isFavorite
  ).length;

  const totalStorage = useMemo(() => {
    return files.reduce(
      (sum, file) => sum + file.size,
      0
    );
  }, [files]);

  function formatSize(bytes: number) {
    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    if (bytes < 1024 * 1024 * 1024) {
      return `${(
        bytes /
        1024 /
        1024
      ).toFixed(2)} MB`;
    }

    return `${(
      bytes /
      1024 /
      1024 /
      1024
    ).toFixed(2)} GB`;
  }

  async function refreshStorage() {
    try {
      await loadFiles();

      Alert.alert(
        "Success",
        "Storage refreshed successfully."
      );
    } catch {
      Alert.alert(
        "Error",
        "Unable to refresh storage."
      );
    }
  }

  const recentFiles = [...files].slice(0, 5);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.small}>
          Storage Center
        </Text>

        <Text style={styles.title}>
          Everything organized.
        </Text>

        <Text style={styles.subtitle}>
          Monitor your documents,
          storage and cloud
          connections.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Storage Overview
        </Text>

        <View style={styles.row}>
          <StorageStatCard
            icon="📄"
            title="Files"
            value={totalFiles}
          />

          <StorageStatCard
            icon="💾"
            title="Storage"
            value={formatSize(totalStorage)}
          />
        </View>

        <View style={styles.row}>
          <StorageStatCard
            icon="⭐"
            title="Favorites"
            value={favoriteFiles}
          />

          <StorageStatCard
            icon="☁️"
            title="Google Drive"
            value={
              connected
                ? "Connected"
                : "Offline"
            }
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Quick Actions
        </Text>

        <StorageActionCard
          icon="🔄"
          title="Refresh Storage"
          subtitle="Reload all documents"
          onPress={refreshStorage}
        />

        <StorageActionCard
          icon="☁️"
          title="Google Drive"
          subtitle="Open your connected drive"
          onPress={() =>
            router.push("/drive")
          }
        />

        <StorageActionCard
          icon="📁"
          title="Local Files"
          subtitle="Browse stored documents"
          onPress={() =>
            Alert.alert(
              "Local Storage",
              "All your saved files are displayed below."
            )
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Recent Files
        </Text>
                {recentFiles.length === 0 ? (
          <Text style={styles.empty}>
            No documents available.
          </Text>
        ) : (
          recentFiles.map((file) => (
            <OfflineFileCard
              key={file.id}
              name={file.name}
              size={formatSize(file.size)}
              date={
                file.modifiedAt
                  ? new Date(
                      file.modifiedAt
                    ).toLocaleDateString()
                  : "Recently Added"
              }
              onPress={() =>
                Alert.alert(
                  file.name,
                  `Storage : ${file.storage}

Type : ${file.mimeType}

Size : ${formatSize(
                    file.size
                  )}`
                )
              }
            />
          ))
        )}
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  header: {
    paddingTop: 70,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },

  small: {
    color: "#60A5FA",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "800",
    marginTop: 6,
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    width: "90%",
  },

  section: {
    marginHorizontal: 20,
    marginTop: 26,
  },

  heading: {
    fontSize: 24,
    color: "#F8FAFC",
    fontFamily: "Inter_700Bold",
    marginBottom: 18,
    letterSpacing: 0.3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  empty: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
    fontFamily: "Inter_500Medium",
  },
});