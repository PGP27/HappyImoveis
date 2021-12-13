import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
  margin: 10px 0px;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(24)}px;
  padding: 10px 20px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.black};
  padding: 10px;
`;