<template>
  <div>
    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  props: ['wins', 'losses'],
  computed: {
    series() {
      return [this.wins, this.losses];
    },
    chartOptions() {
      return {
        chart: {
          type: 'pie',
        },
        colors: ['#24c767', '#ef4b56'],
        labels: ['Wins', 'Losses'],
        legend: {
          positon: 'bottom',
        },
        theme: {
          mode: 'dark',
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
  width: 100%;
}
</style>
