import axios from 'axios';

const baseUrl = process.env.VUE_APP_FIREBASE;

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
