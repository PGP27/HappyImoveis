import React from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import NavigationBar from '../../components/NavigationBar';
import { Container, ProfileInfo, Image, FullName, Name, List, Option, HeartIcon, PriceIcon, OutIcon, Text } from './styles';

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ProfileInfo>
        <Image source={{uri: user.picture}} />
        <FullName>
          <Name>{user.firstName}</Name>
          <Name>{user.lastName}</Name>
        </FullName>
      </ProfileInfo>
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
      <NavigationBar selected="Profile" />
    </Container>
  );
};

export default Profile;
