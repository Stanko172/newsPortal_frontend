<template>
  <div>
      e-mail
      <input type="text" v-model="form.email"> <br>
      password
      <input type="text" v-model="form.password"> <br>

      <button @click.prevent="login">Login</button>
  </div>
</template>

<script>
import user from "../api/user";
export default {
    data(){
        return{
            form:{
            email: "",
            password: ""
            }
        }
    },
    methods:{
        login(){
            user.login(this.form).then(() => {
                localStorage.setItem("auth", "true")
                this.$router.push({name: "Dashboard"})
            })
        }
    }
}
</script>

<style>

</style>