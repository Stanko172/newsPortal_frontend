import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    articles: null,
    errors: null

}

//Getters
const getters = {
    getAllArticles: state => state.articles
}

//Actions
const actions = {
    async fetchArticles({ commit }){
        await csrf.getCookie();
        
        api.get('/front/articles')
        .then((response) =>{
            commit('SET_ARTICLES', response.data)
        })
        .catch((error) =>{
            commit('FETCH_ARTICLES_ERRORS', error)
        });
    },

}

//Mutations
const mutations = {
    SET_ARTICLES: (state, articles) => state.articles = articles,
    FETCH_ARTICLES_ERRORS: (state, errors) => state.errors = errors
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}