import React from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps{
  mb?: boolean
};

const TextInput = ({...rest}: Props) => {
  return (
    <Container {...rest} underlineColorAndroid="gray"/>
  );
};

export default TextInput;
