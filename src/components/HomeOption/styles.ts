import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  flex: 1;
  height: ${RFValue(100)}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background-color: #eeeeee;
  padding: 10px;
  margin: 2px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(24)}px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;
