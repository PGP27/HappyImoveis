import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Title } from './styles';
import { database, storage } from '../../../firebase'
import { useAuth } from '../../contexts/AuthContext';
import AnnounceSimpleCard from '../../components/AnnounceSimpleCard';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

const MyAnnounces = () => {
  const [myAnnounces, setMyAnnounces] = useState<any>();
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
    };
    init();
  }, []);

  const downloadImageById = async (id: string) => {
    const url = await storage.ref('users/').child(id).getDownloadURL();
    return url;
  };

  return (
    <Container>
      <Header />
      <Title>Meus anúncios</Title>
      <ScrollView>
        {/* {myAnnounces.map(({ id, title, mainPictureId }) => {
          const uri = downloadImageById(mainPictureId);
          return (
            <AnnounceSimpleCard
              key={id}
              title={title}
              image={uri}
              iconName="delete"
            />
          );
        })} */}
      </ScrollView>
      <NavigationBar />
    </Container>
  );
};

export default MyAnnounces;
