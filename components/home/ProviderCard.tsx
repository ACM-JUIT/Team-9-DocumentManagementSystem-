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
    backgroundColor: "#1F2937",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 6,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,

    borderWidth: 1,
    borderColor: "#334155",
  },

  icon: {
    fontSize: 28,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F8FAFC",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#94A3B8",
    fontWeight: "500",
  },
});