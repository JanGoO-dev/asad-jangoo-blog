<template>
    <div class="relative border-4 w-full h-[40rem] lg:h-auto bg-gray-100 mt-44 grid grid-rows-5 grid-cols-5">
        <div class="z-20 absolute -mt-10 left-0 top-0 ml-10 p-6 bg-black">
            <h1 class="text-3xl text-white" style="font-family: 'times new roman ';">AJ</h1>
        </div>
        <div class="relative bg-image grayscale bg-center bg-cover bg-no-repeat row-span-2 lg:row-span-5 col-span-5 lg:col-span-2 bg-white"></div>
        <div class="relative row-span-3 lg:row-span-5 col-span-5 lg:col-span-3 p-10">
            <div class="-ml-12 mr-6 z-20 absolute whitespace-nowrap px-5 py-2 right-0 h-20 mb-10 text-6xl font-extrabold" style="font-family: 'times new roman';">
                <span class="text-shadow transition-all duration-700 cursor-pointer text-gray-400 hover:text-gray-900">Lorem ipsum dolor sit consectetur.</span>
            </div>
            <div class="relative h-28 w-full"></div>
            <p class="text-2xl text-justify pb-8 text-gray-500" style="font-family: 'times new roman';">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, temporibus recusandae atque ipsa eveniet amet minus cupiditate explicabo quos. Aspernatur, corrupti dolore nisi officiis et deleniti nihil ad accusamus? Iusto blanditiis odit, quia laboriosam officia natus corporis. At, deserunt nisi?</p>
            <div class="float-right">
                <aj-button text="Read More" />
            </div>
        </div>
    </div>
</template>

<script>
import AjButton from '../components/AjButton.vue'
export default {
    components: {
        AjButton
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