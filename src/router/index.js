import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Categories',
        component: () => import(/* webpackChunkName: "market" */ '../views/Categories.vue'),
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: () => import(/* webpackChunkName: "statistics" */ '../views/Statistics.vue'),
    },
    {
        path: '/history',
        name: 'History',
        component: () => import(/* webpackChunkName: "history" */ '../views/History.vue'),
    }
]


const router = new VueRouter({
    routes
})
export default router
