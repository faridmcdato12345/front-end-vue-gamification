<template>
    <div class="p-4 w-full flex align-center justify-center flex-col text-center h-screen bg-gray-900">
        <div>
        <h1 class="text-2xl font-bold mb-6 text-white">You are not validated to access the dashboard. Please validate your account by clicking the button below</h1>
        <button @click="revalidate" class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded text-3xl">Click here to revalidate email</button> 
    </div>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    methods: {
        revalidate(){
            axios.post('/email/verify/resent')
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }
    }
}
</script>
<style scoped>
h1 {
    font-family: 'Press Start 2P', cursive;
}
</style>