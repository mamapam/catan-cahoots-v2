import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import App from './App.vue';

import BaseButton from './components/ui/BaseButton.vue';

import 'primevue/resources/themes/arya-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue);

app.component('base-button', BaseButton);

app.mount('#app');
