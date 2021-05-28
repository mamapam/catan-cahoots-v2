import PlayerApi from './player-api';
import scoreApi from './score-api';

const apis = {
  players: PlayerApi,
  scores: scoreApi,
};

export default {
  get: (name) => apis[name],
};
