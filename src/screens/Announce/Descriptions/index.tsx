import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import theme from '../../../contexts/theme';
import { Container, Header, Title, Text, SubText, CloseButton, Icon, ButtonsView, Button, ButtonText } from './styles';

const Descriptions = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);

  useEffect(() => {
    if (price === 'NaN' || parseFloat(price.replace(',', '.')) === 0) {
      setPrice('');
    }
  }, [price]);

  const closeModal = () => {
    StatusBar.setBackgroundColor(theme.colors.blue);
    navigation.navigate('Home');
  };

  const handleChangePrice = (text: string) => {
      const onlyNumbers = /^\d*,?\d*$/;
      if (text.match(onlyNumbers)) {
        setPrice(text);
      }
  };
  
  const fixPrice = () => {
    const firstReplaceComma = price.replace(',','.');
    const toFloat = parseFloat(firstReplaceComma).toFixed(2);
    const toString = String(toFloat);
    const secondReplaceComma = toString.replace('.',',');
    setPrice(secondReplaceComma);
  };

  const verifyForm = () => {
    if (title.length !== 0) {
      if (description.length !== 0) {
        if (parseFloat(price.replace(',', '.')) > 0) {
          navigation.navigate('Address');
        } else {
          alert('Digite um preço válido continuar');
        }
      } else {
        alert('Preencha uma descrição para continuar');
      }
    } else {
      alert('Preencha um título para continuar');
    }
  };

  return (
    <Container>
      <Header>
        <Title>Digite as descrições do imóvel</Title>
        <CloseButton onPress={closeModal}>
          <Icon name="close" />
        </CloseButton>
      </Header>
      <Text>Título:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} placeholder="Título do imóvel" maxLength={40} />
      <SubText>Limite de 40 caracteres</SubText>
      <Text>Descrição:</Text>
      <TextInput value={description} onChangeText={(text) => setDescription(text)} placeholder="Descrição do imóvel" maxLength={200} />
      <SubText>Limite de 200 caracteres</SubText>
      <Text>Preço:</Text>
      <TextInput mb keyboardType='numeric' value={price} onChangeText={(text) => handleChangePrice(text)} onBlur={fixPrice} placeholder="Preço do imóvel" />
      <ButtonsView>
        <Button onPress={verifyForm}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </ButtonsView>
    </Container>
  );
};

export default Descriptions;
