import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profile() {
  return(
  <ScrollView
  style={styles.container}
  showsVerticalScrollIndicator={false}
  >
    <View style={styles.header}>
      <Text style={styles.title}>
        Profile
        </Text>
        <Text style={styles.subtitle}>
          Manage your account and preferences
        </Text>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    marginHorizontal: 20,
    marginTop: 55,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#6B7280",
  },
});