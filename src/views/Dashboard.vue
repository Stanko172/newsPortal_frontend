<template>
  <div>
    <Navigation />

    <div class="content-container">

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
import Navigation from "../components/Navigation.vue"
import Tabs from "../components/dashboard/Tabs.vue"
import Search from "../components/dashboard/Search.vue"
import Carousel from "../components/dashboard/Carousel.vue"
import CarouselCards from "../components/dashboard/CarouselCards.vue"
import Interviews from "../components/dashboard/Interviews.vue"
export default {
    components:{
        Navigation,
        Tabs,
        Search,
        Carousel,
        CarouselCards,
        Interviews
    },
    data(){
        return{

        }
    },
}
</script>

<style>
.content-container{
  margin: 15px 10px 15px 10px;
}

.tabs-section{
  margin-bottom: 15px;
}
</style>