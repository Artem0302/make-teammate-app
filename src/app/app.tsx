import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigator} from '@app/main-navigator ';
import {GoogleProvider} from '@shared/core';

function App() {
  return (
    <NavigationContainer>
      <GoogleProvider>
        <MainNavigator />
      </GoogleProvider>
    </NavigationContainer>
  );
}

export default App;
