import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

interface FlexViewProps {
  flexDirection: 'row' | 'column',
};

export const Container = styled(RectButton)<FlexViewProps>`
  height: 80px;
  width: 170px;
  display: flex;
  flex-direction: column;
  ${(props) => props.flexDirection === 'column' && css`
    align-items: center;
  `}
  ${(props) => props.flexDirection === 'row' && css`
    flex-direction: row;
    justify-content: space-between;
  `}
  border-radius: 5px;
  background-color: #dddddd;
  padding: 10px;
  margin: 2px;
  margin-bottom: 50px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  text-align: right;
`;
