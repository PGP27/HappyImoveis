import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const PictureView = styled.View`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 3px dashed black;
  border-radius: 1px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const ButtonsView = styled.View`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonMax = styled(RectButton)`
  width: 300px;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #EEEEEE;
  margin-bottom: 100px;
`;

export const Button = styled(RectButton)`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #EEEEEE;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;
