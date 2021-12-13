import React, { useState } from 'react';
import { Modal } from 'react-native';
import Search from '../../modals/Search';
import { Container, Button, Title, Icon } from './styles';
import { useNavigation } from '@react-navigation/core';

const NavigationBar = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>
        <Icon name="home" />
        <Title>Início</Title>
      </Button>
      <Button onPress={() => setOpenSearchModal(true)}>
        <Icon name="search" />
        <Title>Buscar</Title>
      </Button>
      <Button onPress={() => navigation.navigate('Descriptions')}>
        <Icon name="pricetag" />
        <Title>Anunciar</Title>
      </Button>
      <Modal visible={openSearchModal} animationType="slide">
        <Search setOpenSearchModal={setOpenSearchModal} />
      </Modal>
    </Container>
  );
};

export default NavigationBar;
