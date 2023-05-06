import { createRouter, createWebHistory } from "vue-router";

import Home from '../view/Home.vue'
import Reflexator from '../view/Reflexator.vue'
import Game from '../view/Game.vue'
import Setting from '../view/Setting.vue'
import PageNotFound from '../view/PageNotFound.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Validate from '../view/Validate.vue'

const auth = (to, from, next) => {
    if(localStorage.getItem('access-token')){
        next()
    }
    else{
        next({name: 'Login'})
    }
}

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/forgot_password',
        name: 'Forgotpassword',
        component: ForgotPassword
    },
    {
        path: '/user',
        name: 'Home',
        component: Home,
        beforeEnter: auth
    },
    {
        path: '/user/game/reflexator',
        name: 'Reflexator',
        component: Reflexator,
        beforeEnter: auth
    },
    {
        path: '/user/game',
        name: 'Game',
        component: Game,
        beforeEnter: auth
    },
    {
        path: '/user/setting',
        name: 'Setting',
        component: Setting,
        beforeEnter: auth
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: PageNotFound
    },
    {
        path:'/validate',
        name: "Validate",
        component: Validate,
        beforeEnter: auth
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router