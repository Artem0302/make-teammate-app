import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatsScreen} from '@screens/chats-screen';
import {MapScreen} from '@screens/map-screen';
import {ProfileScreen} from '@screens/profile-screen';
import * as React from 'react';
import {TTabParamsList} from '@shared/types';

const Tab = createBottomTabNavigator<TTabParamsList>();

export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName={'TAB.MAP_SCREEN'}>
      <Tab.Screen
        name="TAB.MAP_SCREEN"
        component={MapScreen}
        options={{title: 'Map'}}
      />

      <Tab.Screen
        name="TAB.MESSAGES_SCREEN"
        component={ChatsScreen}
        options={{title: 'Messages'}}
      />

      <Tab.Screen
        name="TAB.PROFILE"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
