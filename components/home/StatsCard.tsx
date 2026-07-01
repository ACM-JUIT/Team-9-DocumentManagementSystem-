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
    marginTop: 20,
  },

  card: {
    width: "48%",
    backgroundColor: "#2563EB",
    borderRadius: 18,
    paddingVertical: 22,
    alignItems: "center",
  },

  number: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  label: {
    marginTop: 8,
    color: "#E5E7EB",
    fontSize: 15,
  },
});