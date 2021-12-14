import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, ValueView, Text, Icon, Option } from './styles';

const SelectInput = ({mb, setState, options}) => {  
  const [openSelectOptions, setOpenSelectOptions] = useState(false);
  const [value, setValue] = useState('Selecione uma opção');

  const selectOption = (event) => {
    setValue(event._dispatchInstances.memoizedProps.children);
    setOpenSelectOptions(false);
    const selectedState = options.find(({nome}) => nome === event._dispatchInstances.memoizedProps.children);
    setState(selectedState);
  };

  return (
    <Container mb={mb}>
      <ValueView onPress={() => setOpenSelectOptions(!openSelectOptions)}>
        <Text value={value}>{value}</Text>
        <Icon name="caretdown" />
      </ValueView>
      {openSelectOptions && (
        <ScrollView style={{height: 200}} showsVerticalScrollIndicator={false}>
          {options.map(({nome}) => nome).sort().map((option) => (
            <Option key={option} onPress={selectOption}>{option}</Option>
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default SelectInput;
