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

    <div v-if="getAllCategoryArticles">

      <News />

      <el-button type="primary" @click="addMoreCategoryArticles(routeName)">Učitaj više vijesti</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Navigation from '../components/Navigation.vue'
import Tabs from '../components/articles/Tabs.vue'
import Search from '../components/dashboard/Search.vue'
import News from '../components/articles/News.vue'
export default {
    name: 'Article',
    components:{
        Navigation,
        Tabs,
        Search,
        News
    },
    data(){
        return{
            
        }
    },
    watch: {
        $route: {
            handler(){
                if(this.$route.name === 'Articles'){
                    console.log("Route change!", this.$route.params.category, this.tab)
                    this.fetchCategoryArticles(this.routeName)
                }
            },
            immediate: true
        },
        'tab': function() {
        //Opcije: Najnovije, najčitanije, preporučeno
        console.log("Tab change: ", this.tab)
        this.fetchCategoryArticles(this.routeName)
        }
    },
    methods:{
        ...mapActions('articles', ['fetchCategoryArticles', 'addMoreCategoryArticles'])
    },
    computed:{
        ...mapState('articles', ['tab']),
        ...mapGetters('articles', ['getAllCategoryArticles']),
        routeName(){
            return this.$route.params.category
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');

.category-header-row{
    background: #ED1C24;
}

.category-header{
    font-family: 'Love Ya Like A Sister', cursive;
    font-size: 64px;
    text-transform: capitalize;
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