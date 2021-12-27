import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionButtonProps {
  option: string;
  onPress(): void;
  selected: boolean;
};

interface OptionTextProps {
  selected: boolean;
};

export const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled(TextInput)`
  display: flex;
  align-items: center;
  flex: 1;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  padding: 5px 0px 20px 5px;
`;

export const CloseButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(26)}px;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const SearchOptions = styled.View`
  display: flex;
  flex-direction: column;
`;

export const OptionButton = styled.TouchableOpacity<OptionButtonProps>`
  padding: 10px 20px;
  background-color: #f0f0f0;
  margin-bottom: 2px;
  ${({selected}) => selected && css `
    border-color: #006600;
    background-color: #eeffee;
  `}
`;

export const OptionText = styled.Text<OptionTextProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: black;
  ${({selected}) => selected && css `
    color: #006600};
  `}
`;
