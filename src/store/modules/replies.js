import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    comment: null,
    replies: null
}

//Getters
const getters = {
    getComment: state => state.comment,
    getReplies:state => state.replies
}

//Actions
const actions = {
    async fetchReplies({ commit }, comment_id){
        await csrf.getCookie();
        
        api.post('/front/replies/show', { comment_id })
        .then((response) =>{
            commit('SET_REPLIES', response.data)
        })
    },
    async deleteReply({ dispatch }, payload){
        await csrf.getCookie();
        
        api.post('/front/replies/delete', { id: payload.reply_id })
        .then((response) =>{
            dispatch('fetchReplies', payload.comment_id, response.data)
        })
    },
    async createReply({ dispatch }, payload){
        await csrf.getCookie();
        
        api.post('/front/replies/create', { comment_id: payload.comment_id, content: payload.content })
        .then((response) =>{
            console.log(response)
            dispatch('fetchReplies', payload.comment_id)
        })
    },
    async toggleLikeComment({ dispatch, state }, id){
        await csrf.getCookie();
        
        const url = state.comment.is_liked == 1 ? '/front/likes/delete' : '/front/likes/create'
        
        api.post(url, { comment_id: id })
        .then((response) =>{
            console.log("Create like response: ", response.data)
            dispatch("fetchReplies", state.comment.id)
        })
    },
    async deleteComment({ state }){
        await csrf.getCookie();
        
        api.post('/front/comments/delete', { id: state.comment.id })
        .then((response) =>{
            console.log(response)
        })
    },
    async toggleDislikeComment({ dispatch, state }, id){
        await csrf.getCookie();
        
        const url = state.comment.is_disliked == 1 ? '/front/dislikes/delete' : '/front/dislikes/create'
        
        api.post(url, { comment_id: id })
        .then((response) =>{
            console.log("Create like response: ", response.data)
            dispatch("fetchReplies", state.comment.id)
        })
    },
    async toggleLikeReply({ dispatch, state }, id){
        await csrf.getCookie();
        
        const reply = state.replies.filter( (reply) => reply.id == id )[0]
        const url = reply.is_liked == 1 ? '/front/rlikes/delete' : '/front/rlikes/create'
        
        api.post(url, { reply_id: id })
        .then((response) =>{
            console.log("Create like response: ", response.data)
            dispatch("fetchReplies", state.comment.id)
        })
    },
    async toggleDislikeReply({ dispatch, state }, id){
        await csrf.getCookie();
        
        const reply = state.replies.filter( (reply) => reply.id == id )[0]
        const url = reply.is_disliked == 1 ? '/front/rdislikes/delete' : '/front/rdislikes/create'
        
        api.post(url, { reply_id: id })
        .then((response) =>{
            console.log("Create dislike response: ", response.data)
            dispatch("fetchReplies", state.comment.id)
        })
    }

}

//Mutations
const mutations = {
    SET_REPLIES(state, data){
        state.comment = data.comment
        state.replies = data.replies
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}