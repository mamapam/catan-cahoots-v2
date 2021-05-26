<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
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
}
</style>
