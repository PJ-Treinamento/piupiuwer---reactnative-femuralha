import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { AuthProvider } from './src/context/auth';
import AppLoading from 'expo-app-loading';
import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat'
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  if (!fontsLoaded){
    return <AppLoading/>
  } else{
    return (
      <AuthProvider>
        <AppStack/>
      </AuthProvider>
    )
  }
}


