<template>
  <div>
      <h1>Dashboard</h1>
      <div v-if="user">
        <h3>{{ user.name }}</h3>
        <h4>{{ user.email }}</h4>
      </div>

      <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import user from "../api/user"
import api from "../api/api"
export default {
    data(){
        return{
            user: null
        }
    },
    methods:{
        logout(){
            user.logout().then(() => {
                localStorage.removeItem("auth")
            })
        }
    },
    mounted(){
        user.user().then(response => {
            this.user = response.data
        })

        api.get('/abilities').then((response) => {
                console.log(response.data)
            })
    }
}
</script>

<style>

</style>