import React, { useEffect, useState } from 'react';
import { storage } from '../../../firebase'
import { Container, Title, Image, OptionsView, Details, IconsView, Button, Icon } from './styles';

const AnnounceSimpleCard = ({ title, mainPictureId, userId, iconName }) => {
  const [picture, setPicture] = useState();

  useEffect(() => {
    const downloadImageById = async () => {
      const response = await storage.ref(`announces/${userId}`).child(mainPictureId).getDownloadURL();
      const uri = await response;
      setPicture(uri);
    };
    downloadImageById();
  }, []);

  if (picture) {
    return (
      <Container>
        <Title>{title}</Title>
        <Image source={{uri: picture}} />
        <OptionsView>
          <Button style={{marginLeft: 0}}>
            <Details>Detalhes do anúncio</Details>
          </Button>
          <IconsView>
            <Button>
              <Icon name="sharealt" />
            </Button>
            <Button>
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
