import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as animate from 'react-native-animatable';
const img = require('../assets/recipeback.jpg');
import { ArrowLeft } from 'lucide-react-native';

const Detail = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { query } = route.params;
  console.log('This is the ', query.mealType);

  const handlePressBack = () => {
    nav.navigate('Search', { query: query.label });
  };

  const handleUrlClick = () => {
    Linking.openURL(query.url).catch((err) => {
      console.error('Failed to open URL:', err);
      Alert.alert('Error', 'Failed to open URL');
    });
  };

  return (
    <animate.View animation={'slideInRight'} style={styles.container}>
      <View>
        <Image source={img} style={styles.backimage} />
        <TouchableOpacity style={styles.button} onPress={handlePressBack}>
          <View>
            <ArrowLeft style={styles.backbutton} color={'white'} width={40} height={60} />
          </View>
        </TouchableOpacity>
        <Text style={styles.logotext}>RecipePro</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>{query.label}</Text>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {query.ingredientLines.map((item, index) => (
            <Text key={index} style={styles.label}>{item}</Text>
          ))}
          <Text style={styles.source}>Source: {query.source}</Text>
          <TouchableOpacity onPress={handleUrlClick}>
            <Text style={styles.instruction}>Click to know the Instruction</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </animate.View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backimage: {
    width: '100%',
    height: 300,
  },
  logotext: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 10,
    top: 1,
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 5,
  },
  body: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 20,
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
    marginBottom:20
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  source: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
  },
  instruction: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
