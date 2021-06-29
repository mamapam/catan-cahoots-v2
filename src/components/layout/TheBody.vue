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
    <section class="player-score-pie">
      <base-card>
        <template #titleContent>Score Pie</template>
        <template #contentContent> </template>
      </base-card>
    </section>
  </main>
</template>

<script>
import ScoreTable from '../scores/ScoreTable.vue';
import ScoreStacked from '../scores/ScoreStacked.vue';

export default {
  components: {
    ScoreTable,
    ScoreStacked,
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
  watch: {
    scores() {},
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
</style>
