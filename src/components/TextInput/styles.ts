import styled, { css } from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props extends TextInputProps{
  mb?: boolean
};

export const Container = styled(TextInput)<Props>`
  display: flex;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  padding: 5px 0px 20px 5px;
  ${(props) => props.mb && css`
    margin-bottom: 50px;
  `}
`;
