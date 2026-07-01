import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  icon: string;

  title: string;

  color: string;

  files?: number;

  storage?: string;

  connected?: boolean;

  onPress?: () => void;
};

export default function ProviderCard({
  icon,
  title,
  color,
  files = 0,
  storage = "0 MB",
  connected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconBox,
          {
            backgroundColor: color,
          },
        ]}
      >
        <Text style={styles.icon}>
          {icon}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {files} Files • {storage}
        </Text>

        <Text
          style={{
            marginTop: 6,
            color: connected
              ? "#22C55E"
              : "#EF4444",
            fontWeight: "700",
          }}
        >
          {connected
            ? "● Connected"
            : "● Not Connected"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  icon: {
    fontSize: 26,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 5,
    color: "#6B7280",
  },
});