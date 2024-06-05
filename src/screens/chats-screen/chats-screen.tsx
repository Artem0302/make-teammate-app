import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {ChatComponent} from '@features/chat-component';
import {IChat, useChatStore} from '@entities/chat';
import {styles} from './chats-screen.styles';

export const ChatsScreen = () => {
  const navigation = useNavigation();
  const chats = useChatStore(state => state.chats);

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

  const renderItem: ListRenderItem<IChat> = ({item}) => {
    return <ChatComponent chat={item} />;
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={item => item.chatId}
        data={chats}
        renderItem={renderItem}
      />
    </View>
  );
};
