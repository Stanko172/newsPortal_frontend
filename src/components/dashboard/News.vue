<template>
  <el-row justify="center" :gutter="20">
    <el-col :xs="24" :sm="11" :md="7" :lg="7" :xl="7" v-for="item in getAllArticles.slice(7)" :key="item.id">
        <div class="news-image-container">
            <el-image :src="item.title_image ? serverURL + item.title_image.path : 'https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg'" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">{{ item.title }}</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>{{ item.created_at }}</div>
                </div>
            </div>
        </div>
      </el-col>
  </el-row>
</template>

<script>
import server from '../../api/server'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            serverURL: server
        }
    },
    computed:{
        ...mapGetters('dashboard', ['getAllArticles'])
    }
}
</script>

<style scoped>
.news-image-container{
    max-width: 300px;
    max-height: 300px;
}

.el-col{
    display: flex;
    justify-content: center;
    margin: 1.6em 0 1.6em 0;
}

.news-link{
    font-size: 1.15em;
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 0.5em;
}

.news-link a{
    color: #004379;
    text-decoration: none;
}

.news-information{
    display: flex;
    justify-content: flex-start;
    margin-top: 1em;
    margin-bottom: 3em;
}

.news-information i{
    margin-right: 0.5em;
}

.el-image{
    width: 260px;
    height: 150px; 
}

</style>