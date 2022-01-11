import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { database, storage } from '../../../firebase'
import { Container, Title, Image, OptionsView, Details, IconsView, Button, Icon } from './styles';

interface AnnounceSimpleCardProps {
  announce: any;
  userId?: string;
  iconName?: string;
  setDeleteAnnounce?: any;
};

const AnnounceSimpleCard = ({announce, userId, iconName, setDeleteAnnounce }: AnnounceSimpleCardProps) => {
  const [picture, setPicture] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const downloadImageById = async () => {
      let adId = userId;
      if (!userId) adId = announce.advertiserId;
      const response = await storage.ref(`announces/${adId}`).child(announce.mainPictureId).getDownloadURL();
      const uri = await response;
      setPicture(uri);
    };
    downloadImageById();
  }, []);

  const deleteAnnounce = () => {
    if (setDeleteAnnounce) {
      Alert.alert(
        'Tem certeza que deseja excluir esse anúncio?',
        'Essa ação não pode ser desfeita.',
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
    }
  };

  if (picture) {
    return (
      <Container>
        <Title>{announce.title}</Title>
        <Image source={{uri: picture}} />
        <OptionsView>
          <Button style={{marginLeft: 0}} onPress={() => {
            navigation.navigate(
              'Details',
              {
                announce: announce,
              }
            )
          }}
          >
            <Details>Detalhes do anúncio</Details>
          </Button>
          <IconsView>
            {iconName && (
              <Button onPress={deleteAnnounce}>
                <Icon name={iconName} />
              </Button>
            )}
          </IconsView>
        </OptionsView>
      </Container>
    );
  }

  return null;
};

export default AnnounceSimpleCard;
