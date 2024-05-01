import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {TProfileTabNavigatorType} from '@shared/types';

type TMessagesScreenNavProp = TProfileTabNavigatorType['navigation'];

export const ProfileScreen = () => {
  const navigation = useNavigation<TMessagesScreenNavProp>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => null,
      title: 'Profile',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  return <MapView style={{flex: 1}} />;
};