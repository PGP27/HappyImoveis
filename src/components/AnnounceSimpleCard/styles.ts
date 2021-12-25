import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

export const Image = styled.Image`
  width: 50%;
`;

export const RightView = styled.View`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: black;
`;

export const IconsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(16)}px;
`;
