<template>
  <the-header></the-header>
  <the-body></the-body>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheBody from './components/layout/TheBodyredo.vue';

export default {
  components: {
    TheHeader,
    TheBody,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');

html {
  font-family: 'Crimson Text', serif;
}

body {
  margin: 0;
  padding: 0;
  background: #121212;
}
</style>
