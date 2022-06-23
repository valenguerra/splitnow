import axios from 'axios';

export const getUserIso = async (): Promise<string> => {
  const res = await axios.get('https://geolocation-db.com/json');
  if (res.status !== 200) return 'en-US';
  return res.data.country_code;
};
