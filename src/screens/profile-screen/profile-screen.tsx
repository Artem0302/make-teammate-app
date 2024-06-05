import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useProfileStore} from '@entities/profile';
import {getMyLocations} from '@shared/api';
import {clearStorage} from '@shared/helpers';
import {TProfileTabNavigatorType} from '@shared/types';
import {styles} from './profile-screen.styles';

type TMessagesScreenNavProp = TProfileTabNavigatorType['navigation'];

export const ProfileScreen = () => {
  const navigation = useNavigation<TMessagesScreenNavProp>();
  const {name, email, url, birth} = useProfileStore();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => null,
      title: 'Profile',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
    });
  }, [navigation]);

  const onChangeGeo = async () => {
    const result = await getMyLocations(email);

    navigation.navigate('MAIN.CHANGE_GEO_SCREEN', {
      location: result.location,
    });
  };

  const onExit = async () => {
    await clearStorage();

    navigation.navigate('MAIN.WELCOME_SCREEN');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={styles.image} resizeMode={'cover'} source={{uri: url}} />

        <View style={styles.name_wrapper}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.title_wrapper}>
          <Text style={styles.title}>Birth date</Text>
          <Text style={styles.subtitle}>{birth}</Text>
        </View>

        <View style={styles.title_wrapper}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.subtitle}>{email}</Text>
        </View>

        <View style={styles.title_wrapper}>
          <Text style={styles.title}>Info</Text>
          <Text style={styles.subtitle}>Info</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.change_btn} onPress={onChangeGeo}>
          <Text style={styles.btn_text}>Change my geo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exit_btn} onPress={onExit}>
          <Text style={styles.btn_text}>Exit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
