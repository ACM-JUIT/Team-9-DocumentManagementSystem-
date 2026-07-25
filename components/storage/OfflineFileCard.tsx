import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  size: string;
  date: string;
  onPress?: () => void;
};

export default function OfflineFileCard({
  name,
  size,
  date,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>📄</Text>
      </View>

      <View style={styles.info}>
        <Text
          style={styles.name}
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text style={styles.details}>
          {size} • {date}
        </Text>
      </View>

      <Text style={styles.arrow}>
        ›
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 16,

    marginBottom: 14,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#334155",
  },

  pressed: {
    opacity: 0.8,
  },

  iconContainer: {
    width: 52,
    height: 52,

    borderRadius: 14,

    backgroundColor: "#2563EB",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  icon: {
    fontSize: 24,
  },

  info: {
    flex: 1,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  details: {
    color: "#94A3B8",
    marginTop: 5,
    fontSize: 13,
  },

  arrow: {
    color: "#60A5FA",
    fontSize: 26,
    fontWeight: "700",
  },
});