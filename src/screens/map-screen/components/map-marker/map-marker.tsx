import React, {useEffect, useState} from 'react';
import {Alert, Image, View} from 'react-native';
import {getUserAvatar} from '@shared/api';
import {styles} from './map-marker.styles';

interface IMapMarker {
  recipient: string;
}

export const MapMarker = ({recipient}: IMapMarker) => {
  const [source, setSource] = useState(undefined);

  useEffect(() => {
    getUserAvatar(recipient)
      .then(r => setSource(r.url))
      .catch(() => Alert.alert('Something went wrong'));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={{uri: source}} />
      </View>

      <View style={styles.triangle} />
    </View>
  );
};
