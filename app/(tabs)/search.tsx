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
    backgroundColor: "#F5F7FA",
  },
  header: {
    marginHorizontal: 20,
    marginTop: 55,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#6B7280",
  },
  section: {
    marginHorizontal: 20,
    marginTop: 30,
    fontSize: 20,
    fontWeight: "700",
  },
   grid: {
    marginHorizontal: 20,
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});