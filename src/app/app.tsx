import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigator} from '@app/main-navigator ';
import {GoogleProvider} from '@shared/core';
import {SocketProvider} from '@shared/core/socket-provider';

function App() {
  return (
    <NavigationContainer>
      <GoogleProvider>
        <SocketProvider>
          <MainNavigator />
        </SocketProvider>
      </GoogleProvider>
    </NavigationContainer>
  );
}

export default App;
