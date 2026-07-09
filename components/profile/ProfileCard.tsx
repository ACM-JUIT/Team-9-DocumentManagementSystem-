import { StyleSheet, Text, View } from "react-native";
export default function ProfileCard() {
    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>👩
                 </Text>
                 </View>
                 <Text style={styles.name}>
                 Welcome!
                 </Text>
                 <Text style={styles.role}>
                 Manage your documents
                 </Text>
                 </View>
    );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10,

    elevation: 6,
  },

  avatar: {
  width: 96,
  height: 96,
  borderRadius: 48,
  backgroundColor: "#1E3A8A",

  justifyContent: "center",
  alignItems: "center",

  borderWidth: 1,
  borderColor: "#2563EB",
},

  avatarEmoji: {
    fontSize: 50,
  },

  name: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
    marginTop: 18,
    letterSpacing: 0.3,
  },

  role: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
    marginTop: 8,
    textAlign: "center",
    lineHeight: 22,
  },
});