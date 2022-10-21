import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabscreen from './src/components/screens/TabScreen/Tabscreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Tabscreen/>
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
