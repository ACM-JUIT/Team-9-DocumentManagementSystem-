import { StyleSheet, Text, View } from "react-native";

export default function StatsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.box}>
        <Text style={styles.number}>124</Text>
        <Text style={styles.label}>Documents</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.box}>
        <Text style={styles.number}>2.3 GB</Text>
        <Text style={styles.label}>Storage Used</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    marginHorizontal:20,
    marginTop:20,
    backgroundColor:"#2563EB",
    borderRadius:20,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingVertical:25
  },

  box:{
    alignItems:"center"
  },

  divider:{
    width:1,
    height:55,
    backgroundColor:"#fff"
  },

  number:{
    color:"#fff",
    fontSize:28,
    fontWeight:"700"
  },

  label:{
    color:"#E5E7EB",
    marginTop:6
  }
});