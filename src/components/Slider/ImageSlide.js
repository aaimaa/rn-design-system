import { StyleSheet , View , Text , Dimensions,Image} from "react-native";

 const WIDTH = Dimensions.get('window').width*0.67;
 const HEIGHT = Dimensions.get('window').height*0.4;
export default function  (item) {
    return (
        <View style = {styles.Image}>
<Image style = {{width:WIDTH ,marginRight:18 ,height:HEIGHT*0.5 ,resizeMode:'cover'}} source={{uri:item.i}}
/>
        </View>
    )
}

const styles = StyleSheet.create({
Image:{
    flex:1,
    backgroundColor:'yelllow',
}
})