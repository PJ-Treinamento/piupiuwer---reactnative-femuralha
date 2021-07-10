import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PiuText from "../pages/PiuText";
import Feed from "../pages/Feed";

const { Navigator, Screen } = createBottomTabNavigator()

function Tabs() {
  function reload() {

  }
  return(
    <Navigator tabBarOptions={{
      style:{
        elevation:0,
        shadowOpacity:0,
        height: 88,
        },
      tabStyle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'center',
      },
      iconStyle:{
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle:{
        fontFamily:'Montserrat_700Bold',
        fontSize: 13,
      },
      inactiveBackgroundColor: '#fafafc',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#FFB703'
      }}
    >
      <Screen name='Feed' component={Feed} />
      <Screen name='Piu' component={PiuText} />
    </Navigator>
  )
  
}

export default Tabs