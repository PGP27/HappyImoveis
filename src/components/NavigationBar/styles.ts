import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const Button = styled(RectButton)`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue};
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular} ;
  text-align: center;
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const Icon = styled(Ionicons)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(20)}px;
`;
