import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function First(){


    return(
<View style= {styles.Cont}>
<View style ={{alignSelf:'center'}}>
    <Text 
    style={{fontSize:20 , fontWeight:'bold' , marginBottom:10 , color:'white'}}
    >Today's Details</Text>
</View>
<View style={styles.temp}>

<View style={styles.left}>
<View>
<View style={styles.riseset}>

<View style = {styles.first}>
<Icon size={28} color="white" name="sun" />
</View>
<View style ={styles.second}>
    <Text style={{color:'white'}}>12 hrs</Text>
    <Text style={{color:'white'}}>7 mins</Text>
</View>

</View>


<View style={styles.riseset}>

<View style = {styles.first}>
<Text style={{color:'white'}}>Rise</Text>
</View>
<View style ={styles.second}>
    <Text style={{color:'white'}}>6:27 am</Text>
</View>

</View>
<View style={styles.riseset}>

<View style = {styles.first}>
<Text style={{color:'white'}}>Set</Text>
</View>
<View style ={styles.second}>
    <Text style={{color:'white'}}>6:34 pm</Text>
</View>

</View>
</View>


</View>
<View style ={styles.middle}>

</View>
<View style ={styles.right}>


<View>

<View style={styles.riseset}>

<View style = {styles.first}>
<Icon size={26} color="white" name="moon" />
</View>
<View style ={styles.second}>
    <Text style={{color:'white'}}>12 hrs</Text>
    <Text style={{color:'white'}}>7 mins</Text>
</View>

</View>


<View style={styles.riseset}>

<View style = {styles.first}>
<Text style={{color:'white'}}>Rise</Text>
</View>
<View style ={styles.second}>
    <Text style={{color:'white'}}>3:51am</Text>
</View>

</View>
<View style={styles.riseset}>

<View style = {styles.first}>
<Text style={{color:'white'}}>Set</Text>
</View>
<View style ={styles.second}>
    <Text style={{color:'white'}}>5:23 pm</Text>
</View>

</View>

</View>


</View>
</View>

</View>
    )
}
const styles = StyleSheet.create({
    Cont:{
    // backgroundColor:'blue',
    paddingHorizontal:'2%',
    paddingVertical:'7%',
    
},
temp:{
    // backgroundColor:'yellow',
    flexDirection:'row',
    paddingHorizontal:'2%',
    justifyContent:'space-between',
    
},
left:{
flex:0.5,
// marginRight:30,
},
middle:{
    borderWidth:1,
borderColor:'white',
marginHorizontal:20
},
right:{
    flex:0.5,
// justifyContent:'center'
},
riseset:{
    flexDirection:'row',
    // backgroundColor:"green",
    justifyContent:'space-between'
},
first:{
    flex:0.5,
},


})