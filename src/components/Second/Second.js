import { StyleSheet , Text , TouchableOpacity, View } from "react-native";

export default function Second (){
    return ( 
        <View style={styles.Second}>
<View style= {styles.row}>
<View style = {styles.firstrow}>
<View style ={{width:'90%' ,marginHorizontal:'auto' ,height:160 , backgroundColor:'#DCDCDC', marginBottom:'4%'}}></View>
<View style = {{width:'90%' ,marginHorizontal:'auto' ,height: 20 ,backgroundColor:'#DCDCDC', marginBottom:'3%'}}></View>

<View style= {styles.rowfirst}>
<View style ={styles.rowfirstfirst}>
<View style ={{width:'90%' ,marginHorizontal:'auto' ,height:25 , backgroundColor:'#DCDCDC', marginVertical:10, marginBottom:'20%'}}></View>
<View style ={{width:'90%' ,marginHorizontal:'auto' ,height:25 , backgroundColor:'#DCDCDC', marginVertical:10,marginBottom:'20%'}}></View>

</View>
<View style ={styles.rowfirstsecond}>
<TouchableOpacity style ={styles.buttonStyle1}>
        <Text style={{fontSize:16, color:'white'}}>ADD</Text>
      </TouchableOpacity>
</View>

</View>

   {/* ..... */}
</View>

<View style = {styles.Seecondrow}>
<View style ={{width:'90%' ,marginHorizontal:'auto' ,height:160 , backgroundColor:'#DCDCDC', marginBottom:'4%'}}></View>
<View style = {{width:'90%' ,marginHorizontal:'auto' ,height: 20 ,backgroundColor:'#DCDCDC', marginBottom:'3%'}}></View>

<View style= {styles.rowfirst}>
<View style ={styles.rowfirstfirst}>
<View style ={{width:'90%' ,marginHorizontal:'auto' ,height:25 , backgroundColor:'#DCDCDC', marginVertical:10, marginBottom:'20%'}}></View>
<View style ={{width:'90%' ,marginHorizontal:'auto' ,height:25 , backgroundColor:'#DCDCDC', marginVertical:10,marginBottom:'20%'}}></View>

</View>
<View style ={styles.rowfirstsecond}>
<TouchableOpacity style ={styles.buttonStyle1}>
        <Text style={{fontSize:16, color:'white'}}>ADD</Text>
      </TouchableOpacity>
</View>

</View>
</View>
</View>

        </View>
    )
}

const styles = StyleSheet.create({
Second:{
flex:0.5,
// backgroundColor:'yellow',
},
row:{
    flex:1,
    // backgroundColor:'green',
    flexDirection:'row',
}
, 
  firstrow:{
flex:0.5,
// backgroundColor:'purple',
justifyContent:'center'
  } ,
  Seecondrow:{
flex:0.5,
// backgroundColor:'orange'
  } ,
   rowfirst:{
    flex:1,
    //  backgroundColor:'white',
     flexDirection:'row'
   }, 
   rowfirstfirst:{
    flex:0.5,
    // backgroundColor:'grey',
    justifyContent:'flex-end'
   },
   rowfirstsecond:{
    flex:0.5,
    // backgroundColor:'yellow',
    justifyContent:'flex-end',
    alignItems:'center'
   },
   buttonStyle1:{
    width:"80%",
    backgroundColor:'#DCDCDC',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
  },

})