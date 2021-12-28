import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const ProfileInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 80px;
`;

export const FullName = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const List = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 2px;
`;

export const HeartIcon = styled(AntDesign)`
  font-size: ${RFValue(16)}px;
  margin-left: 25px;
`;

export const PriceIcon = styled(Ionicons)`
  font-size: ${RFValue(16)}px;
  margin-left: 25px;
`;

export const OutIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(17)}px;
  margin-left: 25px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-left: 15px;
`;
