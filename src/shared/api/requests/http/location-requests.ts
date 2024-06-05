import axios from 'axios';

interface IChooseGeoRequest {
  email: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export async function chooseLocationRequest({
  email,
  location,
}: IChooseGeoRequest) {
  // const url = 'http://178.150.31.9:3000/save-location';
  const url = 'http://localhost:3000/save-location';

  const body = {
    email,
    location,
  };

  const response = await axios.post(url, body);

  return response.data;
}

export async function changeLocationRequest({
  email,
  location,
}: IChooseGeoRequest) {
  // const url = 'http://178.150.31.9:3000/change-location';
  const url = 'http://localhost:3000/change-location';

  const body = {
    email,
    location,
  };

  const response = await axios.put(url, body);

  return response.data;
}

export async function getLocations(email: string) {
  // const url = 'http://178.150.31.9:3000/get-locations';
  const url = 'http://localhost:3000/get-locations';

  const response = await axios.get(`${url}?email=${email}`);

  return response.data;
}

export async function getMyLocations(email: string) {
  // const url = 'http://178.150.31.9:3000/my-location';
  const url = 'http://localhost:3000/my-location';

  const response = await axios.get(`${url}?email=${email}`);

  return response.data;
}
