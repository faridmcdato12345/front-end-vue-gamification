<template>
  <div class="nav-bar" v-if="isHomeRoute" :class="[mobile_menu ? 'mobile-view' : '']">
    <div
      class="sidebar h-screen top-0 bottom-0 lg:left-0 p-2 xl:w-[300px] overflow-y-auto text-center bg-gray-900"
    >
      <div class="text-gray-100 text-xl">
        <div class="p-2.5 mt-1 flex flex-col items-center">
          <div class="logoContainer mb-4">
          </div>  
          <h1 class="font-bold text-gray-200 text-[15px] ml-3 app-title">GAMIFICATION</h1>
          <div class="menu-toggle-wrap" @click="toggleMenu" :class="[toggle_left ? 'toggle-left' : '']">
            <button class="menu-toggle">
              <font-awesome-icon icon="fas fa-angle-double-right" v-if="!mobile_menu"/>
              <font-awesome-icon icon="fas fa-angle-double-left" v-else />
            </button>
          </div>
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <router-link :to="{ name: 'Home' }">
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          :class="[this.$route.name === 'Home' ? 'active' : '']"
          >
          <font-awesome-icon icon="fa-solid fa-dashboard" />
          <span class="text-[15px] ml-4 text-gray-200 menu-name">Dashboard</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'Game'}">
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          :class="[this.$route.name === 'Game' ? 'active' : '']"
          >
          <font-awesome-icon icon="fa-solid fa-gamepad" />
          <span class="text-[15px] ml-4 text-gray-200 menu-name">Games</span>
        </div>
      </router-link>
      <router-link :to="{name: 'Setting'}"> 
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          :class="[this.$route.name === 'Setting' ? 'active' : '']"
          >
          <font-awesome-icon icon="fa-solid fa-gears" />
          <span class="text-[15px] ml-4 text-gray-200 menu-name">Settings</span>
        </div>
      </router-link>
      <!-- <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        onclick="dropdown()"
      >
        <i class="bi bi-chat-left-text-fill"></i>
        <div class="flex justify-between w-full items-center">
          <span class="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
          <span class="text-sm rotate-180" id="arrow">
            <i class="bi bi-chevron-down"></i>
          </span>
        </div>
      </div> -->
      <!-- <div
        class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu"
      >
        <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Social
        </h1>
        <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Personal
        </h1>
        <h1 class="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Friends
        </h1>
      </div> -->
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        @click="logout"
        >
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
        <span class="text-[15px] ml-4 text-gray-200 menu-name">Logout</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
      return {
        routeWithNavArray: ['Home','Game','Setting'],
        mobile_menu: false,
        toggle_left: false
      }
    },
    computed: {
      isHomeRoute() {
        let checkArray = this.routeWithNavArray.includes(this.$route.name)
        if(!checkArray){
          this.$emit('nav_bar', false)
        }
        else{
          this.$emit('nav_bar',true)
        }
        return checkArray ? true : false
      }
    },
    methods: {
      toggleMenu(){
        this.mobile_menu = !this.mobile_menu
        this.toggle_left = !this.toggle_left
        console.log(this.mobile_menu)
      },
      logout(){
        axios.post('/user/logout')
        .then(response => {
          localStorage.removeItem('access-token')
          this.$router.push({name: 'Login'})
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
}
</script>
<style scoped>
.active {
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}
.logoContainer{
  border-radius: 100%;
  border-color: 1px solid #efefef;
  background-image: url("../../public/logo.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  max-height: 100px;
  max-width: 100px;
  height: 100px;
  width: 100px;
}
*{
  font-family: 'Press Start 2P', cursive;
}
.nav-bar{
  display: flex;
  flex-direction: column;

  transition: 0.2s ease-out;
}
.menu-toggle-wrap{
  display: none;
  height: 2rem;
  width: 2rem;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
}
.menu-toggle-wrap .menu-toggle{
  top: -0.1rem;
  font-size: 1rem;
}
.toggle-left{
  position: absolute;
  right: 0rem;
}
@media (max-width:768px){
  .menu-toggle-wrap{
    display: block;
  }
  .nav-bar{
    position: fixed;
    z-index: 99;
    overflow: hidden;
    min-height: 100vh;
    width: calc(2rem + 32px);
  }
  .mobile-view{
    width: 300px;
  }
  
  .logoContainer{
    display: block;
    max-height: 2rem;
    max-width: 2rem;
    height: 2rem;
    width: 2rem;
  }
  .app-title, .menu-name{
    display: none;
  }
  .mobile-view .app-title, .mobile-view .menu-name{
    display: block;
  }
  .mobile-view .logoContainer{
    max-height: 100px;
    max-width: 100px;
    height: 100px;
    width: 100px;
  }
}
</style>