<template>
  <div>
      <Navigation />
      <h1>Posts</h1>
    <button v-on:click="emitEvent" >Emit Event!</button>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
export default {
    components:{
        Navigation
    },
    name: 'Posts',
    methods: {
        emitEvent() {
            console.log("yeaa")
            this.eventBus.emit('test', 'Welcome to MNP!')
        },
    },
}
</script>