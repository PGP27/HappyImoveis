import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { TextProps } from 'react-native';

interface ContainerProps{
  mb?: boolean
};

interface NewTextProps extends TextProps {
  value: string
};

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  ${(props) => props.mb && css`
    margin-bottom: 50px;
  `}
`;

export const ValueView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 10px 10px;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
`;

export const Text = styled.Text<NewTextProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: #aaaaaa;
  ${(props) => props.value !== 'Selecione uma opção' && css`
    color: black;
  `}
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(12)}px;
`;

export const Option = styled.Text`
  width: 100%;
  padding: 10px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: black;
  background-color: #eeeeee;
  margin-top: 2px;
`;
