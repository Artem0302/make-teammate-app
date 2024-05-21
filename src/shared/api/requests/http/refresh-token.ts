import axios from 'axios';

export const refreshToken = async (refresh_token: string) => {
  const url = '';

  const body = {
    grant_type: 'refresh_token',
    client_id: 'arbipay',
    refresh_token,
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  return await axios.post(url, body, config);
};
