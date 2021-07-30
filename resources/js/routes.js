import Home from '../js/pages/Home.vue'
import About from '../js/pages/About.vue'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/about',
            component: About,
            name: 'About'
        }
    ]
}