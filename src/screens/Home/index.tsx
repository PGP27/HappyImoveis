import React from 'react';
import { Container, Main, Row } from './styles';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import HomeOption from '../../components/HomeOption';

const Home = () => {
  return (
    <Container>
      <Header pageName="Home" />
      <Main>
        <Row>
          <HomeOption iconName='house-user' text='À venda' />
          <HomeOption iconName='handshake' text='Para alugar' />
        </Row>
        <Row>
          <HomeOption iconName='calendar-alt' text='Últimos anúncios' />
          <HomeOption iconName='piggy-bank' text='Os mais baratos' />
        </Row>
        <Row>
          <HomeOption iconName='map-marker-alt' text='Pertinho de você' />
          <HomeOption iconName='building' text='Alto padrão' />
        </Row>
      </Main>
      <NavigationBar selected="Home" />
    </Container>
  );
};

export default Home;
