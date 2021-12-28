import React, { useState } from 'react';
import { StatusBar, Platform, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database, storage } from '../../../../firebase';
import * as ImagePicker from 'expo-image-picker';
import { Container, PictureView, Text, ButtonsView, ButtonMax, Button, ButtonText } from './styles';
import { useAnnounce } from '../../../contexts/AnnounceContext';
import { useAuth } from '../../../contexts/AuthContext';
import { v4 as uuid } from 'uuid';
import Header from '../../../components/Header';
import AnnounceSubHeader from '../../../components/AnnounceSubHeader';

const Pictures = () => {
  const [mainPicture, setMainPicture] = useState(null);
  const [mainPictureId] = useState(uuid());
  const navigation = useNavigation();
  const { announce } = useAnnounce();
  const { user } = useAuth();

  const getBlobFromURI =  async (uri: string) => {
    const blob = await (await fetch(uri)).blob();
    return blob;
  }

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para fazer upload das imagens.');
      } else {
        let result: any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          quality: 1,
        });
        if (!result.cancelled) {
          setMainPicture(result.uri);
        }
      }
    }
  };

  const submitAnnounce = async () => {
    if (mainPicture) {
      const getAllUsers = await database.collection('users').get();
      const allUsers = getAllUsers.docs.map((doc) => doc.data());
      const currentUser = allUsers.find(({ email }) => email === user.email);
      const blob = await getBlobFromURI(mainPicture);
      await storage.ref(`announces/${currentUser.id}`).child(mainPictureId).put(blob);
      await database.collection('announces').add({
        id: uuid(),
        title: announce.title,
        description: announce.description,
        price: announce.price,
        address: announce.address,
        number: announce.number,
        complement: announce.complement,
        state: announce.state,
        city: announce.city,
        bedrooms: announce.bedrooms,
        bathrooms: announce.bathrooms,
        parkingSpace: announce.parkingSpace,
        mainPictureId: mainPictureId,
        advertiserId: currentUser.id,
      });
      navigation.navigate('Home');
      alert('Imóvel cadastrado com sucesso!');
    } else {
      alert('Adicione uma foto para concluir');
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header pageName="Anunciar" />
      <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20}}>
        <AnnounceSubHeader text="Foto principal do imóvel" />
        <PictureView>
          {!mainPicture && <Text>Foto do imóvel</Text>}
          {mainPicture && <Image source={{ uri: mainPicture }} style={{ width: 300, height: 300 }} />}
        </PictureView>
        <ButtonMax onPress={pickImage}>
          <ButtonText>Adicionar foto</ButtonText>
        </ButtonMax>
        <ButtonsView>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Voltar</ButtonText>
          </Button>
          <Button onPress={submitAnnounce}>
            <ButtonText>Concluir</ButtonText>
          </Button>
        </ButtonsView>
      </View>
    </Container>
  );
};

export default Pictures;
