<template>
    <div class="home-container p-4 w-full">
        <Card 
        game_title="Reflexator"
        :points="total_points"
        />
        <!-- <Bar v-if="loaded" :data="chartData" /> -->
    </div>
</template>
<script>
import Card from '../components/Card.vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import axios from 'axios';
export default {
    components: {
        Card,
        Bar
    },
    data(){
        return {
            starting_point: 0,
            total_points: 0,
            loaded: false,
            chartData: {
                datasets: []
            },
            
        }
    },
    mounted(){
        this.getUserInfo()
    },
    methods: {
        async getUserInfo(){
            this.loaded = false
            await axios.get('/user/profile')
            .then(response => {
                const perPoints = response.data.data.points_per_game
                perPoints.forEach(element => {
                    this.chartData.datasets.push(element.points)
                });
                console.log("this.chartData.datasets: ", this.chartData.datasets)
                this.total_points = response.data.data.total_points
                this.loaded = true
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    
</style>