import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { openFile } from "@/services/open/openFile";
import { AppFile } from "@/types/file";

type Props = {
  file: AppFile;
  onPress?: () => void;
  onMenuPress?: () => void;
};

export default function UniversalFileCard({
  file,
  onPress,
  onMenuPress,
}: Props) {
  function getIcon() {
    const type =
      file.mimeType?.toLowerCase() ?? "";

    if (
      type.includes("folder") ||
      type === "application/vnd.google-apps.folder"
    ) {
      return (
        <MaterialIcons
          name="folder"
          size={32}
          color="#F59E0B"
        />
      );
    }

    if (type.includes("pdf")) {
      return (
        <MaterialIcons
          name="picture-as-pdf"
          size={32}
          color="#DC2626"
        />
      );
    }

    if (type.includes("image")) {
      return (
        <MaterialIcons
          name="image"
          size={32}
          color="#16A34A"
        />
      );
    }

    if (type.includes("word")) {
      return (
        <FontAwesome5
          name="file-word"
          size={28}
          color="#2563EB"
        />
      );
    }

    if (type.includes("excel")) {
      return (
        <FontAwesome5
          name="file-excel"
          size={28}
          color="#16A34A"
        />
      );
    }

    if (type.includes("powerpoint")) {
      return (
        <FontAwesome5
          name="file-powerpoint"
          size={28}
          color="#EA580C"
        />
      );
    }

    return (
      <MaterialIcons
        name="insert-drive-file"
        size={32}
        color="#64748B"
      />
    );
  }

  function formatSize(size: number) {
    if (!size) return "--";

    if (size < 1024)
      return `${size} B`;

    if (size < 1024 * 1024)
      return `${(size / 1024).toFixed(1)} KB`;

    if (size < 1024 * 1024 * 1024)
      return `${(size / 1024 / 1024).toFixed(2)} MB`;

    return `${(
      size /
      1024 /
      1024 /
      1024
    ).toFixed(2)} GB`;
  }

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={
        onPress ??
        (() => openFile(file))
      }
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
            {formatSize(file.size)}
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {file.storage}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
  onPress={onMenuPress}
>
  <Entypo
    name="dots-three-vertical"
    size={18}
    color="#64748B"
  />
</TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.28,
    shadowRadius: 10,

    elevation: 7,
  },

  left: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,

    borderWidth: 1,
    borderColor: "#3B82F6",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#F8FAFC",
  },

  subtitle: {
    marginTop: 5,
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "500",
  },

  badge: {
    marginTop: 10,
    backgroundColor: "#1D4ED8",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#3B82F6",
  },

  badgeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 0.3,
  },
});