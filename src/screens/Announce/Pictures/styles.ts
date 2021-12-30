import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface PictureViewProps {
  picture: boolean;
};

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const FullView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const PictureView = styled.View<PictureViewProps>`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 3px dashed black;
  border-radius: 1px;
  margin-bottom: 20px;
  ${(({picture}) => picture && css`
  border: 0px dashed black;
  `)}
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const ButtonMax = styled(RectButton)`
  width: 100%;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #EEEEEE;
  margin-bottom: 100px;
`;

export const ButtonsView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
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
