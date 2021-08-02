<template>
  <div class="carousel-card-container">
    <el-card class="carousel-card" shadow="hover" v-for="article in getAllArticles.slice(4, 7)" :key="article.id">
        <div class="carousel-card-text">{{ article.title }}</div>
        <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="left">{{ article.created_at }}</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="right"><el-button size="small">Više</el-button></el-col>
        </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters('dashboard', ['getAllArticles'])
    }
}
</script>

<style scoped>
.carousel-card-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel-card{
    background: #004379;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 15px;;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.8px;
    line-height: 18px;
    min-width: 5em;
    max-width: 19em;
    max-height:150px !important;
    padding: 0.2em;
    margin-bottom: 10px;
}

.carousel-card-text{
    font-size: 14px;
    margin-bottom: 15px;
}

.el-button{
    background: #ED1C24;
    color: white;
    border: none;
}

.el-button:hover{
    background: #ed1c239c;
}

.left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
}

.right{
    display: flex;
    justify-content: flex-end;
}
</style>