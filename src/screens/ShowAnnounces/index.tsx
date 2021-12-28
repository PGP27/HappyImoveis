import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import AnnounceDetailsCard from '../../components/AnnounceDetailsCard';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import { Container } from './styles';

const ShowAnnounces = () => {
  const route = useRoute();
  const { pageName, announces }: any = route.params;
  console.log(announces);
  if (announces) {
    return (
      <Container>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header pageName={pageName} />
        <ScrollView style={{flex: 1}}>
          {announces.map((announce, index) => {
            return (
              <AnnounceDetailsCard
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

export default ShowAnnounces;
