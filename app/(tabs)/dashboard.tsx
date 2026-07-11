import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import FileActionMenu from "@/components/file/FileActionMenu";
import UniversalFileCard from "@/components/file/UniversalFileCard";

import GreetingCard from "@/components/home/GreetingCard";
import ProviderCard from "@/components/home/ProviderCard";
import QuickActions from "@/components/home/QuickActions";
import StatsCard from "@/components/home/StatsCard";
import SearchBar from "@/components/inputs/SearchBar";

import {
  connectGoogleDrive,
  getDriveFiles,
  restoreGoogleSession,
} from "@/services/google/googleDrive";
import {
  openFile,
  shareFile,
} from "@/services/open/openFile";



import { useCloudStore } from "@/store/cloudStore";
import { useFileStore } from "@/store/fileStore";

import { AppFile } from "@/types/file";

export default function Dashboard() {
  const files = useFileStore((state) => state.files);

const loadFiles = useFileStore(
  (state) => state.loadFiles
);

const favoriteFile = useFileStore(
  (state) => state.favoriteFile
);

const [search, setSearch] = useState("");

  // ---------------- Google Drive Store ----------------

  const connected = useCloudStore(
    (state) => state.connected
  );

  const driveFiles = useCloudStore(
    (state) => state.driveFiles
  );

  const setConnected = useCloudStore(
    (state) => state.setConnected
  );

  const setAccessToken = useCloudStore(
    (state) => state.setAccessToken
  );

  const setDriveFiles = useCloudStore(
    (state) => state.setDriveFiles
  );

  // ---------------- File Action Menu ----------------

  const [selectedFile, setSelectedFile] =
    useState<AppFile | null>(null);

  const [menuVisible, setMenuVisible] =
    useState(false);

  function openMenu(file: AppFile) {
    setSelectedFile(file);
    setMenuVisible(true);
  }

  // ----------------------------------------------------

  useEffect(() => {
    async function initialize() {
      await loadFiles();

      try {
        const token =
          await restoreGoogleSession();

        if (!token) return;

        const files =
          await getDriveFiles(token);

        setConnected(true);

        setAccessToken(token);

        setDriveFiles(files);
      } catch (error) {
        console.log(error);
      }
    }

    initialize();
  }, []);

  const filteredFiles = files.filter((file) =>
    file.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalSize = files.reduce(
    (sum, file) => sum + file.size,
    0
  );

  function formatSize(bytes: number) {
    if (bytes < 1024)
      return `${bytes} B`;

    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;

    if (bytes < 1024 * 1024 * 1024)
      return `${(
        bytes /
        1024 /
        1024
      ).toFixed(2)} MB`;

    return `${(
      bytes /
      1024 /
      1024 /
      1024
    ).toFixed(2)} GB`;
  }

  async function handleGoogleLogin() {
    try {
      const accessToken =
        await connectGoogleDrive();

      const files =
        await getDriveFiles(accessToken);

      setConnected(true);

      setAccessToken(accessToken);

      setDriveFiles(files);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <GreetingCard />

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <StatsCard />

        <QuickActions />

        <View style={styles.section}>
          <Text style={styles.heading}>
            Connected Storage
          </Text>

          

          <ProviderCard
  icon="📱"
  title="Local Storage"
  color="#2B3A4F"
  connected={true}
  files={files.length}
  storage={formatSize(totalSize)}
/>

<ProviderCard
  icon="☁️"
  title="Google Drive"
  color="#3F2D34"
  connected={connected}
  files={driveFiles.length}
  storage="Cloud"
  onPress={() => {
    if (!connected) {
      handleGoogleLogin();
    } else {
      router.push("/drive");
    }
  }}
/>

<ProviderCard
  icon="🪟"
  title="Microsoft OneDrive"
  color="#403456"
  connected={false}
  files={0}
  storage="0 MB"
/>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            Recent Documents
          </Text>

          {filteredFiles.length === 0 ? (
            <Text style={styles.empty}>
              No matching documents found.
            </Text>
          ) : (
            filteredFiles.map((file) => (
              <UniversalFileCard
                key={file.id}
                file={file}
                onMenuPress={() =>
                  openMenu(file)
                }
              />
            ))
          )}
        </View>

        <View style={{ height: 60 }} />
      </ScrollView>

      
        <FileActionMenu
  visible={menuVisible}
  file={selectedFile}
  onClose={() =>
    setMenuVisible(false)
  }
  onOpen={() => {
    if (selectedFile) {
      openFile(selectedFile);
    }

    setMenuVisible(false);
  }}
  onShare={() => {
    if (selectedFile) {
      shareFile(selectedFile);
    }

    setMenuVisible(false);
  }}
  onDownload={() => {
    Alert.alert(
      "Coming Soon",
      "Download feature will be implemented next."
    );

    setMenuVisible(false);
  }}
  onFavorite={async () => {
  if (selectedFile) {
    await favoriteFile(selectedFile.id);

    Alert.alert(
      selectedFile.isFavorite
        ? "Removed from Favorites"
        : "Added to Favorites",
      selectedFile.isFavorite
        ? "The document has been removed from your favorites."
        : "The document has been added to your favorites."
    );
  }

  setMenuVisible(false);
}}


  onDetails={() => {
    Alert.alert(
      "File Details",
      `Name: ${selectedFile?.name}

Type: ${selectedFile?.mimeType}

Size: ${selectedFile?.size ?? 0} Bytes

Storage: ${selectedFile?.storage}`
    );

    setMenuVisible(false);
  }}
/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  section: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 6,
  },

  heading: {
    fontSize: 24,
    color: "#F8FAFC",
    fontFamily: "Inter_700Bold",
    marginBottom: 18,
    letterSpacing: 0.4,
  },

  empty: {
    color: "#94A3B8",
    fontSize: 15,
    textAlign: "center",
    marginTop: 28,
    fontFamily: "Inter_500Medium",
  },
});