import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MapScreen} from '@screens/map-screen';
import {MessagesScreen} from '@screens/messages-screen';
import {ProfileScreen} from '@screens/profile-screen';
import * as React from 'react';
import {TTabParamsList} from '@shared/types';

const Tab = createBottomTabNavigator<TTabParamsList>();

export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName={'TAB.MAP_SCREEN'}>
      <Tab.Screen name="TAB.MAP_SCREEN" component={MapScreen} />
      <Tab.Screen name="TAB.MESSAGES_SCREEN" component={MessagesScreen} />
      <Tab.Screen name="TAB.PROFILE" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
