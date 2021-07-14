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
    async updateScores(context, payload) {
      try {
        // Loop through scores and update all
        payload.forEach(async (player) => {
          const response = await scoreApi.updateScore(player.id, player.body);
          const data = {
            id: player.id,
            update: response.data,
          };
          context.commit('updateScores', data);
        });
        // await context.dispatch('scores/loadScores', null, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    setScores(state, payload) {
      state.scores = payload;
    },
    updateScores(state, payload) {
      // for (const score in state.scores) {
      //   // console.log(state.scores[score].playerId);
      //   // console.log(payload.id);
      //   if (score === payload.id) {
      //     console.log(payload.update.wins);
      //     if (
      //       payload.update.wins !== null ||
      //       payload.update.wins !== undefined
      //     ) {
      //       state.scores[score].wins = payload.update.wins;
      //     } else {
      //       state.scores[score].losses = payload.update.losses;
      //     }
      //   }
      // }
      const currScore = state.scores[payload.id];
      if (payload.update.wins !== undefined) {
        state.scores[payload.id].wins = payload.update.wins;
      } else {
        state.scores[payload.id].losses = payload.update.losses;
      }
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
