import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
  icon: string;
  title: string;
};
export default function CategoryCard({
  icon,
  title,
}: Props) {
  const emojis: Record<string, string> = {
    "picture-as-pdf": "📄",
    image: "🖼️",
    description: "📃",
    movie: "🎬",
  };
  const colors: Record<string, string> = {
    "picture-as-pdf": "#FEE2E2",
    image: "#DBEAFE",
    description: "#E9D5FF",
    movie: "#FEF3C7",
  };
 return (
     <TouchableOpacity style={styles.card}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              colors[icon] || "#DBEAFE",
          },
        ]}
      >
        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    borderRadius: 24,
    paddingVertical: 28,
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    width: 74,
    height: 74,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  emoji: {
    fontSize: 34,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
});