import React, { useEffect, useState } from 'react';
import { StatusBar, ScrollView, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import { SubText } from '../Descriptions/styles';
import SelectInput from '../../../components/SelectInput';
import { useAnnounce } from '../../../contexts/AnnounceContext';
import Header from '../../../components/Header';
import { Container, Text, ButtonsView, Button, ButtonText } from './styles';
import AnnounceSubHeader from '../../../components/AnnounceSubHeader';

const Address = () => {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [openCitySelection, setOpenCitySelection] = useState(false);
  const [state, setState] = useState<any>();
  const [city, setCity] = useState<any>();
  const [states, setStates] = useState([]);
  const [citys, setcitys] = useState([]);
  const navigation = useNavigation();
  const { setAnnounce } = useAnnounce();

  useEffect(() => {
    const getStates = async () => {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
      const obj = await response.json();
      setStates(obj);
    };
    getStates();
  }, []);
  
  useEffect(() => {
    const getCitys = async () => {
      if (state) {
        setOpenCitySelection(false);
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.id}/municipios`);
        const obj = await response.json();
        setcitys(obj);
        setOpenCitySelection(true);
      }
    };
    getCitys();
  }, [state]);

  const handleChangeNumber = (text: string) => {
    const onlyNumbers = /^\d*$/;
    if (text.match(onlyNumbers)) {
      setNumber(text);
    }
  };

  const fixNumber = () => {
    if (number.length > 0) {
      const toInt = parseInt(number);
      const toString = String(toInt);
      setNumber(toString);
    }
  };

  const verifyForm = () => {
    if (address.length !== 0) {
      if (parseInt(number) > 0) {
        if (state && state.nome) {
          if (city && city.nome) {
            setAnnounce((prevState) => ({
              ...prevState,
              address,
              number,
              complement,
              state: state.nome,
              city: city.nome,
            }));
            navigation.navigate('Infos');
          } else {
            Alert.alert(
              'Formul??rio incompleto.',
              'Escolha uma cidade para continuar.'
            );
          }
        } else {
          Alert.alert(
            'Formul??rio incompleto.',
            'Escolha um estado para continuar.'
          );
        }
      } else {
        Alert.alert(
          'Formul??rio incompleto.',
          'Digite um n??mero v??lido para continuar.'
        );
      }
    } else {
      Alert.alert(
        'Formul??rio incompleto.',
        'Digite um endere??o v??lido para continuar.'
      );
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header pageName="Anunciar" />
      <View style={{flex: 1, padding: 20}}>
        <AnnounceSubHeader text="Digite o endere??o do im??vel" />
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          <Text>Endere??o:</Text>
          <TextInput value={address} onChangeText={(text) => setAddress(text)} placeholder="Endere??o" maxLength={100} />
          <SubText>Limite de 100 caracteres</SubText>
          <Text>N??mero:</Text>
          <TextInput keyboardType='numeric' value={number} onChangeText={(text) => handleChangeNumber(text)} onBlur={fixNumber} mb placeholder="N??mero" maxLength={5} />
          <Text>Complemento:</Text>
          <TextInput value={complement} onChangeText={(text) => setComplement(text)} placeholder="Complemento" maxLength={50} />
          <SubText>Limite de 50 caracteres</SubText>
          <Text>Estado:</Text>
          <SelectInput mb setState={setState} options={states} />
          {openCitySelection && (
            <View>
              <Text>Cidade:</Text>
              <SelectInput mb setState={setCity} options={citys} />
            </View>
          )}
          <ButtonsView>
            <Button onPress={() => navigation.goBack()}>
              <ButtonText>Voltar</ButtonText>
            </Button>
            <Button onPress={verifyForm}>
              <ButtonText>Pr??ximo</ButtonText>
            </Button>
          </ButtonsView>
        </ScrollView>
      </View>
    </Container>
  );
};

export default Address;
