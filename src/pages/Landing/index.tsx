import React, { FormEvent, useState, useContext, useCallback} from 'react'
import { View, Image, Text, TextInput, TextInputTextInputEventData} from 'react-native'
import * as s from './styles'
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import LogoGalinha from '../../assets/images/Galinha.png'
import AuthContext  from '../../context/auth'
import api from '../../services/api'


function Landing(){

  const {setUserData} = useContext(AuthContext);	

	const handleLogin = useCallback( async (cred) => {
      const response = await api.post('/sessions/login', { email: user1, password: password })
      const { token, user } = response.data
      AsyncStorage.setItem("@PiuPiuwer:token", token)
      AsyncStorage.setItem("@PiuPiuwer:user", JSON.stringify(user))
      setUserData(response.data)
      console.log('hmm')
	},[]);
  const [cred, setCred] = useState({
    email:'',
    password:''
  })
  const[ user1, setUser] = useState('')
  const[ password, setPassword] = useState('')
  
  return(
    <s.Wrapper>
      <s.LogoLogin source={LogoGalinha}/>
      <s.NameText>Piu Piuwer</s.NameText>
      <s.LoginWrapper>
        <s.LoginText>Veja o que te aguarda no mundo.</s.LoginText>
        <s.Inputzin placeholder='Login' 
        value={user1} 
        onChangeText={setUser}/>
        <s.Inputzin placeholder='Senha'
        value={password}
        onChangeText={setPassword}/>
        <s.Buttonzin onPress={handleLogin}>
          <s.ButtonText>
            Entrar
          </s.ButtonText>
        </s.Buttonzin>
        <s.ButtonzinReg >
          <s.ButtonTextReg>
            Cadastro
          </s.ButtonTextReg>
        </s.ButtonzinReg>
      </s.LoginWrapper>
    </s.Wrapper>
  )
}



export default Landing



  