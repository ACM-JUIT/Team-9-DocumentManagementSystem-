import * as DocumentPicker from "expo-document-picker";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useFileStore } from "@/store/fileStore";

export default function QuickActions() {
  const addFile = useFileStore((state) => state.addFile);

  async function upload() {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: false,
    });

    if (result.canceled) return;

    const file = result.assets[0];

    await addFile({
      id: Date.now().toString(),
      name: file.name,
      uri: file.uri,
      size: file.size ?? 0,
      mimeType: file.mimeType ?? "",
      uploadedAt: new Date().toISOString(),
    });

    alert("Document Uploaded ✅");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={upload}
      >
        <Text style={styles.icon}>📤</Text>
        <Text style={styles.text}>Upload</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.icon}>☁️</Text>
        <Text style={styles.text}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.icon}>🪟</Text>
        <Text style={styles.text}>OneDrive</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 25,
  },

  card: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 20,
    elevation: 4,
  },

  icon: {
    fontSize: 28,
  },

  text: {
    marginTop: 10,
    fontWeight: "700",
  },
});