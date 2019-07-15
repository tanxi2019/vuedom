<template>
    <div class="product" v-cloak>
      <h1>product</h1>
      <div v-time="timeNow"></div>
      <div v-time="timeBefore">33</div>
    </div>
</template>

<script>
  export default {
    name: 'Product',
    data:{
      timeNow:(new Date()).getTime(),
      timeBefore:1488930695721
    }
  }
</script>

<style scoped>

</style>
