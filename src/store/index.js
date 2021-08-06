import { createLogger, createStore } from 'vuex'
import auth from './modules/auth'
import navigation from './modules/navigation'
import search from './modules/search'
import dashboard from './modules/dashboard'
import articles from './modules/articles'
import article from './modules/article'
import comments from './modules/comments'
import replies from './modules/replies'

export default createStore({
  plugins: [createLogger()],
  modules: {
    auth,
    navigation,
    search,
    dashboard,
    articles,
    article,
    comments,
    replies
  }
})
