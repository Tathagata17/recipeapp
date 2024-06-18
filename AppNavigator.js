import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Search from "./Screens/Search";
import Detail from "./Screens/Detail";
import Home from "./Screens/Home";
import Splash from "./Screens/Splash";

const stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
