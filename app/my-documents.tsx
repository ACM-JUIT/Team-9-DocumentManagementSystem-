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
import SearchBar from "@/components/inputs/SearchBar";

import {
    openFile,
    shareFile,
} from "@/services/open/openFile";

import { useFileStore } from "@/store/fileStore";

import { AppFile } from "@/types/file";

export default function MyDocuments() {
  const files = useFileStore((state) => state.files);

  

  const loadFiles = useFileStore(
    (state) => state.loadFiles
  );

  const favoriteFile = useFileStore(
  (state) => state.favoriteFile
);

  const [search, setSearch] = useState("");

  const [selectedFile, setSelectedFile] =
    useState<AppFile | null>(null);

  const [menuVisible, setMenuVisible] =
    useState(false);

  useEffect(() => {
    loadFiles();
  }, []);

  function openMenu(file: AppFile) {
    setSelectedFile(file);
    setMenuVisible(true);
  }

  const filteredFiles = files.filter((file) =>
    file.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>
            My Documents
          </Text>

          <Text style={styles.subtitle}>
            View and manage all your files
          </Text>
        </View>

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.section}>
          <Text style={styles.heading}>
            All Documents
          </Text>

          <Text style={styles.fileCount}>
            {filteredFiles.length}{" "}
            {filteredFiles.length === 1
              ? "File"
              : "Files"}
          </Text>

          {filteredFiles.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>
                📂
              </Text>

              <Text style={styles.emptyTitle}>
                No documents found
              </Text>

              <Text style={styles.emptySubtitle}>
                Your uploaded documents will appear here
              </Text>
            </View>
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
    marginHorizontal: 20,
    marginTop: 30,
  },

  heading: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
  },

  fileCount: {
    marginTop: 6,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    color: "#94A3B8",
  },

  emptyContainer: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 54,
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
  },

  emptySubtitle: {
    marginTop: 8,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 22,
  },
});