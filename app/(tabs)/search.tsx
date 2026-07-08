import CategoryCard from "@/components/search/CategoryCard";
import RecentSearchCard from "@/components/search/RecentSearchCard";
import SearchBar from "@/components/search/SearchBar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Search() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Search
        </Text>

        <Text style={styles.subtitle}>
          Find your files instantly
        </Text>
      </View>

      <SearchBar />

      <Text style={styles.section}>
        Recent Searches
      </Text>

      <RecentSearchCard
        title="Resume.pdf"
        type="PDF Document"
      />

      <RecentSearchCard
        title="Notes.docx"
        type="Word Document"
      />

      <RecentSearchCard
        title="Vacation.jpg"
        type="Image"
      />

      <Text style={styles.section}>
        Categories
      </Text>

      <View style={styles.grid}>
        <CategoryCard
          icon="picture-as-pdf"
          title="PDF"
        />

        <CategoryCard
          icon="image"
          title="Images"
        />

        <CategoryCard
          icon="description"
          title="Documents"
        />

        <CategoryCard
          icon="movie"
          title="Videos"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  header: {
    marginHorizontal: 20,
    marginTop: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
    letterSpacing: 0.3,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
    lineHeight: 24,
  },

  section: {
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 14,
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
  },

  grid: {
    marginHorizontal: 20,
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 35,
  },
});