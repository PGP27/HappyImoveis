import React, { useState } from 'react';
import { database } from '../../../firebase';
import { StatusBar } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Header, Input, Text, SearchOptions, OptionButton, OptionText } from './styles';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('address');
  const { user } = useAuth();

  const searchAnnounce = async () => {
    const getAllUsers = await database.collection('announces').get();
    const allUsers = getAllUsers.docs.map((doc) => doc.data());
    const currentUser = allUsers.find(({ email }) => email === user.email);

    const getAllAnnounces = await database.collection('announces').get();
    const allAnnounces = getAllAnnounces.docs.map((doc) => doc.data());
    const otherAnnounces = allAnnounces.filter(({ advertiserId }) => advertiserId !== currentUser.id);
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
        <OptionButton option="price" onPress={() => setSelectedOption('price')} selected={selectedOption === 'price'}>
          <OptionText selected={selectedOption === 'price'}>Preço</OptionText>
        </OptionButton>
      </SearchOptions>
      <NavigationBar selected="Search" />
    </Container>
  );
};

export default Search;
