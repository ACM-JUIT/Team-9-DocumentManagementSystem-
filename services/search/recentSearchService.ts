import AsyncStorage from "@react-native-async-storage/async-storage";

const RECENT_SEARCHES_KEY = "NEXUSDOCS_RECENT_SEARCHES";

const MAX_RECENT_SEARCHES = 10;

export async function getRecentSearches(): Promise<string[]> {
  try {
    const data = await AsyncStorage.getItem(
      RECENT_SEARCHES_KEY
    );

    if (!data) return [];

    return JSON.parse(data);
  } catch (error) {
    console.log("Error loading recent searches:", error);
    return [];
  }
}

export async function saveRecentSearch(
  query: string
): Promise<void> {
  try {
    const trimmed = query.trim();

    if (!trimmed) return;

    const searches =
      await getRecentSearches();

    const updated = [
      trimmed,
      ...searches.filter(
        item =>
          item.toLowerCase() !==
          trimmed.toLowerCase()
      ),
    ].slice(0, MAX_RECENT_SEARCHES);

    await AsyncStorage.setItem(
      RECENT_SEARCHES_KEY,
      JSON.stringify(updated)
    );
  } catch (error) {
    console.log("Error saving search:", error);
  }
}

export async function removeRecentSearch(
  query: string
): Promise<void> {
  try {
    const searches =
      await getRecentSearches();

    const updated = searches.filter(
      item =>
        item.toLowerCase() !==
        query.toLowerCase()
    );

    await AsyncStorage.setItem(
      RECENT_SEARCHES_KEY,
      JSON.stringify(updated)
    );
  } catch (error) {
    console.log(
      "Error removing search:",
      error
    );
  }
}

export async function clearRecentSearches(): Promise<void> {
  try {
    await AsyncStorage.removeItem(
      RECENT_SEARCHES_KEY
    );
  } catch (error) {
    console.log(
      "Error clearing searches:",
      error
    );
  }
}