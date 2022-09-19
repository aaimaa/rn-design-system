import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./src/components/Navbar";
import First from './src/components/Home/First';
import Slide from './src/components/Home/Slide';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>

      {/* <Navbar/> */}
      <NavigationContainer>
<Stack.Navigator initialRouteName = "First">
  <Stack.Screen name = "First" component = {Slide} />
  <Stack.Screen name = "Second" component = {First}/>
</Stack.Navigator>
</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
paddingTop:50
  },
});

