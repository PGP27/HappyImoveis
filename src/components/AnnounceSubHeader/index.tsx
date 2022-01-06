import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Container, Title, CloseButton, Icon, CloseView } from './styles';

const AnnounceSubHeader = ({ text }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>{text}</Title>
      <CloseView>
        <CloseButton onPress={() => navigation.navigate('Home')}>
          <Icon name="close" />
        </CloseButton>
      </CloseView>      
    </Container>
  );
}

export default AnnounceSubHeader;
