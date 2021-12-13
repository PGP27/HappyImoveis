import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, ValueView, Text, Icon, Option } from './styles';

interface State {
  id: number,
  nome: string,
  regiao: {
    id: number,
    nome: string,
    sigla: string,
  },
  sigla: string,
}

interface Props{
  mb?: boolean
  options: Array<State>
  setCurrentStateId: any
};

const SelectInput = ({mb, setCurrentStateId, options}: Props) => {
  const namesOptions = options.map((state: State) => state.nome).sort();
  
  const [openSelectOptions, setOpenSelectOptions] = useState(false);
  const [value, setValue] = useState('Selecione uma opção');

  const selectOption = (event) => {
    setValue(event._dispatchInstances.memoizedProps.children);
    setOpenSelectOptions(false);
    const selectedState = options.find(({nome}) => nome === value);
    setCurrentStateId(selectedState.id);
  };

  return (
    <Container mb={mb}>
      <ValueView onPress={() => setOpenSelectOptions(!openSelectOptions)}>
        <Text value={value}>{value}</Text>
        <Icon name="caretdown" />
      </ValueView>
      {openSelectOptions && (
        <ScrollView style={{height: 200}} showsVerticalScrollIndicator={false}>
          {namesOptions.map((option) => (
            <Option key={option} onPress={selectOption}>{option}</Option>
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default SelectInput;
