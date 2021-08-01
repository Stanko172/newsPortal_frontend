import { createLogger, createStore } from 'vuex'
import auth from './modules/auth'
import dashboard from './modules/dashboard'
import navigation from './modules/navigation'

export default createStore({
  plugins: [createLogger()],
  state: {
    tab: ''
  },
  mutations: {
    SET_TAB: (state, tab) => state.tab = tab
  },
  actions: {
    setTab({ commit }, tabValue){
      commit('SET_TAB', tabValue)
    }
  },
  modules: {
    auth,
    dashboard,
    navigation
  }
})
