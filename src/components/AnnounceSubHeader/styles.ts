import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
`;

export const CloseView = styled.View``;

export const CloseButton = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(26)}px;
`;
