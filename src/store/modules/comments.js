import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    comments: []
}

//Getters
const getters = {
    getComments: state => state.comments
}

//Actions
const actions = {
    async fetchComments({ commit }, id){
        await csrf.getCookie();
        
        api.post('/front/comments/show', { id })
        .then((response) =>{
            commit('SET_COMMENTS', response.data)
        })
    },

}

//Mutations
const mutations = {
    SET_COMMENTS: (state, comments) => state.comments = comments
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}