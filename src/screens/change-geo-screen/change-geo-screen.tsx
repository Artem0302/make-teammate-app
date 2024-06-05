import Geolocation from '@react-native-community/geolocation';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import MapView, {LatLng, MAP_TYPES, Marker} from 'react-native-maps';
import {useProfileStore} from '@entities/profile';
import {changeLocationRequest} from '@shared/api';
import {TChangeGeoScreenNavigatorType} from '@shared/types';
import {styles} from './change-geo-screen.styles';

type TChangeGeoScreenNavProp = TChangeGeoScreenNavigatorType['navigation'];

type TChangeGeoScreenRouteProp = TChangeGeoScreenNavigatorType['route'];

export const ChangeGeoScreen = () => {
  const navigation = useNavigation<TChangeGeoScreenNavProp>();
  const route = useRoute<TChangeGeoScreenRouteProp>();
  const {location} = route.params;
  const mapRef = useRef<MapView>(null);
  const {email} = useProfileStore();

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
    navigation.setOptions({
      headerRight: () => null,
      title: 'Change geo',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  const onChooseGeo = async () => {
    try {
      await changeLocationRequest({
        email: email,
        location: region,
      });

      navigation.navigate('MAIN.TAB_NAVIGATOR');
    } catch (e) {
      Alert.alert('Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType={MAP_TYPES.TERRAIN}
        initialRegion={location}
        onRegionChange={setRegion}>
        <Marker coordinate={region} />
      </MapView>

      <TouchableOpacity
        hitSlop={8}
        style={styles.reset_btn}
        onPress={getCurrentLocation}>
        <Text style={styles.btn_text}>Reset to current geo</Text>
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
