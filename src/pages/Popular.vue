<template>
    <div class="w-full h-20 lg:h-60"></div>
    <div class="z-0 mb-24 relative w-[calc(100%-2rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100% - 15rem)] 2xl:w-[calc(100%-40rem)] mx-auto">
        <aj-post v-for="post in popularPosts" :id="post.id" :key="post.id" :postdata="post.data" />
    </div>
</template>

<script>
import AjPost from '../components/AjPost.vue'

export default {
    components: {
        AjPost
    },
    computed:{
        popularPosts() {
            return this.$store.getters.GET_POPULAR_POSTS
        }
    },
    // watch: {
    //     $route (to, from) {
    //         var db = firebase.firestore()
    //         this.$store.dispatch('fetchPopularPosts', db)
    //     }
    // }
}
</script>