import './assets/default.css'

import { createApp } from 'vue'
import App from './ColcicApi.vue'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
