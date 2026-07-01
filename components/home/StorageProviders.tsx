import { StyleSheet, Text, View } from "react-native";

export default function StorageProviders() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Storage Providers
      </Text>

      <View style={styles.card}>
        <Text>📱 Local Storage</Text>
      </View>

      <View style={styles.card}>
        <Text>☁️ Google Drive</Text>
      </View>

      <View style={styles.card}>
        <Text>🪟 OneDrive</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 12,
    elevation: 3,
  },
});
