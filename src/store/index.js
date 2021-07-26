import { createLogger, createStore } from 'vuex'
import auth from "./modules/auth"

export default createStore({
  plugins: [createLogger()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
