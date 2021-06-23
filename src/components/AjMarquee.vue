<template>
    <div class="absolute top-0 right-0 mr-[0.5rem] lg:mr-[2.5rem] mt-[0.5rem] lg:mt-[9.8rem] w-[calc(100%-1rem)] lg:w-[calc(100%-16rem)] h-16 bg-white border-2 flex items-center">
        <marquee class="w-[98%] mx-auto" behavior="scroll" direction="left" scrollamount="15">
            <h3 :id="headline.id" class="select-none text-[2em] text-gray-400 text-center" style="font-family: 'time new roman';">
                {{ headline.line }} <span class="text-gray-100">- Asad Ali Bhutta</span>
            </h3>
        </marquee>
    </div>
</template>

<script>
export default {
    computed: {
        headline() {
            return this.$store.getters.GET_HEADLINE
        }
    }
}
</script>