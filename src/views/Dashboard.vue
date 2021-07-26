<template>
  <div>
      <Navigation />
      <h1>Dashboard</h1>
      <div v-if="user">
        <h3>{{ user.name }}</h3>
        <h4>{{ user.email }}</h4>
      </div>

      <button @click.prevent="handleLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import api from "../api/api"
import Navigation from "../components/Navigation.vue"
export default {
    components:{
        Navigation
    },
    data(){
        return{

        }
    },
    computed:{
        ...mapState('auth', ['user'])
    },
    methods:{
        ...mapActions('auth', ['logout', 'getUser']),
        handleLogout(){
            this.logout()
        }
    },
    mounted(){

        this.getUser()
        
        api.get('/abilities').then((response) => {
                console.log(response.data)
            })
        
    }
}
</script>

<style>

</style>