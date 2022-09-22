import { StyleSheet, TouchableOpacity , Dimensions,  Text, View } from 'react-native';
// import Swiper from 'react-native-swiper'
// import Slidee from "./Slidee";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function FiberSlide(item) {
    return (

<View style = {styles.CONT}>
      <View style={styles.container}>
        {/* <Text>Mai hoo Fiber slide  </Text> */}
        <View style={styles.price}>
            <Text style={{fontSize:30 , fontWeight:'bold' , alignSelf:'flex-end'}}>{item.p}</Text>
            <Text style = {{fontSize:18 , fontWeight:'medium',alignSelf:'flex-end'}}>+Gst</Text>
        </View>
        <View style = {styles.valdat}>
<View >
    <Text style= {{}}>Validity</Text>
    <Text style={{fontSize:15 , fontWeight:'medium'}} >{item.v} Days</Text>
</View>
<View>
<Text style= {{}}>Data</Text>
    <Text style={{fontSize:15 , fontWeight:'medium'}} >Unlimited @{item.d} Mbps</Text>
</View>
        </View>
        <TouchableOpacity style ={styles.buttonStyle1}>
        <Text style={{fontSize:16, color:'white'}}>Get Now</Text>
      </TouchableOpacity>
      {/* <Slidee/> */}
      </View>
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    CONT:{
      marginTop:10,
      width:WIDTH*0.8,
      height:HEIGHT*0.25,
    },
    container: {
      width:'95%',
      backgroundColor: '#DCDCDC',
      borderRadius:25,
    },
    price:{
        width:'80%',
        height:'20%',
        marginLeft:10,
        // backgroundColor:'yellow',
        flexDirection:'row',
        
    },
    valdat:{
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    buttonStyle1:{
        width:"90%",
        alignSelf:'center',
        backgroundColor:'#4630EB',
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginTop:"20%"
      }
  });