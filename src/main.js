import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import { abilitiesPlugin } from '@casl/vue'
import ability from './services/ability'

const eventBus = mitt()
const app = createApp(App)

app.config.globalProperties.eventBus = eventBus
app.use(abilitiesPlugin, ability)
app.use(store)
app.use(router)

app.mount('#app')
