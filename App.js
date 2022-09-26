import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar/Navbar';
// import Slide from './src/components/Slider/Slide';
import Pickdrop from './src/components/pickdrop/Pickdrop';
import Footer from './src/components/footer/Footer';
import Slidee from './src/components/Slider/Slidee';
import Pages from './src/components/pages/Pages';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello G</Text>
      <Navbar/>
      <Slidee/>
<Pickdrop/>
      <Footer/>
 <Pages/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#391285',
    paddingHorizontal:'5%',
    paddingTop:'8%',
    paddingBottom:'25%',
  },
});
