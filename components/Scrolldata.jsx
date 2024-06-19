import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Cards from './Cards'

const Scrolldata = ({ data }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <Cards key={index} data={item.recipe} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Scrolldata

const styles = StyleSheet.create({
  mainContainer: {
    margin: 30,
  },
  scroll: {
    // flex:1,
  },
})