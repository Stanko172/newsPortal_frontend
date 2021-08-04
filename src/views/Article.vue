<template>
  <div v-if="getArticle">
      <Navigation />

      <el-row justify="center">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
              <h1 class="article-header">{{ getArticle.title }}</h1>

            <el-row>
                <el-col :span="24">
                    <div class="article-info">
                        <div class="icon-info-container">
                            <i class="fas fa-user-alt"></i>
                            <p v-if="getArticle.author">{{ getArticle.author.name }}</p>
                        </div>
                        <div class="icon-info-container">
                            <i class="fas fa-calendar"></i>
                            <p v-if="getArticle.author">{{ getArticle.article_created_at }}</p>
                        </div>
                        <div class="icon-info-container">
                            <i class="fas fa-eye"></i>
                            <p v-if="getArticle.author">{{ getArticle.views }}</p>
                        </div>
                    </div>
                </el-col>
             </el-row>

            <el-row justify="center" style="background: blue;">
                <el-col :span="24" class="title-image">
                    <el-image :src="getArticle.title_image ? serverURL + getArticle.title_image : 'https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg'"></el-image>
                </el-col>
             </el-row>

             <el-row>
                 <el-col :span="24">
                     <div class="info-buttons">
                        <el-button type="primary"><i class="fab fa-facebook-f"></i> | Facebook</el-button>
                        <el-button type="primary"><i class="fab fa-instagram"></i> | Instagram</el-button>
                        <el-button type="primary"><i class="fab fa-youtube"></i> | YouTube</el-button>
                        <el-button type="primary"><i class="fab fa-linkedin"></i> | Linkedin</el-button>
                     </div>
                 </el-col>
             </el-row>

             <el-row>
                 <el-col :span="24">
                     <div class="main-text">
                        {{ getArticle.body }}
                     </div>
                 </el-col>
             </el-row>

          </el-col>
      </el-row>
  </div>
</template>

<script>
import server from '../api/server'
import { mapActions, mapGetters } from 'vuex'
import Navigation from '../components/Navigation.vue'
export default {
    components:{
        Navigation
    },
    data(){
        return{
            serverURL: server
        }
    },
    methods:{
        ...mapActions('article', ['fetchArticle'])
    },
    computed:{
        ...mapGetters('article', ['getArticle'])
    },
    created(){
        this.fetchArticle(this.$route.params.id)
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@200&display=swap');

.article-header{
    font-style: 'Newsreader', 'sans-serif';
    font-size: 2.5em;
    letter-spacing: 1.5px;
    font-weight: 400;
}

.article-info{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    padding: 0 1em 0.7em 1em;
}

.icon-info-container{
    display: flex;
    gap: 0.7em;
    align-items: center;
}

.icon-info-container>i{
    color: #004379;
    font-size: 1.5em;
}

.icon-info-container>p{
    font-size: 1.2em;
    font-weight: 500;
    color: #004379;
}

.title-image{
    max-height: 450px !important;
}

.title-image .el-image{
    width: 100%;
    height: 100%;
}

.info-buttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1em;
}

.el-button{
    margin-top: 10px;
    width: 130px;
}

.el-button:first-child{
    background: #4267B2;
}

.el-button:nth-child(2){
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
}

.el-button:nth-child(3){
    background: #FF0000;
    margin-left: 0px;
}

.el-button:last-child{
    background: #0e76a8;
}

.el-button:hover{
    opacity: 0.8;
}

.main-text{
    font-size: 1.3em;
    line-height: 2em;
    text-align: justify;
    padding: 1em 0em 1em 0em;
}
</style>