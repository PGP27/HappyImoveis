import React, { useEffect, useState } from 'react';
import { StatusBar, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import theme from '../../../contexts/theme';
import * as ImagePicker from 'expo-image-picker';
import { Container, Header, Title, Text, CloseButton, Icon, ButtonsView, Button, ButtonText } from './styles';

const Infos = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para fazer upload das imagens.');
      } else {
        let result: any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri);
        }
      }
    }
  };

  const navigation = useNavigation();

  const closeModal = () => {
    StatusBar.setBackgroundColor(theme.colors.blue);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <Title>Fotos do imóvel</Title>
        <CloseButton onPress={closeModal}>
          <Icon name="close" />
        </CloseButton>
      </Header>
      <Text>Foto principal:</Text>
      <TextInput placeholder="Foto principal do imóvel" />
      <Text>Outras fotos:</Text>
      <TextInput placeholder="Outras fotos do imóvel" />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <ButtonsView>
        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Voltar</ButtonText>
        </Button>
        <Button onPress={pickImage}>
          <ButtonText>Concluir</ButtonText>
        </Button>
      </ButtonsView>
    </Container>
  );
};

export default Infos;
