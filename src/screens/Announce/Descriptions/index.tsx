import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAnnounce } from '../../../contexts/AnnounceContext';
import TextInput from '../../../components/TextInput';
import { Container, Text, SubText, ButtonsView, Button, ButtonText, AnnounceTypeView, AnnounceTypeButton, AnnounceTypeButtonBorder } from './styles';
import Header from '../../../components/Header';
import AnnounceSubHeader from '../../../components/AnnounceSubHeader';

const Descriptions = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const { setAnnounce } = useAnnounce();
  const navigation = useNavigation();

  useEffect(() => {
    if (price === 'NaN' || parseFloat(price.replace(',', '.')) === 0) {
      setPrice('');
    }
  }, [price]);

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
        if (type.length !== 0) {
          if (parseFloat(price.replace(',', '.')) > 0) {
            setAnnounce((state) => ({
              ...state,
              title,
              description,
              type,
              price,
            }));
            navigation.navigate('Address');
          } else {
            alert('Digite um preço válido continuar');
          }
        } else {
          alert('Escolha um tipo de anúncio para continuar');  
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
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header pageName="Anunciar" />
      <View style={{flex: 1, padding: 20}}>
        <AnnounceSubHeader text="Digite as descrições do imóvel" />
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          <Text>Título:</Text>
          <TextInput value={title} onChangeText={(text) => setTitle(text)} placeholder="Título do imóvel" maxLength={40} />
          <SubText>Limite de 40 caracteres</SubText>
          <Text>Descrição:</Text>
          <TextInput value={description} onChangeText={(text) => setDescription(text)} placeholder="Descrição do imóvel" maxLength={200} />
          <SubText>Limite de 200 caracteres</SubText>
          <Text>Tipo de anúncio:</Text>
          <AnnounceTypeView>
            <AnnounceTypeButtonBorder selected={type === 'Sale'}>
              <AnnounceTypeButton onPress={() => setType('Sale')}>
                <ButtonText selected={type === 'Sale'}>Venda</ButtonText>
              </AnnounceTypeButton>
            </AnnounceTypeButtonBorder>
            <AnnounceTypeButtonBorder selected={type === 'Rental'}>
              <AnnounceTypeButton onPress={() => setType('Rental')}>
                <ButtonText selected={type === 'Rental'}>Aluguel</ButtonText>
              </AnnounceTypeButton>
            </AnnounceTypeButtonBorder>
          </AnnounceTypeView>
          <Text>Preço:</Text>
          <TextInput mb keyboardType='numeric' value={price} onChangeText={(text) => handleChangePrice(text)} onBlur={fixPrice} placeholder="Preço do imóvel" />
          <ButtonsView>
            <Button onPress={verifyForm}>
              <ButtonText>Próximo</ButtonText>
            </Button>
          </ButtonsView>
        </ScrollView>
      </View>
    </Container>
  );
};

export default Descriptions;
