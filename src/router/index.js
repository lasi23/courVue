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
        { path: '/EventBinding', name: 'EventBinding', component: () => import('../components/EventBinding.vue') },
        { path: '/Reactivite', name: 'Reactivite', component: () => import('../components/Reactivite.vue') },
        { path: '/StyleDynamique', name: 'StyleDynamique', component: () => import('../components/StyleDynamique.vue') },
        { path: '/Vif', name: 'Vif', component: () => import('../components/Vif.vue') },
        { path: '/Vfor', name: 'Vfor', component: () => import('../components/Vfor.vue') },
        { path: '/LifeCycle', name: 'LifeCycle', component: () => import('../components/LifeCycle.vue') },
    
    ],
});

export default router;