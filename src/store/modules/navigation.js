import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    categories: null
}

//Getters
const getters = {

}

//Actions
const actions = {
    async fetchCategories({ commit }){
        await csrf.getCookie();
        
        api.get('/front/categories')
        .then((response) =>{
            commit('SET_CATEGORIES', response.data)
        })
    },

}

//Mutations
const mutations = {
    SET_CATEGORIES: (state, categories) => state.categories = categories
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}