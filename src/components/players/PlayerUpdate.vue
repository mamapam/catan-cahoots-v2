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
    updatePlayerScore() {
      if (this.selectedPlayer !== null) {
      }

      this.$emit('close-update');
    },
  },
};
</script>
