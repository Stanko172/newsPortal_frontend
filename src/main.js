import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import { abilitiesPlugin } from '@casl/vue'
import ability from './services/ability'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const eventBus = mitt()
const app = createApp(App)

app.config.globalProperties.eventBus = eventBus

app.use(ElementPlus)
app.use(abilitiesPlugin, ability)
app.use(store)
app.use(router)

app.mount('#app')
