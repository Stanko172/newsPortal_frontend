<template>
  <div>
    <Navigation />
    <h1>Posts</h1>

    <el-button type="primary">Primary</el-button>

    <button v-on:click="emitEvent" >Emit Event!</button> 
    <button v-on:click="updateAbility" >Update abilities</button> 

    <br /> <br />

    <div v-if="$ability.can('post_create', 'all')">
      Backend-frontend abilities working!
    </div>

    <br /> <br />

    <div v-if="$ability.can('roll', 'Managerr')">
      Hello World!
    </div>

    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from "../components/Navigation.vue"

import { AbilityBuilder, Ability } from '@casl/ability';
import { ABILITY_TOKEN } from '@casl/vue';
export default {
    components:{
        Navigation
    },
    name: 'Posts',
    inject: {
      $ability: { from: ABILITY_TOKEN }
    },
    methods: {
        emitEvent() {
            console.log("yeaa")
            this.eventBus.emit('test', 'Welcome to MNP!')
        },
        updateAbility() {
          const { can, rules } = new AbilityBuilder(Ability);

          can('roll', 'Managerr');

          console.log(this.$ability)

          this.$ability.update(rules);
        }
    },
    computed: {
    ...mapState('auth', ['test'])
  },
}
</script>