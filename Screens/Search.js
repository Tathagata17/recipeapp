import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Search = () => {
  const route=useRoute();
  const { query } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>the query is{query}</Text>
    </View>
  )
}

export default Search

const styles=StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:"center",
    //alignItems:"center",
    //width:300,
    //height:600,
  },
  text:{
    color:"black",
    fontSize:20,
    margin:10
  }
})