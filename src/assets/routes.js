import Home from '../Home.vue';
import Projects from '../Projects.vue';
import Contact from '../Contact.vue';
import Confusion from '../Confusion.vue';
import ErrorPage from '../ErrorPage.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact },
	{ path: '/confusion', component: Confusion },
	{ path: '*', component: ErrorPage }
];
