import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
// import Navigation from './src/navigation';

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <View>
        <Text>Olá mundo</Text>
      </View>
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
