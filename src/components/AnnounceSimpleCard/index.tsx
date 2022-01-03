import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { database, storage } from '../../../firebase'
import { Container, Title, Image, OptionsView, Details, IconsView, Button, Icon } from './styles';

const AnnounceSimpleCard = ({announce, userId, iconName, setDeleteAnnounce }) => {
  const [picture, setPicture] = useState();

  useEffect(() => {
    const downloadImageById = async () => {
      const response = await storage.ref(`announces/${userId}`).child(announce.mainPictureId).getDownloadURL();
      const uri = await response;
      setPicture(uri);
    };
    downloadImageById();
  }, []);

  const deleteAnnounce = () => {
    Alert.alert(
      'Deseja excluir esse anúncio?',
      'Essa ação não poderá ser desfeita, deseja continuar?',
      [
        {
          text: "SIM",
          onPress: async () => {
            const getAnnounce = database.collection('announces').where('id', '==', announce.id);
            await getAnnounce.get().then((announce) => {
              announce.forEach((doc) => doc.ref.delete())
            });
            setDeleteAnnounce(true);
          }
        },
        {
          text: "NÃO"
        }
      ]
    );
  };

  if (picture) {
    return (
      <Container>
        <Title>{announce.title}</Title>
        <Image source={{uri: picture}} />
        <OptionsView>
          <Button style={{marginLeft: 0}}>
            <Details>Detalhes do anúncio</Details>
          </Button>
          <IconsView>
            <Button>
              <Icon name="sharealt" />
            </Button>
            <Button onPress={deleteAnnounce}>
              <Icon name={iconName} />
            </Button>
          </IconsView>
        </OptionsView>
      </Container>
    );
  }

  return null;
};

export default AnnounceSimpleCard;
