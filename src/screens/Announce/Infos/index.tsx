import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import { Container, Text, ButtonsView, Button, ButtonText } from './styles';
import { useAnnounce } from '../../../contexts/AnnounceContext';
import AnnounceSubHeader from '../../../components/AnnounceSubHeader';
import Header from '../../../components/Header';

const Infos = () => {
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [parkingSpace, setParkingSpace] = useState('');
  const navigation = useNavigation();
  const { setAnnounce } = useAnnounce();

  const handleChangeNumber = (text, setState) => {
    const onlyNumbers = /^\d*$/;
    if (text.match(onlyNumbers)) {
      setState(text);
    }
  };

  const fixNumber = (state, setState) => {
    if (state.length > 0) {
      const toInt = parseInt(state);
      const toString = String(toInt);
      setState(toString);
    }
  };

  const verifyForm = () => {
    if (parseInt(bedrooms) > 0) {
      if (parseInt(bathrooms) > 0) {
        if (parseInt(parkingSpace) >= 0) {
          setAnnounce((state) => ({
            ...state,
            bedrooms,
            bathrooms,
            parkingSpace,
          }));
          navigation.navigate('Pictures');
        } else {
          alert('Digite um número de vagas válido para continuar');
        }
      } else {
        alert('Digite um número de banheiros válido para continuar');
      }
    } else {
      alert('Digite um número de quartos válido para continuar');
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header pageName="Anunciar" />
      <View style={{padding: 20}}>
        <AnnounceSubHeader text="Digite as informações do imóvel" />
        <Text>Quartos:</Text>
        <TextInput keyboardType='numeric' value={bedrooms} onChangeText={(text) => handleChangeNumber(text, setBedrooms)} onBlur={() => fixNumber(bedrooms, setBedrooms)} mb placeholder="Quantidades de quartos do imóvel" maxLength={2} />
        <Text>Banheiros:</Text>
        <TextInput keyboardType='numeric' value={bathrooms} onChangeText={(text) => handleChangeNumber(text, setBathrooms)} onBlur={() => fixNumber(bathrooms, setBathrooms)} mb placeholder="Quantidades de banheiros do imóvel" maxLength={2} />
        <Text>Vagas:</Text>
        <TextInput keyboardType='numeric' value={parkingSpace} onChangeText={(text) => handleChangeNumber(text, setParkingSpace)} onBlur={() => fixNumber(parkingSpace, setParkingSpace)} mb placeholder="Quantidades de vagas do imóvel" maxLength={2} />
        <ButtonsView>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Voltar</ButtonText>
          </Button>
          <Button onPress={verifyForm}>
            <ButtonText>Próximo</ButtonText>
          </Button>
        </ButtonsView>
      </View>
    </Container>
  );
};

export default Infos;
