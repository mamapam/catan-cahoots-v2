import api from '../api/api-factory';

const scoreApi = api.get('scores');

export default {
  namespaced: true,
  state() {
    return {
      scores: [],
    };
  },
  actions: {
    async loadScores(context) {
      try {
        const response = await scoreApi.getAllScores();
        context.commit('setScores', response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    setScores(state, payload) {
      state.scores = payload;
    },
  },
  getters: {
    scores(state) {
      return state.scores;
    },
    listOfWins(state) {
      const wins = [];
      for (const score in state.scores) {
        wins.push(state.scores[score].wins);
      }
      return wins;
    },
    listOfLosses(state) {
      const losses = [];
      for (const score in state.scores) {
        losses.push(state.scores[score].losses);
      }
      return losses;
    },
  },
};
