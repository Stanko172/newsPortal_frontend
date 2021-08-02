<template>
  <div>
    <Navigation />

    <div class="content-container" v-if="getAllArticles">

      <!--Tabs i search sekcija-->
      <el-row class="tabs-section">
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18"> <Tabs /> </el-col>
          <el-col :md="6" :lg="6" :xl="6"> <Search /> </el-col>
      </el-row>

      <el-row>
        <!--Lijeva sekcija naslovnice-->
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-row justify="center">
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <Carousel />
            </el-col>
            <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
              <CarouselCards />
            </el-col>
          </el-row>
          <!--Sekcija sa svim vijestima-->
            <News />

            <el-button @click="addMoreArticles(tab)">Učitaj više vijesti</el-button>
        </el-col>

        <!--Desna sekcija naslovnice-->
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <Interviews />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import Navigation from "../components/Navigation.vue"
import Tabs from "../components/dashboard/Tabs.vue"
import Search from "../components/dashboard/Search.vue"
import Carousel from "../components/dashboard/Carousel.vue"
import CarouselCards from "../components/dashboard/CarouselCards.vue"
import Interviews from "../components/dashboard/Interviews.vue"
import News from "../components/dashboard/News.vue"
export default {
    components:{
        Navigation,
        Tabs,
        Search,
        Carousel,
        CarouselCards,
        Interviews,
        News
    },
    data(){
        return{
          
        }
    },
    watch: {
      'tab': function() {
        //Opcije: Najnovije, najčitanije, preporučeno
        this.fetchArticles(this.tab)
      }
    },
    computed:{
      ...mapState('dashboard', ['tab']),
      ...mapGetters('dashboard', ['getAllArticles'])
    },
    methods:{
      ...mapActions('dashboard', ['fetchArticles', 'addMoreArticles', 'fetchInterviews'])
    },
    created(){
      this.fetchArticles('Najnovije');
      this.fetchInterviews();
    }
}
</script>

<style scoped>
.content-container{
  margin: 15px 10px 15px 10px;
}

.tabs-section{
  margin-bottom: 15px;
}

.el-button{
  background: #004379;
  color: white;
  border: none;
  margin-bottom: 1.6em;
}
</style>