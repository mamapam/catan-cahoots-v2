import axios from './axios-config';
const resource = '/players';

export default {
  async getAllPlayers() {
    const response = await axios.get(`${resource}.json`);
    return response;
  },
  async getPlayer(id) {
    const response = await axios.get(`${resource}/${id}.json`);
    return response;
  },
  async createPlayer(payload) {
    const response = await axios.post(`${resource}.json`, payload);
    return response;
  },
  async updatePlayer(payload) {
    const response = await axios.put(`${resource}/${id}.json`, payload);
    return response;
  },
  async deletePlayer(id) {
    const response = await axios.delete(`${resource}/${id}.json`);
    return response;
  },
};
