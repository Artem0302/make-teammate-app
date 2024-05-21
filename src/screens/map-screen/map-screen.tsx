import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MapView, {MAP_TYPES, Marker} from 'react-native-maps';
import Modal from 'react-native-modal';
import {TMapScreenNavigatorType} from '@shared/types';
import {MapMarker, ProfileModal} from './components';
import {styles} from './map-screen.styles';

type TMapScreenNavProp = TMapScreenNavigatorType['navigation'];

interface ICoordinates {
  latitude: number;
  longitude: number;
}

export const MapScreen = () => {
  const navigation = useNavigation<TMapScreenNavProp>();
  const mapRef = useRef<MapView>(null);

  // const [region, setRegion] = useState<LatLng>({
  //   latitude: 37.781944757964496,
  //   longitude: -122.40860725396615,
  // });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markers, setMarkers] = useState<ICoordinates[]>([
    {latitude: 37.781944757964496, longitude: -122.40860725396615},
    {latitude: 37.684016503057364, longitude: -122.28640008250622},
  ]);

  const [isModal, setIsModal] = useState(false);

  const closeModal = () => setIsModal(false);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      if (mapRef.current) {
        // setRegion({
        //   latitude: info.coords.latitude,
        //   longitude: info.coords.longitude,
        // });
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
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType={MAP_TYPES.TERRAIN}
        // onRegionChange={setRegion}
      >
        {markers.map((marker, id) => (
          <Marker key={id} coordinate={marker} onPress={() => setIsModal(true)}>
            <MapMarker />
          </Marker>
        ))}

        {/*<Marker coordinate={region} onPress={e => console.log('onPress')} />*/}
      </MapView>

      <Modal
        useNativeDriver={true}
        isVisible={isModal}
        style={styles.modal}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['down']}>
        <ProfileModal closeModal={closeModal} />
      </Modal>

      <TouchableOpacity
        hitSlop={8}
        style={styles.reset_btn}
        onPress={getCurrentLocation}>
        <Text style={styles.reset_text}>Reset map</Text>
      </TouchableOpacity>
    </View>
  );
};
