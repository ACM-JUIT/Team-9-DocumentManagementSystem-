import { Pressable, StyleSheet, Text } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

export default function ThemedButton({
  title,
  onPress,
}: any) {
  const colors = useThemeColor();

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: colors.primary,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 8,
  },

  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});