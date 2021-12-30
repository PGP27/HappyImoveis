import React, { useEffect, useState } from 'react';
import { storage } from '../../../firebase';
import {
  Container,
  Image,
  Title,
  Icon,
  Text,
  FlexStart,
  Info,
  InfoText,
  InfoNumber,
  FlexSpace
} from './styles';

const AnnounceDetailsCard = ({ announce }) => {
  const {
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
  const [picture, setPicture] = useState();

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
      <Title>{title}</Title>
      <Image source={{uri: picture}} />
      <FlexSpace>
        <Text type="price">{`R$ ${price}`}</Text>
        <Text type="date">{`Anunciado em ${date.day}/${date.month}/${date.year}`}</Text>
      </FlexSpace>
      <FlexStart>
        <Icon name="earth" />
        <Text>{`${city} - ${state}`}</Text>
      </FlexStart>
      <FlexStart>
        <Icon name="location-sharp" />
        <Text>{`${address}, nº ${number}, ${complement}`}</Text>
      </FlexStart>
      <FlexSpace>
        <Info>
          <InfoText>Quartos</InfoText>
          <InfoNumber>{bedrooms}</InfoNumber>
        </Info>
        <Info>
          <InfoText>Banheiros</InfoText>
          <InfoNumber>{bathrooms}</InfoNumber>
        </Info>
        <Info>
          <InfoText>Vagas</InfoText>
          <InfoNumber>{parkingSpace}</InfoNumber>
        </Info>
      </FlexSpace>
    </Container>
  );
};

export default AnnounceDetailsCard;
