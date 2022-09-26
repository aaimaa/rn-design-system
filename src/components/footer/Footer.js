import { StyleSheet, View , Text } from "react-native";
export default function Footer (){
    return (
        <View style = {styles.Footer}>
<Text style ={{fontSize:16 ,color:'white'}}>Here's how you can use Genie for your needs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
Footer:{
width:'60%',
alignSelf:'center',
paddingVertical:'10%',
}
})