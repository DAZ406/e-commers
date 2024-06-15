import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn.vue'
import StorePage from '../views/StorePage.vue'
import SignIn from '../views/SignIn.vue'
import HistoryOrder from '../views/HistoryOrder.vue';
import UpdateForm from '../views/UpdateForm.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckOut.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: StorePage
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/history',
    name: `history`,
    component: HistoryOrder
  },
  {
    path: '/change-profile',
    name: `update`,
    component: UpdateForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
