import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import theme from '../../../contexts/theme';
import { Container, Header, Title, Text, CloseButton, Icon, ButtonsView, Button, ButtonText } from './styles';
import { SubText } from '../Descriptions/styles';
import SelectInput from '../../../components/SelectInput';

const Address = () => {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [currentStateId, setCurrentStateId] = useState('');
  const [currentCityId, setCurrentCityId] = useState('');
  const [states, setStates] = useState([]);
  const [citys, setcitys] = useState([]);
  const [openCitySelection, setOpenCitySelection] = useState(false);

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
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentStateId}/municipios`);
      const obj = await response.json();
      setStates(obj);
    };
    getCitys();
  }, [currentStateId]);

  const navigation = useNavigation();

  const closeModal = () => {
    StatusBar.setBackgroundColor(theme.colors.blue);
    navigation.navigate('Home');
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
        <TextInput placeholder="Endereço" maxLength={100} />
        <SubText>Limite de 100 caracteres</SubText>
        <Text>Número:</Text>
        <TextInput mb placeholder="Número" />
        <Text>Complemento:</Text>
        <TextInput placeholder="Complemento" maxLength={50} />
        <SubText>Limite de 50 caracteres</SubText>
        <Text>Estado:</Text>
        <SelectInput mb setCurrentStateId={setCurrentStateId} options={states} />
        {/* {openCitySelection && (
          <SelectInput text="Cidade" mb options={states.map(({nome}) => nome).sort()} />
        )} */}
        <ButtonsView>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Voltar</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate('Infos')}>
            <ButtonText>Próximo</ButtonText>
          </Button>
        </ButtonsView>
      </ScrollView>
    </Container>
  );
};

export default Address;
