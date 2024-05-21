import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {getUserGoogleInfo} from '@shared/api';
import {clearStorage, formatDate} from '@shared/helpers';
import {TProfileTabNavigatorType} from '@shared/types';
import {styles} from './profile-screen.styles';

type TMessagesScreenNavProp = TProfileTabNavigatorType['navigation'];

interface IData {
  name: string;
  birth: string;
  url: string;
  email: string;
}

export const ProfileScreen = () => {
  const navigation = useNavigation<TMessagesScreenNavProp>();
  const [data, setData] = useState<IData | undefined>(undefined);

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

  useEffect(() => {
    getUserGoogleInfo()
      .then(result => {
        setData({
          name: result.names[0].displayName,
          url: result.photos[0].url,
          birth: formatDate(result.birthdays[0].date),
          email: result.emailAddresses[0].value,
        });
      })
      .catch(() => {
        Alert.alert('Something went wrong, try again later!');
      });
  }, []);

  const onExit = async () => {
    await clearStorage();

    navigation.navigate('MAIN.WELCOME_SCREEN');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.wrapper}>
      {data && (
        <>
          <View style={styles.header}>
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={{uri: data.url}}
            />

            <View style={styles.name_wrapper}>
              <Text style={styles.title}>Name</Text>
              <Text style={styles.name}>{data.name}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.title_wrapper}>
              <Text style={styles.title}>Birth date</Text>
              <Text style={styles.subtitle}>{data.birth}</Text>
            </View>

            <View style={styles.title_wrapper}>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.subtitle}>{data.email}</Text>
            </View>

            <View style={styles.title_wrapper}>
              <Text style={styles.title}>Info</Text>
              <Text style={styles.subtitle}>Info</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.change_btn}>
              <Text style={styles.btn_text}>Change my geo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.exit_btn} onPress={onExit}>
              <Text style={styles.btn_text}>Exit</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};
