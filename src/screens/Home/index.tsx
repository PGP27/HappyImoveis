import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Main, Row } from './styles';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import HomeOption from '../../components/HomeOption';

const Home = () => {
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header pageName="Home" />
      <Main>
        <HomeOption iconName='house-user' text='À venda' />
        <HomeOption iconName='handshake' text='Para alugar' />
        <HomeOption iconName='piggy-bank' text='Os mais baratos' />
        <HomeOption iconName='building' text='Alto padrão' />
      </Main>
      <NavigationBar selected="Home" />
    </Container>
  );
};

export default Home;
