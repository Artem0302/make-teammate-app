import SendIcon from '@screens/dialog-screen/assets/icon-send.svg';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useProfileStore} from '@entities/profile';
import {getUserInfoByEmail} from '@shared/api';
import {useSocketContext} from '@shared/core';
import {styles} from './profile-modal.styles';

interface IProfileModal {
  closeModal: () => void;
  recipient: string;
}

export const ProfileModal = ({closeModal, recipient}: IProfileModal) => {
  const [text, setText] = useState('');
  const {socket} = useSocketContext();
  const userEmail = useProfileStore(state => state.email);
  const [data, setData] = useState({url: undefined, name: '', birth: ''});

  const sendMessage = (content: string) => {
    socket?.emit('sendMessage', {
      sender: userEmail,
      recipient,
      content,
    });
  };

  const onSendHandler = () => {
    sendMessage(text);

    setText('');
  };

  useEffect(() => {
    getUserInfoByEmail(recipient)
      .then(r => {
        setData(r);
      })
      .catch(() => Alert.alert('Something went wrong'));
  }, [recipient]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <View style={styles.modal_content}>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.scrollview}>
          <View style={styles.header}>
            <Image style={styles.img} source={{uri: data.url}} />

            <View style={styles.header_text_wrapper}>
              <Text style={styles.header_text}>{data.name}</Text>
              <Text style={styles.header_birth}>{data.birth}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.info}>Info</Text>
          </View>

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

          <View style={styles.footer}>
            <TouchableOpacity style={styles.btn} onPress={closeModal}>
              <Text style={styles.btn_text}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
