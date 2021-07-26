<template>
  <div>
      e-mail
      <input type="text" v-model="form.email"> <br>
      password
      <input type="text" v-model="form.password"> <br>

      <button @click.prevent="handleLogin">Login</button>

    <div v-if="loginErrors">
        {{ loginErrors }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return{
            form:{
                email: "",
                password: ""
            }
        }
    },
    computed:{
        ...mapState('auth', ['loginResponse', 'loginErrors'])
    },
    methods:{
        ...mapActions('auth', ['login']),
        handleLogin(){
            this.login(this.form)
        }
    }
}
</script>

<style>

</style>