import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './HomePage.vue'
import AboutMe from './components/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router