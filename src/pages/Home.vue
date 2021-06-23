<template>
    <aj-hero :postTitle="postTitle" :likes="latestPost.likes" />
    <div class="background-pattern w-[calc(100% - 0.1rem)] mx-auto text-center py-10 px-5 my-16" style="font-family: 'times new roman';">
        <h1 class="text-3xl sm:text-9xl text-gray-200 font-extrabold capitalize select-none">Recent Posts</h1>
    </div>
    <div class="z-0 relative w-[calc(100%-2rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100% - 15rem)] 2xl:w-[calc(100%-40rem)] mx-auto">
        <aj-post v-for="post in recentPosts" :key="post.id" :postdata="post.data" />
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
    },
    data: () => {
        return {
            postTitle: "loading..."
        }
    },
    mounted() {
        setTimeout(() => {
            let len = this.latestPost["post-title"].length
            if (len > 32) {
                this.postTitle = this.latestPost["post-title"].slice(0, 32) + "..."
            } else {
                this.postTitle = this.latestPost["post-title"]
            }
        }, 3000)
    },
    computed: {
        recentPosts() {
            return this.$store.getters.GET_POSTS
        },
        latestPost() {
            return this.$store.getters.GET_LATEST_POST
        }
    }
}
</script>