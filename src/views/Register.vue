<template>
  <div>
      Name
      <input type="text" v-model="form.name"> <br>
      e-mail
      <input type="text" v-model="form.email"> <br>
      password
      <input type="text" v-model="form.password"> <br>
      password confirmation
      <input type="text" v-model="form.password_confirmation"> <br>

      <button @click.prevent="handleRegister">Register</button>

      <div v-if="registerErrors">
          {{ registerErrors }}
      </div>

      <div v-if="registerResponse">
          {{ registerResponse }}
      </div>

      <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data(){
        return{
            form:{
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
            }
        }
    },
    computed:{
        ...mapState('auth', ['registerResponse', 'registerErrors'])
    },
    methods:{
        ...mapActions('auth', ['register']),
        handleRegister(){
            this.register(this.form)
        }
    },
    mounted(){
        this.eventBus.on('test', (args) => {
            alert(args)
        })
    }
    }
</script>

<style>

</style>