import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    searchString: '',
    articles: [],
    errors: []
}

//Getters
const getters = {
    getSearchString: state => state.searchString,
    getArticles: state => state.articles
}

//Actions
const actions = {
    setSearchString({ commit }, searchString){
        commit("SET_SEARCH_STRING", searchString.toLowerCase().trim())
    },
    async fetchArticles({ commit, state }){
        await csrf.getCookie();

        commit("CLEAR_STATE", null)
        
        if(state.searchString.length !== 0){
            api.post('/front/articles/search', { str_search: state.searchString })
            .then((response) =>{
                commit('SET_ARTICLES', response.data)
            }).catch((error) =>{
                commit('SET_ERROR', error)
            })
        }
    },

}

//Mutations
const mutations = {
    SET_SEARCH_STRING: (state, searchString) => state.searchString = searchString,
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ERROR: (state, error) => state.errors = error,
    CLEAR_STATE: state => state.articles = []
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}