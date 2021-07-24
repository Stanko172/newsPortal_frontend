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

      <button @click.prevent="register">Register</button>
  </div>
</template>

<script>
import user from "../api/user";
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
    methods:{
        register(){
            user.register(this.form)
        }
    }
}
</script>

<style>

</style>