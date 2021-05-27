import PlayerApi from './player-api';

const apis = {
  players: PlayerApi,
};

export default {
  get: (name) => apis[name],
};
