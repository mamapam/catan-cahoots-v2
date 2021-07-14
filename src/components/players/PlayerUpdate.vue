<template>
  <form @submit.prevent="updatePlayerScore">
    <div class="p-field">
      <h3>Who won the game?</h3>
      <base-dropdown
        v-model="selectedPlayer"
        :options="players"
        optionLabel="name"
        optionValue="code"
        placeholder="Select winning player"
      >
      </base-dropdown>
    </div>
    <base-button label="Update Score" @click="updatePlayerScore"></base-button>
  </form>
</template>

<script>
export default {
  emits: ['close-update'],
  data() {
    return {
      selectedPlayer: null,
    };
  },
  computed: {
    players() {
      const allData = this.$store.getters['players/players'];
      const players = [];
      for (const player in allData) {
        const data = { name: allData[player].username, code: player };
        players.push(data);
      }
      return players;
    },
  },
  methods: {
    async updatePlayerScore() {
      if (this.selectedPlayer !== null) {
        const allScores = this.$store.getters['scores/scores'];
        const updateScores = [];
        for (const player in allScores) {
          if (this.selectedPlayer === allScores[player].playerId) {
            const data = {
              id: player,
              body: { wins: allScores[player].wins + 1 },
            };
            updateScores.push(data);
          } else {
            const data = {
              id: player,
              body: { losses: allScores[player].losses + 1 },
            };
            updateScores.push(data);
          }
        }
        await this.$store.dispatch('scores/updateScores', updateScores);
      }

      this.$emit('close-update');
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  margin-bottom: 0.5em;
}
</style>
