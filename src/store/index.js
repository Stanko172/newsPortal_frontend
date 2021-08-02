import { createLogger, createStore } from 'vuex'
import auth from './modules/auth'
import navigation from './modules/navigation'
import dashboard from './modules/dashboard'
import articles from './modules/articles'

export default createStore({
  plugins: [createLogger()],
  modules: {
    auth,
    navigation,
    dashboard,
    articles
  }
})
