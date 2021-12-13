import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

interface ContainerProps{
  mb?: boolean
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
  ${(props) => props.mb && css`
    margin-bottom: 50px;
  `}
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(12)}px;
`;
