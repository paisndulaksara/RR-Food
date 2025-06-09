import axios from 'axios';

export const getTestimonials = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/testimonials`);
  return res.data.data;
};
