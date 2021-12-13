import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/contexts/theme';
import { AuthProvider } from './src/contexts/AuthContext';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';

const App = () => {
  const [isLoadingFonts] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!isLoadingFonts) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
