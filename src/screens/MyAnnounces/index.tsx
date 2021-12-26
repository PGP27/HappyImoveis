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
  const [userId, setUserId] = useState<any>();
  const [pictures, setPictures] = useState([]);
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

  const downloadImageById = async (id: string) => {
    const response = await storage.ref(`announces/${userId}`).child(id).getDownloadURL();
    const uri = await response;
    setPictures((state) => [...state, uri]);
    console.log('olá');
  };

  if (userId) {
    return (
      <Container>
        <Header />
        <Title>Meus anúncios</Title>
        <ScrollView>
          {myAnnounces.map(({ title, mainPictureId }, index) => {
            console.log('olá');
            // downloadImageById(mainPictureId);
            return (
              <AnnounceSimpleCard
                key={index}
                title={title}
                image={pictures[index]}
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
