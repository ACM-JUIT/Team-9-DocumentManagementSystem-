import { MaterialIcons } from "@expo/vector-icons";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
  query: string;
  onPress: () => void;
  onDelete?: () => void;
};

export default function RecentSearchItem({
  query,
  onPress,
  onDelete,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="history"
            size={22}
            color="#60A5FA"
          />
        </View>

        <Text
          numberOfLines={1}
          style={styles.query}
        >
          {query}
        </Text>
      </View>

      {onDelete && (
        <TouchableOpacity
          onPress={onDelete}
          hitSlop={10}
        >
          <MaterialIcons
            name="close"
            size={20}
            color="#94A3B8"
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",

    marginHorizontal: 20,
    marginTop: 12,

    paddingHorizontal: 18,
    paddingVertical: 16,

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "#374151",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 42,
    height: 42,

    borderRadius: 12,

    backgroundColor: "#111827",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  query: {
    flex: 1,

    color: "#F8FAFC",

    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
});