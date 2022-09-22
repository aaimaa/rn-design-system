import { StatusBar } from 'expo-status-bar';
import { StyleSheet,FlatList, Text, View } from 'react-native';
import FiberSlide from "./Fiberslide"

export default function First() {
  return (
    <View style={styles.container}>
      <Text style ={{fontSize:30,fontWeight:'bold'}}>TRENDING PLANS </Text>

   <FlatList
    data={[{
      p:399,
      v:30,
      d:30
    },
    {
    p:999,
    v:30,
    d:150
    },
  {
p:1499,
v:30,
d:300
  },
  ]}
    horizontal={true}
    renderItem={({ item }) => (
        FiberSlide(item )
    )}
/>
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
