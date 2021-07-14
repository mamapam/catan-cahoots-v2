<template>
  <div>
    <data-table :value="tableScores" responsiveLayout="scroll">
      <table-column field="username" header="Player"></table-column>
      <table-column field="wins" header="Wins"></table-column>
      <table-column field="losses" header="Losses"></table-column>
      <table-column field="total" header="Total Games"></table-column>
    </data-table>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import TableColumn from 'primevue/column';

export default {
  components: {
    DataTable,
    TableColumn,
  },
  computed: {
    scores() {
      const scores = this.$store.getters['scores/scores'];
      return scores;
    },
    tableScores() {
      const data = [];
      for (const key in this.scores) {
        const score = {
          username: this.scores[key].username,
          wins: this.scores[key].wins,
          losses: this.scores[key].losses,
          total: this.scores[key].wins + this.scores[key].losses,
        };
        data.push(score);
      }
      return data;
    },
  },
};
</script>
