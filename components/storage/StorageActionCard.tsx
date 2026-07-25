import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle: string;
  icon: string;
  onPress: () => void;
};

export default function StorageActionCard({
  title,
  subtitle,
  icon,
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
      <View style={styles.left}>
        <Text style={styles.icon}>{icon}</Text>

        <View>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>

      <Text style={styles.arrow}>
        →
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 18,

    paddingVertical: 18,
    paddingHorizontal: 18,

    marginBottom: 14,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "#334155",
  },

  pressed: {
    opacity: 0.8,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 28,
    marginRight: 16,
  },

  title: {
    color: "#F8FAFC",
    fontSize: 17,
    fontWeight: "700",
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 4,
  },

  arrow: {
    color: "#60A5FA",
    fontSize: 24,
    fontWeight: "700",
  },
});