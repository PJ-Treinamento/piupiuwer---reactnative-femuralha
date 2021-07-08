import styled from "styled-components/native"

export const WrapperPiu = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #f5f5f5;
  padding:5px;
  border: 0.3px solid #F0F0F0;
  width: 92%;
  margin-left: 4%;
  border-radius: 4px;
`
export const Piu_interaction = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 40px;
`
export const Like_btn = styled.Image`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 27px;
  margin-top: 5px;
`
export const ProfilePic = styled.Image`
  height: 45px;
  width: 45px;
  margin-left: 5px;
  border-radius: 22.5px;
`
export const Counter = styled.Text`
  font:600 10px 'Montserrat_700Bold';
	margin-left: 2px;
`
export const UsernamePiu = styled.Text`
  font:600 16px 'Montserrat_700Bold';
	margin-left: 2px;
`
export const ContentPiu = styled.View`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 8px;
  width: 384px;
  min-height: 142px;
  ;
 `
 export const TextPiu = styled.Text`
  font: 300 16px 'Montserrat_400Regular';
  margin-left: 2px;
  flex-wrap: wrap;
`
export const LikePhoto = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ExcButton = styled.TouchableOpacity`
  margin-top: 40px;
  width: 24px;
  height: 16px;
  background: #FFB703;
  border-radius: 8px; 
  display: flex;
  align-items: center;
  justify-content: center;
  `