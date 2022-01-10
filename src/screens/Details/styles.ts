import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, Ionicons } from '@expo/vector-icons';

interface TextProps {
  type?: string;
  flex?: boolean;
  full?: boolean;
};

export const Container = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0px;
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

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(20)}px;
`;

export const MainImage = styled.Image`
  height: 200px;
  width: 100%;
`;

export const AnnounceInfos = styled.View`
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
    font-size: ${RFValue(18)}px;
    color: #006600;
  `)}
  ${(({ type }) => type === 'date' && css`
    color: #777777;
    padding-top: 10px;
  `)}
  ${(({ flex }) => flex && css`
    text-align: justify;
  `)}
  ${(({ full }) => full && css`
    width: 100%;
    font-size: ${RFValue(16)}px;
    padding: 5px;
  `)}
`;

export const AnnounceDescription = styled.Text`
  width: 100%;
  font-family: ${(({ theme }) =>  theme.fonts.regular)};
  font-size: ${RFValue(16)}px;
  text-align: justify;
  padding: 10px 0px;
`;

export const LocationView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;

export const LocationIcon = styled(Ionicons)`
  font-size: ${RFValue(16)}px;
  margin-right: 10px;
`;

export const FlexSpace = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const FlexRowCenter = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AdvertiserPicture = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 80px;
`;
