import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search documents..."
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  input: {
    backgroundColor: '#171742',
    padding: 18,
    borderRadius: 15,
    fontSize: 17,
  },
});