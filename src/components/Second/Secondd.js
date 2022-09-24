import{View, StyleSheet} from "react-native";
import Second from "./Second";
export default function Secondd () {
    return (
        <View style={styles.Secondd}>
<Second/>
<View style = {styles.line}></View>
<Second/>

        </View>
    )
}

const styles= StyleSheet.create({
Secondd:{
    flex:1,
    // backgroundColor:'red'
},
line:{
    width:'100%',
    borderBottomWidth:6,
    marginBottom:5,
borderColor:'#F0F8FF',
}
})