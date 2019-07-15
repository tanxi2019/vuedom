// eslint-disable-next-line
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$axios=axios
// 全局守卫
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  console.log(to.meta.title);
  next();
});
// 访问之前，检查是否登陆了
// router.beforeEach((to, from, next) => {
//   if(to.path.startsWith('/login')) {
//     window.sessionStorage.removeItem('user');
//     next()
//   }else {
//     let token = window.sessionStorage.getItem('user');
//     if (!token) {
//       next({path: '/login'})
//     }else {
//       next()
//     }
//   }
// });
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
