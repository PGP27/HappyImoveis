import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 10px 20px;
  background-color: ${({theme}) => theme.colors.blue};
`;

export const Logo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  width: 100px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(32)}px;
`;

export const ProfileButton = styled(RectButton)`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: 40px;
`;

export const ProfileImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 40px;
`;
