import { openFile } from "@/services/open/openFile";
import { AppFile } from "@/types/file";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  file: AppFile;
  onPress?: () => void;
};

export default function SearchResultCard({
  file,
  onPress,
}: Props) {
  const getIcon = () => {
    const type = file.mimeType.toLowerCase();

    if (type.includes("pdf")) {
      return {
        icon: "picture-as-pdf",
        color: "#EF4444",
      };
    }

    if (type.includes("image")) {
      return {
        icon: "image",
        color: "#3B82F6",
      };
    }

    if (
      type.includes("word") ||
      type.includes("document") ||
      type.includes("officedocument")
    ) {
      return {
        icon: "description",
        color: "#2563EB",
      };
    }

    if (type.includes("video")) {
      return {
        icon: "movie",
        color: "#8B5CF6",
      };
    }

    return {
      icon: "insert-drive-file",
      color: "#64748B",
    };
  };

  const { icon, color } = getIcon();

  const formatSize = (size: number) => {
    if (!size) return "--";

    if (size < 1024)
      return `${size} B`;

    if (size < 1024 * 1024)
      return `${(
        size / 1024
      ).toFixed(1)} KB`;

    if (size < 1024 * 1024 * 1024)
      return `${(
        size /
        (1024 * 1024)
      ).toFixed(1)} MB`;

    return `${(
      size /
      (1024 * 1024 * 1024)
    ).toFixed(1)} GB`;
  };

  return (
    <TouchableOpacity
  activeOpacity={0.8}
  style={styles.card}
  onPress={() => {
    if (onPress) {
      onPress();
    } else {
      openFile(file);
    }
  }}
>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${color}20`,
          },
        ]}
      >
        <MaterialIcons
          name={icon as any}
          size={34}
          color={color}
        />
      </View>

      <View style={styles.info}>
        <Text
          numberOfLines={1}
          style={styles.title}
        >
          {file.name}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>
            {formatSize(file.size)}
          </Text>

          <View style={styles.dot} />

          <Text style={styles.meta}>
            {file.storage}
          </Text>
        </View>
      </View>

      {file.isFavorite && (
        <MaterialIcons
          name="favorite"
          size={22}
          color="#EF4444"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",

    marginHorizontal: 20,
    marginTop: 16,

    borderRadius: 22,

    padding: 18,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,

    elevation: 5,
  },

  iconContainer: {
    width: 60,
    height: 60,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontFamily: "Inter_600SemiBold",
    color: "#F8FAFC",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 6,
  },

  meta: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
  },

  dot: {
    width: 5,
    height: 5,

    borderRadius: 10,

    backgroundColor: "#64748B",

    marginHorizontal: 8,
  },
});