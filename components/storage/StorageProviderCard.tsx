import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type Props = {
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
};
export default function StorageProviderCard({
  emoji,
  title,
  subtitle,
  color,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: color },
          ]}
        >
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  emoji: {
    fontSize: 26,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 3,
    fontSize: 14,
    color: "#6B7280",
  },
  arrow: {
    fontSize: 24,
    color: "#3B82F6",
  },
});