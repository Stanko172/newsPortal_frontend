<template>
  <el-tabs type="card" @tab-click="handleClick">
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
        activeName: 'first'
      };
    },
    computed:{
      ...mapState(['tab'])
    },
    methods: {
      ...mapActions(['setTab']),
      handleClick(tab) {
        this.setTab(tab.props.label)
      }
    }
  };
</script>