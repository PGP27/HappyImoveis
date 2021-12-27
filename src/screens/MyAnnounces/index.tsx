import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Title } from './styles';
import { database } from '../../../firebase'
import { useAuth } from '../../contexts/AuthContext';
import AnnounceSimpleCard from '../../components/AnnounceSimpleCard';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

const MyAnnounces = () => {
  const [myAnnounces, setMyAnnounces] = useState<any>([]);
  const [userId, setUserId] = useState<any>();
  const { user } = useAuth();

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

  if (myAnnounces && userId) {
    return (
      <Container>
        <Header />
        <Title>Meus anúncios</Title>
        <ScrollView style={{flex: 1}}>
          {myAnnounces.map(({ title, mainPictureId }, index) => {
            return (
              <AnnounceSimpleCard
                key={index}
                title={title}
                mainPictureId={mainPictureId}
                userId={userId}
                iconName="delete"
              />
            );
          })}
        </ScrollView>
        <NavigationBar />
      </Container>
    );
  }

  return null;
};

export default MyAnnounces;
