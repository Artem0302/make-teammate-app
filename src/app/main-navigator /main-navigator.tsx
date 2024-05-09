import {TabNavigator} from '@navigation/tab-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {DialogScreen} from '@screens/dialog-screen';
import {WelcomeScreen} from '@screens/welcome-screen';
import * as React from 'react';
import {TMainNavigatorParamsList} from '@shared/types';

const Main = createStackNavigator<TMainNavigatorParamsList>();

export function MainNavigator() {
  return (
    <Main.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'MAIN.TAB_NAVIGATOR'}>
      <Main.Screen name="MAIN.WELCOME_SCREEN" component={WelcomeScreen} />

      <Main.Screen
        name="MAIN.TAB_NAVIGATOR"
        component={TabNavigator}
        options={{gestureEnabled: false}}
      />

      <Main.Screen
        name="MAIN.DIALOG"
        component={DialogScreen}
        options={{gestureEnabled: true, headerShown: true}}
      />
    </Main.Navigator>
  );
}
