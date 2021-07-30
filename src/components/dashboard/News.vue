<template>
  <el-row style="margin-top: 50px;" justify="center" :gutter="20">
    <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/805x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/806x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>


      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/807x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/808x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/809x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/810x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/811x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <div class="news-image-container">
            <el-image src="https://source.unsplash.com/random/812x400" fit="fill"></el-image>
            <div class="news-description">
                <div class="news-link"><router-link to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</router-link></div>
                <div class="news-information">
                    <i class="el-icon-share"></i>
                    <div>30.7.2021 10:31</div>
                </div>
            </div>
        </div>
      </el-col>
  </el-row>
</template>

<script>
export default {

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
}

.news-link{
    font-size: 1.3em;
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 0.5em;
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


</style>