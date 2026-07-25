import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  value: string | number;
  icon: string;
};

export default function StorageStatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#1D4ED8",
    borderRadius: 20,
    paddingVertical: 22,

    alignItems: "center",

    borderWidth: 1,
    borderColor: "#3B82F6",

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
    fontSize: 28,
    marginBottom: 10,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },

  title: {
    marginTop: 8,

    color: "#DBEAFE",

    fontSize: 14,

    fontWeight: "600",
  },
});