import { useState } from "react";
import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

import FileActionMenu from "@/components/file/FileActionMenu";
import UniversalFileCard from "@/components/file/UniversalFileCard";
import {
    openFile
} from "@/services/openFile";
import { useCloudStore } from "@/store/cloudStore";
import { AppFile } from "@/types/file";

export default function DriveScreen() {
  const driveFiles = useCloudStore(
    (state) => state.driveFiles
  );

  const [selectedFile, setSelectedFile] =
    useState<AppFile | null>(null);

  const [menuVisible, setMenuVisible] =
    useState(false);

  function openMenu(file: AppFile) {
    setSelectedFile(file);
    setMenuVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Google Drive
      </Text>

      <FlatList
        data={driveFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UniversalFileCard
            file={item}
            onMenuPress={() =>
              openMenu(item)
            }
          />
        )}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      />

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
    Alert.alert(
      "Coming Soon",
      "Sharing Google Drive files will be added soon."
    );

    setMenuVisible(false);
  }}
  onDownload={() => {
    Alert.alert(
      "Coming Soon",
      "Download feature will be added next."
    );

    setMenuVisible(false);
  }}
  onFavorite={() => {
    Alert.alert(
      "Coming Soon",
      "Favorites feature will be added next."
    );

    setMenuVisible(false);
  }}
  onDetails={() => {
    Alert.alert(
      "File Details",
      `Name: ${selectedFile?.name}

Size: ${selectedFile?.size ?? 0} Bytes

Type: ${selectedFile?.mimeType}`
    );

    setMenuVisible(false);
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingTop: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginHorizontal: 20,
    marginBottom: 20,
  },
});