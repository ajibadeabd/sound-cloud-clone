import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import axios from 'axios'
import routes from './routes'
// const token= localStorage.getItem("token")

// axios.defaults.header.common["Authorization"]=token
createApp(App).use(store).use(routes).mount('#app')
