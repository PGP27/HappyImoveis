import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Descriptions from '../screens/Announce/Descriptions';
import Address from '../screens/Announce/Address';
import Infos from '../screens/Announce/Infos';
import Pictures from '../screens/Announce/Pictures';
import MyAnnounces from '../screens/MyAnnounces/';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Descriptions" component={Descriptions} />
      <Screen name="Address" component={Address} />
      <Screen name="Infos" component={Infos} />
      <Screen name="Pictures" component={Pictures} />
      <Screen name="MyAnnounces" component={MyAnnounces} />
    </Navigator>
  );
};

export default AppRoutes;
