import React, { useEffect } from 'react';
import { Container, Main, Row } from './styles';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import { StatusBar } from 'react-native';
import theme from '../../contexts/theme';
import HomeOption from '../../components/HomeOption';

const Home = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor(theme.colors.blue);
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Row>
          <HomeOption flexDirection='column' iconName='house-user' text='À venda' />
          <HomeOption flexDirection='column' iconName='handshake' text='Para alugar' />
        </Row>
        <Row>
          <HomeOption flexDirection='row' iconName='calendar-alt' text='Últimos anúncios' />
          <HomeOption flexDirection='row' iconName='piggy-bank' text='Os mais baratos' />
        </Row>
        <Row>
          <HomeOption flexDirection='row' iconName='map-marker-alt' text='Pertinho de você' />
          <HomeOption flexDirection='column' iconName='building' text='Grandiosos' />
        </Row>
      </Main>
      <NavigationBar />
    </Container>
  );
};

export default Home;
