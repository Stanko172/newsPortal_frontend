import csrf from '../../api/csrf'
import api from '../../api/api'

//State
const state = {
    notifications: [],
    unreadNotificationsNum: 0
}

//Getters
const getters = {
    getNotifications: state => state.notifications,
    getUnreadNotificationsNum: state => state.unreadNotificationsNum
}

//Actions
const actions = {
    async fetchNotifications({ commit, dispatch }, filter){
        await csrf.getCookie();
        
        api.post('/front/notifications', { filter })
        .then((response) =>{
            commit('SET_NOTIFICATIONS', response.data)
            dispatch('fetchUnreadNotifications')
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
    },
    async fetchUnreadNotifications({ commit }){
        await csrf.getCookie();
        
        api.get('/front/notifications/unread_num')
        .then((response) =>{
            console.log(response.data.unread_num)
            commit('SET_UNREAD_NUM', response.data.unread_num)
        })
    }

}

//Mutations
const mutations = {
    SET_NOTIFICATIONS: (state, notifications) => state.notifications = notifications,
    SET_UNREAD_NUM: (state, unread_num) => state.unreadNotificationsNum = unread_num
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}