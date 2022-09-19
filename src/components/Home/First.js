import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FiberSlide from "./Fiber/Fiberslide";
export default function First() {
  return (
    <View style={styles.container}>
      <FiberSlide/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
