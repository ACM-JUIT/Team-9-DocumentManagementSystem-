import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CategoryCard from "@/components/search/CategoryCard";
import SearchBar from "@/components/search/SearchBar";
import SearchResultCard from "@/components/search/SearchResultCard";

import { useCloudStore } from "@/store/cloudStore";
import { useFileStore } from "@/store/fileStore";

import {
  mergeFiles,
  SearchCategory,
  searchFiles,
} from "@/services/search/searchService";

import { AppFile } from "@/types/file";

export default function Search() {
  const {
    files,
    loadFiles,
  } = useFileStore();

  const { driveFiles } = useCloudStore();

  const [query, setQuery] = useState("");

  const [category, setCategory] =
    useState<SearchCategory>("All");

  useEffect(() => {
    loadFiles();
  }, []);

  const allFiles = useMemo(() => {
    return mergeFiles(files, driveFiles);
  }, [files, driveFiles]);

  const filteredFiles: AppFile[] = useMemo(() => {
    return searchFiles(
      allFiles,
      query,
      category
    );
  }, [allFiles, query, category]);

  function renderResults() {
    if (filteredFiles.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>
            🔍
          </Text>

          <Text style={styles.emptyTitle}>
            No files found
          </Text>

          <Text style={styles.emptySubtitle}>
            Try searching with another keyword.
          </Text>
        </View>
      );
    }

    return filteredFiles.map((file) => (
      <SearchResultCard
        key={file.id}
        file={file}
      />
    ));
  }
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

      <SearchBar
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.section}>
        Categories
      </Text>

      <View style={styles.grid}>
        <CategoryCard
          icon="picture-as-pdf"
          title="PDF"
          selected={category === "PDF"}
          onPress={() =>
            setCategory(
              category === "PDF"
                ? "All"
                : "PDF"
            )
          }
        />

        <CategoryCard
          icon="image"
          title="Images"
          selected={category === "Images"}
          onPress={() =>
            setCategory(
              category === "Images"
                ? "All"
                : "Images"
            )
          }
        />

        <CategoryCard
          icon="description"
          title="Documents"
          selected={
            category === "Documents"
          }
          onPress={() =>
            setCategory(
              category === "Documents"
                ? "All"
                : "Documents"
            )
          }
        />

        <CategoryCard
          icon="movie"
          title="Videos"
          selected={category === "Videos"}
          onPress={() =>
            setCategory(
              category === "Videos"
                ? "All"
                : "Videos"
            )
          }
        />
      </View>

      <Text style={styles.section}>
        Results
      </Text>

      {renderResults()}

      <View
        style={{
          height: 40,
        }}
      />
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
    marginTop: 30,
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
  },

  emptyContainer: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  emptyIcon: {
    fontSize: 60,
  },

  emptyTitle: {
    marginTop: 20,
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
  },

  emptySubtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
    textAlign: "center",
  },
});