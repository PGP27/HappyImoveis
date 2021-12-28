import React, { useEffect, useState } from 'react';
import { Container, Header, Input, Text, SearchOptions, OptionButton, OptionText } from './styles';
import { StatusBar } from 'react-native';
import NavigationBar from '../../components/NavigationBar';

const Search = ({ setOpenSearchModal }) => {
  const [selectedOption, setSelectedOption] = useState('Endereço');

  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);

  const closeModal = () => {
    setOpenSearchModal(false);
  };

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquise aqui..." underlineColorAndroid="gray" />
      </Header>
      <Text>Buscar por:</Text>
      <SearchOptions>
        <OptionButton option="Endereço" onPress={() => setSelectedOption('Endereço')} selected={selectedOption === 'Endereço'}>
          <OptionText selected={selectedOption === 'Endereço'}>Endereço</OptionText>
        </OptionButton>
        <OptionButton option="Bairro" onPress={() => setSelectedOption('Bairro')} selected={selectedOption === 'Bairro'}>
          <OptionText selected={selectedOption === 'Bairro'}>Bairro</OptionText>
        </OptionButton>
        <OptionButton option="Cidade" onPress={() => setSelectedOption('Cidade')} selected={selectedOption === 'Cidade'}>
          <OptionText selected={selectedOption === 'Cidade'}>Cidade</OptionText>
        </OptionButton>
      </SearchOptions>
      <NavigationBar selected="Search" />
    </Container>
  );
};

export default Search;
