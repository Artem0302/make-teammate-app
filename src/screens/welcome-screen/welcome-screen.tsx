import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useGoogleContext} from '@shared/core';
import BgImage from './assets/bg-image.png';
import {styles} from './welcome-screen.styles';

export const WelcomeScreen = () => {
  const {authHandler} = useGoogleContext();

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
