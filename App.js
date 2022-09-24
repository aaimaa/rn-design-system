import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import First from "./src/components/First/First";
import Secondd from "./src/components/Second/Secondd";
export default function App() {
  return (
    <View style={styles.container}>
      <First style = {{flex:0.2}}/>
      <Secondd style = {{flex:0.78}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
   paddingTop:'5%',
   paddingBottom:'2%',
   paddingHorizontal:'5%'
  },
 
});
