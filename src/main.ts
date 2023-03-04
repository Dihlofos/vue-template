import { createServices } from '@/services/';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const services = createServices();

app.use(router);
app.use(createPinia().use(() => ({ apiService: services.apiService })));

app.mount('#app');
