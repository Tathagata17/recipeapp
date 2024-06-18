import { View, Text, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import * as animate from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const img = require("../assets/recipeback.jpg");

const data = [
  { id: '1', title: 'Veg' },
  { id: '2', title: 'Nonveg' },
  { id: '3', title: 'Egg' },
  { id: '4', title: 'Vegan' },
  { id: '5', title: 'Bakery' },
  // Add more items as needed
];
const data2 = [
  { id: '1', title: 'Burger' },
  { id: '2', title: 'Pizza' },
  { id: '3', title: 'Salad' },
  { id: '4', title: 'Donut' },
  { id: '5', title: 'Pastry' },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);





const Home = () => {
  const[searchquery ,setsearchquery]=useState("");
  const nav=useNavigation();
  const handlesubmit=()=>
    {
      nav.navigate('Search',{ query: searchquery });
    }

  return (
    <animate.View animation={"slideInRight"} style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.searchImage} />
        <Text style={styles.logoText}>RecipePro</Text>
        <TextInput 
        style={styles.search} 
        placeholder="Search your recipes" 
        value={searchquery}
        onChangeText={
           setsearchquery
        }
        onSubmitEditing={handlesubmit} />
        <Text style={styles.imgtext}>Search 1000+ recipes in one click</Text>
      </View>
      <Text style={styles.text2}>Categories</Text>
      <View style={styles.main}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.border}></View>
      <Text style={styles.text2}>Trending Recipes</Text>
      <View style={styles.main2}>
        <FlatList
          horizontal
          data={data2}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.itemContainer2}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </animate.View>
  );
};

export default Home;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 60,
  },
  text2:
  {
    marginLeft:18,
    color:"#414241",
    fontSize:18
  },
  border:{
    marginRight:20,
    marginLeft:20,
    borderWidth:1,
    borderColor:"#f7f7f7",
    marginBottom:3
  },
  imageContainer: {
    width: width,
    height: 300,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImage: {
    width: width,
    height: 300,
    resizeMode: "cover",
  },
  logoText: {
    position: 'absolute',
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    top: 1,
    left: 1,
    marginLeft: 20,
  },
  search: {
    height: 50,
    width: 300,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    opacity: 0.95,
    color: "gray",
    top: 60,
  },
  imgtext: {
    position: "absolute",
    bottom: 1,
    color: "white",
    letterSpacing: 1.4,
    marginBottom: 80,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 16,
    //flexDirection: 'row',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 2,
    marginVertical: 1,
    borderRadius: 10,
    width: 100,
    margin: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  itemContainer2: {
    backgroundColor: 'white',
    padding: 2,
   // marginVertical: 1,
    borderRadius: 10,
    width: 200,
    margin:10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//03d782ec
//1c77d4310b14f5eee28d4704aefba3be	
//fooddatabase
//4da52e89
//ba3eb2daf980fb4bc86f51115d79243d	