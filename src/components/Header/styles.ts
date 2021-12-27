import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 10px 20px;
`;

export const PageName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(22)}px;
  text-align: center;
`;

export const Logo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  width: 100px;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(32)}px;
`;
