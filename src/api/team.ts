import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getTeamData = async () => {
  const res = await axios.get(`${BASE_URL}/user/teams`);
  return res.data.data;
};
