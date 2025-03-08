import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'
// import 'virtual:uno.css'
// import 'virtual:unocss-devtools'
import '@unocss/reset/normalize.css'
import './main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
