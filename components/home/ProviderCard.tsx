import { StyleSheet, Text, View } from "react-native";

type Props={
    icon:string;
    title:string;
    color:string;
}

export default function ProviderCard({icon,title,color}:Props){

return(

<View style={styles.card}>

<View style={[styles.icon,{backgroundColor:color}]}>
<Text style={{fontSize:24}}>
{icon}
</Text>
</View>

<Text style={styles.title}>
{title}
</Text>

<Text style={styles.status}>
Connected
</Text>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#fff",
borderRadius:18,
padding:18,
marginBottom:15,
flexDirection:"row",
alignItems:"center",
elevation:3
},

icon:{
width:55,
height:55,
borderRadius:15,
justifyContent:"center",
alignItems:"center"
},

title:{
marginLeft:18,
fontSize:18,
fontWeight:"700",
flex:1
},

status:{
color:"#16A34A",
fontWeight:"600"
}

})