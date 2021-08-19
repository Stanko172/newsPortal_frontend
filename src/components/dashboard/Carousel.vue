<template>
  <el-carousel indicator-position="outside" height="450px">
    <el-carousel-item v-for="item in getAllArticles.slice(0, 4)" :key="item">
      
      <figure><img :src="item.title_image ? serverURL + item.title_image.path : 'https://cdn.pixabay.com/photo/2015/06/08/15/11/typewriter-801921_960_720.jpg'"></figure>
      <div class="carousel-item-content"><router-link :to="'/vijesti/' + item.category + '/' + item.id">{{ item.title }}</router-link></div>
    </el-carousel-item>
  </el-carousel>
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
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

*{box-sizing:border-box;margin:0;padding:0;}

figure{
    bottom:0;
    left:0;
    position:fixed;
    right:0;
    top:0;
}
img{
    display:block;
    height:auto;
    min-height:100%;
    left:50%;
    position:absolute;
    top:50%;
    transform:translate(-50%,-50%);
    width:auto;
    min-width:100%;
}

.carousel-item-content{
    position: absolute;
    top: 50;
    bottom: 0;
    left: 0;
    right: 0;
    background: #004379;
    padding: 0.8em;
}

.carousel-item-content a{
    color: white;
    text-decoration: none;
    font-size: 1.6em;
}
</style>