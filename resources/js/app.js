import Vue from 'vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './pages/App'
import Home from './pages/Home'
import About from './pages/About'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ],
})

new Vue({
  el: '#app',
  components: { App },
  router,
});