import { StyleSheet, Text, View } from "react-native";

import { useFileStore } from "@/store/fileStore";

export default function StatsCard() {
  const files = useFileStore((state) => state.files);

  const totalFiles = files.length;

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
      return `${(bytes / 1024 / 1024).toFixed(2)} MB`;

    return `${(
      bytes /
      1024 /
      1024 /
      1024
    ).toFixed(2)} GB`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.number}>
          {totalFiles}
        </Text>

        <Text style={styles.label}>
          Files
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>
          {formatSize(totalSize)}
        </Text>

        <Text style={styles.label}>
          Used Storage
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 22,
    marginBottom: 6,
  },

  card: {
    width: "48%",
    backgroundColor: "#1D4ED8", // Royal Blue
    borderRadius: 20,
    paddingVertical: 24,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#3B82F6",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 8,
  },

  number: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  label: {
    marginTop: 8,
    color: "#DBEAFE",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
});