import axios from './axios-config';

const resource = '/scores';

export default {
  async createNewScore(payload) {
    const response = await axios.post(`${resource}.json`, payload);
    return response;
  },
};
