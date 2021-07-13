import axios from 'axios';

const baseUrl = import.meta.env.VITE_DB;

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
