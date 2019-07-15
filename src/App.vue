<!--suppress ALL -->
<template>
  <div id="app">
    <Header></Header>
    <Carousel></Carousel>
    <router-view></router-view>
    <hello-world></hello-world>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
// eslint-disable-next-line
/* eslint-disable */
import HelloWorld from './components/HelloWorld'
import Home from './views/Login'
import Header from './views/Header'
import Carousel from './views/Carousel'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Home,
    Header,
    Carousel
  },
  data(){
    return{}
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
