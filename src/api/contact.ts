// src/api/contact.ts
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getContactInfo = async () => {
  const response = await axios.get(`${BASE_URL}/user/contacts`);
  return response.data.data.contacts;
};
