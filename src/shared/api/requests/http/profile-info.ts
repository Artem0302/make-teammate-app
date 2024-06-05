import axios from 'axios';
import {instance} from '@shared/api';

export async function getUserGoogleInfo() {
  const response = await instance.get(
    '/v1/people/me?personFields=names,photos,emailAddresses,birthdays',
  );

  return response.data;
}

export async function getUserInfoByEmail(email: string) {
  // const url = 'http://178.150.31.9:3000/get-locations';
  const url = 'http://localhost:3000/user-info';

  const response = await axios.get(`${url}?email=${email}`);

  return response.data;
}

export async function getUserAvatar(email: string) {
  // const url = 'http://178.150.31.9:3000/get-locations';
  const url = 'http://localhost:3000/user-avatar';

  const response = await axios.get(`${url}?email=${email}`);

  return response.data;
}
