import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

interface TextProps {
  type?: string;
};

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom:20px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: black;
  padding-bottom: 15px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;
`;

export const FlexSpace = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-family: ${(({theme}) => theme.fonts.regular)};
  font-size: ${RFValue(15)}px;
  color: black;
  ${(({ type }) => type === 'price' && css`
    color: #006600;
  `)}
  ${(({ type }) => type === 'date' && css`
    color: #777777;
  `)}
`;

export const FlexStart = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(16)}px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-family: ${(({theme}) => theme.fonts.regular)};
  font-size: ${RFValue(15)}px;
  color: black;
`;

export const InfoNumber = styled.Text`
  font-family: ${(({theme}) => theme.fonts.regular)};
  font-size: ${RFValue(20)}px;
  color: black;
`;
