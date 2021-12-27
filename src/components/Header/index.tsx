import React, { useEffect, useState } from 'react';
import { Modal, StatusBar } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import theme from '../../contexts/theme';
import Profile from '../../screens/Profile';
import { Container, Logo, Title, Icon, ProfileButton, ProfileImage } from './styles';

const Header = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);

  useEffect(() => {
    StatusBar.setBackgroundColor(theme.colors.blue);
  }, []);

  const { user } = useAuth();

  return (
    <Container>
      <Logo>
        <Title>Happy Imóveis</Title>
        <Icon name="home-search" />
      </Logo>
      <ProfileButton onPress={() => setOpenProfileModal(true)}>
        <ProfileImage source={{uri: user.picture}} />
      </ProfileButton>
      <Modal visible={openProfileModal} animationType="slide">
        <Profile setOpenProfileModal={setOpenProfileModal} />
      </Modal>
    </Container>
  );
};

export default Header;
