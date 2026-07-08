import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="search"
        size={22}
        color="#94A3B8"
      />
      <TextInput
        placeholder="Search documents..."
        placeholderTextColor="#94A3B8"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2937",

    marginHorizontal: 20,
    marginTop: 25,

    borderRadius: 18,

    paddingHorizontal: 18,

    height: 58,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,

    elevation: 5,
  },

  input: {
    flex: 1,
    marginLeft: 12,

    fontSize: 16,
    fontFamily: "Inter_500Medium",

    color: "#F8FAFC",
  },
});