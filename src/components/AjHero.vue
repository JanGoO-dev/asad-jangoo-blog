<template>
    <div id="hero" class="z-0 relative w-[calc(100%-5rem)] h-[40rem] mt-72 mx-auto grid grid-cols-4 gap-10">
        <div class="relative col-span-3" style="font-family: 'times new roman';">
            <div class="bg-image bg-cover bg-no-repeat bg-top w-full h-full border-2 border-gray-900"></div>
            <div class="absolute bottom-0 left-0 m-[0.15rem] w-full">
                <div class="absolute bottom-0 left-0 m-10 bg-gray-900 w-24 h-48 py-5 flex flex-col items-center justify-between">
                    <h1 class="text-3xl text-white">AJ</h1>
                </div>
                <div class="p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-transparent">
                    <h1 class="pl-36 text-7xl text-gray-900 font-extrabold tracking-wide">Lorem Ipsem Maseep</h1>
                </div>
            </div>
            <div class="absolute top-0 right-0 m-10">
                <h1 class="text-2xl tracking-widest">45 Likes</h1>
            </div>
        </div>
        <div class="col-span-1 p-10 gap-4 grid grid-rows-6 border-2 border-gray-900">
            <div class="row-span-4 place-self-center">
                <img class="w-[60%] mx-auto grayscale" src="../assets/mail-box.svg" alt="Undraw Mail Box SVG">
            </div>
            <div class="row-span-1">
                <input class="py-4 px-3 border-2 tracking-widest text-xl bg-gray-100 focus:outline-none w-full" type="text" placeholder="i.e., sample@gmail.com" style="font-family: 'times new roman';">
            </div>
            <div class="place-self-center row-span-1">
                <aj-button text="Subscribe" :active="true"></aj-button>
            </div>
        </div>
    </div>
</template>

<script>
import AjButton from './AjButton.vue'

export default {
    components: {
        AjButton
    },
    mounted() {
        const hero = document.getElementById('hero')

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
    }
}
</script>

<style scoped>
.bg-image {
    background-image: url('../assets/post-1.jpg');
    filter: grayscale(1);
}
</style>