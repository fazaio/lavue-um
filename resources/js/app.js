import Vue from 'vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './pages/App'
import Home from './pages/Home'
import jawaraCenter from './pages/jawaraCenter'
import digitalBahasa from './pages/digitalBahasa'
import jobTraining from './pages/jobTraining'
import studentExchange from './pages/studentExchange'

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
          path: '/jawara-center',
          name: 'jawara-center',
          component: jawaraCenter
      },
      {
          path: '/digital-bahasa',
          name: 'digitalBahasa',
          component: digitalBahasa
      },
      {
          path: '/job-training',
          name: 'jobTraining',
          component: jobTraining
      },
      {
          path: '/student-exchange',
          name: 'studenExchange',
          component: studentExchange
      },
  ],
})

new Vue({
  el: '#app',
  components: { App },
  router,
});