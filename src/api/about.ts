// src/api/about.ts
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAboutData = async () => {
  const res = await axios.get(`${BASE_URL}/user/about-us`);
  return res.data.data;
};
