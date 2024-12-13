import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from "./views/App.vue"
import router from '@/router'
import axios from 'axios'
import './styles/index.scss'

console.log(axios,'axios');
document.documentElement.setAttribute('data-theme', 'dark');


const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)
app.mount('#app')
