<template>
  <el-carousel indicator-position="outside" height="400px">
    <el-carousel-item v-for="item in items" :key="item">
      
      <figure><img :src="item.img"></figure>
      <div class="carousel-item-content"><h2>{{ item.title }}</h2></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                    title: 'First item',
                    img: 'https://source.unsplash.com/random/800x400'
                },
                {
                    title: 'Second item',
                    img: 'https://source.unsplash.com/random/801x400'
                },
                {
                    title: 'Third item',
                    img: 'https://source.unsplash.com/random/802x400'
                },
                {
                    title: 'Fourth item',
                    img: 'https://source.unsplash.com/random/803x400'
                }

            ]
        }
    }
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
    background: #409EFF;
}

.carousel-item-content h2{
    color: white;
}
</style>