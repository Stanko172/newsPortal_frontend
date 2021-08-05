<template>
  <div>
      Comment
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    components:{

    },
    computed:{
        ...mapGetters('comments', ['getComment']),
    },
    methods:{
        ...mapActions('comments', ['fetchSingleComment']),
        ...mapActions('auth', ['isLoggedIn'])
    },
    created(){
        this.isLoggedIn()
    },
    mounted(){
        this.fetchSingleComment(this.$route.params.comment_id)
    }
}
</script>

<style>

</style>