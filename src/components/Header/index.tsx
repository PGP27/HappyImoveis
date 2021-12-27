import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Logo, Title, Icon, PageName } from './styles';

const Header = ({ pageName }) => (
  <Container>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <PageName>{pageName}</PageName>
    <Logo>
      <Title>Happy Imóveis</Title>
      <Icon name="home-search" />
    </Logo>
  </Container>
);

export default Header;
