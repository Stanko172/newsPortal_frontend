import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    tab: 'Najnovije',
    pageNum: 1,
    articles: null,
    errors: null,
    loading: false
}

//Getters
const getters = {
    getAllCategoryArticles: state => state.articles
}

//Actions
const actions = {
    setTab({ commit, state }, tabValue){
        commit('SET_TAB', tabValue)
        console.log(state.tab)
        commit('CLEAR_ARTICLES_STATE', null)
    },
    async fetchCategoryArticles({ commit, state }, payload){
        await csrf.getCookie();
        
        api.post('/front/articles/show', { category_name: payload, tab: state.tab})
        .then((response) =>{
            commit('SET_ARTICLES', response.data)
            commit('SET_LOADING', true)
        })
    },
    async addMoreCategoryArticles({ commit, state }, payload){
        await csrf.getCookie();

        state.pageNum += 1
        api.post('/front/articles/show', {category_name: payload, tab: state.tab, page: state.pageNum})
        .then((response) =>{
            commit('ADD_ARTICLES', response.data)
        })
        .catch((error) =>{
            commit('FETCH_ARTICLES_ERRORS', error)
        });
    }

}

//Mutations
const mutations = {
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_TAB: (state, tab) => state.tab = tab,
    CLEAR_ARTICLES_STATE(state){ state.pageNum = 0; },
    ADD_ARTICLES: (state, articles) => state.articles.push(...articles),
    FETCH_ARTICLES_ERRORS: (state, errors) => state.errors = errors,  
    SET_LOADING: (state, loading) => state.loading = loading 
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}