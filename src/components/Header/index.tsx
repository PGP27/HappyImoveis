import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Logo, Title, Icon, PageName } from './styles';

const Header = ({ pageName }) => {
  if (pageName === 'Home') {
    return (
      <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Logo>
          <Title>Happy Imóveis</Title>
          <Icon name="home-search" />
        </Logo>
      </Container>
    );
  }
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <PageName>{pageName}</PageName>
    </Container>
  );
}

export default Header;
