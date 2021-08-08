import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    notifications: []
}

//Getters
const getters = {
    getNotifications: state => state.notifications
}

//Actions
const actions = {
    async fetchNotifications({ commit }, filter){
        await csrf.getCookie();
        
        api.post('/front/notifications', { filter })
        .then((response) =>{
            commit('SET_NOTIFICATIONS', response.data)
        })
    },
    async changeStatus({ dispatch }, payload){
        await csrf.getCookie();
        
        api.post('/front/notifications/status', { id_array: payload.notifications })
        .then((response) =>{
            console.log(response)
            dispatch('fetchNotifications', payload.filter)
        })
    },
    async deleteNotification({ dispatch }, payload){
        await csrf.getCookie();
        
        api.post('/front/notifications/delete', { id: payload.notification_id })
        .then((response) =>{
            console.log(response)
            dispatch('fetchNotifications', payload.filter)
        })
    }

}

//Mutations
const mutations = {
    SET_NOTIFICATIONS: (state, notifications) => state.notifications = notifications
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}