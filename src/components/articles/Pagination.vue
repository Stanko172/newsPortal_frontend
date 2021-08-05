<template>
<div v-if="getCommentsNumber">
  <el-pagination
    background
    layout="prev, pager, next"
    @current-change="handleCurrentChange"
    :total="getCommentsNumber">
    </el-pagination>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods:{
    ...mapActions('comments', ['createComment', 'changePage']),
    handleCurrentChange(val) {
        console.log(`current page: ${val}`);
        this.changePage({id: this.$route.params.id, page: val})
      }
  },
  computed:{
    ...mapGetters('comments', ['getCommentsNumber'])
  }
}
</script>

<style>

</style>