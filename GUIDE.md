### Projeto criado com expo. (OK)
    yarn como dependencia de desenvolvimento.

## Template bare-minimum.  (OK)
expo init pontohelper

## Add typescript.  (OK)
alterar a extensão de .js para tsx
npx expo start

## Dependencias intaladadas.
<!-- # NativeBase -->
# Google Fonts
<!-- # Expo Vector Icons -->
# React Navigation Native
# Ract Native Firebase
  # firestore module
  <!-- # authentication module -->

## Install Styled Components. (OK)
# with yarn
yarn add styled-components

## Install Google Fonts - Expo project. (OK)
npx expo install expo-font @expo-google-fonts/roboto

## Install React Navigation. (OK)
yarn add @react-navigation/native
npx expo install react-native-screens
npx expo install react-native-screens react-native-safe-area-context
yarn add react-native-screens react-native-safe-area-context
  # Tipo de navegação.
  yarn add @react-navigation/bottom-tabs

## Instalações extras do projeto.
expo install expo-app-loading
npm i react-native-iphone-x-helper --save
npx expo install expo-image-picker

## Install React Native Firebase. (OK)
yarn add @react-native-firebase/app
yarn add @react-native-firebase/firestore
npx expo start para instalar as dependencias nativas.


Execução.
# Crie a pasta src na raiz do projeto para receber os arquivos e as pastas adicionadas ao projeto.

# Importe ou crie o arquivo theme.ts para a pasta src/theme

# Arquivo App.tsx
1. Importe o ThemeProvider para o arquivo App.tsx para poder utilizar o tema.
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
<!-- <ThemeProvider theme={theme}>
</ThemeProvider> -->

# Construa a primeira tela do app(Products) utilizando components.
2. Crie as pastas screens e components dentro da pasta src.
  'src/componets/Input, ButtonIcon, FormBox, Header, Product, ShoppingList' e 'src/screens/Products'

  2.1 Crie os componentes para compor a primeira tela.
  Ex: Logo, Input e Button.
  2.2 Implemente as funções de cada componente.

# Implemente as rotas de navegação.
3. Crie a pastas routes.
 4.1 Crie o arquivo para a navegação interna do App app.routes.tsx 
 4.2 Crie o arquivo index.tsx para gerenciar a navegação.
 4.3 Com o arquivo importado em App.tsx a tela inicial será direcionada ao Routes.
 import { Routes } from './