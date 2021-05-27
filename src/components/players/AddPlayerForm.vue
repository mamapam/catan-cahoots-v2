<template>
  <form @submit.prevent="submitPlayer">
    <div class="p-field">
      <label for="username1">Username</label>
      <span class="p-input-icon-left">
        <i class="pi pi-user-plus"></i>
        <base-inputtext
          id="username1"
          type="username"
          aria-describedby="username1-help"
          v-model="username"
        ></base-inputtext>
      </span>
    </div>
    <div class="p-field">
      <label for="">Colour</label>
      <base-dropdown
        v-model="colour"
        :options="availableColours"
        optionLabel="name"
        placeholder="Select a colour"
      >
        <template #value="slotProps">
          <span v-if="slotProps.value">
            <span
              class="colour"
              :style="{ backgroundColor: slotProps.value.code }"
            ></span>
            <span class="optionName">{{ slotProps.value.name }} </span>
          </span>
          <span v-else>{{ slotProps.placeholder }}</span>
        </template>
        <template #option="slotProps">
          <span
            class="colour"
            :style="{ backgroundColor: slotProps.option.code }"
          ></span>
          <span class="optionName">{{ slotProps.option.name }} </span>
        </template>
      </base-dropdown>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      colour: '',
      availableColours: [
        { name: 'Green', code: '#24c767' },
        { name: 'Red', code: '#ef4b56' },
        { name: 'Indigo', code: '#7e7ff3' },
        { name: 'Purple', code: '#b15aea' },
        { name: 'Pink', code: '#cf359b' },
      ],
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  padding-right: 10px;
}

.colour {
  width: 17px;
  height: 17px;
  padding-right: 20px;
}

.optionName {
  padding-left: 20px;
}
</style>
