import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="search"
        size={22}
        color="#9CA3AF"
      />
      <TextInput
        placeholder="Search documents..."
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});