import { View, Text, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import React from "react";
import galinha from '../../assets/images/Galinha.png'
import * as s from './styles'

export function Head () {
  return (
    <s.OutWrapper>
      <s.ImageHeader source={galinha}/>
    </s.OutWrapper>
  )
}