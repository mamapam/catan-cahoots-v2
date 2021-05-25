import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import PrimeButton from 'primevue/button';

import App from './App.vue';

import 'primevue/resources/themes/arya-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

const app = createApp(App);

app.use(PrimeVue);

app.component('prime-button', PrimeButton);

app.mount('#app');
