import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    article: [],
    loaded: false
}

//Getters
const getters = {
    getArticle: state => state.article
}

//Actions
const actions = {
    async fetchArticle({ commit }, id){
        await csrf.getCookie();
        
        api.post('/front/articles/article/show', { id })
        .then((response) =>{
            commit('SET_ARTICLE', response.data)
            commit('SET_LOADED', true)
        })
    },

}

//Mutations
const mutations = {
    SET_ARTICLE: (state, article) => state.article = article,
    SET_LOADED: (state, loaded) => state.loaded = loaded
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}