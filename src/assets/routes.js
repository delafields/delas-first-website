import Home from '../Home.vue';
import Projects from '../Projects.vue';
import Contact from '../Contact.vue';
import Confusion from '../Confusion.vue';
import TestPage from '../TestPage.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact },
	{ path: '/confusion', component: Confusion },
	{ path: '/test', component: TestPage }
];
