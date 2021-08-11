<template>
  <div>
    
  </div>
</template>

<script>
import api from '../../api/api'
import { mapActions } from 'vuex'

import { AbilityBuilder, Ability } from '@casl/ability';
import { ABILITY_TOKEN } from '@casl/vue';
import { h } from 'vue';
export default {
  name: 'EventHub',
  inject: {
      $ability: { from: ABILITY_TOKEN }
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
  },
  data(){
    return{

    }
  },
  methods:{
    ...mapActions('notifications', ['fetchUnreadNotifications']),
    updateAbility(newAbilities) {
      const { can, rules } = new AbilityBuilder(Ability);

      can(newAbilities, 'all');

      this.$ability.update(rules);
    },
    showNotification(msg) {
        this.$notify.info({
          title: 'Nova obavijest',
          message: h('i', { style: 'color: teal' }, msg)
        });
      },
  },
  created () {
    this.eventBus.on('test', (args) => {
        alert(args)
    })
  },
  
  mounted(){
    window.Echo.channel('user.' + localStorage.getItem('id')).listen('CommentReplied', (e) => {
      console.log("Live event: ", e)
      this.showNotification(e.content)
      this.fetchUnreadNotifications()
    })
    
  }
}
</script>