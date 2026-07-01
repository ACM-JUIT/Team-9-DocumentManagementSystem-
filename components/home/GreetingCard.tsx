import { StyleSheet, Text, View } from "react-native";

export default function GreetingCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.small}>
        Welcome Back 👋
      </Text>

      <Text style={styles.name}>
        Amit Yadav
      </Text>

      <Text style={styles.sub}>
        Your documents are safely organized.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

container:{
marginHorizontal:20,
marginTop:55
},

small:{
fontSize:16,
color:"#6B7280"
},

name:{
fontSize:30,
fontWeight:"700",
marginTop:5
},

sub:{
marginTop:8,
fontSize:16,
color:"#6B7280"
}

});