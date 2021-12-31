import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Center, ColumnView, Container, FlexView, Icon, Title, Welcome } from './styles';
import Triangle from '../../assets/triangle.svg';
import LoginButton from '../../components/LoginButton';
import { useAuth } from '../../contexts/AuthContext';
import { StatusBar } from 'react-native';

const Login = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSignIn = async () => {    
    try {
      await googleSignIn();
    } catch(error) {
      alert(error);
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Triangle height={RFValue(120)} width={RFValue(10000)} rotation={180} scaleX={-1}/>
      <Center>
        <FlexView flexDirection="row">
          <ColumnView>
            <Title>Happy</Title>
            <Title>Imóveis</Title>
          </ColumnView>
          <Icon name="home-search" />
        </FlexView>
        <FlexView flexDirection="column">
          <Welcome>Anuncie um imóvel ou encontre o seu novo lar aqui!</Welcome>
        </FlexView>
        <FlexView flexDirection="column">
          <LoginButton iconName="google" text="Entrar com o Google" onPress={handleGoogleSignIn} />
        </FlexView>
      </Center>
      <Triangle height={RFValue(120)} width={RFValue(10000)} scaleX={-1}/>
    </Container>
  );
};

export default Login;
