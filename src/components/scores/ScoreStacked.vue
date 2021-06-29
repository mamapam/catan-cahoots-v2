<template>
  <div>
    <apexchart width="400" type="bar" :options="chartOptions" :series="series">
    </apexchart>
  </div>
</template>

<script>
export default {
  computed: {
    listOfWins() {
      return this.$store.getters['scores/listOfWins'];
    },
    listOfLosses() {
      return this.$store.getters['scores/listOfLosses'];
    },
    listOfPlayers() {
      return this.$store.getters['players/listOfPlayers'];
    },
    series() {
      return [
        {
          name: 'Wins',
          data: this.listOfWins,
        },
        {
          name: 'Losses',
          data: this.listOfLosses,
        },
      ];
    },
    chartOptions() {
      return {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
        },
        colors: ['#24c767', '#ef4b56'],
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        theme: {
          mode: 'dark',
        },
        xaxis: {
          type: 'category',
          categories: this.listOfPlayers,
        },
      };
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
