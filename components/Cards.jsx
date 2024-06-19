import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Cards = ({data}) => {

    const navigation=useNavigation();

    const handlepress=()=>{
        navigation.navigate('Detail',{ query: data});
    }
//  <Text style={styles.textdec}>{data.brand}</Text>-->

  return (
    <TouchableOpacity onPress={handlepress}>
    <View style={styles.container}>
      <Text style={styles.text}>{data.label}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Cards

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dedede",
    padding: 10,
    width: 300,
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    color: "#858383",
    fontSize: 17,
  },
  textdec: {
    marginTop:5,
    color: "#858383",
    fontSize: 13,
  }
})
