import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    comments: [],
    comment: null
}

//Getters
const getters = {
    getComments: state => state.comments,
    getComment: state => state.comment
}

//Actions
const actions = {
    async fetchComments({ commit }, id){
        await csrf.getCookie();
        
        api.post('/front/comments/index', { id })
        .then((response) =>{
            commit('SET_COMMENTS', response.data)
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
    SET_COMMENTS: (state, comments) => state.comments = comments,
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