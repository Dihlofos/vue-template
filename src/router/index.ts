import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

export enum RouteNames {
	Home = 'HOME',
	Admin = 'ADMIN',
}
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: RouteNames.Home,
			component: Home,
		},
		{
			path: '/admin',
			name: RouteNames.Admin,
			component: () => import('@/views/Admin.vue'),
		},
	],
});

export default router;
