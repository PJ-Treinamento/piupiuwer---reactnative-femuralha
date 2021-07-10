import React, { useContext, useEffect, useState } from "react";
import { View, Text, RefreshControl, Image } from "react-native";
import PiuComp from "../../components/piu";
import AuthContext from "../../context/auth";
import * as s from './styles'
import { Piu } from '../../components/piu';
import api from "../../services/api";
import { TextInput } from "react-native-gesture-handler";

function Feed() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = async () => {
  
    const response = await api.get('/pius', {
      headers: { authorization: `Bearer ${token}` }
    })
    setPius(response.data)
    }
    onRefresh()


  const [searchTerm, setSearchTerm] = useState('')
  const {token, user} = useContext(AuthContext);
  const [pius, setPius] = useState <Piu[]> ([])
  useEffect(() =>{
    const fetchData = async () => {
  
      const response = await api.get('/pius', {
        headers: { authorization: `Bearer ${token}` }
      })
      setPius(response.data)
      }
      fetchData()
  }, [])

  return(
      <s.Background>
        <s.FlexCenter>
          <s.Inputzin 
            placeholder='Buscar...' 
            value={searchTerm} 
            onChangeText={setSearchTerm}
          />
        </s.FlexCenter>
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
