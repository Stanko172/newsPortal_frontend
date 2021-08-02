<template>
  <div>
    
  </div>
</template>

<script>
import api from '../../api/api'

import { AbilityBuilder, Ability } from '@casl/ability';
import { ABILITY_TOKEN } from '@casl/vue';
export default {
  name: 'EventHub',
  inject: {
      $ability: { from: ABILITY_TOKEN }
  },
  methods:{
    updateAbility(newAbilities) {
      const { can, rules } = new AbilityBuilder(Ability);

      can(newAbilities, 'all');

      this.$ability.update(rules);
    }
  },
  created () {
    this.eventBus.on('test', (args) => {
        alert(args)
    })
  },
  watch: {
    $route: {
      handler() {
        if(localStorage.getItem('auth')){
          api.get('/abilities').then(response => {
            this.updateAbility(response.data)
          })
        }
      },
      immediate: true
    }
  }
}
</script>