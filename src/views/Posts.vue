<template>
  <div>
      <Navigation />
      <h1>Posts</h1>
    <button v-on:click="emitEvent" >Emit Event!</button>
    {{ test }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    computed: {
    ...mapState('auth', ['test'])
  },
}
</script>