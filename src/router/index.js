import { createWebHashHistory, createRouter } from "vue-router";

import MainContainer from '../components/MainContainer.vue'

const routes = [{
    path: '/',
    component: MainContainer
}]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})