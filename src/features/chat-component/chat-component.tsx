import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TMessagesScreenNavigatorType} from '@shared/types';
import AvatarImg from './assets/ava.png';
import {styles} from './chat-component.styles';

type TMessagesScreenNavProp = TMessagesScreenNavigatorType['navigation'];

export const ChatComponent = () => {
  const navigation = useNavigation<TMessagesScreenNavProp>();

  const onPressHandler = () => {
    navigation.navigate('MAIN.DIALOG');
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPressHandler}>
      <View style={styles.left_side}>
        <Image style={styles.image} resizeMode={'cover'} source={AvatarImg} />

        <View style={styles.text_wrapper}>
          <Text style={styles.name}>Pupa Zalupa</Text>
          <Text style={styles.last_message}>Poslednee soob</Text>
        </View>
      </View>

      <View style={styles.right_side}>
        <Text style={styles.time}>18:50</Text>
      </View>
    </TouchableOpacity>
  );
};
