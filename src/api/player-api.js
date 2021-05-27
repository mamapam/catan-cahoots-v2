import Client from './axios-client';
const resource = '/players.json';

export default {
  getAllPlayers() {
    return Client.get(`${resource}`);
  },
  getPlayer(id) {
    return Client.get(`${resource}/${id}`);
  },
  createPlayer(payload) {
    return Client.post(`${resource}`, payload);
  },
  updatePlayer(payload) {
    return Client.put(`${resource}/${id}`, payload);
  },
  deletePlayer(id) {
    return Client.delete(`${resource}/${id}`);
  },
};
