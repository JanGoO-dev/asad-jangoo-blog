<template>
    <div class="relative">
        <div class="w-full h-[100rem] grayscale">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lahore+(Asad%20Ali%20JanGoO)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
        </div>
    </div>
    <div class="w-full h-96 p-6 flex flex-col bg-gray-100 gap-16 items-center justify-center" style="font-family: 'times new roman';">
        <h1 class="text-center text-4xl uppercase">Start a conversation</h1>
        <div class="flex justify-between gap-6">
            <div class="flex flex-col gap-6">
                <input class="transition-all duration-700 bg-transparent hover:bg-white transform hover:scale-[1.01] focus:bg-white focus:scale-[1.01] focus:outline-none py-5 px-7 text-xl border-2" type="text" placeholder="Your Name">
                <input class="transition-all duration-700 bg-transparent hover:bg-white transform hover:scale-[1.01] focus:bg-white focus:scale-[1.01] focus:outline-none py-5 px-7 text-xl border-2" type="text" placeholder="Your Email Addresss">
            </div>
            <div>
                <textarea class="resize-none transition-all duration-700 bg-transparent hover:bg-white transform hover:scale-[1.01] focus:bg-white focus:scale-[1.01] focus:outline-none py-5 px-7 h-full text-xl border-2" name="message" cols="50" id="message" placeholder="Your Message Here ..."></textarea>
            </div>
        </div>
    </div>
</template>