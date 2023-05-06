<template>
    <div class="p-8">
    <div class="flex flex-row">
      <div class="basis-1/3">
        <router-link :to="{name: 'Home'}">
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
          <h1 class="text-yellow-700 text-xs">Go back to Dashboard</h1>
        </router-link>
      </div>
      <div class="basis-1/3 text-center">
        <button class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white">
          TIMER: 
          <span v-if="start_timer" :class="[timer_danger ? 'text-red-600' : 'text-white']"> 00:{{ the_timer }}</span>
          <span v-else class='text-white'> 00:00</span>
        </button>
      </div>
      <div class="basis-1/3 text-right">
        <Result :points="game_points"/>
      </div>
    </div>
    <div :class="[start ? 'flex items-center justify-center' : 'items-center justify-center']"  style="height: 70vh;" class="mt-4">
      <div v-if="start" :class="[start ? 'border-2 border-solid border-y-2 flex items-center justify-center' : 'items-center justify-center']" style="height:70vh;width:100%" >
        <button v-if="start" @click="startGame" class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Start</button>
      </div>
      <div v-if="show_count_down" style="height:100%" class="flex items-center justify-center bg-slate-900 text-white">
        <div v-if="counter">
          <h1>{{count_down}}</h1>
        </div>
        <div v-if="!counter">
          <h1>GO</h1>
        </div>
      </div>
      <div v-if="save_point_show" style="height:100%" class="items-center justify-center bg-slate-900 text-white">
        <div :class="[save_point_show ? 'border-2 border-solid border-y-2 flex items-center justify-center flex-col' : 'items-center justify-center']" style="height:70vh;width:100%" >
          <h1>Click save button to save your points</h1>
          <button v-if="save_point_show" @click="savePoints" class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Save</button>
        </div>
      </div>
      <div v-if="start_again" style="height:100%" class="items-center justify-center bg-slate-900 text-white">
        <div v-if="start_again" :class="[start_again ? 'border-2 border-solid border-y-2 flex items-center justify-center flex-col' : 'items-center justify-center']" style="height:70vh;width:100%" >
          <h1>Would you like to start again?</h1>
          <button v-if="start_again" @click="startGame" class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Yes</button>
        </div>
      </div>
      <GameContainer v-if="game_container_start" @points="gamePoints"/>
    </div>
  </div>
</template>
<script>
import GameContainer from '../components/GameContainer.vue';
import Result from '../components/Result.vue';
import axios from 'axios';

export default {
  components: {
    GameContainer,
    Result
  },  
  data() {
    return {
      start: true,
      delay: null,
      game_points: 0,
      start_timer: false,
      game_container_start: false,
      the_timer: 0,
      timer_danger: false,
      count_down: 0,
      show_count_down: false,
      counter: true,
      start_again: false,
      nav_bar: false,
      save_point_show: false,
    }
  },
  methods: {
    startGame() {
      this.timer_danger = false
      this.start = false
      this.start_timer = true
      this.start_again = false
      this.show_count_down = true
      this.save_point_show = false
      this.count_down = 3
      this.the_timer = 60
      this.game_points = 0
      this.theCountDown()
    },
    gamePoints(points) {
      this.game_points = points
    },
    savePoints(){
      axios.post('/user/points',{
        points: this.game_points
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
      this.save_point_show = false
      this.start_again = true
    },
    timer() {
      const timeLimit = 60 * 1000
      let timeLeft = timeLimit
      let timerId = setInterval(() =>{
        timeLeft -= 1000
        this.the_timer = Math.floor((timeLeft / 1000) % 60)
        
        if(this.the_timer <= 10){
          this.timer_danger = true
          
        }
        if(this.the_timer < 10){
          this.the_timer = "0" + this.the_timer
        }
        if(timeLeft <= 0){
          clearInterval(timerId)
          this.the_timer = 0
          this.start_timer = false
          this.game_container_start = false
          this.save_point_show = true
        }
      },1000)
    },
    theCountDown(){
      let countDownTimer = setInterval(() => {
        this.count_down--

        if(this.count_down < 0){
          if(this.count_down == 0){
            this.counter = false
          }
          clearInterval(countDownTimer)
          
          this.game_container_start = true
          this.timer()
          this.show_count_down = false
        }
      },1000)

      
    }
  }
}
</script>
<style scoped>
*{
  font-family: 'Press Start 2P', cursive;
}
</style>