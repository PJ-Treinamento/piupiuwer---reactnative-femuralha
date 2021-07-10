import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { TextPiu } from "../../components/piu/style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import * as s from './style'

function PiuText() {

  const[ textPiu, setTextPiu] = useState('')
  const {token} = useContext(AuthContext);
  const PotsPiu = async () => {
    if(textPiu.length == 0){
      alert('Vai com calma amigão, você tem que escrever alguma coisa.')
    }
    if( textPiu.length > 140){
      alert('Vai com calma amigão, você escreveu mais do que o permitido.')
    }
    else{
      const postResponse = await api.post('/pius', {
        text: textPiu},
        {headers: { authorization: `Bearer ${token}` }})
  }
};

  return(
    <s.Wrapper>
      <s.IntroText>Escreva aqui seu piu</s.IntroText>
      <s.Inputzin placeholder='No que está pensando?' value={textPiu} onChangeText={setTextPiu}/>
      <s.Buttonzin onPress={PotsPiu} >
        <s.ButtonText>Piu</s.ButtonText>
      </s.Buttonzin>
    </s.Wrapper>
  )
  
}

export default PiuText