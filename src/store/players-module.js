import api from '../api/api-factory';

const playerApi = api.get('players');

export default {
  namespaced: true,
  state() {
    return {
      players: null,
    };
  },
  actions: {
    async loadPlayers(context) {
      try {
        const response = await playerApi.getAllPlayers();
        context.commit('setPlayers', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    setPlayers(state, payload) {
      state.players = payload;
    },
  },
  getters: {
    players(state) {
      return state.players;
    },
  },
};
