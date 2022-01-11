import React, { useEffect, useState } from 'react';
import { database, storage } from  '../../../firebase';
import { useRoute } from '@react-navigation/native';
import { Container, Header, Title, Options, OptionsButton, Icon, MainImage, AnnounceInfos, Text, AnnounceDescription, LocationView, LocationIcon, FlexSpace, Info, InfoText, InfoNumber, FlexRowCenter, AdvertiserPicture } from './styles';
import { Dimensions, ScrollView, StatusBar, View } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import { useAuth } from '../../contexts/AuthContext';

const Details = () => {
  const route = useRoute();
  const { announce }: any = route.params;

  const {
    id: announceId,
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

  const { day, month, year } = date;

  const [mainPicture, setMainPicture] = useState();
  const [newType] = useState(type === 'Rental' ? 'Para alugar' : 'À venda');
  const [advertiserPicture, setAdvertiserPicture] = useState();
  const [advertiserInfos, setAdvertiserInfos] = useState<any>();
  const [currentUser, setCurrentUser] = useState<any>();
  const [heartIconType, setHeartIconType] = useState('hearto');
  const { user } = useAuth();

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

      const getCurrentUser = allUsers.find(({ email }) => email === user.email);
      setCurrentUser(getCurrentUser);
      getCurrentUser.favorites.forEach(({ id }) => {
        if (id === announceId) setHeartIconType('heart');
      });
    };
    getUserInfos();
    downloadImageById();
    downloadUserPicture();
  }, []);

  const favoriteAnnounce = async () => {
    const getUser = database.collection('users').where('email', '==', user.email);
    if (heartIconType === 'hearto') {
      await getUser.get().then((user) => {
        user.forEach((doc) => doc.ref.delete())
      });
      await database.collection('users').add({
        ...currentUser,
        favorites: [...currentUser.favorites, announce]
      });
      setHeartIconType('heart');
    } else {
      await getUser.get().then((user) => {
        user.forEach((doc) => doc.ref.delete())
      });
      await database.collection('users').add({
        ...currentUser,
        favorites: currentUser.favorites.filter(({ id }) => id !== announceId)
      });
      setHeartIconType('hearto');
    }
  };

  if (advertiserInfos) {
    return (
      <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header>
          <Title>{title}</Title>
          <OptionsButton onPress={favoriteAnnounce}>
            <Icon name={heartIconType} />
          </OptionsButton>
        </Header>
        <ScrollView style={{width: Dimensions.get('window').width, flex: 1, padding: 20, paddingTop: 0, marginTop: 10}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
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
              <Text flex>{`${address}, Nº ${number}${complement !== '' ? `, ${complement}` : '' }`}</Text>
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
          <Text date>{`Anunciado em ${day}/${month}/${year}`}</Text>
          <View style={{borderBottomWidth: 1, borderColor: '#777777'}} />
          <Text style={{marginTop: 10}} full>Gostou do imóvel?</Text>
          <Text full>Fale com o anunciante!</Text>
          <FlexRowCenter style={{marginTop: 10}}>
            <AdvertiserPicture source={{uri: advertiserPicture}} style={{marginRight: 10}} />
            <Text advertiser style={{marginLeft: 5, padding: 5}}>{`${advertiserInfos.firstName} ${advertiserInfos.lastName}`}</Text>
          </FlexRowCenter>
          <FlexRowCenter style={{marginTop: 10, marginBottom: 20}}>
            <Icon name="mail" />
            <View style={{flex: 1, alignSelf: 'flex-start'}}>
              <Text advertiser style={{marginLeft: 5, padding: 5}} flex>{advertiserInfos.email}</Text>
            </View>
          </FlexRowCenter>
        </ScrollView>
        <NavigationBar selected="" />
      </Container>
    );
  }

  return null;
};

export default Details
