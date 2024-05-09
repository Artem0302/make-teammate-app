import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ChatComponent} from '@features/chat-component';
import {styles} from './chats-screen.styles';

export const ChatsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => null,
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#3994f5',
      },
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <ChatComponent />
      <ChatComponent />
      <ChatComponent />
      <ChatComponent />
      <ChatComponent />
    </View>
  );
};
