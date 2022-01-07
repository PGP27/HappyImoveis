import React, { useEffect, useState } from 'react';
import { storage } from  '../../../firebase';
import { useRoute } from '@react-navigation/native';
import { Container, Header, Title, Options, OptionsButton, OptionsIcon, MainImage, AnnounceInfos, Text, AnnounceDescription, LocationView, LocationIcon, FlexSpace, Info, InfoText, InfoNumber } from './styles';
import { Dimensions, ScrollView, StatusBar, View } from 'react-native';

const Details = () => {
  const route = useRoute();
  const { announce }: any = route.params;

  const {
    type,
    title,
    mainPictureId,
    price,
    description,
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

  const [mainPicture, setMainPicture] = useState();
  const [newType] = useState(type === 'Rental' ? 'Para alugar' : 'À venda');
  const [userPicture, setUserPicture] = useState();

  useEffect(() => {
    const downloadImageById = async () => {
      const response = await storage.ref(`announces/${advertiserId}`)
        .child(mainPictureId).getDownloadURL();
      const uri = await response;
      setMainPicture(uri);
    };
    const downloadUserPicture = async () => {
      const response = await storage.ref('users')
        .child(advertiserId).getDownloadURL();
      const uri = await response;
      setUserPicture(uri);
    };
    downloadImageById();
    downloadUserPicture();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
      <View>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          <MainImage source={{uri: mainPicture}} />
          <AnnounceInfos>
            <Text type="price">{newType}</Text>
            <Text type="price">{`R$ ${price}${type === 'Rental' ? '/mês' : ''}`}</Text>
          </AnnounceInfos>
          <AnnounceDescription>{description}</AnnounceDescription>
          <LocationView>
            <LocationIcon name="earth" />
            <Text flex>{`${city} - ${state}`}</Text>
          </LocationView>
          <LocationView>
            <LocationIcon name="location-sharp" />
            <View style={{flex: 1, alignSelf: 'flex-start'}}>
              <Text flex>{`${address}, Nº ${number} ${complement !== '' ? `, ${complement}` : '' }`}</Text>
            </View>
          </LocationView>
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
        </ScrollView>
      </View>
    </Container>
  );
};

export default Details
