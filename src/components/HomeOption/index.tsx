import React from 'react';
import { Container, Icon, Text } from './styles';

const HomeOption = ({flexDirection, iconName, text}) => {
  return (
    <Container flexDirection={flexDirection}>
      <Icon name={iconName} />
      <Text>{text}</Text>
    </Container>
  );
};

export default HomeOption;
