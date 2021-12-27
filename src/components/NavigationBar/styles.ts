import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const Button = styled(RectButton)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue};
  padding: 7px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular} ;
  text-align: center;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const Icon = styled(Ionicons)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(20)}px;
`;
