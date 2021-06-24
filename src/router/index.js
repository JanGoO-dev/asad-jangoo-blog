import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'
import Popular from '../pages/Popular.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/posts/post/:id',
        name: 'Post',
        component: Post,
        props: true
    },
    {
        path: '/posts/popular',
        name: 'Popular',
        component: Popular
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('top').scrollIntoView()
        window.scrollTo(0, 0)
    }
})

export default router