import { createLogger, createStore } from 'vuex'
import auth from './modules/auth'
import dashboard from './modules/dashboard'
import navigation from './modules/navigation'

export default createStore({
  plugins: [createLogger()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    dashboard,
    navigation
  }
})
