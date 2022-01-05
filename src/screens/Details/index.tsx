import React, { useEffect, useState } from 'react';
import { storage } from  '../../../firebase';
import { useRoute } from '@react-navigation/native';
import { Container, Header, Title, Options, OptionsButton, OptionsIcon, MainImage } from './styles';

const Details = () => {
  const route = useRoute();
  const { announce }: any = route.params;
  const [picture, setPicture] = useState();

  const {
    type,
    title,
    mainPictureId,
    price,
    date,
    city,
    state,
    address,
    number,
    complement,
    bedrooms,
    bathrooms,
    parkingSpace,
    advertiserId
  } = announce;

  useEffect(() => {
    const downloadImageById = async () => {
      const response = await storage.ref(`announces/${advertiserId}`)
        .child(mainPictureId).getDownloadURL();
      const uri = await response;
      setPicture(uri);
    };
    downloadImageById();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Options>
          <OptionsButton>
            <OptionsIcon name="sharealt" />
          </OptionsButton>
          <OptionsButton>
            <OptionsIcon name="hearto" />
          </OptionsButton>
        </Options>
      </Header>
      <MainImage source={{uri: picture}} />
    </Container>
  );
};

export default Details
