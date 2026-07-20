import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  selected?: boolean;
  onPress?: () => void;
};

export default function CategoryCard({
  icon,
  title,
  selected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        selected && styles.selectedCard,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          selected && styles.selectedIcon,
        ]}
      >
        <MaterialIcons
          name={icon}
          size={34}
          color={
            selected ? "#FFFFFF" : "#60A5FA"
          }
        />
      </View>

      <Text
        style={[
          styles.title,
          selected && styles.selectedTitle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",
    width: "48%",
    borderRadius: 24,
    paddingVertical: 28,
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#374151",
  },

  selectedCard: {
    borderColor: "#3B82F6",
    backgroundColor: "#2563EB20",
  },

  iconContainer: {
    width: 74,
    height: 74,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    marginBottom: 18,
  },

  selectedIcon: {
    backgroundColor: "#2563EB",
  },

  title: {
    fontSize: 17,
    fontFamily: "Inter_600SemiBold",
    color: "#F8FAFC",
  },

  selectedTitle: {
    color: "#60A5FA",
  },
});