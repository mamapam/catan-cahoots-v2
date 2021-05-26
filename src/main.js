import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import MenuBar from 'primevue/menubar';
import BaseButton from 'primevue/button';

import App from './App.vue';

import 'primevue/resources/themes/arya-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue);

app.component('menu-bar', MenuBar);
app.component('base-button', BaseButton);

app.mount('#app');
