import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDashboard, faGamepad, faGears, faRightFromBracket, faAngleDoubleRight,faAngleDoubleLeft,faTentArrowLeftRight, faCameraRetro, faEyeSlash, faEye, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faFacebookSquare, faSquareFacebook} from '@fortawesome/free-brands-svg-icons';
import store from './store'
import axios from 'axios'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';

const accessToken = localStorage.getItem('access-token')
axios.defaults.baseURL = "http://localhost:8000/v1/api"
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'

library.add([
    faDashboard,
    faGamepad, 
    faGears, 
    faRightFromBracket, 
    faAngleDoubleRight,
    faAngleDoubleLeft, 
    faTentArrowLeftRight, 
    faCameraRetro,
    faFacebookF,
    faFacebookSquare,
    faSquareFacebook,
    faEyeSlash, 
    faEye,
    faSpinner
])

axios.interceptors.response.use(
    response => response,
    error => {
        if(error.response?.status === 401 || error.response?.status === 419){
            if(localStorage.getItem('access-token')){
                localStorage.removeItem('access-token')
                location.assign('/')
            }
        }
        if(error.response?.status === 403){
            location.assign('/validate')
        }
        return Promise.reject(error)
    }
)

const app = createApp(App).use(store)
app.use(router)
app.use(VueToast, {
    position: 'top-right'
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
