<template>
    <div class="game-container bg-slate-900" style="height: 70vh;">
        <div v-if="playing" class="h-full grid grid-cols-4 gap-4 border-emerald-50">
            <div id="clicked_1" class="flex items-center justify-center"><button v-if="showButton === 1" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_1">&nbsp;</button></div>
            <div id="clicked_2" class="flex items-center justify-center"><button v-if="showButton === 2" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_2">&nbsp;</button></div>
            <div id="clicked_3" class="flex items-center justify-center"><button v-if="showButton === 3" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_3">&nbsp;</button></div>
            <div id="clicked_4" class="flex items-center justify-center"><button v-if="showButton === 4" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_4">&nbsp;</button></div>
            <div id="clicked_5" class="flex items-center justify-center"><button v-if="showButton === 5" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_5">&nbsp;</button></div>
            <div id="clicked_6" class="flex items-center justify-center"><button v-if="showButton === 6" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_6">&nbsp;</button></div>
            <div id="clicked_7" class="flex items-center justify-center"><button v-if="showButton === 7" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_7">&nbsp;</button></div>
            <div id="clicked_8" class="flex items-center justify-center"><button v-if="showButton === 8" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_8">&nbsp;</button></div>
            <div id="clicked_9" class="flex items-center justify-center"><button v-if="showButton === 9" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_9">&nbsp;</button></div>
            <div id="clicked_10" class="flex items-center justify-center"><button v-if="showButton === 10" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_10">&nbsp;</button></div>
            <div id="clicked_11" class="flex items-center justify-center"><button v-if="showButton === 11" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_11">&nbsp;</button></div>
            <div id="clicked_12" class="flex items-center justify-center"><button v-if="showButton === 12" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_12">&nbsp;</button></div>
            <div id="clicked_5" class="flex items-center justify-center"><button v-if="showButton === 13" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_13">&nbsp;</button></div>
            <div id="clicked_6" class="flex items-center justify-center"><button v-if="showButton === 14" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_14">&nbsp;</button></div>
            <div id="clicked_7" class="flex items-center justify-center"><button v-if="showButton === 15" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_15">&nbsp;</button></div>
            <div id="clicked_8" class="flex items-center justify-center"><button v-if="showButton === 16" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_16">&nbsp;</button></div>
            <div id="clicked_9" class="flex items-center justify-center"><button v-if="showButton === 17" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_17">&nbsp;</button></div>
            <div id="clicked_10" class="flex items-center justify-center"><button v-if="showButton === 18" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_18">&nbsp;</button></div>
            <div id="clicked_11" class="flex items-center justify-center"><button v-if="showButton === 19" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_19">&nbsp;</button></div>
            <div id="clicked_12" class="flex items-center justify-center"><button v-if="showButton === 20" @click="clicked($event)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 border-zinc-900 border-2" id="button_20">&nbsp;</button></div>
        </div>
    </div>    
</template>
<script>
export default {
    props: ['start'],
    data() {
        return {
            showing: false,
            playing: false,
            showButton: 0,
            points: 0,
            presentId: ''
        }
    },
    mounted(){
        this.playing = true
        this.showRandomContainer()
    },
    methods: {
        clicked(e) {
            let tempoId = e.target.id
            if(this.presentId != tempoId){
                this.points++
                this.$emit('points',this.points)
                this.presentId = tempoId
            } 
        
        },
        showRandomContainer() {
            const numContainers = 20;
            this.showButton = Math.floor(Math.random() * numContainers) + 1;
            setTimeout(() => this.showRandomContainer(), 1000); 
        }
    }
}
</script>
<style scoped>

</style>
