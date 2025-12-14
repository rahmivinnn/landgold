import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './AppTabs';

const MainApp = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default MainApp;