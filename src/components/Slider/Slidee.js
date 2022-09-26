import { StyleSheet,SafeAreaView ,Image ,FlatList,View, ScrollView ,Text } from 'react-native';
import React  from "react";
import ImageSlide from './ImageSlide';
export default function Slidee (){
    return (
        <View style = {styles.Slidee}>
<FlatList
data ={[{
    i:'https://imgs.search.brave.com/l6IOcyHx9obwAARqaubnbPTSXGBCckGIsp0yWGC9PSQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/ZEJrZTNGVnJIRUJ0/ZS1FckdHY1RRSGFF/SyZwaWQ9QXBp',
},
{ 
    i:'https://imgs.search.brave.com/f_3K69FiHkfZhP37GuZQ-dePROgr-tuqIRuRJjE_80M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/bm1HZjdFaElmazdX/WnN0eW1OU0l3SGFF/SyZwaWQ9QXBp'
},
{
    i:'https://imgs.search.brave.com/ni-wjhjH3KCTheDxEHJXPeFy1cqO4FvvJc4XdEYstNo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/cjZYRWdYSjN4Tmhk/eU12UkIwYUJ3SGFF/SyZwaWQ9QXBp',

},{
    i:'https://imgs.search.brave.com/RJtrFJk-FR1EjR6GRijjvisShZYFocd1XpaviBKrnQ4/rs:fit:1248:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/ZUdBVWtEaFF4M053/d3k4Tm5ITkt3SGFD/MCZwaWQ9QXBp',

},
{
    i:'https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655578_1280.jpg',

},{
    i:'https://media.istockphoto.com/photos/black-and-white-portrait-of-a-man-combined-with-abstract-geometric-picture-id1339319064?s=612x612',

}
]}
horizontal ={true}
renderItem={({ item }) => (
    ImageSlide(item )
    )}

/>
        </View>
    )
}

const styles = StyleSheet.create({
    Slidee:{
        flex:1,
       
    }

})