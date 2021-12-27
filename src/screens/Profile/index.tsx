import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import theme from '../../contexts/theme';
import { Container, Header, ProfileInfo, Image, FullName, Name, CloseButton, CloseIcon, List, Option, HeartIcon, PriceIcon, OutIcon, Text } from './styles';

const Profile = ({ setOpenProfileModal }) => {
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);

  const closeModal = () => {
    setOpenProfileModal(false);
  };

  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ProfileInfo>
          <Image source={{uri: user.picture}} />
          <FullName>
            <Name>{user.firstName}</Name>
            <Name>{user.lastName}</Name>
          </FullName>
        </ProfileInfo>
        <CloseButton onPress={closeModal}>
          <CloseIcon name="close" />
        </CloseButton>
      </Header>
      <List>
        <Option>
          <HeartIcon name="heart" />
          <Text>Favoritos</Text>
        </Option>
        <Option onPress={() => navigation.navigate('MyAnnounces')}>
          <PriceIcon name="pricetag" />
          <Text>Meus anúncios</Text>
        </Option>
        <Option onPress={() => signOut()}>
          <OutIcon name="logout" />
          <Text>Sair</Text>
        </Option>
      </List>
    </Container>
  );
};

export default Profile;
