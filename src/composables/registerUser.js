import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useRegister(){
    const register = ref([]);
    const router = useRouter()

    const storeUser = async(userData) => {
        axios.post('/auth/register',userData)
        .then(response => {
            console.log('register')
            localStorage.setItem('access_token',response.data.access_token.original.access_token)
            router.push({name:'Home'})
        })
        .catch(error => console.log(error))
    }

    return {register, storeUser}

}