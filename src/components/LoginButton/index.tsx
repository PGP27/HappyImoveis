import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Icon, Text } from './styles';

interface Props extends RectButtonProps {
  iconName: string;
  text: string;
  onPress?(): void;
};

const LoginButton = ({iconName, text, onPress}: Props) => {
  return (
    <Button onPress={onPress}>
      <Icon name={iconName} />
      <Text>{text}</Text>
      <Text></Text>
    </Button>
  );
};

export default LoginButton;
