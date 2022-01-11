import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeSelected {
  selected?: Boolean;
}

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: 10px;
`;

export const SubText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: #aaaaaa;
  margin-left: 5px;
  margin-bottom: 50px;
`;

export const AnnounceTypeView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 40px 0px;
`;

export const AnnounceTypeButtonBorder = styled.View<TypeSelected>`
  border: 1px solid black;
  border-radius: 50px;
  ${(({selected}) => selected && css`
    background-color: #304050;
  `)}
`;

export const AnnounceTypeButton = styled.TouchableOpacity`
  padding: 5px 15px;
  border-radius: 50px;
`;

export const ButtonsView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled(RectButton)`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #EEEEEE;
`;

export const ButtonText = styled.Text<TypeSelected>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: black;
  ${(({selected}) => selected && css`
    color: white;
  `)}
`;
