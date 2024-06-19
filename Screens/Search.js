import { View, Text, StyleSheet,Image, TouchableOpacity,Button, TouchableHighlight} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as animate from "react-native-animatable";
const  img =require("../assets/recipeback.jpg");
import { ArrowLeft, SearchIcon } from 'lucide-react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import Scrolldata from '../components/Scrolldata';

const Search = () => {
  const nav=useNavigation();
  const handlepressback=()=>{
    nav.navigate('Home');
  }
  const handlesearch=()=>{
    console.log("pressed");
  } 
  const route=useRoute();
  const { query } = route.params;

  const [data,setdata]=useState([]);
  const [queryhere,setqueryhere]=useState(query);
  const apihandler=async(value)=>{
    try{
    const response=await axios.get('https://api.edamam.com/api/recipes/v2?type=public&q='+queryhere+'&app_id=b0fc3766&app_key=41280df0f6e08ee057703750f13c3245')
    setdata(response.data.hits);
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(()=>{
    apihandler(queryhere);
  },[queryhere]);

  return (
    <animate.View animation={"slideInRight"} style={styles.container}>
      <View>
        <Image source={img} style={styles.backimage}/>
        <TouchableOpacity style={styles.button} onPress={handlepressback}>
        <View>
        <ArrowLeft style={styles.backbutton} color={"white"} width={"40"} height={"60"}/>
        </View>
        </TouchableOpacity>
        <Text style={styles.logotext}>RecipePro</Text>
        <View style={styles.searchboxcontainer}>
        <TextInput style={styles.searchbox} placeholder={query} value={queryhere} onChangeText={setqueryhere}/>
        <TouchableHighlight onPress={handlesearch} underlayColor={"white"}>
        <SearchIcon color={"green"} width={30} height={30} style={styles.serachicon}/>
        </TouchableHighlight>
        </View>
      </View>
      <View style={styles.scrollbox}>
        <Scrolldata data={data}/>
      </View>
    </animate.View>
  )
}

export default Search

const styles=StyleSheet.create({
 backimage:
 {
   width:"100%",
   height:200
 },
 logotext:
 {
  color:"white",
  fontSize:40,
  fontWeight:"bold",
  marginLeft:50,
  marginTop:10,
  top:1,
  position:"absolute"
 },
 button:{
  position:"absolute",
  justifyContent:"center",
  width:40,
  height:40,
  borderRadius:100,
  marginTop:20,
  marginLeft:5,
 },
 searchbox:
 {
    color: "gray",
    width: 250,
 },
  searchboxcontainer:{
    flexDirection:"row",
    position:"absolute",
    backgroundColor: "white",
    borderRadius: 10,
    top: 60,
    marginLeft:30,
    marginTop:30,
    height: 50,
    width: 300,
    padding: 10,
    opacity: 0.95,
  },
  serachicon:
  {
    position:"static",
    //marginLeft:200
  },
  scrollbox:{
    height:550
  }
})