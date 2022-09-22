import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SectionList , SafeAreaView ,Image ,TouchableOpacity, Dimensions, Text, View, ScrollView } from 'react-native';
import React ,{useState} from "react";
import { SectionList } from 'react-native-web';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
//asdfghj
const images= [
    'https://64.media.tumblr.com/b9de972d1b72ec08decc0a9e93b9338a/tumblr_prgjn43jHy1tawn8uo1_1280.jpg',
    'https://64.media.tumblr.com/43920aa0934eddcaa7c330d949a91d50/tumblr_prcg0xMJVX1tawn8uo1_1280.jpg',
    'https://64.media.tumblr.com/356af2797c2b5e37be1b62a0cbdaecc1/tumblr_prbj6j7n3x1tawn8uo1_1280.jpg',
    'https://64.media.tumblr.com/b37c2b21be64eb3271f8c9b9fa143292/tumblr_pr7qi0nxbo1tawn8uo1_1280.jpg',
    'https://64.media.tumblr.com/c7e94c9d66601db8b5c545b366063c2f/tumblr_pr6ux1VuJ81tawn8uo1_1280.jpg',
    'https://64.media.tumblr.com/e816f3682bd13f440383af719c8db95a/tumblr_pr610nidtz1tawn8uo1_1280.jpg',
    'https://64.media.tumblr.com/84be3692089e2e6bbea1c62bec4a5555/tumblr_pr5bb9C6351tawn8uo1_1280.jpg',
'https://64.media.tumblr.com/aea0e208a044e43253447e3cdf47382d/tumblr_pr37ph56PT1tawn8uo1_1280.jpg',
'https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655579_1280.jpg',
'https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655578_1280.jpg',
'https://media.istockphoto.com/photos/black-and-white-portrait-of-a-man-combined-with-abstract-geometric-picture-id1339319064?s=612x612',
'https://media.istockphoto.com/photos/snowy-mountain-ridge-with-footprint-in-blizzard-picture-id1010514668?b=1&k=20&m=1010514668&s=170667a&w=0&h=iDGGPdlAYMRMPmzQMk5k4e-Vz0k6lkKy_uTi2CYeQDI='
]
export default function Music(){
   
    return(
        <SafeAreaView style={styles.container}>
   <SectionList
sections ={images}
keyExtractor={(item, index) => item + index}




/>
   
    </SafeAreaView>
    )
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
})