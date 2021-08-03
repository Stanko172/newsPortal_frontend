<template>
  <div>
    <el-input
    placeholder="Pretraživanje.."
    prefix-icon="el-icon-search"
    v-model="searchText" @keyup.enter="handleSearch()">
    </el-input>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            searchText: ""
        }
    },
    methods:{
      ...mapActions('search', ['setSearchString']),
      handleSearch(){
        this.setSearchString(this.searchText)
        this.$router.push({path: '/pretrazivanje'})
      }
    }
}
</script>

<style scoped>

</style>