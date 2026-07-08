import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  type: string;
};

export default function RecentSearchCard({
  title,
  type,
}: Props) {
  let emoji = "📄";
  let color = "#2B3A4F";

  if (type === "Image") {
    emoji = "🖼️";
    color = "#2B3A4F";
  }

  if (type === "Word Document") {
    emoji = "📃";
    color = "#403456";
  }

  if (type === "PDF Document") {
    emoji = "📄";
    color = "#3F2D34";
  }

  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: color,
          },
        ]}
      >
        <Text style={styles.emoji}>
          {emoji}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",

    marginHorizontal: 20,
    marginTop: 16,

    padding: 18,

    borderRadius: 22,

    flexDirection: "row",
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

  iconContainer: {
    width: 60,
    height: 60,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,
  },

  emoji: {
    fontSize: 28,
  },

  title: {
    fontSize: 17,
    fontFamily: "Inter_600SemiBold",
    color: "#F8FAFC",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
  },
});