import styled from "styled-components/native"

export const OutWrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: #FFB703;

`
export const Wrapper = styled.View`
  display: flex;
  
  justify-content: center;
  align-items: center;
  background-color: #FFB703;
`
export const Scroll = styled.ScrollView`
  flex-grow: 1;
  background-color: #FFB703;
`
export const Inputzin = styled.TextInput`
  width: 78%;
  background-color: #F0F0F0;
  border: solid 0.1px black;
  border-radius: 8px;
  height: 48px;
  font: 700 14px 'Montserrat_400Regular' ;
  padding-left: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
`
export const Background = styled.View`
  background-color:#FFB703;
  display: flex;
  justify-content: center;
`
export const FlexCenter= styled.View`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
`
export const ProfilePic = styled.Image`
  height: 45px;
  width: 45px;
  margin-left: 5px;
  border-radius: 22.5px;
  margin-bottom: 8px;
`