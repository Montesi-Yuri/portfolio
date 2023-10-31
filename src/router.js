import { createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import AboutMePage from './pages/AboutMePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage,
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMePage,
        }
    ]
});

export { router };