import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //need to add routes with path, name, component
  {
    path: '/',
    name: 'Home',
    component: () => import(/*webpackChunckName: "Home"*/"../components/Home.vue")
  },
  {
    path: '/riceflour',
    name: 'riceflour',
    component: () => import(/*webpackChunckName: "riceflour"*/"../components/Categories/riceflour.vue")
  },
  {
    path: '/productcard',
    name: 'productcard',
    component: () => import(/*webpackChunckName: "productcard"*/"../components/Categories/productcard.vue")
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import(/*webpackChunckName: "Cart"*/"../components/Cart.vue")
  },
  {
    path: '/Favs',
    name: 'Favs',
    component: () => import(/*webpackChunckName: "Favs"*/"../components/Categories/Favs.vue")
  },
]


const router = new VueRouter({
  routes
})

export default router
