<template>
    <div class="p-4">
        <div v-if="!loading_screen" class="flex justify-center items-center h-screen">
            <Spinner class="text-gray-900 px-2"/>
            <h5>Fetching data...</h5>
        </div>
        <div v-else>
            <form @submit.prevent="updateProfile">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <div  @click="$refs.file.click()" class="profile-pic overflow-hidden cursor-pointer" :style="{'background-image': 'url(' + profile_pic_url + ')'}" @mouseenter="hover = true" @mouseleave="hover = false">
                        
                        <div class="upload_file bg-gray-900 opacity-80 h-full flex justify-center items-center" v-if="hover">
                            <div class="flex flex-col">
                                <font-awesome-icon icon="fa-solid fa-camera-retro" class="text-white text-5xl"/>
                                <p class="text-white text-1xl">Click to upload photo</p>
                            </div>
                            <input type="file" ref="file" id="upload_file" hidden @change="handleFileObject()">
                        </div>
                    </div>
                    <div class="profile-info w-full md:w-3/6 md:p-6">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                                First Name:
                            </label>
                            <input @change="changed = true" v-model="form.firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Firstname here...">
                        </div>
                        <div class="mb-4 w-full">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                                Last Name:
                            </label>
                            <input @change="changed = true" v-model="form.lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Lastname here...">
                        </div>
                        <div class="items-center justify-between">
                            <div v-if="!loading">
                                <button v-if="changed" type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Update
                                </button>
                                <p v-else class="text-red-900 italic">Note: Update button will appear if you change the value from the field.</p>
                            </div>
                            <div v-else>
                                <button class="bg-blue-700 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <Spinner/>
                                    Loading
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
import Spinner from './Spinner.vue'
import axios from 'axios'
export default {
    components:{
        Spinner
    },
    data(){
        return {
            starting_point: 0,
            total_points: 0,
            form: {
                firstname: '',
                lastname: ''
            },
            profile_pic: '',
            profile_pic_url: '',
            hover: false,
            temp_profile_pic_trigger: false,
            avatar: '',
            avatarName: '',
            changed: false,
            loading: false,
            loading_screen: false
        }
    },
    mounted(){
        this.getUserInfo()
    },
    methods: {
        getUserInfo(){
            axios.get('/user/profile')
            .then(response => {
                this.loading_screen = true
                if(!response.data.data.user.profile.profile_picture_url){
                    this.profile_pic_url = 'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1682433028~exp=1682433628~hmac=f18bf6973355880f2c418cf648d75e1cffc69e1c6a4fad5929635a94688be2bc'
                }else{
                    this.profile_pic_url = response.data.data.user.profile.profile_picture_url
                }
                this.form.firstname = response.data.data.user.profile.first_name
                this.form.lastname = response.data.data.user.profile.last_name
            })
            .catch(error => {
                console.log(error)
            })
        },
        handleFileObject() {
            this.changed = true
            this.temp_profile_pic_trigger = !this.temp_profile_pic_trigger
            this.avatar = this.$refs.file.files[0]
            console.log("this.avatar: ",this.avatar)
            this.avatarName = this.avatar.name
            this.profile_pic_url = URL.createObjectURL(this.avatar)
        },
        updateProfile(){
            let form = new FormData()
            if(this.avatar){
                form.append('file_name',this.avatar)
            }
            form.append('firstname',this.form.firstname)
            form.append('lastname',this.form.lastname)
            form.append('_method','PATCH')
            this.loading = true
            axios.post('/user/profile', form)
            .then(response => {
                this.loading = false
                this.$toast.success('Update successfully!')
                console.log(response)
            })
            .catch(error => console.log(error))
        }
    }
}
</script>
<style scoped>
.profile-pic{
    width: 25rem;
    height: 25rem;
    background-size: cover;
    border-radius: 100%;
    border: 1px solid black;
    background-position: center;
}

</style>