import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import index from '../views/index'
import Header from '../views/Header'
import Carousel from '../views/Carousel'
import People from '../views/People'
import Teach from '../views/Teach'
import Product from '../views/Product'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: index
      },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: Login
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/people',
      name: 'people',
      meta: {
        title: '个人中心'
      },
      component: People
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        title: '我的产品'
      },
      component: Product
    },
    {
      path: '/teach',
      name: 'teach',
      meta: {
        title: '核心技术'
      },
      component: Teach
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我们'
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }

  ]
})
