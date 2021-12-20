import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import theme from '../../../contexts/theme';
import { Container, Header, Title, Text, CloseButton, Icon, ButtonsView, Button, ButtonText } from './styles';
import { SubText } from '../Descriptions/styles';
import SelectInput from '../../../components/SelectInput';
import { useAnnounce } from '../../../contexts/AnnounceContext';

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
    StatusBar.setBackgroundColor('white');
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

  const closeModal = () => {
    StatusBar.setBackgroundColor(theme.colors.blue);
    navigation.navigate('Home');
  };

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
            alert('Escolha uma cidade para continuar');
          }
        } else {
          alert('Escolha um estado para continuar');
        }
      } else {
        alert('Digite um número válido para continuar');
      }
    } else {
      alert('Preencha um endereço para continuar');
    }
  };

  return (
    <Container>
      <Header>
        <Title>Digite o endereço do imóvel</Title>
        <CloseButton onPress={closeModal}>
          <Icon name="close" />
        </CloseButton>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Endereço:</Text>
        <TextInput value={address} onChangeText={(text) => setAddress(text)} placeholder="Endereço" maxLength={100} />
        <SubText>Limite de 100 caracteres</SubText>
        <Text>Número:</Text>
        <TextInput keyboardType='numeric' value={number} onChangeText={(text) => handleChangeNumber(text)} onBlur={fixNumber} mb placeholder="Número" maxLength={5} />
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
            <ButtonText>Próximo</ButtonText>
          </Button>
        </ButtonsView>
      </ScrollView>
    </Container>
  );
};

export default Address;
