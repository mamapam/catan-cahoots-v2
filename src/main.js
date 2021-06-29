import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import VueApexCharts from 'vue3-apexcharts';

import App from './App.vue';

import BaseButton from './components/ui/BaseButton.vue';
import BaseModal from './components/ui/BaseModal.vue';
import BaseInputtext from 'primevue/inputtext';
import BaseDropdown from 'primevue/dropdown';
import BaseCard from './components/ui/BaseCard.vue';

import 'primevue/resources/themes/arya-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import store from './store/index';

const app = createApp(App);

app.use(store);

app.use(PrimeVue);

app.use(VueApexCharts);

app.component('base-button', BaseButton);
app.component('base-modal', BaseModal);
app.component('base-inputtext', BaseInputtext);
app.component('base-dropdown', BaseDropdown);
app.component('base-card', BaseCard);

app.mount('#app');
