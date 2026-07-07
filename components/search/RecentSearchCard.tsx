import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  title: string;
  type: string;
};
export default function RecentSearchCard({
  title,
  type,
}: Props) {
  let emoji = "📄";
  let color = "#DBEAFE";
  if (type === "Image") {
    emoji = "🖼️";
    color = "#DCFCE7";
  }
 if (type === "Word Document") {
    emoji = "📃";
    color = "#E9D5FF";
  }
  return (
     <TouchableOpacity style={styles.card}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: color,
          },
        ]}
      >
        <Text style={styles.emoji}>
          {emoji}
        </Text>
      </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {type}
      </Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 16,
    padding: 18,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  emoji: {
    fontSize: 28,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 3,
    fontSize: 15,
    color: "#6B7280",
  },
});