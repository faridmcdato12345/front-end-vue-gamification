<template>
    <div class="p-4 w-full flex align-center justify-center flex-col text-center h-screen bg-gray-900">
        <div>
        <h1 class="text-4xl font-bold mb-6 text-white">Page Not Found!</h1>
        <button>
            <router-link class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded text-3xl" :to="{ name: 'Home' }"> Back to Dashboard</router-link> 
        </button> 
    </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
h1 {
    font-family: 'Press Start 2P', cursive;
}
</style>