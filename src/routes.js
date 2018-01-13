import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Confusion from './components/extras/Confusion.vue';
import ErrorPage from './components/extras/ErrorPage.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact },
	{ path: '/confusion', component: Confusion },
	{ path: '*', component: ErrorPage }
];
