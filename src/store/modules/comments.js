import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    comments: [],
    total: null,
    comment: null
}

//Getters
const getters = {
    getComments: state => state.comments,
    getCommentsNumber: state => state.total,
    getComment: state => state.comment,
}

//Actions
const actions = {
    async fetchComments({ commit }, id){
        await csrf.getCookie();
        
        api.post('/front/comments/index', { id: id, page: 1 })
        .then((response) =>{
            commit('SET_COMMENTS', response.data)
        })
    },
    async changePage({ commit }, payload){
        await csrf.getCookie();

        console.log("Page is: ", payload.page, payload.id)
        
        api.post('/front/comments/index', { id: payload.id,page: payload.page })
        .then((response) =>{
            commit('SET_COMMENTS', response.data)
        })
    },
    async deleteComment({ commit }, id){
        await csrf.getCookie();
        
        api.post('/front/comments/delete', { id })
        .then((response) =>{
            console.log(response)
            commit('PULL_DELETED_COMMENT', id)
        })
    },
    async createComment({ dispatch }, payload){
        await csrf.getCookie();
        
        api.post('/front/comments/create', payload)
        .then((response) =>{
            dispatch('fetchComments', payload.article_id)
            console.log("Svi komentari: ", response.data)
        })
    },
    async fetchSingleComment({ commit }, id){
        await csrf.getCookie();
        
        api.post('/front/comments/show', { id })
        .then((response) =>{
            commit('SET_COMMENT', response.data)
        })
    },
    async likeCommentToggle({ commit, state }, id){
        await csrf.getCookie();

        console.log(id)
        
        const comment = state.comments.filter( (comment) => comment.id == id )[0]
        const url = comment.is_liked == 1 ? '/front/likes/delete' : '/front/likes/create'
        
        api.post(url, { comment_id: id })
        .then((response) =>{
            console.log("Create like response: ", response.data)
            commit("UPDATE_LIKE", id)
        })
    },
    async dislikeCommentToggle({ commit }, id){
        await csrf.getCookie();

        const comment = state.comments.filter( (comment) => comment.id == id )[0]
        const url = comment.is_disliked == 1 ? '/front/dislikes/delete' : '/front/dislikes/create'
        
        api.post(url, { comment_id: id })
        .then((response) =>{
            console.log("Create dislike response: ", response.data)
            commit('UPDATE_DISLIKE', id)
        })
    },

}

//Mutations
const mutations = {
    SET_COMMENTS(state, comments) { state.comments = comments.data; state.total = comments.total },
    PULL_DELETED_COMMENT: (state, id) => state.comments = state.comments.filter( (comment) => id != comment.id),
    SET_COMMENT: (state, comment) => state.comment = comment,
    UPDATE_LIKE(state, id){ 
        state.comments.map(function(comment){
            if(comment.id == id){
                if(comment.is_liked == 1){
                    comment.is_liked = 0
                    comment.likes -= 1
                }else{
                    comment.is_liked = 1
                    comment.likes += 1
                }
            }
        })
    },
    UPDATE_DISLIKE(state, id){ 
        state.comments.map(function(comment){
            if(comment.id == id){
                if(comment.is_disliked == 1){
                    comment.is_disliked = 0
                    comment.dislikes -= 1
                }else{
                    comment.is_disliked = 1
                    comment.dislikes += 1
                }
            }
        })
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}