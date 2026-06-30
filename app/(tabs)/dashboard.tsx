import { useEffect, useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';

import QuickActionButton from '@/components/buttons/QuickActionButton';
import RecentFileCard from '@/components/cards/RecentFileCard';
import StorageCard from '@/components/cards/StorageCard';
import SearchBar from '@/components/inputs/SearchBar';
import Header from '@/components/layout/Header';
import { calculateAnalytics } from '@/services/analytics';
import {
  deleteFile,
  getFiles,
  StoredFile,
} from '@/services/storage';

export default function Dashboard() {
  const [files, setFiles] = useState<StoredFile[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const analytics = calculateAnalytics(files);

  async function loadFiles() {
    const savedFiles = await getFiles();
    setFiles(savedFiles);
  }

  async function handleDelete(id: string) {
    await deleteFile(id);
    await loadFiles();
  }

  async function onRefresh() {
    setRefreshing(true);
    await loadFiles();
    setRefreshing(false);
  }

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <Header />

      <StorageCard
  analytics={analytics}
/>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <QuickActionButton
        onUploadSuccess={loadFiles}
      />

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Recent Files
        </Text>
      </View>

      {files.filter(file =>
        file.name
          .toLowerCase()
          .includes(search.toLowerCase())
      ).length === 0 ? (
        <View
          style={{
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 60,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: 'gray',
            }}
          >
            No matching files found.
          </Text>

          <Text
            style={{
              color: 'gray',
              marginTop: 10,
            }}
          >
            Upload a file or try another search.
          </Text>
        </View>
      ) : (
        files
          .filter(file =>
            file.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map(file => (
            <RecentFileCard
              key={file.id}
              file={file}
              onDelete={handleDelete}
            />
          ))
      )}
    </ScrollView>
  );
}