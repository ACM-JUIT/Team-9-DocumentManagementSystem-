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

    storage: "Local",

    isFavorite: false,
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
    marginTop: 28,
    marginBottom: 10,
  },

  card: {
    width: "31%",
    backgroundColor: "#1F2937", // Dark card
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,

    borderWidth: 1,
    borderColor: "#334155",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 8,
  },

  icon: {
    fontSize: 32,
    marginBottom: 12,
  },

  text: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: "700",
    color: "#F8FAFC",
    letterSpacing: 0.3,
  },
});