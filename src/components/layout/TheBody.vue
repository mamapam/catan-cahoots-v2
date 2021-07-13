<template>
  <main class="grid">
    <section class="player-score-table">
      <base-card>
        <template #titleContent> Player Score Table </template>
        <template #contentContent>
          <score-table></score-table>
        </template>
      </base-card>
    </section>
    <section class="player-score-stacked">
      <base-card>
        <template #titleContent> Player Score Stacked </template>
        <template #contentContent>
          <score-stacked></score-stacked>
        </template>
      </base-card>
    </section>
    <div>
      <div id="pies">
        <section
          class="player-score-pie"
          v-for="score in scores"
          :key="score.playerId"
        >
          <base-card>
            <template #titleContent>{{ score.username }} Score Pie</template>
            <template #contentContent>
              <score-pie :wins="score.wins" :losses="score.losses"></score-pie>
            </template>
          </base-card>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import ScoreTable from '../scores/ScoreTable.vue';
import ScoreStacked from '../scores/ScoreStacked.vue';
import ScorePie from '../scores/ScorePie.vue';

export default {
  components: {
    ScoreTable,
    ScoreStacked,
    ScorePie,
  },
  computed: {
    playerList() {
      const playerList = this.$store.getters['players/players'];
      return playerList;
    },
    scores() {
      const scores = this.$store.getters['scores/scores'];
      return scores;
    },
  },
  methods: {
    async loadPlayers() {
      await this.$store.dispatch('players/loadPlayers');
    },
    async loadScores() {
      await this.$store.dispatch('scores/loadScores');
    },
  },
  async created() {
    await this.loadPlayers();
    await this.loadScores();
  },
};
</script>

<style scoped>
main * {
  color: #ffffff;
  font-family: inherit;
}

.grid {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
}

.player-score-table,
.player-score-stacked,
.player-score-pie {
  grid-column: 2/24;
  margin-top: 1.2em;
}

main {
  padding-bottom: 1.2em;
}

@media screen and (min-width: 1280px) {
  .player-score-table {
    grid-column: 2/12;
    margin-top: 1.2em;
  }

  .player-score-stacked {
    grid-column: 13/24;
    margin-top: 1.2em;
  }

  /* .player-score-pie { */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* grid-auto-flow: column; */
  /* } */

  /* 
  #pies {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
}
</style>
