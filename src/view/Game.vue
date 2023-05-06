<template>
    <div class="home-container p-4 w-full">
        <GameCardContainer 
        game_title="Reflexator" 
        link_to="Reflexator"
        game_desciption="This is a game where you can practice you reflexes..."
        how_to_play="Player need to click the circle that randomly appears."/>
    </div>
</template>
<script>
import GameCardContainer from '../components/GameCardContainer.vue';
export default {
    components: {
        GameCardContainer
    }
}
</script>
<style scoped>
</style>