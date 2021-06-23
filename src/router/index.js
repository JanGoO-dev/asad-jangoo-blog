import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'

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