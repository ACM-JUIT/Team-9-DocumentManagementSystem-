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
    "picture-as-pdf": "#3F2D34",
    image: "#2B3A4F",
    description: "#403456",
    movie: "#4A432B",
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
    backgroundColor: "#1F2937",

    width: "48%",

    borderRadius: 24,

    paddingVertical: 28,

    alignItems: "center",

    marginBottom: 18,

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
    fontFamily: "Inter_600SemiBold",
    color: "#F8FAFC",
  },
});