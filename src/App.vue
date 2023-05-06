<template>
  <div :class="[remove_flex ? 'flex flex-row' : '']">
    <Navbar @nav_bar="removeFlex"/>
    <router-view/>
  </div>
  
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  data(){
    return {
      remove_flex: true
    }
  },
  components: {
    Navbar
  },
  methods: {
    removeFlex(p) {
      this.remove_flex = p ? true : false
    }
  }
}
</script>
<style>
  @media (max-width: 768px)
  {
    .home-container{
      padding-left: 6rem;
    }
  }
</style>
