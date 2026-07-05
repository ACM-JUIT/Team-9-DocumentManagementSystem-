import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
type Props = {
  title: string;
  type: string;
};
export default function RecentSearchCard({
  title,
  type,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons
          name="description"
          size={24}
          color="#2563EB"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  type: {
    marginTop: 4,
    color: "#6B7280",
  },
});