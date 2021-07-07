import styled from "styled-components/native"

export const WrapperPiu = styled.View`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 90%;
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

`
export const ProfilePic = styled.Image`
  height: 35px;
  width: 35px;
  margin-top: 2px;
  margin-left: 5px;
  border-radius: 17.5px;
`
export const Counter = styled.Text`
  font:600 10px 'Montserrat_700Bold';
	margin-left: 2px;
`
export const UsernamePiu = styled.Text`
  font:600 12px 'Montserrat_700Bold';
	margin-left: 2px;
`
export const ContentPiu = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 8px;
  width: 384px;
  min-height: 142px;
  font: 300 16px 'Montserrat_400Regular';
 `