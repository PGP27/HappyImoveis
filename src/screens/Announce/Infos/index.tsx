import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import theme from '../../../contexts/theme';
import { Container, Header, Title, Text, CloseButton, Icon, ButtonsView, Button, ButtonText } from './styles';

const Infos = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);

  const navigation = useNavigation();

  const closeModal = () => {
    StatusBar.setBackgroundColor(theme.colors.blue);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <Title>Digite as informações do imóvel</Title>
        <CloseButton onPress={closeModal}>
          <Icon name="close" />
        </CloseButton>
      </Header>
      <Text>Quartos:</Text>
      <TextInput placeholder="Quantidades de quartos do imóvel" />
      <Text>Banheiros:</Text>
      <TextInput placeholder="Quantidades de banheiros do imóvel" />
      <Text>Vagas:</Text>
      <TextInput placeholder="Quantidades de vagas do imóvel" />
      <ButtonsView>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Pictures')}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </ButtonsView>
    </Container>
  );
};

export default Infos;
