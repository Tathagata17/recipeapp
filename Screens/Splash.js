import { View, Text, StyleSheet,Image } from 'react-native'
import React, { useEffect } from 'react'
import * as  animate from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>
            {
                navigation.navigate('Home');
            },2000)
    },[]);
  return (
    <View style={style.container}>
      <animate.Image animation={'slideInUp'} source={require("../assets/recipe.png")} style={style.logo}/>
      <animate.Text animation={'slideInUp'} style={style.text}>Recipe App</animate.Text>
    </View>
  )
}

export default Splash

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#037325',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:
    {
        height:200,
        width:200,
    },
    text:
    {
        color:"black",
        fontWeight:"bold",
        fontSize:30,
    }

})