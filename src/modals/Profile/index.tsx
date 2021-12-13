import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import theme from '../../contexts/theme';
import { Container, Header, ProfileInfo, Image, FullName, Name, CloseButton, CloseIcon, List, Option, HeartIcon, PriceIcon, OutIcon, Text } from './styles';

const Profile = ({ setOpenProfileModal }) => {
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  }, []);

  const closeModal = () => {
    StatusBar.setBackgroundColor(theme.colors.blue);
    setOpenProfileModal(false);
  };

  const { user } = useAuth();

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
        <Option>
          <PriceIcon name="pricetag" />
          <Text>Meus anúncios</Text>
        </Option>
        <Option>
          <OutIcon name="logout" />
          <Text>Sair</Text>
        </Option>
      </List>
    </Container>
  );
};

export default Profile;
