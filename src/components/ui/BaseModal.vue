<template>
  <prime-dialog
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '50vw' }"
  >
    <template #header>
      <slot name="headerContent"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footerContent"></slot>
    </template>
  </prime-dialog>
</template>

<script>
import PrimeDialog from 'primevue/dialog';

export default {
  components: {
    PrimeDialog,
  },
  data() {
    return {
      displayModal: true,
    };
  },
};
</script>

<style>
.p-dialog * {
  background: #1e1e1e !important;
  font-family: 'Crimson Text', serif;
  font-size: 1.2rem;
}
</style>
