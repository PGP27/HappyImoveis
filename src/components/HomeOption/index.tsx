import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { database } from '../../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Icon, Text } from './styles';

const HomeOption = ({ iconName, text }) => {
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
      const otherAnnounces = allAnnounces.filter(({ advertiserId }) => advertiserId !== currentUser.id);
      
      if (text === 'À venda') {
        const newOtherAnnounces = otherAnnounces.filter(({ type }) => type === 'Sale');
        setAnnounces(newOtherAnnounces);
      } else if (text === 'Para alugar') {
        const newOtherAnnounces = otherAnnounces.filter(({ type }) => type === 'Rental');
        setAnnounces(newOtherAnnounces);
      } else if (text === 'Últimos anúncios') {
        otherAnnounces.sort((a: any, b: any) => parseInt(a.price) - parseInt(b.price));
        setAnnounces(otherAnnounces);
      }else if (text === 'Os mais baratos') {
        otherAnnounces.sort((a: any, b: any) => parseInt(a.price) - parseInt(b.price));
        setAnnounces(otherAnnounces);
      } else if (text === 'Alto padrão') {
        otherAnnounces.sort((a: any, b: any) => {
          console.log(a);
          const sum = (i: any) => parseInt(i.bedrooms) + parseInt(i.bathrooms) + parseInt(i.parkingSpace);
          if (sum(a) < sum(b)) return 1;
          if (sum(a) > sum(b)) return -1;
          return 0;
        });
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
          pageName: text,
          announces: announces,
        }
      )}
    >
      <Icon name={iconName} />
      <Text>{text}</Text>
    </Container>
  );
};

export default HomeOption;
