import { StyleSheet , View , Text } from "react-native";
import Swiggy from 'react-native-vector-icons/Ionicons';
import Coffe from 'react-native-vector-icons/Feather';
import Instamart from 'react-native-vector-icons/FontAwesome';
import Dropout from 'react-native-vector-icons/Fontisto';
import Genie from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Pages (){
    return (
        <View style = {styles.Pages}>
            <View style ={styles.logo}>
                <View style ={{flexDirection:'column', alignItems:"center", marginRight:20,}}>
<Swiggy size={28} color="grey"name="md-logo-stencil" />
<Text>Swiggy</Text>

                </View>
                <View style ={{flexDirection:'column', alignItems:"center", marginRight:20,}}>
<Coffe size={28} color="grey"name="coffee" />
<Text>Food</Text>

                </View>
                <View style ={{flexDirection:'column', alignItems:"center",marginRight:20,}}>
<Instamart size={28} color="grey"name="shopping-basket" />
<Text>Instamart</Text>

                </View>
                <View style ={{flexDirection:'column', alignItems:"center", marginRight:20,}}>
<Dropout size={28} color="grey"name="arrow-return-right" />
<Text>Dropout</Text>

                </View>
                <View style ={{flexDirection:'column', alignItems:"center", marginRight:20,}}>
<Genie size={28} color="grey"name="zip-disk" />
<Text>Genie</Text>

                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
Pages:{
width:'150%',
    flexDirection:'row',
    backgroundColor:'white',
    position:'absolute',
bottom:0,
paddingHorizontal:'5%',
paddingVertical:'2%'

},logo:{
    flexDirection:'row',
}
})