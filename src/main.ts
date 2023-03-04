import { createServices } from '@/services/';
import type { App as IApp } from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './styles/main.scss';

const app = createApp(App);

const services = createServices();
console.log('servicec', services);

// Object.entries(services).forEach(([key, value]) => app.provide(key, value));

app.use(router);
app.use(createPinia().use(() => ({ apiService: services.apiService })));

app.mount('#app');
