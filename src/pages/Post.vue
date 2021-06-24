<template>
    <div class="w-full h-20 lg:h-60"></div>
    <div class="my-20" style="font-family: 'times new roman';">
        <!-- Post Heading -->
        <h1 class="mx-auto text-center mb-12 md:-mb-8 text-3xl sm:text-4xl md:text-6xl text-gray-900 font-bold max-w-[28ch]">{{ postData['post-title'] }}</h1>
        <div class="w-[calc(100vw-6rem)] lg:w-[calc(100vw-30rem)] mx-auto my-[80px] flex flex-col 2xl:flex-row gap-16 items-center 2xl:items-start">
            <div class="hidden lg:block relative mt-12 pl-6 border-l-[1px] border-[#8a8a8a] w-full 2xl:w-[calc(calc(100%-630px)/2)]">
                <h1 class="absolute -top-1/3 text-9xl">{{ postData['post-number'] }}</h1>
                <p class="pt-24 text-xl text-justify">{{ postIntro }}</p>
            </div>
            <div class="hidden md:block mx-auto w-[615px] h-[615px] bg-cover bg-no-repeat bg-center grayscale" style="background-image: url(https://picsum.photos/600);"></div>
            <div @click="$router.push({ name: 'About' })" class="cursor-pointer mx-auto w-full 2xl:w-[calc(calc(100%-630px)/2)] flex flex-col items-center">
                <div class="w-28 h-28 rounded-full bg-cover bg-no-repeat bg-center grayscale" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/asadjangooblog.appspot.com/o/photo_sm.jpg?alt=media&token=eef73fc5-bd01-40aa-8880-43bfde204862);"></div>
                <div class="text-center">
                    <h1 class="font-bold mt-6 text-xl 2xl:text-3xl">
                        {{ postData['created-by'] }}
                    </h1>
                    <p class="text-lg max-w-[32ch]">
                        {{ createdAt }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Post Text -->
        <div class="w-[calc(100vw-6rem)] 2xl:w-[calc(100vw-40rem)]  mx-auto mb-[80px] p-12 border-[#8a8a8a] border-[1px] flex flex-col items-center gap-20">
            <div class="flex flex-col gap-10">
                <p v-for="(para, index) in postData['post-content-feilds']" :key="index" class="text-[26px] text-justify">{{ para.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
    props: ['id'],
    data: () => {
        return {
            postIntro: "",
            createdAt: ""
        }
    },
    computed: {
        postData() {
            return this.$store.getters.GET_CUR_POST
        },
        getId() {
            return this.$route.params.id
        },
    },
    mounted() {
        const db = firebase.firestore()
        const id = this.getId

        db.collection("blog-posts").doc(id).get().then((snapshot) => {
            if (snapshot.exists) {
                this.postIntro = snapshot.data()['post-content-feilds'][0].content.slice(0, 250) + "..."
                this.createdAt = snapshot.data()['created-date'].toDate().toString()
                this.$store.commit('SET_CUR_POST', snapshot.data())
            } else {
                alert("link is not valid or page don't exist")
            }
        })
    }
}
</script>