<template>
  <nav>
    <h1>Catan Cahoots!</h1>
    <div>
      <base-button
        label="Update Score"
        class="p-button-secondary"
      ></base-button>
      <base-button
        label="Add Player"
        class="p-button-secondary"
        @click="showAddPlayer"
      ></base-button>
    </div>
    <base-modal v-model:visible="displayModal">
      <template #headerContent>
        <h1>Add Player</h1>
      </template>
      <add-player-form @close-form="hideAddPlayer"></add-player-form>
    </base-modal>
  </nav>
</template>

<script>
import AddPlayerForm from '../players/AddPlayerForm.vue';

export default {
  components: {
    AddPlayerForm,
  },
  data() {
    return {
      displayModal: false,
    };
  },
  methods: {
    showAddPlayer() {
      this.displayModal = true;
    },
    hideAddPlayer() {
      this.displayModal = false;
    },
  },
};
</script>

<style scoped>
nav {
  margin: 0;
  padding: 20px;
  width: 100%;
  background-color: #9c4300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

h1 {
  padding: 0;
  margin: 0;
  color: #ffffff;
  opacity: 87%;
  align-self: center;
}

div {
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
}

button {
  margin: 0 10px;
}
</style>
