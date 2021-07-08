import React from "react";
import { NavigationContainer, Link } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import Feed from "../pages/Feed";
import { useContext } from "react";
import AuthContext from "../context/auth";
const { Navigator, Screen} = createStackNavigator();
import { Head } from "../components/header";
import Tabs from "./Tabs";

function AppStack() {
  const {signed} = useContext(AuthContext)
  return signed ?
      <NavigationContainer>
      <Navigator screenOptions={{headerShown: true, headerStyle:{backgroundColor: '#FFB703'}, 
      headerTitle:() => <Head/>}}>
        <Screen name='PiuTab' component={Tabs} />
      </Navigator>
    </NavigationContainer>
    :
    <NavigationContainer>
      <Navigator  screenOptions={{headerShown: false}}>
        <Screen name='Landing' component={Landing}/>
      </Navigator>
    </NavigationContainer>
  
}

export default AppStack;