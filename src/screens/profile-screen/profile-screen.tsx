import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {TProfileTabNavigatorType} from '@shared/types';
import {styles} from './profile-screen.styles';

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

  return (
    <View style={styles.wrapper}>
      <Text>Hello</Text>
    </View>
  );
};
