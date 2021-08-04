import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    article: []
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
        })
    },

}

//Mutations
const mutations = {
    SET_ARTICLE: (state, article) => state.article = article
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}