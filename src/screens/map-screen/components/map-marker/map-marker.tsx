import React from 'react';
import {Image, View} from 'react-native';
import AvatarImg from '../../assets/ava.png';
import {styles} from './map-marker.styles';

export const MapMarker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={AvatarImg} />
      </View>

      <View style={styles.triangle} />
    </View>
  );
};
