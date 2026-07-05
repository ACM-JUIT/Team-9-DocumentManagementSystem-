import { StyleSheet, Text, View } from "react-native";

export default function GreetingCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.small}>
        Hello there 👋
      </Text>

      <Text style={styles.name}>
        Everything synced. Everything secure.
      </Text>

      <Text style={styles.sub}>
        Your documents are safely organized.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 55,
    marginBottom: 18,
  },

  small: {
    fontSize: 15,
    color: "#94A3B8",
    fontFamily: "Inter_500Medium",
    letterSpacing: 0.5,
  },

  name: {
  fontSize: 32,
  fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
    marginTop: 6,
    letterSpacing: 0.3,
  },

  sub: {
  marginTop: 10,
  fontSize: 15,
  color: "#CBD5E1",
  fontFamily: "Inter_400Regular",
    lineHeight: 22,
    fontWeight: "400",
  },
});