import {StyleSheet , Text , View , TouchableOpacity} from "react-native"

export default function Second (){
    return(
<View style = {styles.Second}>
<Text  style={{fontSize:12,color:'white' }}>Current Conditions</Text>

<View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>Temperature</Text></View>
<View ><Text style={{color:'white'}}>96 
    </Text></View>
      </View>
<View style ={styles.line}></View>

 <View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>RealFeel</Text></View>
<View ><Text style={{color:'white'}}>97 Hot
    </Text></View> 
 </View>
 <View style ={styles.line}></View>

<View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>RealFeel Shade</Text></View>
<View ><Text style={{color:'white'}}>93
    </Text></View>  
</View>
<View style ={styles.line}></View>

<View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>Wind</Text></View>
<View ><Text style={{color:'white'}}>NW 11 mph
    </Text></View> 
 </View>
 <View style ={styles.line}></View>

<View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>Max Wind Gusts</Text></View>
<View ><Text style={{color:'white'}}>21 mph
    </Text></View> 
 </View>
 <View style ={styles.line}></View>

<View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>Humidity</Text></View>
<View ><Text style={{color:'white'}}>36 %
    </Text></View>  
</View>
<View style ={styles.line}></View>

<View style={styles.riseset}>
<View style = {styles.first}>
<Text style={{color:'white'}}>Indoor Humidity
    </Text></View>
<View ><Text style={{color:'white'}}>36 % (Humid)</Text></View> 
 </View> 
 <View style ={styles.line}></View>



</View>
    )
}

const styles = StyleSheet.create({
Second:{
    flex:0.9,
// backgroundColor:'red',
paddingHorizontal:'2%',
justifyContent:'space-evenly'

},
riseset:{
    flexDirection:'row',
    // backgroundColor:"green",
    justifyContent:'space-between'
},
first:{
    flex:0.5,
},
line:{
    width:'100%',
    borderBottomWidth:0.5,
borderColor:'#F0F8FF',
}

})