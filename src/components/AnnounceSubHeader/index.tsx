import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Container, Title, CloseButton, Icon } from './styles';

const AnnounceSubHeader = ({ text }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>{text}</Title>
      <CloseButton onPress={() => navigation.navigate('Home')}>
        <Icon name="close" />
      </CloseButton>
    </Container>
  );
}

export default AnnounceSubHeader;
