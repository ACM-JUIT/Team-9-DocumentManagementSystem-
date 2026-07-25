import { StyleSheet, Text, View } from "react-native";

export default function StorageUsageCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.emoji}>💾</Text>
        <Text style={styles.title}>Storage Usage</Text>
      </View>
      <Text style={styles.subtitle}>
        4.2 GB of 15 GB Used
      </Text>
      <View style={styles.progressBackground}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.percent}>28% Used</Text>
      <View style={styles.stats}>
         <View style={styles.statBox}>
          <Text style={styles.number}>24</Text>
          <Text style={styles.label}>Files</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.number}>8</Text>
          <Text style={styles.label}>Favorites</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.label}>Providers</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
 row: {
    flexDirection: "row",
    alignItems: "center",
  },
 emoji: {
    fontSize: 26,
    marginRight: 10,
  },
 title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 15,
    color: "#6B7280",
  },
  progressBackground: {
    marginTop: 18,
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    width: "28%",
    height: "100%",
    backgroundColor: "#3B82F6",
    borderRadius: 10,
  },
  percent: {
    marginTop: 10,
    color: "#6B7280",
    fontSize: 14,
  },
   stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  number: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  label: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },
});