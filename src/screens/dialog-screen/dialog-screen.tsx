import {useHeaderHeight} from '@react-navigation/elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMessageComponent, useChatStore} from '@entities/chat';
import {useProfileStore} from '@entities/profile';
import {useSocketContext} from '@shared/core';
import {formatTimeString, getOtherEmail} from '@shared/helpers';
import {TDialogScreenNavigatorType} from '@shared/types';
import SendIcon from './assets/icon-send.svg';
import {MessageComponent} from './components';
import {styles} from './dialog-screen.styles';

type TDialogScreenNavProp = TDialogScreenNavigatorType['navigation'];

type TDialogScreenRouteProp = TDialogScreenNavigatorType['route'];

export const DialogScreen = () => {
  const navigation = useNavigation<TDialogScreenNavProp>();
  const route = useRoute<TDialogScreenRouteProp>();
  const {chatId, name} = route.params;
  const userEmail = useProfileStore(state => state.email);
  const headerHeight = useHeaderHeight();
  const [text, setText] = useState('');
  const {socket} = useSocketContext();
  const allChats = useChatStore(state => state.chats);

  const chat = allChats.find(el => el.chatId === chatId) || allChats[0];

  const recipient = getOtherEmail(chat.emails, userEmail) ?? '';

  const sendMessage = (content: string) => {
    socket?.emit('sendMessage', {
      chatId: chat.chatId,
      sender: userEmail,
      recipient,
      content,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#3994f5',
      },
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
      title: name,
    });
  }, [navigation]);

  const renderItem = ({item}: {item: IMessageComponent}) => {
    return (
      <MessageComponent
        type={recipient === item.sender ? 'in' : 'out'}
        text={item.content}
        time={formatTimeString(item.timestamp)}
      />
    );
  };

  const onSendHandler = () => {
    setText('');

    sendMessage(text);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
        keyboardVerticalOffset={headerHeight}>
        <View style={styles.wrapper}>
          <FlatList
            keyExtractor={item => item.timestamp}
            data={chat.messages}
            renderItem={renderItem}
            inverted
          />

          <View style={styles.input_wrapper}>
            <TextInput
              value={text}
              onChangeText={setText}
              style={styles.input}
              returnKeyType="send"
              onSubmitEditing={onSendHandler}
            />

            <TouchableOpacity
              onPress={onSendHandler}
              style={styles.send_btn}
              hitSlop={10}>
              <SendIcon
                width={40}
                height={40}
                fill={'#007BFF'}
                stroke={'#FFF'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
