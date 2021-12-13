import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container, ValueView, Text, Icon, Option } from './styles';

interface Props{
  text: string
  mb?: boolean
  options: Array<string>
};

const SelectInput = ({text, mb, options}: Props) => {
  const [openSelectOptions, setOpenSelectOptions] = useState(false);
  const [value, setValue] = useState('Selecione uma opção');

  const selectOption = (event) => {
    setValue(event._dispatchInstances.memoizedProps.children);
    setOpenSelectOptions(false);
  };

  return (
    <Container mb={mb}>
      <ValueView onPress={() => setOpenSelectOptions(!openSelectOptions)}>
        <Text value={value}>{value}</Text>
        <Icon name="caretdown" />
      </ValueView>
      {openSelectOptions && (
        <ScrollView style={{height: 200}} showsVerticalScrollIndicator={false}>
          {options.map((option) => (
            <Option key={option} onPress={selectOption}>{option}</Option>
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default SelectInput;
