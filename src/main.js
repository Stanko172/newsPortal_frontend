import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import { abilitiesPlugin } from '@casl/vue'
import ability from './services/ability'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_WEBSOCKETS_KEY,
    wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true
});

const eventBus = mitt()
const app = createApp(App)

app.config.globalProperties.eventBus = eventBus

app.use(ElementPlus)
app.use(abilitiesPlugin, ability)
app.use(store)
app.use(router)

app.mount('#app')
