import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Signup from '@/views/Login/Signup.vue'
import Home from '@/views/Home.vue'
import LibraryView from '@/views/LibraryView.vue'
import BookcaseView from '@/views/BookcaseView.vue'
import HistoryView from '@/views/HistoryView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/library',
        name: 'LibraryView',
        component: LibraryView
    },
    {
        path: '/bookcase',
        name: 'BookcaseView',
        component: BookcaseView
    },
    {
        path: '/history',
        name: 'HistoryView',
        component: HistoryView
    }
]

const router = new VueRouter({
    routes
})

export default router
