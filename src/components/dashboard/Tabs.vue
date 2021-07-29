<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="Najnovije"></el-tab-pane>
    <el-tab-pane label="Najčitanije"></el-tab-pane>
    <el-tab-pane label="Preporučeno"></el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab) {
        console.log(tab.props.label);
      }
    }
  };
</script>