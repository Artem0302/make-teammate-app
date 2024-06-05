import {useNavigation} from '@react-navigation/native';
import React, {ReactNode, useContext, useEffect, useRef} from 'react';

import {Alert} from 'react-native';
import {authorize, refresh} from 'react-native-app-auth';
import {useProfileStore} from '@entities/profile';
import {addTokenInHeaders, getUserGoogleInfo, instance} from '@shared/api';
import {formatDate, retrieveCred, storeCred} from '@shared/helpers';
import {TWelcomeScreenNavigatorType} from '@shared/types';
import {googleConfig} from './model/google-config';

interface IGoogleContext {
  authHandler: () => Promise<void>;
}

type TWelcomeScreenNavProp = TWelcomeScreenNavigatorType['navigation'];

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const googleContext = React.createContext<IGoogleContext>(undefined!);

interface IGoogleProvider {
  children: ReactNode;
}

export function GoogleProvider(props: IGoogleProvider) {
  const navigation = useNavigation<TWelcomeScreenNavProp>();
  const refresh_token = useRef('');
  const setEmail = useProfileStore(state => state.setEmail);
  const setBirth = useProfileStore(state => state.setBirth);
  const setName = useProfileStore(state => state.setName);
  const setUrl = useProfileStore(state => state.setUrl);

  const emailRequest = async () => {
    const response = await getUserGoogleInfo();

    setEmail(response.emailAddresses[0].value);

    setBirth(formatDate(response.birthdays[0].date));

    setName(response.names[0].displayName);

    setUrl(response.photos[0].url);
  };

  const authHandler = async () => {
    try {
      const refreshToken = await retrieveCred();

      if (refreshToken) {
        refresh_token.current = refreshToken;

        await emailRequest();

        return navigation.navigate('MAIN.TAB_NAVIGATOR');

        // return navigation.navigate('MAIN.MY_GEO_SCREEN');
      }

      // Log in to get an authentication token
      const authState = await authorize(googleConfig);

      refresh_token.current = refreshToken;

      await storeCred({
        refresh_token: authState.refreshToken,
        access_token: authState.accessToken,
      });
      // Refresh token

      addTokenInHeaders(`Bearer ${authState.accessToken}`);

      // console.log('result', authState);

      await emailRequest();

      navigation.navigate('MAIN.MY_GEO_SCREEN');
    } catch (e) {
      Alert.alert('Something went wrong');
    }
  };

  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        if (error.response?.data.error.status === 'UNAUTHENTICATED') {
          const newTokens = await refresh(googleConfig, {
            refreshToken: refresh_token.current,
          });

          addTokenInHeaders(newTokens.accessToken);

          error.config.headers.Authorization = `Bearer ${newTokens.accessToken}`;

          return instance.request(error.config);
        }

        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh_token]);

  return (
    <googleContext.Provider value={{authHandler}}>
      {props.children}
    </googleContext.Provider>
  );
}

export const useGoogleContext = () => useContext(googleContext);
