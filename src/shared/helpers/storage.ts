import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {addTokenInHeaders} from '@shared/api';

interface IStoreUserSession {
  access_token: string;
  refresh_token: string;
}

export async function storeCred({
  access_token,
  refresh_token,
}: IStoreUserSession) {
  try {
    await EncryptedStorage.setItem(
      'tokens',
      JSON.stringify({
        access_token,
        refresh_token,
      }),
    );
  } catch (error) {
    Alert.alert('Something went wrong');
  }
}

export async function retrieveCred() {
  try {
    const credentials = await EncryptedStorage.getItem('tokens');

    if (credentials) {
      const {refresh_token, access_token} = JSON.parse(credentials);

      addTokenInHeaders(`Bearer ${access_token}`);

      return refresh_token;
    } else {
      return null;
    }
  } catch (error) {
    Alert.alert('Something went wrong');
  }
}

export async function clearStorage() {
  try {
    await EncryptedStorage.clear();
    // Congrats! You've just cleared the device storage!
  } catch (error) {
    Alert.alert('Something went wrong');
  }
}
