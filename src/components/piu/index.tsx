import React, {useContext, useState} from 'react'
import { View, Image, Text, TextInput, TextInputTextInputEventData, Button, TouchableOpacity} from 'react-native'
import AuthContext from '../../context/auth';
import api from '../../services/api';
import * as s from './style'
import Likecp from '../../assets/images/like.png'
import {Ionicons} from '@expo/vector-icons'

export interface Piu {
	id: string;
	user: User;
	likes: PiuLike[];
	text: string;
	created_at?: Date;
	updated_at?: Date;
}
interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}
interface User {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: Piu[];
	likes: PiuLike[];
	following: User[];
	followers: User[];
	favorites: Piu[];
}
 interface PiuProps {
  id: string;
  likes?: PiuLike[];
  text: string;
  username?: string;
 }

const PiuComp: React.FC <Piu> = ({id , likes, text, user }) => {
  
  
  const {token} = useContext(AuthContext);
  const deletePiu = async () => {
      const deleteResponse = await api.delete('/pius',
      { data: {piu_id:id},
      headers: { authorization: `Bearer ${token}` }})}


  const[likeCount,setLikeCount] = useState(0)

  const piuLike = async () => {
    const likeResponse = await api.post('/pius/like',
    {'piu_id':id},
    {headers: { authorization: `Bearer ${token}` }})
    if (likeResponse.data.operation === 'like'){
      setLikeCount(likeCount + 1)
    }
    else{
      setLikeCount(likeCount - 1)
    }
  }
  

  
  const piuFav = async () => {
    const favResponse = await api.post('/pius/favorite',
    {'piu_id':id},
    {headers: { authorization: `Bearer ${token}` }})
  }

  return(
    <s.WrapperPiu>
      <s.Piu_interaction>
        <s.ProfilePic source={user.photo? {uri:user.photo} : {uri: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQp2nmdFVhAS7WCgFpdjQZgU15senpC9QCPeUH4fNnqbfcOhnpg1jsemaOZfKW8zhCtjXhvxcsGkt-GMVyiDmM'}}/>
        <s.LikePhoto>
          <TouchableOpacity onPress={piuLike}><Ionicons name="heart-outline" size={26} color="black" /></TouchableOpacity>
          <s.Counter>{likes.length + likeCount}</s.Counter>
        </s.LikePhoto>
        <s.ExcButton onPress={deletePiu}><Ionicons name="ios-trash" size={14} color="black" /></s.ExcButton>
      </s.Piu_interaction>
      <s.ContentPiu>
        <s.UsernamePiu>{user.username}</s.UsernamePiu>
        <s.TextPiu>{text}</s.TextPiu>
      </s.ContentPiu>
    </s.WrapperPiu>
  )

}

export default PiuComp