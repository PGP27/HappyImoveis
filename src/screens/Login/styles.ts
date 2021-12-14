import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FlexViewProps {
  flexDirection: 'row' | 'column',
};

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const Center = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const FlexView = styled.View<FlexViewProps>`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.flexDirection && css`
    flex-direction: ${props.flexDirection};
  `}
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold} ;
  text-align: center;
  font-size: ${RFValue(42)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(100)}px;
`;

export const Welcome = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular} ;
  font-size: ${RFValue(21)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
`;