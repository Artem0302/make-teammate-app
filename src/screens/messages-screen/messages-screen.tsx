import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {TMessagesScreenNavigatorType} from '@shared/types';

type TMessagesScreenNavProp = TMessagesScreenNavigatorType['navigation'];

export const MessagesScreen = () => {
  const navigation = useNavigation<TMessagesScreenNavProp>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => null,
      title: 'Messages',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  return <MapView style={{flex: 1}} />;
};
