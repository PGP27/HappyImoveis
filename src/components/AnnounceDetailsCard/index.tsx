import { useNavigation } from '@react-navigation/native';
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
  const [newType] = useState(type === 'Rental' ? 'Para alugar' : 'À venda');
  const [picture, setPicture] = useState();
  const navigation = useNavigation();

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
    <Container
      onPress={() => navigation.navigate(
        'Details',
        {
          announce: announce,
        }
      )}
    >
      <Title>{title}</Title>
      <Image source={{uri: picture}} />
      <FlexSpace>
        <Text type="price">{`${newType}`}</Text>
        <Text type="price">{`R$ ${price}${type === 'Rental' ? '/mês' : ''}`}</Text>
      </FlexSpace>
      <FlexStart>
        <Icon name="earth" />
        <Text>{`${city} - ${state}`}</Text>
      </FlexStart>
      <FlexStart>
        <Icon name="location-sharp" />
        <Text>{`${address}, Nº ${number} ${complement !== '' ? `, ${complement}` : '' }`}</Text>
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
      <Text type="date">{`Anunciado em ${date.day}/${date.month}/${date.year}`}</Text>
    </Container>
  );
};

export default AnnounceDetailsCard;
