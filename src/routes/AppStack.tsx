import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import Feed from "../pages/Feed";
import { useContext } from "react";
import AuthContext from "../context/auth";
const { Navigator, Screen} = createStackNavigator();

function AppStack() {
  const {signed} = useContext(AuthContext)
  return signed ?
      <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Feed' component={Feed}/>
      </Navigator>
    </NavigationContainer>
    :
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Landing' component={Landing}/>
      </Navigator>
    </NavigationContainer>
  
}

export default AppStack;