import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${(({ theme }) =>  theme.fonts.regular)};
  font-size: ${RFValue(18)}px;
`;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const OptionsButton = styled.TouchableOpacity`
  margin-left: 30px;
`;

export const OptionsIcon = styled(AntDesign)`
  font-size: ${RFValue(20)}px;
`;

export const MainImage = styled.Image`
  height: 200px;
  width: 100%;
`;
