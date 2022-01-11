import React, { useEffect, useState } from 'react'
import { StatusBar, ScrollView, Alert } from 'react-native';
import { database } from '../../../firebase'
import { useAuth } from '../../contexts/AuthContext';
import AnnounceSimpleCard from '../../components/AnnounceSimpleCard';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import { Container } from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = useState<any>([]);
  const { user } = useAuth();

  useEffect(() => {
    const init = async () => {
      const getAllUsers = await database.collection('users').get();
      const allUsers = getAllUsers.docs.map((doc) => doc.data());
      const currentUser = allUsers.find(({ email }) => email === user.email);
      setFavorites(currentUser.favorites);
    };
    init();
  }, []);

  if (favorites) {
    return (
      <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header pageName="Favoritos" />
        <ScrollView style={{flex: 1, marginTop: 10}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          {favorites.map((announce, index) => {
            return (
              <AnnounceSimpleCard
                key={index}
                announce={announce}
              />
            );
          })}
        </ScrollView>
        <NavigationBar selected="" />
      </Container>
    );
  }

  return null;
};

export default Favorites;
