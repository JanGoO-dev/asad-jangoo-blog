<template>
    <aj-hero :postTitle="postTitle" :likes="latestPost.likes" />
    <div class="background-pattern w-[calc(100% - 0.1rem)] mx-auto text-center py-10 px-5 my-16" style="font-family: 'times new roman';">
        <h1 class="text-3xl sm:text-9xl text-gray-200 font-extrabold capitalize select-none">Recent Posts</h1>
    </div>
    <div class="z-0 relative w-[calc(100%-2rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100% - 15rem)] 2xl:w-[calc(100%-40rem)] mx-auto">
        <aj-post v-for="post in recentPosts" :id="post.id" :key="post.id" :postdata="post.data" />
    </div>
    <div v-show="$store.getters.SET_POSTS_END" class="z-0 relative mx-auto my-12 w-[calc(100%-2rem)] sm:w-[calc(100%-20rem)] h-44 bg-gray-900 text-white flex items-center justify-center">
        <h1 class="text-xl sm:text-3xl" style="font-family: 'times new roman';">You Have Reached END [no more posts]</h1>
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
        let time = 3000
        setTimeout(() => {
            let len = this.latestPost["post-title"].length
            if (len > 32) {
                this.postTitle = this.latestPost["post-title"].slice(0, 32) + "..."
            } else {
                this.postTitle = this.latestPost["post-title"]
            }

            if (this.$store.getters.GET_LOADING_POSTS) {
                time += 1000
            }
        }, time)
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