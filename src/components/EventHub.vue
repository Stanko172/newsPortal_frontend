<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'EventHub',
  created () {
    this.eventBus.on('test', (args) => {
        console.log("yeaaa2")
        alert(args)
    })
  },
  watch: {
    $route: {
      handler() {
        /*
        axios.get('abilities').then(response => {
          this.$ability.update([
            { subject: 'all', actions: response.data.data }
          ])
        })*/
        console.log("Route change!!!")
      },
      immediate: true
    }
  }
}
</script>