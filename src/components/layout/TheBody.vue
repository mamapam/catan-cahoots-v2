<template>
  <div>
    {{ playerList }}
  </div>
</template>

<script>
export default {
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
div {
  background: #121212;
}
</style>
