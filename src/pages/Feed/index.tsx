import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import PiuComp from "../../components/piu";
import AuthContext from "../../context/auth";
import * as s from './styles'
import { Piu } from '../../components/piu';
import api from "../../services/api";

function Feed() {
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
    <s.Wrapper>
      <s.Scroll>
        {pius.map( (piu) => { 
              return(
              <PiuComp {...piu}/>
              )

            } ) }
      </s.Scroll>
    </s.Wrapper>
  )
}

export default Feed