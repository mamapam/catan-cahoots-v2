<template>
  <main>
    <div class="grid">
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
    </div>
    <div class="grid">
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

.player-score-table,
.player-score-stacked,
.player-score-pie {
  padding: 1.2em 0.4em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
