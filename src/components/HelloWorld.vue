<template>
  <div class="hello">
    底部
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .hello
    position fixed
    bottom 0 px
    height 60 px
    width 99%
    background-color darkgray
</style>
