import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigator} from '@app/main-navigator ';

function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
