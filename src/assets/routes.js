import Home from '../Home.vue';
import Projects from '../Projects.vue';
import Contact from '../Contact.vue';
import TestPage from '../TestPage.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact },
	{ path: '/test', component: TestPage }
];
