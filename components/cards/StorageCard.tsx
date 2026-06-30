import { StyleSheet, Text, View } from 'react-native';

export default function StorageCard({

  analytics,

}: any) {

  return (

    <View style={styles.card}>

      <Text style={styles.title}>
        Storage Analytics
      </Text>

      <Text style={styles.item}>
        📁 Total Files : {analytics.totalFiles}
      </Text>

      <Text style={styles.item}>
        💾 Storage :
        {' '}
        {(analytics.totalSize / 1024 / 1024).toFixed(2)}
        MB
      </Text>

      <View style={styles.divider} />

      <Text style={styles.item}>
        📄 PDF : {analytics.pdf}
      </Text>

      <Text style={styles.item}>
        🖼 Images : {analytics.image}
      </Text>

      <Text style={styles.item}>
        📑 Documents : {analytics.document}
      </Text>

      <Text style={styles.item}>
        🎬 Videos : {analytics.video}
      </Text>

      <Text style={styles.item}>
        🎵 Audio : {analytics.audio}
      </Text>

      <Text style={styles.item}>
        📦 Others : {analytics.other}
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {

    backgroundColor: '#fff',

    margin: 20,

    padding: 20,

    borderRadius: 20,

    elevation: 5,

  },

  title: {

    fontSize: 22,

    fontWeight: '700',

    marginBottom: 15,

  },

  divider: {

    height: 1,

    backgroundColor: '#ddd',

    marginVertical: 15,

  },

  item: {

    fontSize: 17,

    marginVertical: 4,

  },

});