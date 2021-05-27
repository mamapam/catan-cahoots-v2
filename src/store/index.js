import { createStore } from 'vuex';

import playersModule from './players-module';
import scoresModule from './scores-module';

const store = createStore({
  modules: {
    players: playersModule,
    scores: scoresModule,
  },
});

export default store;
