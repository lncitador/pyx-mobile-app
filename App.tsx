import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import AppProvider from './src/hooks';

import Routes from './src/routes';

const AppContainer = styled.View`
  flex: 1;
  background-color: #232f34;
`;

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#232F34" style={'light'}/>
      <AppProvider>
        <AppContainer>
          <Routes />
        </AppContainer>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
