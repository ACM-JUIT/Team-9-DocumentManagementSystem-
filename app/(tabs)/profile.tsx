import {MaterialIcons} from "@expo/vector-icons";}
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
    <View style={styles.profileCard}>
      <View style={styles.avatar}>
        <MaterialIcons
        name="person"
        size={60}
        color="#2563EB"
        />
        </View>

        <Text style={styles.name}>
       User Name
        </Text>
        <Text style={styles.role}>
       Student
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
  profileCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 18,
  },
  role: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 6,
  },
});