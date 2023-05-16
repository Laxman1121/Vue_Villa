import { createWebHistory } from "vue-router"
import {createRouter} from "vue-router"
import Home from '../components/Home.vue'
import Details from '../components/Details.vue'
export const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/details/:id',
            name:'details',
            component:Details
        }
    ]

})