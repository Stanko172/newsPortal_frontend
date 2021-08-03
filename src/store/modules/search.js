//State
const state = {
    searchString: ''
}

//Getters
const getters = {
    getSearchString: state => state.searchString.toLowerCase().trim()
}

//Actions
const actions = {
    async setSearchString({ commit }, searchString){
        commit("SET_SEARCH_STRING", searchString)
    },

}

//Mutations
const mutations = {
    SET_SEARCH_STRING: (state, searchString) => state.searchString = searchString
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}