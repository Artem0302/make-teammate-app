import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MapView from 'react-native-maps';
import {TMapScreenNavigatorType} from '@shared/types';

type TMapScreenNavProp = TMapScreenNavigatorType['navigation'];

export const MapScreen = () => {
  const navigation = useNavigation<TMapScreenNavProp>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => null,
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  return <MapView style={{flex: 1}} />;
};
