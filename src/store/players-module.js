import api from '../api/api-factory';

const playerApi = api.get('players');
const scoreApi = api.get('scores');

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
    async createPlayer(context, data) {
      const payload = {
        colour: data.colour,
        username: data.username,
      };
      const response = await playerApi.createPlayer(payload);

      const scorePayload = {
        playerId: response.data.name,
        username: data.username,
        wins: 0,
        losses: 0,
        ties: 0,
      };

      await scoreApi.createNewScore(scorePayload);
      await context.dispatch('loadPlayers');
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
