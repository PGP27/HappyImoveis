import React from 'react';
import { Container, ButtonBorder, Button, Title, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = ({ selected }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonBorder selected={selected === 'Home' ? true : false}>
        <Button onPress={() => navigation.navigate('Home')}>
          <Icon selected={selected === 'Home' ? true : false} name="home" />
          <Title selected={selected === 'Home' ? true : false}>Início</Title>
        </Button>
      </ButtonBorder>
      <ButtonBorder selected={selected === 'Search' ? true : false}>
        <Button onPress={() => navigation.navigate('Search')}>
          <Icon selected={selected === 'Search' ? true : false} name="search" />
          <Title selected={selected === 'Search' ? true : false}>Buscar</Title>
        </Button>
      </ButtonBorder>
      <ButtonBorder selected={selected === 'Announce' ? true : false}>
        <Button onPress={() => navigation.navigate('Descriptions')}>
          <Icon selected={selected === 'Announce' ? true : false} name="pricetag" />
          <Title selected={selected === 'Announce' ? true : false}>Anunciar</Title>
        </Button>
      </ButtonBorder>
      <ButtonBorder selected={selected === 'Profile' ? true : false}>
        <Button onPress={() => navigation.navigate('Profile')}>
          <Icon selected={selected === 'Profile' ? true : false} name="person" />
          <Title selected={selected === 'Profile' ? true : false}>Perfil</Title>
        </Button>
      </ButtonBorder>
    </Container>
  );
};

export default NavigationBar;
