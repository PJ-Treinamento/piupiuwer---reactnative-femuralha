import { View, Text, Image } from "react-native";
import React from "react";
import galinha from '../../assets/images/Galinha.png'
import * as s from './styles'

export function Head () {
  return (
  <s.ImageHeader source={galinha}/>
  )
}