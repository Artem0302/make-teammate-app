import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import MapView, {MAP_TYPES, Marker} from 'react-native-maps';
import Modal from 'react-native-modal';
import {useProfileStore} from '@entities/profile';
import {getLocations} from '@shared/api';
import {TMapScreenNavigatorType} from '@shared/types';
import {MapMarker, ProfileModal} from './components';
import {styles} from './map-screen.styles';

type TMapScreenNavProp = TMapScreenNavigatorType['navigation'];

interface ICoordinates {
  latitude: number;
  longitude: number;
}

interface IMarkers {
  email: string;
  location: ICoordinates;
}

export const MapScreen = () => {
  const navigation = useNavigation<TMapScreenNavProp>();
  const mapRef = useRef<MapView>(null);
  const email = useProfileStore(state => state.email);
  const recipient = useRef('');

  const [markers, setMarkers] = useState<IMarkers[]>([]);

  const [isModal, setIsModal] = useState(false);

  const closeModal = () => setIsModal(false);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      if (mapRef.current) {
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

    getLocations(email)
      .then(r => {
        setMarkers(r);
      })
      .catch(() => Alert.alert('Something went wrong'));
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
          <Marker
            key={id}
            coordinate={marker.location}
            onPress={() => {
              recipient.current = marker.email;

              setIsModal(true);
            }}>
            <MapMarker recipient={marker.email} />
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
        <ProfileModal closeModal={closeModal} recipient={recipient.current} />
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
