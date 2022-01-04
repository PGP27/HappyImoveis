import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: black;
  padding-bottom: 15px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;
`;

export const OptionsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: #3090ee;
`;

export const IconsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 5px 10px;
  margin-left: 20px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
`;
