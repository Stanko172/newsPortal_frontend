<template>
<div class="interviews-container" v-if="getInterviews">
    <p class="interview-header">Intervju tjedna</p>
    <el-card :body-style="{ padding: '0px' }" class="custom-card" v-for="interview in getInterviews" :key="interview.id">
        <img :src="interview.title_image !== null ? serverURL + interview.title_image : 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'" class="image" >
        <div style="padding: 14px;">
            <span>{{ interview.title }}</span>
            <div class="bottom">
            <time class="time">{{ interview.created_at }}</time>
            <el-button type="text" class="button">Više</el-button>
            </div>
        </div>
    </el-card>
</div>
</template>

<script>
import server from '../../api/server' 
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentDate: new Date(),
      serverURL: server
    }
  },
  computed:{
    ...mapGetters('dashboard', ['getInterviews'])
  },
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }

  .custom-card{
      max-width: 250px;
      max-height: 500px;
      margin-bottom: 2em;
  }

  .interviews-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -25px;
  }

  .interview-header{
      font-size: 1.4em;
      letter-spacing: 0.2em;
      padding: 0.5em;
      border-bottom: 1px solid rgba(41, 40, 40, 0.589);
  }
</style>