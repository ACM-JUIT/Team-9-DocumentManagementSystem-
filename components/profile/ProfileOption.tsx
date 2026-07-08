import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  emoji: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  color?: string;
};

export default function ProfileOption({
  emoji,
  title,
  subtitle,
  onPress,
  color = "#334155",
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: color },
          ]}
        >
          <Text style={styles.emoji}>
            {emoji}
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.title,
              title === "Logout" && styles.logoutTitle,
            ]}
          >
            {title}
          </Text>

          {subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <Text
        style={[
          styles.arrow,
          title === "Logout" && styles.logoutArrow,
        ]}
      >
        ›
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2937",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 18,
    padding: 18,

    flexDirection: "row",
    justifyContent: "space-between",
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

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,

    borderWidth: 1,
    borderColor: "#475569",
  },

  emoji: {
    fontSize: 22,
  },

  title: {
    fontSize: 17,
    fontFamily: "Inter_600SemiBold",
    color: "#F8FAFC",
  },

  logoutTitle: {
    color: "#EF4444",
  },

  subtitle: {
    marginTop: 3,
    color: "#94A3B8",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },

  arrow: {
    fontSize: 24,
    color: "#60A5FA",
    fontFamily: "Inter_600SemiBold",
  },

  logoutArrow: {
    color: "#EF4444",
  },
});