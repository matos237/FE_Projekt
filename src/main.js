import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from './stores/store.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia);

const store = useStore();
app.mount('#app')
