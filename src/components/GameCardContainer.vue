<template>
    <div class="grid xl:grid-cols-3 grid grid-cols-1 gap-4 gap-4">
            <div @mouseover="hover = true" @mouseleave="hover = false" class="text-white">
                <div class="rounded w-full lg:w-1/2 xl:w-full p-4 bg-gray-900 shadow game-card-background" 
                >
                    <div class="flex mb-4">
                        <div class="w-full">
                            <h1 class="font-semibold text-5xl text-center text-white">
                            {{ game_title }}
                            </h1>
                        </div>
                    </div>
                    <hr>
                    <div class="py-4 text-sm flex flex-col">
                        <p><label class="font-bold">Game Title:</label> {{ game_title }}</p>
                        <p><label class="font-bold">Description:</label> {{ game_desciption }}</p>
                        <p><label class="font-bold">How to play:</label> {{ how_to_play }}</p>
                        <div class="mobile-play-button text-center flex items-center justify-center h-full w-full top-0 bg-gray-900 bg-opacity-95">
                            <router-link :to="{ name: link_to}" class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Play</router-link>
                        </div>
                    </div>
                </div>
                <div v-if="hover" class="deskop-play-button text-center flex absolute items-center justify-center h-full w-full top-0 bg-gray-900 bg-opacity-95">
                    <router-link :to="{ name: link_to}" class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Play</router-link>
                </div>
                
            </div>
    </div>
</template>
<script>
export default {
    props: [
        'game_title',
        'link_to',
        'game_desciption',
        'how_to_play'
    ],
    data() {
        return {
            hover: false
        }
    }
}
</script>
<style scoped>
.game-card-background{
    background-repeat: no-repeat;
    background-size: cover;
}
.mobile-play-button{
    display:none;
}
@media (max-width: 768px){
    .mobile-play-button{
        display:block;
    }
    .deskop-play-button{
        display:none;
    }
}
</style>