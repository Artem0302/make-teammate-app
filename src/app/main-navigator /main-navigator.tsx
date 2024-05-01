import {TabNavigator} from '@navigation/tab-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from '@screens/welcome-screen';
import * as React from 'react';
import {TMainNavigatorParamsList} from '@shared/types';

const Main = createStackNavigator<TMainNavigatorParamsList>();

export function MainNavigator() {
  return (
    <Main.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'MAIN.WELCOME_SCREEN'}>
      <Main.Screen name="MAIN.WELCOME_SCREEN" component={WelcomeScreen} />

      <Main.Screen
        name="MAIN.TAB_NAVIGATOR"
        component={TabNavigator}
        options={{gestureEnabled: false}}
      />
    </Main.Navigator>
  );
}
