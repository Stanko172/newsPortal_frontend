<template>
  <div>
    <el-input
    placeholder="Pretraživanje.."
    prefix-icon="el-icon-search"
    v-model="searchText">
    </el-input>
  </div>
</template>

<script>
export default {
    data(){
        return{
            searchText: ""
        }
    }
}
</script>

<style scoped>

</style>