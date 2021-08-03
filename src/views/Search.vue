<template>
  <div>
      <Navigation />
    <el-row justify="center" style="margin-top: 1.5em;">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <el-input v-model="searchText" @keyup="setSearchString(searchText)" @keyup.enter="fetchArticles">
                <template #append>
                    <el-button icon="el-icon-search"></el-button>
                </template>
            </el-input>
        </el-col>
    </el-row>
    <el-row justify="center">
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
            <div class="search-info">
                <h3>Rezultati pretrage</h3>
                <p>Pronađeno <b>{{ getArticles.length }}</b> rezultata</p>
            </div>
        </el-col>
    </el-row>
    <el-row justify="center" v-for="(article, index) in getArticles" :key="index">
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="image-container">
                        <el-image :src="article.title_image ? serverURL + article.title_image : 'https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg'" fit="scale-down"></el-image>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <div class="info-container">
                    <div class="info-header"><router-link to="/">{{ article.title }}</router-link></div>
                    <div class="info-body"><p>{{ reduceString(article.body, 200) }}</p></div>
                    <div class="info-date">
                        <div class="icons-date">
                    <i class="el-icon-share"></i>
                    <div>lkjdsflkj</div>
                        </div>
                    </div>
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
            serverURL: server,
            searchText: ''
        }
    },
    computed:{
        ...mapGetters('search', ['getSearchString', 'getArticles'])
    },
    methods:{
        ...mapActions('search', ['setSearchString', 'fetchArticles']),
        reduceString(string, length){
            return string.length > length ? string.substring(0, length) + "..." : string;
        }
    },
    mounted(){
        this.searchText = this.getSearchString
        this.fetchArticles()
    },
}
</script>

<style scoped>

.search-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.el-image{
    min-width: 200px;
    max-width: 300px;
    height: 250px;
    
}

.info-container{
    display: flex;
    flex-direction: column;
}

.info-header{
    font-size:18px;
    font-weight: 700;
    margin-top: 2em;
}

.info-header a{
    color: #004379;
    text-decoration: none;
}

.info-header a:hover{
    text-decoration: underline;
}

.info-date{
    padding: 1em;
}

.icons-date{
    display: flex;
    justify-content: flex-start;
}

.info-date i{
    margin-right: 0.5em;
}

.info-body{
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 0.2em 1em 0.2em 1em;
    text-align: justify;
    flex: 1;
}

</style>