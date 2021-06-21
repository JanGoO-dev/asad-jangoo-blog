<template>
    <div class="space" :style="`
        --aj-btn-width: ${width}rem;
        --aj-btn-active: ${spacing}rem;
        `">
        <div class="transition-all duration-700 btn cursor-pointer relative h-14 bg-transparent hover:border-[1px] border-gray-900 hover:border-gray-900" :class="{ 'border-[1px] border-gray-900': active }">
            <div class="transition-all duration-700 opacity-0 relative top-0 left-0 z-20 bg-gray-900 w-4 h-full" :class="{ 'absolute top-0 left-0 opacity-100': active }"></div>
            <div class="transition-all duration-700 delay-300 absolute left-0 right-0 inset-y-0 z-10 flex items-center justify-center" :class="{ 'active': active }">
                <span class="select-none text-gray-900 uppercase text-xl">{{ btnText }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
    props: {
        text: {
            required: true,
            type: String
        },
        spacing: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            required: false
        }
    },
    setup(props) {
        const data = toRefs(props)
        const btnText = data.text.value
        const width = btnText.length + 2
        const spacing = data.spacing.value

        return { btnText, width, spacing }
    },
}
</script>

<style scoped>
/* .space {
    width: calc(var(--aj-btn-width) + 2rem);
} */

.active {
    width: calc(var(--aj-btn-width) + 1rem) !important;
}

.btn {
    width: var(--aj-btn-width);
}

.btn:hover {
    width: calc(var(--aj-btn-width) + 2rem);
}

.btn:hover div:nth-child(1) {
    top: 0.5rem;
    left: 0.5rem;
    opacity: 1;
    position: absolute;
}

.btn:hover div:nth-child(2) {
    left: 1rem;
}
</style>