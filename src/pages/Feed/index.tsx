import React, { useContext, useEffect, useState } from "react";
import Landing from "../Landing";
import { View, Text, RefreshControl, Image, TouchableOpacityBase, TouchableOpacity } from "react-native";
import PiuComp from "../../components/piu";
import AuthContext from "../../context/auth";
import * as s from './styles'
import { Piu } from '../../components/piu';
import api from "../../services/api";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function Feed() {
  const { navigate } = useNavigation()
  const [refreshing, setRefreshing] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const {token, user} = useContext(AuthContext);
  const [pius, setPius] = useState <Piu[]> ([])

  function handleLogout() {
    navigate('Landing')
  }

  useEffect(() =>{
    const fetchData = async () => {
  
      const response = await api.get('/pius', {
        headers: { authorization: `Bearer ${token}` }
      })
      setPius(response.data)
      }
      fetchData()
  }, [])

  const onRefresh = async () => {
  
    const response = await api.get('/pius', {
      headers: { authorization: `Bearer ${token}` }
    })
    setPius(response.data)
    }
    onRefresh()
    
  const Logout = async () =>{
    await AsyncStorage.removeItem('@PiuPiuwer:token')
    await AsyncStorage.removeItem('@PiuPiuwer:user')
    handleLogout()
  }

  return(
      <s.Background>
        <View>
        <s.FlexCenter>
            <TouchableOpacity onPress={Logout}><s.ProfilePic source={{uri:user.photo}}/></TouchableOpacity>
            <s.Inputzin 
              placeholder='Buscar...' 
              value={searchTerm} 
              onChangeText={setSearchTerm}
            />
        </s.FlexCenter>
        </View>
        <s.Scroll
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          {pius.map( (piu) => { if( searchTerm === '' 
          || piu.user.username.toLowerCase().includes(searchTerm.toLowerCase())
          || piu.user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          || piu.user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
          || piu.text.toLowerCase().includes(searchTerm.toLowerCase())
          )
              return(
              <PiuComp {...piu}/>
              )

              } ) }
        </s.Scroll>
      </s.Background>
  )
}

export default Feed

function wait(arg0: number) {
  throw new Error("Function not implemented.");
}
