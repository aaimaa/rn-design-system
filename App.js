import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, TouchableOpacity,  View } from 'react-native';
import First from './src/components/First/First';
import Second from './src/components/Second/Second';
import Icong from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <First/>
      <Second/>
      <TouchableOpacity 
      onPress={()=>submit()}
      style ={styles.buttonStyle1}>
        <Text style={{fontSize:12, color:'white'}}>See more</Text>
        <Icong style={{marginLeft:10}} size={18} color="white" name="arrowright" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1877F2',
    paddingTop:'13%',
  
  },
  buttonStyle1:{
    width:"70%",
    backgroundColor:'#4169E1',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginVertical:10
  }
});
