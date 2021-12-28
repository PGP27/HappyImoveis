import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { database } from '../../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Icon, Text } from './styles';

const HomeOption = ({flexDirection, iconName, text}) => {
  const [announces, setAnnounces] = useState([]);
  const navigation = useNavigation();
  const { user } = useAuth();

  useEffect(() => {
    const searchAnnounces = async () => {
      const getAllUsers = await database.collection('users').get();
      const allUsers = getAllUsers.docs.map((doc) => doc.data());
      const currentUser = allUsers.find(({ email }) => email === user.email);

      const getAllAnnounces = await database.collection('announces').get();
      const allAnnounces = getAllAnnounces.docs.map((doc) => doc.data());
      const otherAnnounces = allAnnounces.map(({ advertiserId }) => advertiserId !== currentUser.id);

      if (text === 'Os mais baratos') {
        console.log('oi');
        otherAnnounces.sort((a :any, b: any) => a.price - b.price)
        setAnnounces(otherAnnounces);
      }
    };
    searchAnnounces();
  }, []);

  return (
    <Container
      onPress={() => navigation.navigate(
        'ShowAnnounces',
        {
          pageName: 'Os mais baratos',
          announces: announces,
        }
      )}
      flexDirection={flexDirection}
    >
      <Icon name={iconName} />
      <Text>{text}</Text>
    </Container>
  );
};

export default HomeOption;
