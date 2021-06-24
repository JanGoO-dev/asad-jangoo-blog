<template>
    <div class="relative border-4 w-full h-auto bg-gray-100 mt-44 grid grid-rows-5 grid-cols-5">
        <div class="z-20 absolute -mt-10 left-0 top-0 ml-10 p-6 bg-black">
            <h1 class="text-3xl text-white select-none" style="font-family: 'times new roman ';">AJ</h1>
        </div>
        <div class="relative bg-image grayscale bg-center bg-cover bg-no-repeat row-span-2 lg:row-span-5 col-span-5 lg:col-span-2 bg-white"></div>
        <div class="relative row-span-3 lg:row-span-5 col-span-5 lg:col-span-3 p-4 sm:p-10">
            <div class="xl:-ml-12 mr-6 z-20 relative xl:absolute whitespace-normal xl:whitespace-nowrap xl:px-5 py-2 right-0 h-20 mb-10 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold" style="font-family: 'times new roman';">
                <span class="text-shadow transition-all duration-700 cursor-pointer text-gray-400 hover:text-gray-900">{{ postTitle }}</span>
            </div>
            <div class="hidden xl:block relative h-28 w-full"></div>
            <p class="text-xl md:text-2xl text-justify pb-8 text-gray-500" style="font-family: 'times new roman';">{{ postDescription }}</p>
            <div class="float-right">
                <aj-button @click="openPostPage" text="Read More" />
            </div>
        </div>
    </div>
</template>

<script>
import AjButton from '../components/AjButton.vue'
export default {
    props: ['postdata', 'id'],
    components: {
        AjButton
    },
    data: () => {
        return {
            postTitle: "loading...",
            postDescription: "loading content please wait..."
        }
    },
    methods: {
        openPostPage() {
            this.$router.push({ name: 'Post', params: { id: this.id } })
            this.$store.commit('SET_CUR_POST', this.postdata)
        }
    },
    mounted() {
        setTimeout(() => {
            let len = this.postdata["post-title"].length
            if (len > 32) {
                this.postTitle = this.postdata["post-title"].slice(0, 32) + "..."
                this.postDescription = this.postdata["post-content-feilds"][0].content
            } else {
                this.postTitle = this.postdata["post-title"]
                this.postDescription = this.postdata["post-content-feilds"][0].content
            }
        }, 3000)
    }
}
</script>

<style scoped>
.bg-image {
    background-image: url('../assets/post-1.jpg');
}
.text-shadow {
    text-shadow: 2px 2px 4px #00000020;
}
</style>