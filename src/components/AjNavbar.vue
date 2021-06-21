<template>
    <div id="navbar" class="transition-all duration-700 bg-gray-100 w-screen h-20 lg:h-60 fixed top-0 right-0 border-b-2">
        <div class="hidden lg:block relative w-full h-24" style="font-family: 'times new roman';">
            <div id="title" class="transition-all duration-700 absolute top-0 left-0 my-6 mx-8 w-28 h-[195%] border-4 border-gray-900">
                <div :class="{ 'opacity-0': hide }" class="transition-all duration-1000 absolute top-0 left-0 ml-36 pl-3 whitespace-nowrap h-24 px-1 flex items-center ">
                    <h1 class="select-none text-5xl tracking-[0.3em] font-extrabold">Asad JanGoO</h1>
                </div>
            </div>
            <div id="logo-text" class="transition-all duration-700 select-none opacity-0 absolute transform translate-x-[-100%] left-0 top-0 ml-12 my-6">
                <h1 class="select-none text-5xl font-extrabold">Asad JanGoO</h1>
            </div>
            <div id="logo" class="transition-all duration-700 absolute top-0 left-0 ml-10 mr-8 my-8 w-28 bg-gray-100">
                <img @mouseover="showTitle" @mouseleave="hideTitle" class="hover:m-2 transition-all duration-700 cursor-pointer w-full select-none" src="../assets/aj-logo.svg" alt="Asad JanGoO SVG Logo">
            </div>
            <div id="nav" class="transition-all duration-700 absolute top-0 right-0 m-6 h-24 px-1 flex items-center gap-4 bg-transparent">
                <div v-for="(link, index) in links" :key="index">
                    <aj-button :text="link.title" :spacing="0.5" :active="currentRoute == link.href" />
                </div>
            </div>
        </div>
        <aj-marquee id="marquee" class="transition-all duration-700 absolute transform" />
    </div>
</template>

<script>
import AjButton from '../components/AjButton.vue'
import AjMarquee from '../components/AjMarquee.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: {
        AjButton,
        AjMarquee
    },
    data: () => {
        return {
            links: [
                { title: 'Welcome', href: '/' },
                { title: 'Popular', href: '/popular' },
                { title: 'About', href: '/about' },
                { title: 'Contact', href: '/contact' },
            ],
            hide: true
        }
    },
    setup () {
        const currentRoute = computed(() => {
            return useRoute().path
        })
        return { currentRoute }
    },
    methods: {
        showTitle() {
            this.hide = false
        },
        hideTitle() {
            this.hide = true
        }
    },
    mounted() {
        const navbar = document.getElementById('navbar')
        const title = document.getElementById('title')
        const logo = document.getElementById('logo')
        const marquee = document.getElementById('marquee')
        const nav = document.getElementById('nav')
        const logo_txt = document.getElementById('logo-text')

        if (window.innerWidth < 1024) {
            marquee.classList.remove('translate-x-[150%]')
        } else if (window.innerWidth > 1024 && window.scrollY > 50) {
            marquee.classList.add('translate-x-[150%]')
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                marquee.classList.remove('translate-x-[150%]')
            } else if (window.innerWidth > 1024 && window.scrollY > 50) {
                marquee.classList.add('translate-x-[150%]')
            }
        })

        window.addEventListener('scroll', () => {
            var pos = window.scrollY
            var width = window.innerWidth
            if (pos >= 50 && width > 1024) {
                logo_txt.classList.remove('translate-x-[-100%]')
                logo_txt.classList.remove('opacity-0')
                nav.classList.remove('m-6')
                marquee.classList.add('translate-x-[150%]')
                navbar.classList.remove('lg:h-60')
                navbar.classList.add('lg:h-24')
                logo.classList.remove('w-28')
                logo.classList.add('w-12')
                title.classList.remove('w-28')
                title.classList.add('w-16')
                title.classList.remove('h-[195%]')
                title.classList.add('h-[99%]')
                title.classList.add('opacity-0')
                logo.classList.add('opacity-0')
            }
            if (pos < 50 && width > 1024) {
                logo_txt.classList.add('translate-x-[-100%]')
                logo_txt.classList.add('opacity-0')
                nav.classList.add('m-6')
                marquee.classList.remove('translate-x-[150%]')
                navbar.classList.add('lg:h-60')
                navbar.classList.remove('lg:h-24')
                title.classList.remove('opacity-0')
                logo.classList.remove('opacity-0')
                setTimeout(() => {
                    logo.classList.remove('w-12')
                    logo.classList.add('w-28')
                    title.classList.add('w-28')
                    title.classList.remove('w-16')
                    title.classList.add('h-[195%]')
                    title.classList.remove('h-[99%]')
                }, 100)
            }
        })
    }
}

</script>

<style scoped>
img, #nav {
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
</style>