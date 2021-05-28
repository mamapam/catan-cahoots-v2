<template>
  <prime-card>
    <template #title>
      <slot name="titleContent"></slot>
    </template>
    <template #subtitle>
      <slot name="subtitleContent"></slot>
    </template>
    <template #content>
      <slot name="contentContent"></slot>
    </template>
  </prime-card>
</template>

<script>
import PrimeCard from 'primevue/card';

export default {
  components: {
    PrimeCard,
  },
};
</script>
