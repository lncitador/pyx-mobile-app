/* eslint-disable no-console */
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import RobotoMedium from '../../assets/fonts/Roboto-Medium.ttf';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf';

const useCachedResources: React.ComponentState = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Feather.font,
          ...MaterialIcons.font,
          'Roboto-Medium': RobotoMedium,
          'Roboto-Regular': RobotoRegular,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
