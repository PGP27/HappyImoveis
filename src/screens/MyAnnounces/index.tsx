import React, { useEffect, useState } from 'react'
import { StatusBar, ScrollView, Alert } from 'react-native';
import { database } from '../../../firebase'
import { useAuth } from '../../contexts/AuthContext';
import AnnounceSimpleCard from '../../components/AnnounceSimpleCard';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

const MyAnnounces = () => {
  const [myAnnounces, setMyAnnounces] = useState<any>([]);
  const [userId, setUserId] = useState<any>();
  const [deleteAnnounce, setDeleteAnnounce] = useState(false);
  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    const init = async () => {
      const getAllUsers = await database.collection('users').get();
      const allUsers = getAllUsers.docs.map((doc) => doc.data());
      const currentUser = allUsers.find(({ email }) => email === user.email);
      const getAllAnnounces = await database.collection('announces').get();
      const allAnnounces = getAllAnnounces.docs.map((doc) => doc.data());
      const announces = allAnnounces.filter(({ advertiserId }) => advertiserId === currentUser.id);
      setMyAnnounces(announces);
      setUserId(currentUser.id);
    };
    init();
  }, []);

  useEffect(() => {
    if (deleteAnnounce) {
      navigation.navigate('Profile');
      Alert.alert(
        'Parabéns!',
        'Anúncio excluído com sucesso!'
      );
    }
    setDeleteAnnounce(false);
  }, [deleteAnnounce]);

  if (myAnnounces && userId) {
    return (
      <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header pageName="Meus anúncios" />
        <ScrollView style={{flex: 1, marginTop: 10}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          {myAnnounces.map((announce, index) => {
            return (
              <AnnounceSimpleCard
                key={index}
                announce={announce}
                userId={userId}
                iconName="delete"
                setDeleteAnnounce={setDeleteAnnounce}
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

export default MyAnnounces;
