import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
// import {authorize, refresh} from 'react-native-app-auth';
import LinearGradient from 'react-native-linear-gradient';
import {TWelcomeScreenNavigatorType} from '@shared/types';
import BgImage from './assets/bg-image.png';
import {styles} from './welcome-screen.styles';

type TWelcomeScreenNavProp = TWelcomeScreenNavigatorType['navigation'];

export const WelcomeScreen = () => {
  const navigation = useNavigation<TWelcomeScreenNavProp>();

  // const config = {
  //   issuer: 'https://accounts.google.com',
  //   clientId:
  //     '858370873110-0vjj0ifk603fpdr2pjjcm37obi57mi9b.apps.googleusercontent.com',
  //   redirectUrl: 'com.maketeammate:/',
  //   scopes: ['openid', 'profile'],
  // };

  const authHandler = async () => {
    // Log in to get an authentication token
    // const authState = await authorize(config);

    // Refresh token
    // const refreshedState = refresh(config, {
    //   refreshToken: authState.refreshToken,
    // });

    // console.log('result', authState);

    navigation.navigate('MAIN.TAB_NAVIGATOR');
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={BgImage}>
      <Text style={styles.text}>Welcome!</Text>

      <TouchableOpacity onPress={authHandler} style={styles.text_wrapper}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#007BFF', '#00FF00']}
          style={styles.gradient}>
          <Text style={styles.text}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};
