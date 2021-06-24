<template>
    <div id="hero" class="z-0 relative w-[calc(100%-2rem)] lg:w-[calc(100%-5rem)] mt-72 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        <div @click="openPostPage" class="cursor-pointer transition-all duration-700 transform hover:scale-[1.01] relative min-h-[40rem] col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-3" style="font-family: 'times new roman';">
            <div class="bg-image bg-cover bg-no-repeat bg-top w-full h-full border-2 border-gray-900"></div>
            <div class="absolute bottom-0 left-0 m-[0.15rem] w-full">
                <div class="shadow-2xl absolute bottom-0 left-0 m-10 bg-gray-900 w-20 lg:w-24 hidden h-48 py-5 md:flex flex-col items-center justify-between">
                    <h1 class="text-3xl text-white select-none">AJ</h1>
                </div>
                <div class="p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-transparent">
                    <h1 class="pl-0 md:pl-28 lg:pl-36 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gray-900 font-extrabold tracking-wide">{{ postTitle }}</h1>
                </div>
            </div>
            <div class="absolute top-0 right-0 m-10">
                <h1 class="text-lg sm:text-xl md:text-2xl tracking-widest select-none">{{ likes }} Likes</h1>
            </div>
        </div>
        <div class="transition-all duration-700 transform hover:scale-[1.01] col-span-1 lg:col-span-2 xl:col-span-1 p-4 lg:p-10 gap-4 grid grid-cols-5 xl:grid-cols-1 grid-rows-2 xl:grid-rows-6 border-2 border-gray-900">
            <div class="hidden xl:block col-span-1 row-span-4 place-self-center select-none">
                <img class="w-[60%] mx-auto grayscale" src="../assets/mail-box.svg" alt="Undraw Mail Box SVG" draggable="false">
            </div>
            <div class="col-span-5 lg:col-span-4 xl:col-span-1 row-span-1 lg:row-span-2">
                <input class="select-none py-4 px-3 border-2 tracking-widest text-xl bg-gray-100 focus:outline-none w-full" type="text" placeholder="i.e., sample@gmail.com" style="font-family: 'times new roman';">
            </div>
            <div class="place-self-center col-span-5 lg:col-span-1 xl:col-span-1 row-span-1 lg:row-span-2">
                <aj-button text="Subscribe" :active="true"></aj-button>
            </div>
        </div>
    </div>
</template>

<script>
import AjButton from './AjButton.vue'

export default {
    props: ['postTitle', 'likes'],
    components: {
        AjButton
    },
    mounted() {
        const hero = document.getElementById('hero')
        if (window.innerWidth < 1024) {
            hero.classList.remove('mt-72')
            hero.classList.remove('mt-52')
            hero.classList.add('mt-32')
        } else {
            hero.classList.add('mt-72')
            hero.classList.remove('mt-52')
            hero.classList.remove('mt-32')
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                hero.classList.remove('mt-72')
                hero.classList.remove('mt-52')
                hero.classList.add('mt-32')
            } else {
                hero.classList.add('mt-72')
                hero.classList.remove('mt-52')
                hero.classList.remove('mt-32')
            }
        })
        
        window.addEventListener('scroll', () => {
            var position = window.scrollY
            var width = window.innerWidth
            if (position >= 50 && width > 1024) {
                hero.classList.remove('mt-72')
                hero.classList.add('mt-52')
            } else if (position < 50 && width > 1024) {
                hero.classList.add('mt-72')
                hero.classList.remove('mt-52')
            }
        })
    },
    methods: {
        openPostPage() {
            this.$router.push({ name: 'Post', params: { id: this.$store.getters.GET_LATEST_POST_ID } })
            this.$store.commit('SET_CUR_POST', this.$store.getters.GET_LATEST_POST)
        }
    },
}
</script>

<style scoped>
.bg-image {
    background-image: url('../assets/post-1.jpg');
    filter: grayscale(1);
}
</style>