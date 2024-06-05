import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {IChat} from '@entities/chat';
import {useProfileStore} from '@entities/profile';
import {getUserInfoByEmail} from '@shared/api';
import {formatTimeString, getOtherEmail} from '@shared/helpers';
import {TMessagesScreenNavigatorType} from '@shared/types';
import {styles} from './chat-component.styles';

type TMessagesScreenNavProp = TMessagesScreenNavigatorType['navigation'];

interface IChatComponent {
  chat: IChat;
}

export const ChatComponent = ({chat}: IChatComponent) => {
  const navigation = useNavigation<TMessagesScreenNavProp>();
  const userEmail = useProfileStore(state => state.email);
  const [data, setData] = useState({url: undefined, name: ''});

  const recipient = getOtherEmail(chat.emails, userEmail) ?? '';

  const onPressHandler = () => {
    navigation.navigate('MAIN.DIALOG', {chatId: chat.chatId, name: data.name});
  };

  useEffect(() => {
    getUserInfoByEmail(recipient)
      .then(r => setData({url: r.url, name: r.name}))
      .catch(() => Alert.alert('Something went wrong'));
  }, []);

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPressHandler}>
      <View style={styles.left_side}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{uri: data.url}}
        />

        <View style={styles.text_wrapper}>
          <Text style={styles.name}>{data.name}</Text>

          <Text numberOfLines={1} style={styles.last_message}>
            {chat.messages[0].content}
          </Text>
        </View>
      </View>

      <View style={styles.right_side}>
        <Text style={styles.time}>
          {formatTimeString(chat.messages[0].timestamp)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
