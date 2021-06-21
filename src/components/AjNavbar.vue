<template>
    <div class="bg-gray-100 w-screen h-20 lg:h-60 fixed top-0 right-0 border-b-2">
        <div class="hidden lg:block relative w-full h-24" style="font-family: 'times new roman';">
            <div class="absolute top-0 left-0 my-6 mx-8 w-28 h-[186px] border-4 border-gray-900"></div>
            <div class="absolute top-0 left-0 ml-10 mr-8 my-8 w-28 bg-gray-100">
                <img class="hover:m-2 transition-all duration-700 cursor-pointer w-28" src="../assets/aj-logo.svg" alt="Asad JanGoO SVG Logo">
            </div>
            <div class="absolute top-0 right-0 m-6 h-24 px-4 flex items-center gap-4 bg-gray-900">
                <div v-for="(link, index) in links" :key="index">
                    <aj-button :text="link.title" :spacing="0.5" :active="currentRoute == link.href" />
                </div>
            </div>
        </div>
        <aj-marquee />
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
            ]
        }
    },
    setup () {
        const currentRoute = computed(() => {
            return useRoute().path
        })
        return { currentRoute }
    }
}

</script>