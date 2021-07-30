<template>
  <div class="carousel-card-container">
    <el-card class="carousel-card" shadow="hover">
        <div class="carousel-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="left">29.7.2021 11:17</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="right"><el-button size="small">Više</el-button></el-col>
        </el-row>
    </el-card>

    <el-card class="carousel-card" shadow="hover">
       <div class="carousel-card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
       <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="left">29.7.2021 11:17</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="right"><el-button size="small">Više</el-button></el-col>
        </el-row>
    </el-card>

    <el-card class="carousel-card" shadow="hover">
        <div class="carousel-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="left">29.7.2021 11:17</el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="right"><el-button size="small">Više</el-button></el-col>
        </el-row>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel-card-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel-card{
    background: #409EFF;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 15px;;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.8px;
    line-height: 18px;
    min-width: 5em;
    max-width: 19em;
    padding: 0.2em;
    margin-bottom: 10px;
}

.carousel-card-text{
    font-size: 14px;
    margin-bottom: 15px;
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