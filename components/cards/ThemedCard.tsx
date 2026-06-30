import { StyleSheet, View } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

type ThemedCardProps = {
  children: React.ReactNode;
};

export default function ThemedCard({
  children,
}: ThemedCardProps) {
  const colors = useThemeColor();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,

    borderRadius: 20,

    marginVertical: 10,

    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 4,
  },
});