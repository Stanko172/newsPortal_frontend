<template>
<div class="interviews-container">
    <p class="interview-header">Intervju tjedna</p>
    <el-card :body-style="{ padding: '0px' }" class="custom-card">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" >
        <div style="padding: 14px;">
            <span>John Doe</span>
            <div class="bottom">
            <time class="time">29.7.2021 11:35</time>
            <el-button type="text" class="button">Više</el-button>
            </div>
        </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }" class="custom-card">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
            <span>John Doe</span>
            <div class="bottom">
            <time class="time">29.7.2021 11:35</time>
            <el-button type="text" class="button">Više</el-button>
            </div>
        </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }" class="custom-card">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
            <span>John Doe</span>
            <div class="bottom">
            <time class="time">29.7.2021 11:35</time>
            <el-button type="text" class="button">Više</el-button>
            </div>
        </div>
    </el-card>
</div>
</template>

<script>
  export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
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
      margin-bottom: 10px;
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