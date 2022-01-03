import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 10px 20px;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;