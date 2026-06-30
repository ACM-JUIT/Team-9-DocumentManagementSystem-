import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <LinearGradient
      colors={['#2563EB', '#1D4ED8']}
      style={styles.container}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.small}>
            Hello Amit 👋
          </Text>

          <Text style={styles.title}>
            NexusDocs
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=8',
          }}
          style={styles.avatar}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 25,
    paddingBottom: 35,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  small: {
    color: '#DCEBFF',
    fontSize: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '700',
    marginTop: 5,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});