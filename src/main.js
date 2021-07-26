import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

const eventBus = mitt()
const app = createApp(App)

app.config.globalProperties.eventBus = eventBus
app.use(store)
app.use(router)

app.mount('#app')
