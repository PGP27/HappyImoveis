import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Descriptions from '../screens/Announce/Descriptions';
import Address from '../screens/Announce/Address';
import Infos from '../screens/Announce/Infos';
import Pictures from '../screens/Announce/Pictures';
import MyAnnounces from '../screens/MyAnnounces/';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import ShowAnnounces from '../screens/ShowAnnounces';
import Details from '../screens/Details';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Descriptions" component={Descriptions} />
      <Screen name="Address" component={Address} />
      <Screen name="Infos" component={Infos} />
      <Screen name="Pictures" component={Pictures} />
      <Screen name="Profile" component={Profile} />
      <Screen name="MyAnnounces" component={MyAnnounces} />
      <Screen name="ShowAnnounces" component={ShowAnnounces} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};

export default AppRoutes;
