import { StyleSheet, TouchableOpacity ,   Text, View } from 'react-native';
// import Swiper from 'react-native-swiper'
// import Slidee from "./Slidee";
export default function FiberSlide() {
    return (

      <View style={styles.container}>
        {/* <Text>Mai hoo Fiber slide  </Text> */}
        <View style={styles.price}>
            <Text style={{fontSize:30 , fontWeight:'bold' , alignSelf:'flex-end'}}>₹399</Text>
            <Text style = {{fontSize:18 , fontWeight:'medium',alignSelf:'flex-end'}}>+Gst</Text>
        </View>
        <View style = {styles.valdat}>
<View >
    <Text style= {{}}>Validity</Text>
    <Text style={{fontSize:15 , fontWeight:'medium'}} >30 Days</Text>
</View>
<View>
<Text style= {{}}>Data</Text>
    <Text style={{fontSize:15 , fontWeight:'medium'}} >Unlimited @30 Mbps</Text>
</View>
        </View>
        <TouchableOpacity style ={styles.buttonStyle1}>
        <Text style={{fontSize:16, color:'white'}}>Get Now</Text>
      </TouchableOpacity>
      {/* <Slidee/> */}
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0.4,
      width:'80%',
      backgroundColor: '#DCDCDC',
      alignSelf:'center',
      borderRadius:25,
      justifyContent:'center'

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