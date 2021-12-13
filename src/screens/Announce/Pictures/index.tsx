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
        <Title>Fotos do imóvel</Title>
        <CloseButton onPress={closeModal}>
          <Icon name="close" />
        </CloseButton>
      </Header>
      <Text>Foto principal:</Text>
      <TextInput placeholder="Foto principal do imóvel" />
      <Text>Outras fotos:</Text>
      <TextInput placeholder="Outras fotos do imóvel" />
      <ButtonsView>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Pictures')}>
          <ButtonText>Concluir</ButtonText>
        </Button>
      </ButtonsView>
    </Container>
  );
};

export default Infos;
