import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  file: any;
};

export default function FileCard({ file }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>📄</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.name}>
          {file.name}
        </Text>

        <Text style={styles.info}>
          {(file.size / 1024).toFixed(1)} KB
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  icon: {
    fontSize: 24,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  info: {
    marginTop: 4,
    color: "gray",
  },

  arrow: {
    fontSize: 26,
    color: "#9CA3AF",
  },
});