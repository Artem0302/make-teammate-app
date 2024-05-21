import {instance} from '@shared/api';

export async function getUserGoogleInfo() {
  const response = await instance.get(
    '/v1/people/me?personFields=names,photos,emailAddresses,birthdays',
  );

  return response.data;
}
