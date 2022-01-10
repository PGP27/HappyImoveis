import React, { useEffect, useState } from 'react';
import { database, storage } from  '../../../firebase';
import { useRoute } from '@react-navigation/native';
import { Container, Header, Title, Options, OptionsButton, Icon, MainImage, AnnounceInfos, Text, AnnounceDescription, LocationView, LocationIcon, FlexSpace, Info, InfoText, InfoNumber, FlexRowCenter, AdvertiserPicture } from './styles';
import { Dimensions, ScrollView, StatusBar, View } from 'react-native';
import NavigationBar from '../../components/NavigationBar';

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
  const [advertiserPicture, setAdvertiserPicture] = useState();
  const [advertiserInfos, setAdvertiserInfos] = useState<any>();

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
      setAdvertiserPicture(uri);
    };
    const getUserInfos = async () => {
      const getAllUsers = await database.collection('users').get();
      const allUsers = getAllUsers.docs.map((doc) => doc.data());
      const advertiser = allUsers.find(({ id }) => id === advertiserId);
      setAdvertiserInfos(advertiser);
    };
    getUserInfos();
    downloadImageById();
    downloadUserPicture();
  }, []);

  if (advertiserInfos) {
    return (
      <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header>
          <Title>{title}</Title>
          <Options>
            <OptionsButton>
              <Icon name="sharealt" />
            </OptionsButton>
            <OptionsButton>
              <Icon name="hearto" />
            </OptionsButton>
          </Options>
        </Header>
        <ScrollView style={{width: Dimensions.get('window').width, flex: 1, padding: 20}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
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
          <Info>
            <Text full>Gostou do imóvel?</Text>
            <Text full>Fale com o anunciante!</Text>
            <FlexRowCenter style={{marginTop: 10}}>
              <AdvertiserPicture source={{uri: advertiserPicture}} style={{marginRight: 10}} />
              <Info>
                <FlexRowCenter>
                  <Icon name="user" />
                  <Text style={{marginLeft: 5}} full>{`${advertiserInfos.firstName} ${advertiserInfos.lastName}`}</Text>
                </FlexRowCenter>
                <FlexRowCenter>
                  <Icon name="mail" />
                  <Text style={{marginLeft: 5}} full>{advertiserInfos.email}</Text>
                </FlexRowCenter>
              </Info>
            </FlexRowCenter>
          </Info>
        </ScrollView>
        <NavigationBar selected="" />
      </Container>
    );
  }

  return null;
};

export default Details
