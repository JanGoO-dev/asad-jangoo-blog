<template>
    <div class="relative w-full h-[30rem] xl:h-96 mb-14 lg:mb-0 background-pattern bg-black">
        <div class="text-2xl z-20 -mt-28 sm:mt-auto p-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[calc(-50%-2rem)] w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[70rem] h-52 sm:h-40 md:h-80 lg:h-64 xl:h-48 flex flex-wrap items-center justify-center gap-4" style="font-family: 'times new roman';">
            <a :class="{ 'pointer-events-none': social_link.link == '#' }" target="_blank" v-for="(social_link, index) in social_links" :key="index" class="p-2 uppercase hover:text-gray-200 text-gray-600" :href="social_link.link">
                <i :class="social_link.icon" class="mr-3 text-4xl"></i>
                <span class="hidden md:inline-block">{{ social_link.name }}</span>
            </a>
        </div>
        <div class="absolute bottom-0 left-0 right-0 py-5 border-t-2 border-gray-900 text-center backdrop-blur-[1px]">
            <p class="text-xl text-gray-400 font-extralight tracking-widest uppercase" style="font-family: 'times new roman';">All rights reserved by Asad Ali Bhutta</p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            social_links: [
                { name: 'linkedin', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/asad-ali-jangeo-427004214/' },
                { name: 'facebook', icon: 'fab fa-facebook-square', link: 'https://web.facebook.com/friendspk40/' },
                { name: 'twitter', icon: 'fab fa-twitter-square', link: 'https://twitter.com/friendspk40' },
                { name: 'instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/friendspk40/' },
                { name: 'youtube', icon: 'fab fa-youtube-square', link: 'https://www.youtube.com/channel/UCgBKrhbWY7yGRAgO5RE9vkA' },
                { name: '+92 304 33 888 00', icon: 'fab fa-whatsapp-square', link: '#' },
                { name: '+92 304 33 888 00', icon: 'fab fa-telegram-plane', link: '#' },
                { name: 'discord', icon: 'fab fa-discord', link: 'https://discord.gg/aB7bAz2n' }
            ]
        }
    }
}
</script>