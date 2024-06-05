import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './message-component.styles';

interface ILocalMessageComponent {
  text: string;
  type: 'in' | 'out';
  time: string;
}

export const MessageComponent = ({
  text,
  type,
  time,
}: ILocalMessageComponent) => {
  return (
    <View
      style={[styles.message_wrapper, type === 'in' ? styles.in : styles.out]}>
      <Text style={styles.message}>
        {text}
        {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
      </Text>

      <Text style={styles.time}>{time}</Text>
    </View>
  );
};
