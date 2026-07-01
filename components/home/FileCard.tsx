import * as Sharing from "expo-sharing";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

type Props = {
  file: any;
};

export default function FileCard({ file }: Props) {
  async function openFile() {
  try {
    const available =
      await Sharing.isAvailableAsync();

    if (!available) {
      Alert.alert(
        "Not Supported",
        "Sharing is not available on this device."
      );
      return;
    }

    await Sharing.shareAsync(file.uri);
  } catch (error) {
    console.log("Share Error:", error);
  }
}

  function getIcon() {
    const type =
      file.mimeType?.toLowerCase() ?? "";

    if (type.includes("pdf"))
      return (
        <MaterialIcons
          name="picture-as-pdf"
          size={32}
          color="#E53935"
        />
      );

    if (type.includes("image"))
      return (
        <MaterialIcons
          name="image"
          size={32}
          color="#43A047"
        />
      );

    if (type.includes("word"))
      return (
        <FontAwesome5
          name="file-word"
          size={28}
          color="#1565C0"
        />
      );

    if (type.includes("excel"))
      return (
        <FontAwesome5
          name="file-excel"
          size={28}
          color="#2E7D32"
        />
      );

    if (type.includes("powerpoint"))
      return (
        <FontAwesome5
          name="file-powerpoint"
          size={28}
          color="#EF6C00"
        />
      );

    return (
      <MaterialIcons
        name="insert-drive-file"
        size={32}
        color="#607D8B"
      />
    );
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={openFile}
      activeOpacity={0.8}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>

        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={styles.title}
          >
            {file.name}
          </Text>

          <Text style={styles.subtitle}>
            {(file.size / 1024).toFixed(1)} KB
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {file.storage}
            </Text>
          </View>
        </View>
      </View>

      <Entypo
        name="dots-three-vertical"
        size={18}
        color="#64748B"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
  },

  left: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: "#EEF4FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 14,
  },

  badge: {
    marginTop: 10,
    backgroundColor: "#DBEAFE",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 12,
  },
});