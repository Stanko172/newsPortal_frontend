<template>
  <el-tabs type="card" @tab-click="handleClick" :key="renderKey">
    <el-tab-pane label="Najnovije"></el-tab-pane>
    <el-tab-pane label="Najčitanije"></el-tab-pane>
    <el-tab-pane label="Preporučeno"></el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        activeName: 'first',
        renderKey: 1
      }
    },
    watch: {
        $route: {
        handler() {
            if(this.$route.name === 'Articles'){
                this.renderKey++
            }
        },
            immediate: true
        },
    },
    computed:{
      ...mapState('articles', ['tab'])
    },
    methods: {
      ...mapActions('articles', ['setTab']),
      handleClick(tab) {
        this.setTab(tab.props.label)
      }
    }
  };
</script>