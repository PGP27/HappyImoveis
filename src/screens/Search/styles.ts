import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
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
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  padding: 5px 0px 20px 5px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const CloseText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: #ff3333;
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  padding: 0px 20px;
  margin: 20px 0px;
`;

export const SearchOptions = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
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
