import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PiuText from "../pages/PiuText";
import Feed from "../pages/Feed";

const { Navigator, Screen } = createBottomTabNavigator()

function Tabs() {
  function reload() {

  }
  return(
    <Navigator tabBarOptions={{style:{elevation:0}}}>
      <Screen name='Feed' component={Feed} />
      <Screen name='Piu' component={PiuText} />
    </Navigator>
  )
  
}

export default Tabs