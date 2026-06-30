import { Alert, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type Props = {
  file: any;
  onDelete: (id: string) => void;
};

export default function RecentFileCard({
  file,
  onDelete,
}: Props) {

  function confirmDelete() {
    Alert.alert(
      'Delete File',
      `Are you sure you want to delete "${file.name}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDelete(file.id),
        },
      ]
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>
          📄 {file.name}
        </Text>

        <Text style={styles.size}>
  {(file.size / 1024).toFixed(1)} KB
</Text>

<Text
  style={{
    marginTop: 5,
    color: '#2563EB',
    fontWeight: '600',
  }}
>
  {file.category}
</Text>
      </View>

      <IconButton
        icon="delete"
        iconColor="red"
        size={24}
        onPress={confirmDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },

  size: {
    color: 'gray',
    marginTop: 6,
  },
});