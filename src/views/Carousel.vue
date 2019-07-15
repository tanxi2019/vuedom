<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in image">
      <img :src="item.img"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  // eslint-disable-next-line
  /* eslint-disable */
  export default {
    name: 'Carousel',
    data (){
      return{
        image:[
          {id:1,img: require("./../assets/logo.png")},
          {id:2,img: require("./../assets/logo.png")},
          {id:3,img: require("./../assets/logo.png")},
          {id:4,img: require("./../assets/logo.png")},
          {id:5,img: require("./../assets/logo.png")},
          {id:6,img: require("./../assets/logo.png")}
        ]
      }}
  }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
