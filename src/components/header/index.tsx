import { View, Text, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import React from "react";
import galinha from '../../assets/images/Galinha.png'
import * as s from './styles'
import { useNavigation } from "@react-navigation/native";

export function Head () {
  const { navigate } = useNavigation()
  function handleLogout() {
    navigate('Landing')
  }
  return (
    <s.OutWrapper>
      <TouchableOpacity onPress={handleLogout}><s.ImageHeader source={galinha}/></TouchableOpacity>
    </s.OutWrapper>
  )
}