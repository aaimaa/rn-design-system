import {StyleSheet ,  View , Text , TouchableOpacity} from "react-native";
import Food from 'react-native-vector-icons/MaterialIcons';
import Care from 'react-native-vector-icons/AntDesign';
import Documents from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function Pickdrop (){
    return (
<View style = {styles.Pickdrop}>
<View style= {styles.text}>
    <Text style= {{fontSize:18 , fontWeight:'bold'}} >Pickup or Drop<Text style ={{fontSize:12 , fontWeight:'normal'}}>  any items</Text> </Text>
</View>

<View style ={{alignSelf:'center' , width:'80%'}}>
      <TouchableOpacity 
      onPress={()=>submit()}
      style ={styles.buttonStyle1}>
        <Text style={{fontSize:16,fontWeight:'bold' ,color:'white'}}>Add Pickup / Drop Details</Text>
      </TouchableOpacity>
      </View>

      <View style ={styles.line}></View>

<View style = {styles.sectext}>
    <Text style ={{fontSize:13 ,fontWeight:'bold'}} >Some things , we can pick or drop for you</Text>
</View>

<View style ={styles.icons}>
    <View style ={{flexDirection:'column'}}>
<Food style ={{backgroundColor:'white' ,borderRadius:50 ,alignSelf:'center', padding:10 ,}} size={26} color="black" name="breakfast-dining" />
<Text>Home Food</Text>
    </View>
    <View style ={{flexDirection:'column'}}>
<Care style ={{backgroundColor:'white' ,borderRadius:50 , alignSelf:'center',  padding:10 ,}} size={26} color="black" name="gift" />
<Text style ={{alignSelf:'center'}}>Care</Text>
<Text>Packages</Text>
    </View>
    <View style ={{flexDirection:'column'}}>
<Documents style ={{backgroundColor:'white' ,borderRadius:50 ,alignSelf:'center',  padding:10 ,}} size={26} color="black" name="documents" />
<Text>Documents</Text>
    </View>
    <View style ={{flexDirection:'column'}}>
<FontAwesome5 style ={{backgroundColor:'white' ,borderRadius:50 ,alignSelf:'center',  padding:10 ,}} size={26} color="black" name="tshirt" />
<Text>Clothes</Text>
    </View>

</View>

</View>
    )
}

const styles = StyleSheet.create({
Pickdrop:{
    backgroundColor:'#DCDCDC',
    borderRadius:12,
    paddingVertical:20
    // justifyContent:'center'
},
text:{
width:'100%',
paddingVertical:10,
paddingHorizontal:10
},
buttonStyle1:{
    // width:"100%",
    backgroundColor:'#FF7538',
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },
  line:{
    width:'90%',
    borderBottomWidth:1,
    alignSelf:'center',
borderColor:'#DCDCDC',
},
sectext:{
paddingVertical:10,
paddingHorizontal:10,
},
icons:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-evenly',
}
})