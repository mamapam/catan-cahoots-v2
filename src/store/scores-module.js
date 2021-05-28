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
  },
};
