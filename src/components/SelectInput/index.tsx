import React, { useState } from 'react';
import { Container, Text, Icon } from './styles';

interface Props{
  mb?: boolean
};

const SelectInput = ({mb}: Props) => {
  const [openOptionSelectModal, setOpenOptionSelectModal] = useState(false);

  return (
    <Container mb={mb} onPress={() => setOpenOptionSelectModal(true)}>
      <Text>Texto</Text>
      <Icon name="caretdown" />
    </Container>
  );
};

export default SelectInput;
