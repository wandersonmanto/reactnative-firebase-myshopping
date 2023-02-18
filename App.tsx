import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { SignIn } from './src/screens/SignIn'
import theme from './src/theme';

import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Routes />
    </ThemeProvider>
    
  );
}
