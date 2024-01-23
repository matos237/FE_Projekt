import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import AdminView from '../views/AdminView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/admin', name: 'admin', component: AdminView },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;
