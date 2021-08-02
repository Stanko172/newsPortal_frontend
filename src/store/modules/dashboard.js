import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    pageNum: 0,
    articles: [],
    interviews: [],
    errors: null,
}

//Getters
const getters = {
    getAllArticles: state => state.articles,
    getInterviews: state => state.interviews
}

//Actions
const actions = {
    async fetchArticles({ commit, state }, payload){
        await csrf.getCookie();

        state.pageNum += 1
        console.log('pageeeeeeeeeee num: ', state.pageNum)
        api.post('/front/articles', {payload: payload, page: state.pageNum})
        .then((response) =>{
            commit('SET_ARTICLES', response.data)
        })
        .catch((error) =>{
            commit('FETCH_ARTICLES_ERRORS', error)
        });
    },
    async fetchInterviews({ commit }){
        await csrf.getCookie();
        
        api.get('/front/interviews')
        .then((response) =>{
            commit('SET_INTERVIEWS', response.data)
        })
        .catch((error) =>{
            commit('FETCH_ARTICLES_ERRORS', error)
        });
    },

}

//Mutations
const mutations = {
    SET_ARTICLES: (state, articles) => state.articles.push(...articles),
    FETCH_ARTICLES_ERRORS: (state, errors) => state.errors = errors,
    SET_INTERVIEWS: (state, interviews) => state.interviews = interviews
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}