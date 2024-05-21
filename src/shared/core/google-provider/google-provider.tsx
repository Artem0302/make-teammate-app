import {useNavigation} from '@react-navigation/native';
import React, {ReactNode, useContext, useEffect, useState} from 'react';

import {authorize, refresh} from 'react-native-app-auth';
import {addTokenInHeaders, instance} from '@shared/api';
import {retrieveCred, storeCred} from '@shared/helpers';
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
  const [refresh_token, setRefresh_token] = useState('');

  const authHandler = async () => {
    const refreshToken = await retrieveCred();

    if (refreshToken) {
      setRefresh_token(refreshToken);

      return navigation.navigate('MAIN.TAB_NAVIGATOR');
    }

    // Log in to get an authentication token
    const authState = await authorize(googleConfig);

    setRefresh_token(authState.refreshToken);

    await storeCred({
      refresh_token: authState.refreshToken,
      access_token: authState.accessToken,
    });
    // Refresh token

    addTokenInHeaders(`Bearer ${authState.accessToken}`);

    // console.log('result', authState);

    navigation.navigate('MAIN.MY_GEO_SCREEN');
  };

  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        if (error.response?.data.error.status === 'UNAUTHENTICATED') {
          const newTokens = await refresh(googleConfig, {
            refreshToken: refresh_token,
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
