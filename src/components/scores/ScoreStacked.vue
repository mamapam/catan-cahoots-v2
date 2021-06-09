<template>
  <div>
    <canvas id="score-stacked"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  computed: {
    playerList() {
      const playerList = this.$store.getters['players/players'];
      return playerList;
    },
    scores() {
      const scores = this.$store.getters['scores/scores'];
      return scores;
    },
    listOfWinData() {
      const wins = [];
      for (const score in this.scores) {
        wins.push(this.scores[score].wins);
      }
      return wins;
    },
    listOfLossData() {
      const wins = [];
      for (const score in this.scores) {
        wins.push(this.scores[score].losses);
      }
      return wins;
    },
    listOfPlayers() {
      const players = [];
      for (const score in this.scores) {
        players.push(this.scores[score].username);
      }
      return players;
    },
    graphData() {
      return {
        type: 'bar',
        data: {
          labels: this.listOfPlayers,
          datasets: [
            {
              label: 'Wins',
              backgroundColor: '#24c767',
              data: this.listOfWinData,
            },
            {
              label: 'Losses',
              backgroundColor: '#ef4b56',
              data: this.listOfLossData,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              labels: {
                color: '#ffffff',
              },
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                color: '#ffffff',
              },
              grid: {
                color: '#ffffff',
              },
            },
            y: {
              stacked: true,
              ticks: {
                color: '#ffffff',
              },
              grid: {
                color: '#ffffff',
              },
            },
          },
          scaleFontColor: '#FFFFFF',
        },
      };
    },
  },
  methods: {
    async setupGraph() {
      const ctx = document.getElementById('score-stacked').getContext('2d');
      await new Chart(ctx, this.graphData);
    },
  },
  async mounted() {
    await this.setupGraph();
  },
};
</script>
