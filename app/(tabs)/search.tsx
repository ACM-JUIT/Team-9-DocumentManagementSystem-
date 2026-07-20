import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CategoryCard from "@/components/search/CategoryCard";
import RecentSearchItem from "@/components/search/RecentSearchItem";
import SearchBar from "@/components/search/SearchBar";
import SearchResultCard from "@/components/search/SearchResultCard";

import { useCloudStore } from "@/store/cloudStore";
import { useFileStore } from "@/store/fileStore";

import {
  mergeFiles,
  SearchCategory,
  searchFiles,
} from "@/services/search/searchService";

import {
  clearRecentSearches,
  getRecentSearches,
  removeRecentSearch,
  saveRecentSearch,
} from "@/services/search/recentSearchService";

import { AppFile } from "@/types/file";

export default function Search() {
  const { files, loadFiles } = useFileStore();

  const { driveFiles } = useCloudStore();

  const [query, setQuery] = useState("");

  const [category, setCategory] =
    useState<SearchCategory>("All");

  const [recentSearches, setRecentSearches] =
    useState<string[]>([]);

  useEffect(() => {
    loadFiles();
    loadHistory();
  }, []);

  async function loadHistory() {
    const history =
      await getRecentSearches();

    setRecentSearches(history);
  }

  const allFiles = useMemo(() => {
    return mergeFiles(files, driveFiles);
  }, [files, driveFiles]);

  const filteredFiles: AppFile[] =
    useMemo(() => {
      return searchFiles(
        allFiles,
        query,
        category
      );
    }, [allFiles, query, category]);

  useEffect(() => {
    if (query.trim().length < 2) return;

    const timer = setTimeout(async () => {
      await saveRecentSearch(query);

      const history =
        await getRecentSearches();

      setRecentSearches(history);
    }, 500);

    return () =>
      clearTimeout(timer);
  }, [query]);

  async function deleteSearch(
    search: string
  ) {
    await removeRecentSearch(search);

    const history =
      await getRecentSearches();

    setRecentSearches(history);
  }

  async function clearHistory() {
    await clearRecentSearches();

    setRecentSearches([]);
  }

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
            Try another keyword.
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

      {query.length === 0 &&
        recentSearches.length > 0 && (
          <>
            <View
              style={styles.historyHeader}
            >
              <Text style={styles.section}>
                Recent Searches
              </Text>

              <Text
                style={styles.clear}
                onPress={clearHistory}
              >
                Clear
              </Text>
            </View>

            {recentSearches.map(
              (search) => (
                <RecentSearchItem
                  key={search}
                  query={search}
                  onPress={() =>
                    setQuery(search)
                  }
                  onDelete={() =>
                    deleteSearch(search)
                  }
                />
              )
            )}
          </>
        )}

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
            category ===
            "Documents"
          }
          onPress={() =>
            setCategory(
              category ===
                "Documents"
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
    fontFamily:
      "Inter_700Bold",
    color: "#F8FAFC",
    letterSpacing: 0.3,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily:
      "Inter_400Regular",
    color: "#94A3B8",
    lineHeight: 24,
  },

  section: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 14,
    fontSize: 20,
    fontFamily:
      "Inter_700Bold",
    color: "#F8FAFC",
  },

  historyHeader: {
    marginHorizontal: 20,
    marginTop: 25,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  clear: {
    color: "#60A5FA",
    fontSize: 15,
    fontFamily:
      "Inter_600SemiBold",
  },

  grid: {
    marginHorizontal: 20,
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:
      "space-between",
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
    fontFamily:
      "Inter_700Bold",
    color: "#F8FAFC",
  },

  emptySubtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily:
      "Inter_400Regular",
    color: "#94A3B8",
    textAlign: "center",
  },
});