import React, { useState } from 'react';
import { database } from '../../../firebase';
import { StatusBar } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Header, Input, Text, SearchOptions, OptionButton, OptionText } from './styles';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('address');
  const { user } = useAuth();
  const navigation =  useNavigation();

  const searchAnnounce = async () => {
    const getAllUsers = await database.collection('users').get();
    const allUsers = getAllUsers.docs.map((doc) => doc.data());
    const currentUser = allUsers.find(({ email }) => email === user.email);
    
    const getAllAnnounces = await database.collection('announces').get();
    const allAnnounces = getAllAnnounces.docs.map((doc) => doc.data());
    const otherAnnounces = allAnnounces.filter(({ advertiserId }) => advertiserId !== currentUser.id);
    const filteredAnnounces = otherAnnounces.filter((announce) => announce[`${selectedOption}`].toLowerCase().includes(inputText.toLowerCase()));

    let pageName = '';
    if (selectedOption === 'address') pageName = 'endereço';
    if (selectedOption === 'city') pageName = 'cidade';
    if (selectedOption === 'state') pageName = 'estado';

    navigation.navigate(
      'ShowAnnounces',
      {
        pageName: `Buscando por ${pageName}: "${inputText}"`,
        announces: filteredAnnounces,
      }
    )
  };

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header>
        <Input value={inputText} onChangeText={(text) => setInputText(text)} onSubmitEditing={searchAnnounce} returnKeyType="search" placeholder="Pesquise aqui..." underlineColorAndroid="gray" />
      </Header>
      <Text>Buscar por:</Text>
      <SearchOptions>
        <OptionButton option="address" onPress={() => setSelectedOption('address')} selected={selectedOption === 'address'}>
          <OptionText selected={selectedOption === 'address'}>Endereço</OptionText>
        </OptionButton>
        <OptionButton option="city" onPress={() => setSelectedOption('city')} selected={selectedOption === 'city'}>
          <OptionText selected={selectedOption === 'city'}>Cidade</OptionText>
        </OptionButton>
        <OptionButton option="state" onPress={() => setSelectedOption('state')} selected={selectedOption === 'state'}>
          <OptionText selected={selectedOption === 'state'}>Estado</OptionText>
        </OptionButton>
      </SearchOptions>
      <NavigationBar selected="Search" />
    </Container>
  );
};

export default Search;
