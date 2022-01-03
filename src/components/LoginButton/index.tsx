import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Icon, ButtonView, Text } from './styles';

interface Props extends RectButtonProps {
  iconName: string;
  text: string;
  onPress?(): void;
};

const LoginButton = ({iconName, text, onPress}: Props) => {
  const { loading } = useAuth();
  return (
    <Button enabled={!loading} onPress={onPress}>
      {loading && (
        <ButtonView loading={loading}>
          <ActivityIndicator size="large" color="black" />
        </ButtonView>
      )}
      {!loading && (
        <ButtonView>
          <Icon name={iconName} />
          <Text>{text}</Text>
          <Text></Text>
        </ButtonView>
      )}
    </Button>
  );
};

export default LoginButton;
