import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TMessagesScreenNavigatorType} from '@shared/types';
import {styles} from './messages-screen.styles';

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

  return (
    <View style={styles.wrapper}>
      <Text>Hello</Text>
    </View>
  );
};
