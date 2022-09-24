import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function App() {
return(
<View style ={styles.First}>
    {/* ICON */}
<View style ={styles.icon}>
<Icon style = {{ borderRadius:300 ,width:25 , backgroundColor:"#DCDCDC"
}}size={25} color="black" name="arrowleft" />
</View>

{/* UPPER */}
<View style = {styles.upper}>
    <View style = {{width:'40% ' , height:60 , backgroundColor:'#DCDCDC', marginBottom:'3%'}}></View>
    <View style = {{width:'55% ' , height:20 , backgroundColor:'#DCDCDC' , marginBottom:'1%'}}></View>
    <View style = {{width:'30% ' , height:40 , backgroundColor:'#DCDCDC'}}></View>
</View>
<View>
    <Text style={{fontSize:12 , fontWeight:'bold' , marginVertical:20}}>Waiting For Goodness</Text>
</View>
</View>
)
}

const styles= StyleSheet.create({
First:{
    flexDirection:'column',
},
icon:{
    // backgroundColor:'green' ,
      marginBottom:20 
},
upper:{
    // backgroundColor:'red'
  }

})