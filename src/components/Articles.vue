<template>
  <div>
      <Navigation />

      <el-row class="category-header-row">
          <el-col>
              <div class="category-header">
                  {{ $route.params.category }}
              </div>
          </el-col>
      </el-row>

      <!--Tabs i search sekcija-->
      <el-row class="tabs-section">
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18"> <Tabs /> </el-col>
          <el-col :md="6" :lg="6" :xl="6"> <Search /> </el-col>
      </el-row>

      <News />

      <el-button type="primary">Učitaj više vijesti</el-button>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Tabs from '../components/dashboard/Tabs'
import Search from './dashboard/Search.vue'
import News from './dashboard/News.vue'
export default {
    name: 'Article',
    components:{
        Navigation,
        Tabs,
        Search,
        News
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');

.category-header-row{
    margin-top: 1px;
    background: #ED1C24;
}

.category-header{
    font-family: 'Love Ya Like A Sister', cursive;
    font-size: 64px;
    color: white;
}

.tabs-section{
    margin-top: 10px;
}

.el-button{
  background: #004379;
  color: white;
  border: none;
}

</style>