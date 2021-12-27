import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

interface Bool {
  selected: boolean;
}

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled(RectButton)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
`;

export const Icon = styled(Ionicons)<Bool>`
  color: black;
  font-size: ${RFValue(20)}px;
  ${(props) => props.selected && css`
    color: blue;
  `}
`;

export const Title = styled.Text<Bool>`
  font-family: ${({theme}) => theme.fonts.regular} ;
  text-align: center;
  font-size: ${RFValue(16)}px;
  color: black;
  ${(props) => props.selected && css`
    color: blue;
  `}
`;
