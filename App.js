import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {
  storeMockData,
  getMockData,
  updateMockData,
} from './utils/AsyncStorage/AsyncStorage';

const App = () => {
  useEffect(() => {
    storeMockData();
  }, []);

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
