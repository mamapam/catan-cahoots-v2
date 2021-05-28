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
  </main>
</template>

<script>
import ScoreTable from '../scores/ScoreTable.vue';

export default {
  components: {
    ScoreTable,
  },
  computed: {
    playerList() {
      const playerList = this.$store.getters['players/players'];
      return playerList;
    },
  },
  methods: {
    async loadPlayers() {
      await this.$store.dispatch('players/loadPlayers');
    },
  },
  created() {
    this.loadPlayers();
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

.player-score-table {
  grid-column: 2/24;
  margin-top: 1.2em;
}
</style>
