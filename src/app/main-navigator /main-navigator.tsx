import {TabNavigator} from '@navigation/tab-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {ChangeGeoScreen} from '@screens/change-geo-screen';
import {DialogScreen} from '@screens/dialog-screen';
import {MyGeoScreen} from '@screens/my-geo-screen';
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
        name="MAIN.MY_GEO_SCREEN"
        component={MyGeoScreen}
        options={{gestureEnabled: true, headerShown: true}}
      />

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

      <Main.Screen
        name="MAIN.CHANGE_GEO_SCREEN"
        component={ChangeGeoScreen}
        options={{gestureEnabled: true, headerShown: true}}
      />
    </Main.Navigator>
  );
}
