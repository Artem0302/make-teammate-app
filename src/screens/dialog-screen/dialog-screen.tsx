import {useHeaderHeight} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
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
import {IMessageComponent, useDialogStore} from '@entities/dialog';
import {getCurrentTime} from '@shared/helpers';
import {TDialogScreenNavigatorType} from '@shared/types';
import SendIcon from './assets/icon-send.svg';
import {MessageComponent} from './components';
import {styles} from './dialog-screen.styles';

type TDialogScreenNavProp = TDialogScreenNavigatorType['navigation'];

export const DialogScreen = () => {
  const navigation = useNavigation<TDialogScreenNavProp>();
  const headerHeight = useHeaderHeight();
  const [text, setText] = useState('');

  const {messages, addMessage} = useDialogStore();

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
      title: 'Name',
    });
  }, [navigation]);

  const renderItem = ({item}: {item: IMessageComponent}) => {
    return (
      <MessageComponent type={item.type} text={item.text} time={item.time} />
    );
  };

  const onSendHandler = () => {
    setText('');

    addMessage({time: getCurrentTime(), text: text, type: 'out'});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
        keyboardVerticalOffset={headerHeight}>
        <View style={styles.wrapper}>
          <FlatList data={messages} renderItem={renderItem} inverted />

          <View style={styles.input_wrapper}>
            <TextInput
              value={text}
              onChangeText={setText}
              style={styles.input}
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
