import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {LatLng, MAP_TYPES, Marker} from 'react-native-maps';
import {TMyGeoScreenNavigatorType} from '@shared/types';
import {styles} from './my-geo-screen.styles';

type TMyGeoScreenNavProp = TMyGeoScreenNavigatorType['navigation'];

export const MyGeoScreen = () => {
  const navigation = useNavigation<TMyGeoScreenNavProp>();
  const mapRef = useRef<MapView>(null);

  const [region, setRegion] = useState<LatLng>({
    latitude: 37.781944757964496,
    longitude: -122.40860725396615,
  });

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      if (mapRef.current) {
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });

        mapRef.current.animateToRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      }
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => null,
      title: 'Choose my geo',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  const onChooseGeo = () => {
    navigation.navigate('MAIN.TAB_NAVIGATOR');
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType={MAP_TYPES.TERRAIN}
        onRegionChange={setRegion}>
        <Marker coordinate={region} />
      </MapView>

      <TouchableOpacity
        hitSlop={8}
        style={styles.reset_btn}
        onPress={getCurrentLocation}>
        <Text style={styles.btn_text}>Reset map</Text>
      </TouchableOpacity>

      <TouchableOpacity
        hitSlop={8}
        style={styles.choose_btn}
        onPress={onChooseGeo}>
        <Text style={styles.btn_text}>Choose geo</Text>
      </TouchableOpacity>
    </View>
  );
};
