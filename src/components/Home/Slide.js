import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView ,Image ,TouchableOpacity, Dimensions, Text, View, ScrollView } from 'react-native';
import React ,{useState} from "react";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images= [
'https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655579_1280.jpg',
'https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655578_1280.jpg',
'https://media.istockphoto.com/photos/black-and-white-portrait-of-a-man-combined-with-abstract-geometric-picture-id1339319064?s=612x612',
'https://media.istockphoto.com/photos/snowy-mountain-ridge-with-footprint-in-blizzard-picture-id1010514668?b=1&k=20&m=1010514668&s=170667a&w=0&h=iDGGPdlAYMRMPmzQMk5k4e-Vz0k6lkKy_uTi2CYeQDI='
]
export default function Slide({navigation}) {
   const  onChange=(nativeEvent) =>{

    }
    const submit = () =>{
      navigation.navigate('Second');
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.wrap}>
<ScrollView
onScroll={({nativeEvent}) => onChange(nativeEvent)}
showsHorizontalScrollIndicator={false}
pagingEnabled
horizontal
style= {styles.wrap}
>
{
    images.map((e ,index) =>
    <Image
    key= {e}
resizeMode ="stretch"
style= {styles.wrap}
source= {{uri:e}}
    />
    )
}
</ScrollView>

      </View>
      <View>
      <TouchableOpacity 
      onPress={()=>submit()}
      style ={styles.buttonStyle1}>
        <Text style={{fontSize:16, color:'white'}}>Go to Fiber Slide</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap:{
    marginTop:10,
    width:WIDTH*0.8,
    height:HEIGHT*0.25,
    // marginHorizontal:10
    alignSelf:'center'

  },
  buttonStyle1:{
    width:"100%",
    backgroundColor:'#4630EB',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  }
});
