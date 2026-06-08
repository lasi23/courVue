import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', alias: '/home', name: 'Home', component: () => import('../components/Home.vue') },
        { path: '/about', name: 'About', component: () => import('../components/About.vue') },
        { path: '/contact', name: 'Contact', component: () => import('../components/Contact.vue') },
        { path: '/TaskList', name: 'TaskList', component: () => import('../components/TaskList.vue') },
        { path: '/DataUser', name: 'DataUser', component: () => import('../components/DataUser.vue') },
        { path: '/Count', name: 'Count', component: () => import('../components/Count.vue') },
    ],
});

export default router;