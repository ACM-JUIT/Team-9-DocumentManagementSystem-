import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export default function ProfileOption({
  icon,
  title,
  subtitle,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={icon}
            size={24}
            color="#2563EB"
          />
        </View>

        <View>
          <Text style={styles.title}>
            {title}
          </Text>

          {subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={26}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 18,
    padding: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
  },

  subtitle: {
    marginTop: 3,
    color: "#6B7280",
    fontSize: 14,
  },
});