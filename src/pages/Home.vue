<template>
    <aj-hero />
    <div class="background-pattern w-full text-center py-10 px-5 my-16" style="font-family: 'times new roman';">
        <h1 class="text-9xl text-gray-200 font-extrabold capitalize select-none">Recent Posts</h1>
    </div>
    <div class="z-0 relative w-[calc(100%-6rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100% - 15rem)] 2xl:w-[calc(100%-40rem)] mx-auto">
        <aj-post v-for="(post, index) in 10" :key="index" />
    </div>
    <div class="w-[calc(100% - 5rem)] h-28"></div>
</template>

<script>
import AjHero from '../components/AjHero.vue'
import AjPost from '../components/AjPost.vue'

export default {
    components: {
        AjHero,
        AjPost
    }
}
</script>