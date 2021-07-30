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
      Article page

      <div>
          {{ $route.params.category }} | {{ $route.params.id }}
      </div>

      <News />

      <el-button type="primary">Učitaj više vijesti</el-button>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Tabs from '../components/dashboard/Tabs'
import Search from '../components/dashboard/Search.vue'
import News from '../components/dashboard/News.vue'
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
    margin-top: 2px;
    background: #409EFF;
}

.category-header{
    font-family: 'Love Ya Like A Sister', cursive;
    font-size: 64px;
    color: white;
}

.tabs-section{
    margin-top: 5px;
}

</style>