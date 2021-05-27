import Client from './axios-client';
const resource = '/players';

export default {
  getAllPlayers() {
    return Client.get(`${resource}.json`);
  },
  getPlayer(id) {
    return Client.get(`${resource}/${id}.json`);
  },
  createPlayer(payload) {
    return Client.post(`${resource}.json`, payload);
  },
  updatePlayer(payload) {
    return Client.put(`${resource}/${id}.json`, payload);
  },
  deletePlayer(id) {
    return Client.delete(`${resource}/${id}.json`);
  },
};
