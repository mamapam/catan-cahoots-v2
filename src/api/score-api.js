import axios from './axios-config';

const resource = '/scores';

export default {
  async getAllScores() {
    const response = await axios.get(`${resource}.json`);
    return response;
  },
  async createNewScore(payload) {
    const response = await axios.post(`${resource}.json`, payload);
    return response;
  },
};
